import { View, Text, Button } from "native-base";
export default function Home({ navigation }) {

  return (
      <View>
          <Text>Hello</Text>
          <Button onPress={() => navigation.navigate("SignIn")}>
            Go to SignIn
          </Button>
      </View>
  );
}
