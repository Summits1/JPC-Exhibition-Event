import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>JPC EXHIBITION EVENT</Text>
      </View> */}
      <View style={styles.videoContainer}>
        <Video
          source={require('./videos/background.mp4')}
          style={styles.backgroundVideo}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          isLooping
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  header: {
    backgroundColor: 'white',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 100,
    overflow: 'hidden',
    zIndex: 1,
  },
  headerText: {
    fontSize: 20,
    zIndex: 1,
  },
  videoContainer: {
    flex: 1,
    width: '100%',
    height: '100%', 
    position: 'relative',
    zIndex: 0,
  },
  backgroundVideo: {
    flex: 1,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
});
