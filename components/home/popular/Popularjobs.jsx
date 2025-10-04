import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import styles from "./popularjobs.style";

const Popularjobs = () => {
  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });
  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
