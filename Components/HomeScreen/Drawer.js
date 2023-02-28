import React,{useState} from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Box,
  Pressable,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
} from "native-base";
global.__reanimatedWorkletInit = () => {};

import SignIn from "../Authentication/SignIn";
import Home from "./Home";
import SignUp from "../Authentication/SignUp";
const Drawer = createDrawerNavigator();

const getIcon = (screenName) => {
  switch (screenName) {
    case "Inbox":
      return "camera";
    case "SignIn":
        return "login";
    case "SignUp":
        return "account-plus-outline";
    default:
      return undefined;
  }
};
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.700">
            Mail
          </Text>
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
            john_doe@gmail.com
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
              key={index}
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(220, 220, 230, 1)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Icon
                    color={
                      index === props.state.index ? "indigo.500" : "gray.500"
                    }
                    size="5"
                    as={<MaterialCommunityIcons name={getIcon(name)} />}
                  />
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? "indigo.500" : "gray.700"
                    }
                  >
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
export default function DrawerSlide() {
    const [showSignUp, setShowSignUp] = useState(false);
  return (
    <Box  flex={1}>
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Inbox" component={Home} />
      <Drawer.Screen name="SignIn" component={SignIn}  options={{ title: '' , headerShown: false}}/>
      {/* <Drawer.Screen name="SignUp" component={SignUp} options={{ title: '', headerShown: false }} /> */}
    </Drawer.Navigator>
  </Box>
  );
}
