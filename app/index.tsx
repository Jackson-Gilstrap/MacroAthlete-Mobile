import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
     className="flex-1 justify-center items-center"
    >
      <Text className="text-blue-500 text-5xl mt-2">MA</Text>
      <Text className="text-3xl mt-2">Personalized Recovery</Text>
      <Link className="py-2 px-6 rounded-md bg-blue-500  mt-2"  href={"/signin/signin"}>Sign In</Link>
      <Link className="py-2 px-6 rounded-md bg-white  mt-2" href={"/signup/signup"}>Create Account</Link>


    </View>
  );
}
