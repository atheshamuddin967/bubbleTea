import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import CheckoutScreeen from "./screens/CheckoutScreeen";
import Cart from "./screens/CartScreen";

import { Images } from "./assets/images/Index";
import { useBucket } from "./assets/Hooks/Context";
import Details from "./screens/Details";
import { HomeIcon, ShoppingCart } from "lucide-react-native";
import Shop from "./screens/ShopScreen";

function StackNavigator() {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();
  const DetailsStack = createStackNavigator();
  function MyTabs() {
    return (
      <Tab.Navigator
        safeAreaInsets={{ bottom: 0, top: 0 }}
        initialRouteName="Shop"
        screenOptions={{
          tabBarActiveTintColor: "#75BCDF",
          tabBarInactiveTintColor: "#BDBDBD",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            borderTopWidth: 0,
            elevation: 20,
            height: 60,
            paddingBottom: 10,
            alignItems: "center",
            margin: 0,
            justifyContent: "center",
          },
        }}
      >
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <HomeIcon color={color} size={size} />;
            },

            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "bold",
            },
          }}
        />
        <Tab.Screen
          name="cart"
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <ShoppingCart color={color} size={size} />;
            },

            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: "bold",
            },
          }}
        />
      </Tab.Navigator>
    );
  }
  const { user } = useBucket();

  const authenticatedRoutes = [
    {
      name: "Home",
      component: Home,
    },

    {
      name: "MyTab",
      component: MyTabs,
    },
    {
      name: "Shop",
      component: Shop,
    },
    {
      name: "Details",
      component: Details,
    },
    {
      name: "Checkout",
      component: CheckoutScreeen,
    },
  ];
  const unAuthenticatedRoutes = [
    {
      name: "Home",
      component: Home,
    },

    {
      name: "MyTab",
      component: MyTabs,
    },
    {
      name: "Shop",
      component: Shop,
    },
    {
      name: "Details",
      component: Details,
    },
    {
      name: "Checkout",
      component: CheckoutScreeen,
    },
  ];

  const Routes = !user ? unAuthenticatedRoutes : authenticatedRoutes;

  return (
    <Stack.Navigator
      initialRouteName={Routes[0].name}
      screenOptions={{
        headerShown: false,
      }}
    >
      {Routes.map((route) => {
        return (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        );
      })}
    </Stack.Navigator>
  );
}
export default StackNavigator;
