import React , {useState , useCallback , useContext} from 'react'
import {Text , View , AsyncStorage ,StyleSheet} from 'react-native' ;
import {MaterialIcons , AntDesign } from '@expo/vector-icons'
import {MyContext} from '../App'


export default function Header({navigation ,  title}) {


    const handleDrawer = () =>{
        navigation.openDrawer();
    }

    const { globalState, dispatch } = useContext(MyContext);


    AsyncStorage.getItem('products' , (err , result) =>{
    if(result)   {

        dispatch({type:'ADD_ITEM' , payload:JSON.parse(result).length});

    } 

              } )


    return (
        <View  style={styles.Container}>
            <MaterialIcons name="menu" onPress={handleDrawer} size={30} style={styles.openDrawerIcon} />
            <View >
                <Text style={styles.Header}>  { title}  </Text>
            </View>
            <Text style={styles.cart} > <AntDesign name="shoppingcart" size={34} color="white" />  { globalState } </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

        
    },

    cart:{
        position:'absolute',
        right:0 ,
        color:'white',
        fontSize:20
    },

    Header: {
        color : 'white' , 
        backgroundColor:'indigo',
        fontSize:25,
       
    },
    openDrawerIcon:{
        color:'white',
        position:'absolute',
        left:5,
    }
}) 
