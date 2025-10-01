import { Stack, useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Nearbyjobs, Popularjobs, Welcome } from "../components";
import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import { COLORS, icons, SIZES } from "../constants";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.lightWhite,
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerLeft: ()=>(<ScreenHeaderBtn iconUrl = {icons.menu} dimension = "60%" handlePress={() => router.push('/menu')}/>) ,
          headerRight: ()=>(<ScreenHeaderBtn iconUrl = {icons.profile} dimension = "100%" handlePress={() => router.push('/profile')}/>),
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
