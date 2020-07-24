import React , {useState , useEffect} from 'react'
import { View ,  Image, Text ,StyleSheet, Button , AsyncStorage } from 'react-native';

export default function About({navigation}) {

const [product , setProduct] = useState({});
const [prevProducts , setprevProducts] = useState([]);

useEffect( () => {
    setProduct({ title : navigation.getParam('title') ,
                 price: navigation.getParam('price'),
                 quantity: 1 ,
                imageUrl:  navigation.getParam('imageUrl') })

    
}, [navigation])







const handleAddToCart = async ()=>{

 let temp = JSON.parse (await AsyncStorage.getItem('products'  )) || []

  
  let TempArr = new Array();
  TempArr = [ ...temp , ...[product] ]
   
 await AsyncStorage.setItem('products' , JSON.stringify(TempArr) )

  alert('Your Product has been added')

 
}






    return (
        <View  style={styles.items}>
        <Image
          style={styles.image}
          source={{
            uri: product.imageUrl,
          }}
        />
        <Text style={styles.text}> {product.title} </Text>
        <Text style={styles.text}> Rs/-{product.price} </Text>
        <Button style={styles.button} onPress={handleAddToCart} title="Add To Cart" /> 
      </View>
    )
}


const styles = StyleSheet.create({
    
    container: {
      height: '100%',
    },
   
    text:{
        fontSize:25 ,
        color:'white' 
    } ,
    image: {
      width: '100%',
      height: '50%',
      borderRadius:100
      
    },
    imagesContainer: {
      textAlign:'center',
      backgroundColor: 'pink',
      alignItems:'center'
    },
    items: {
      height: '90%',
      width:'90%' ,
      flexDirection:'column',
      alignItems:'center' ,
      justifyContent:'space-around',
      borderWidth: 2 ,
      marginRight:'auto' ,
      marginLeft:'auto' ,
      marginTop:'auto' ,
      marginBottom:'auto' ,
      borderRadius:50,
      backgroundColor:'indigo'

    },

    button: {
      backgroundColor: '#00aeef',
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15       
   }

  
    
  });
