import React, { useState, useEffect , useContext } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  AsyncStorage
} from 'react-native';
import Constants from 'expo-constants';
import {MyContext} from '../App'


export default function Cards( {navigation }) {
  const [pictureData, setData] = useState([

    {
      title: 'Camera',
      price: 200,
      imageUrl:
        'https://i.pinimg.com/originals/ff/1e/ed/ff1eedf987d29e81fe43a2b2f5d58cec.jpg',
    },
    {
      title: 'Mobile',
      price: 300,
      imageUrl: 'http://www.mega.pk/items_images/t_19507.png',
    },
    {
      title: 'Watche',
      price: 100,
      imageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/71DnIj%2B%2BjUL._AC_SX342_.jpg',
    },
    {
      title: 'Shirts',
      price: 600,
      imageUrl:
        'https://www.pakstyle.pk/img/products/l/p11844-men-s-black-cotton-dress-shirt.jpg',
    },
    {
      title: 'LED',
      price: 1600,
      imageUrl:
        'https://www.multynet.com.pk/wp-content/uploads/2020/04/43se100.png',
    },
  ]);


  const handleRemoveCart = async () =>{
    await AsyncStorage.removeItem('products')
    dispatch({type:'ADD_ITEM' , payload:0});
    
  }

  const { globalState, dispatch } = useContext(MyContext);


  let TempCardsArr = pictureData.map((item , index) => {
    return (
      <View key={index} style={styles.items}>
        <Image
          style={styles.image}
          source={{
            uri: item.imageUrl,
          }}
        />
        <Text> {item.title} </Text>
        <Text> Rs-{item.price}  </Text>
        <Button onPress={()=>{navigation.navigate('About', item )}} title="View" />  
      </View>
    );
  });
  return (
    <ScrollView > 
      
    <View style={styles.container}>
    <Button  title="Empty Cart" onPress={handleRemoveCart} />  

      <Text style={styles.heading}>Welcome To Pixels Shop</Text>
     
      {TempCardsArr}  
     

      <Text style={styles.footerText}> Pixels </Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'indigo',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10,
  }
  ,
  container: {
    height: '100%',
  },
 
  heading: {
    color: 'indigo',
    fontSize: 29,
    textAlign: 'center',
    marginTop:20 ,
  },
  image: {
    width: 100,
    height: 100,
  },
  imagesContainer: {
    textAlign:'center',
    backgroundColor: 'pink',
    alignItems:'center'
  },
  items: {
    height: 200,
      flexDirection:'row',
      fontSize:30,
      borderBottomColor:'gray' ,
      alignItems:'center' ,
      borderBottomWidth: 1  ,
      
      justifyContent:"space-around"
    
  },

  footerText: {
    color: 'white',
    fontSize: 30,
    backgroundColor: 'black',
    textAlign: 'center',
  },
});
