import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CartNavigator from './CartNavigator';
import ShopNavigator from './ShopNavigator'
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/AntDesign'


const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator =() => {
    return (
        <NavigationContainer>
            <BottomTabs.Navigator
                initialRouteName='ShopTab'
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: Styles.tabBar,
                }}
            >
                <BottomTabs.Screen
                    name='ShopTab'
                    component={ShopNavigator}
                    options={{
                      tabBarIcon: ({ focus }) => (
                            <View style={Styles.item}>
                              <Ionicons name='home'size={20} color='black'/>
                              <Text>Tienda</Text>

                            </View>
                        )
                    }}
                />
                <BottomTabs.Screen
                    name='CartTab'
                    component={CartNavigator}
                     options={{
                      tabBarIcon: ({ focus }) => (
                             <View style={Styles.item}>
                              <Ionicons name="shoppingcart" size={20} color='black'/>  
                              <Text>Carrito</Text>

                            </View>
                        ),
                    }}
                />
          
            </BottomTabs.Navigator>
            
       </NavigationContainer>
    
  );
}
const Styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 0.5,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
        
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
});