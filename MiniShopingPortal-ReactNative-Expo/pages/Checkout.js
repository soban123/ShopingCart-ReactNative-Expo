import  React , {useState , useContext, useEffect} from 'react';
import { View, Text  ,AsyncStorage , StyleSheet, Button } from 'react-native';
import Header from './Header'
import {MyContext} from '../App'

import { createStackNavigator } from 'react-navigation-stack';
import { set } from 'react-native-reanimated';





function Checkout (){

  const { globalState, dispatch } = useContext(MyContext);
  const [prevProducts , setprevProducts] = useState([]); 
  const [TotalPrice , setTotal] = useState(0);


useEffect ( ()=>{
  AsyncStorage.getItem('products', (err, result) => {
    if(JSON.parse(result)) {
 
      let afterConvertedArr =   JSON.parse(result) ;

      let TotalPrice = 0;
      afterConvertedArr.forEach ( (item , index) =>{
 
      TotalPrice += Number(item.price);
 
  })
 
  setTotal(TotalPrice )
 
     let count =  afterConvertedArr.reduce( (acc , item) =>{
       acc[item.title] = ++acc[item.title] || 1 ; return acc ;  } , {} ) ;
 
       for( let i = 0 ; i < afterConvertedArr.length ; i++ ){
 
         if(  Object.keys(count).includes(afterConvertedArr[i].title)  )  {
           afterConvertedArr[i].quantity = count[ afterConvertedArr[i].title ]
           afterConvertedArr[i].price = Number(count[ afterConvertedArr[i].title ]) * afterConvertedArr[i].price

         } ;
       }
 
       for( let i = 0 ; i < afterConvertedArr.length ; i++ ){
 
         for( let j = i+1 ; j < afterConvertedArr.length ; j++ ){
     
             if( afterConvertedArr[i]['title'] === afterConvertedArr[j]['title']  ){
                 afterConvertedArr.splice(j , 1) ; 
                 j-- ;
                 
             }
         }
     }
   setprevProducts(afterConvertedArr)
   }
     else{setprevProducts([]) ;
          setTotal(0 )
    
    }
     ;
   }); 
} , [globalState]  )


    return(
        <View> 
            <Text style={ styles.heading }> Checkout </Text>   
            <View style={styles.buttons}> 
            </View>
            <View style={ styles.Table }>
                <Text style={ styles.PrdName }>
                   Product Name
                   
                </Text>
                <Text style={ styles.PrdName }>
                  Quantity
                </Text>

                <Text style={ styles.PrdName }>
                  Price
                </Text>
                
                </View>
            { prevProducts && prevProducts.map ( (item , index) =>{
              return (
                <View  key={index} style={ styles.Table }>
                <Text style={ styles.PrdName }>
                   {item.title} 
                   
                </Text>
                <Text style={ styles.PrdName }>
                  { Number(item.quantity)}
                </Text>

                <Text style={ styles.PrdName }>
                   { item.price } 
                </Text>
                </View>
              )
            }  ) }

              <View style={ styles.Table }>
                <Text style={ styles.PrdName } >
                   Total:
                   
                </Text>
                <Text  style={ styles.PrdName }>
                   { '  ' }
                   
                </Text>

                <Text style={ styles.PrdName }>
                   { TotalPrice }
                </Text>
              </View>
        </View>
    )
}

const styles = StyleSheet.create({
  Table:{
    borderBottomColor:'black',
    borderBottomWidth:3,
    flexDirection:'row',
    justifyContent:'space-around',
    marginVertical:10
  } ,
  heading:{
    color:'blue',
    fontSize:30 ,
    textAlign:'center',
    marginVertical:15
  } ,
  buttons:{
    flexDirection:'row',
    justifyContent:'space-around',

  } ,
  PrdName:{
    width:100 ,
    textAlign:'center'
  }
})



const screens = {
 
 
 
  Checkout:{
    screen: Checkout ,
    navigationOptions:({navigation})=>{
        return {
          headerTitle: () => <Header navigation={navigation} title={'Checkout'} /> 
       }
       }
  } ,
 
} 


const CheckoutPage = createStackNavigator(screens , {
  defaultNavigationOptions :{
    headerStyle: {backgroundColor:'indigo'  } ,
    headerTintColor: 'white'
  }
});

export default CheckoutPage;
