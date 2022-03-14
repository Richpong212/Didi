import React,{useState} from 'react'
import { StyleSheet,Modal, Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { db } from '../../firebase'
import OrderItem from './OrderItem'
import { collection,doc,getDocs,serverTimestamp,setDoc } from 'firebase/firestore'



const ViewCart = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false)

    const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems)
    
    const total = items.map(
           (item) => Number(item.price.replace('$', ''))).
           reduce((prev,curr)=> prev + curr, 0)

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'
    })  

    const addOrderToFireBase = async () => {
        
        await setDoc(doc(db, 'orders','restaurant_Order'), {
            items: items,
            restaurantName: restaurantName,
            createdAt: serverTimestamp()
        })
        setModalVisible(false)
        navigation.navigate('OrderCompleted')
    }

    
   const checkoutModalContent = () => {
        return(
          <>
           <View style={styles.modalContainer}>
               <View style={styles.modalCheckoutContainer}>
                   <Text style={styles.restaurantName}>{restaurantName}</Text>
                   {items.map((item, index) => (
                       <OrderItem 
                         key={index}
                         item={item}
                       />
                   ))}
                   <View style={styles.subtotalContainer}>
                      <Text style={styles.subtotalText}>Subtotal</Text>
                      <Text>{totalUSD}</Text>
                   </View>
                   <View style={{
                       flexDirection: 'row',
                       justifyContent: 'center'
                   }}>
                       <TouchableOpacity
                         style={{
                             marginTop: 20,
                             backgroundColor: 'black',
                             alignItems: 'center',
                             padding: 13,
                             borderRadius: 30,
                             width: 300,
                             position: 'relative',
                         }}
                         onPress={() => {
                            addOrderToFireBase()
                         }}
                       >
                          <Text style={{color: 'white', fontSize: 20}}>Checkout</Text>
                          <Text style={{
                              color: 'white', 
                              position: 'absolute', 
                              right: 20,
                              fontSize: 15,
                              top: 17
                              }}>{total ? totalUSD: ''}</Text>
                       </TouchableOpacity>
                   </View>
               </View>
           </View>
          </>
        )
   }

    return (
      <>
      <Modal 
        animationType='slide' 
        visible={modalVisible} 
        transparent={true}
        onRequestClose={()=> setModalVisible(false)}
        >
            {checkoutModalContent()}
        </Modal>
       {total? (
        <View style={styles.contaner}>
        <View style={styles.subcontainer}>
           <TouchableOpacity 
             style={styles.touchbtn}
             onPress={() => setModalVisible(true)}
           >
              <Text style={styles.ViewCart}>ViewCart</Text>
              <Text style={styles.total}>{totalUSD}</Text>
           </TouchableOpacity>
        </View>
        </View>
        ) : (<></>)}
      </>
    )
}

export default ViewCart

const styles = StyleSheet.create({
    ViewCart:{
        color: 'white',
        fontSize: 20,
        marginRight: 30
    },
    touchbtn:{
       marginTop: 20,
       backgroundColor: 'black',
       alignItems: 'center',
       padding: 13,
       borderRadius: 30,
       width: 300,
       padding: 15,
       position: 'relative',
       flexDirection: 'row',
       justifyContent: 'flex-end'
    },
    subcontainer:{
       flexDirection: 'row',
       justifyContent: 'center',
       width: '100%'
    },
    contaner: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 230,
        zIndex: 999,
    },
    total:{
        color: 'white',
        fontSize: 20,
    },
    checkout:{
       color: 'white'
    },
    checkoutSubContainer: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 30,
        width: 150,
        alignItems: 'center',
    },
    checkoutContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
//Modal styles
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
      },
  
      modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
      },
  
      restaurantName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 10,
      },
  
      subtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
      },
  
      subtotalText: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 10,
      },
})
