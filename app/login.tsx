import { Text, View, TextInput, Pressable, Alert, ImageBackground, ActivityIndicator } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link, useRouter, Redirect } from "expo-router";
// import { supabase } from "../lib/supabase";
// import { useAuth } from "../lib/AuthProvider";
import { useState } from "react";

export default function LoginScreen() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const router = useRouter();

	//👇🏻 triggered when the user submits the email & password
	const handleLogin = () => {
		if (!email.trim() || !password.trim())
			return Alert.alert("Error", "Please fill in all fields");
		setLoading(true);
		console.log({
			email,
			password,
		});
		router.replace("/(tabs)/");
	};

	return (
        <View className=' flex-1'>
        <ImageBackground
            className='flex-1 flex items-center justify-center'
            source={{ uri: "https://source.unsplash.com/ODhkZUcous8" }}
        >
            <View className='w-full px-4'>
                <View className='w-full flex items-center justify-center'>
                    <FontAwesome5
                        name='phoenix-framework'
                        size={70}
                        color='white'
                        className='mb-4'
                    />
                    <Text className='text-3xl mb-4 font-bold text-white text-center'>
                        Log in
                    </Text>
                </View>

                <Text className='text-lg text-gray-200'>Email Address</Text>
                <TextInput
                    className='w-full border-b-[1px] py-4 rounded-md mb-3 text-white font-bold'
                    value={email}
                    onChangeText={setEmail}
                />
                <Text className='text-lg text-gray-200'>Password</Text>
                <TextInput
                    className='w-full border-b-[1px] py-4 rounded-md mb-3 text-white font-bold'
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Pressable
                    className={`w-full ${loading ? "bg-orange-200" : "bg-orange-600"} rounded-xl p-4 border-[1px] border-orange-200`}
                    disabled={loading}
                    onPress={() => handleLogin()}
                >
                    <Text className='text-white text-center font-bold text-xl'>
                        {loading ? "Authenticating..." : "Sign in"}
                    </Text>
                </Pressable>
                <Text className='text-center mt-2 text-orange-200'>
                    Don't have an account?{" "}
                    <Link href='/register'>
                        <Text className='text-white'>Register</Text>
                    </Link>
                </Text>
            </View>
        </ImageBackground>
    </View>
        
	);
}