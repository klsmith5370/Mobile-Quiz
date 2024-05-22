export default function ProfileScreen() {
	const [loading, setLoading] = useState<boolean>(false);
	const [total_score, setTotalScore] = useState<number>(0);
	const [attempts, setAttempts] = useState<string[]>([]);

	const handleSignOut = async () => {
		setLoading(true);
	};

	return (
		<SafeAreaView className='flex-1 bg-orange-100 p-4'>
			<View className='flex items-center justify-center mb-6'>
				<Text className='text-gray-600 mb-[1px]'>
					<FontAwesome name='star' size={20} color='red' />
					<Text>45</Text>
				</Text>
				<Text className='text-gray-600 mb-2'>@dhastix</Text>

				<Pressable onPress={() => handleSignOut()} disabled={loading}>
					<Text className='text-red-500'>
						{loading ? "Logging out..." : "Log out"}
					</Text>
				</Pressable>
			</View>

			<Text className='font-bold text-xl text-gray-700 mb-3 px-4'>
				Recent Attempts
			</Text>

			<FlatList
				data={attempts}
				contentContainerStyle={{ padding: 15 }}
				renderItem={({ item }) => <Attempts item={item} />}
				keyExtractor={(item, index) => index.toString()}
				showsVerticalScrollIndicator={false}
			/>
		</SafeAreaView>
	);
}