import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation';

import CheckoutPage from '../pages/Checkout'
import  Stack from './StackNav'

const RootDrawer = createDrawerNavigator({
    Products : {
        screen: Stack
    } ,
    Checkout : {
        screen:CheckoutPage
    }
})

export default createAppContainer(RootDrawer);