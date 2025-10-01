import { Text, View } from 'react-native'

import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello John Doe</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <Text style={styles.searchInput}>What are you looking for?</Text>
        </View>
        <View style={styles.searchBtn}>
          <Text style={styles.searchBtnText}>Search</Text>
        </View>
      </View>
      <View style={styles.tabsContainer}>
        <Text style={styles.tab}>Full-time</Text>
        <Text style={styles.tab}>Part-time</Text>
        <Text style={styles.tab}>Contractor</Text>
      </View>
     
    </View>
  )
}

export default Welcome