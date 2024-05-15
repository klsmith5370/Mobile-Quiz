import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native";

export default function TabScreen() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#f97316",
				tabBarInactiveTintColor: "gray",
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: {
					backgroundColor: "#ffedd5",
					borderTopColor: "#ffedd5",
				},
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					tabBarIcon: ({ color }) => (
						<Ionicons name='home' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='leaderboard'
				options={{
					tabBarIcon: ({ color }) => (
						<MaterialIcons name='leaderboard' size={24} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name='user-alt' size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
