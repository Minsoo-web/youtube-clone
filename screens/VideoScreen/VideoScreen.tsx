import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import video from "../../assets/data/video.json";
import styles from "./styles";

const VideoScreen = () => {
  let viewString: any = video.views;

  if (video.views > 1_000_100) {
    viewString = video.views / 1_000_000;
    if (Number.isInteger(viewString)) viewString = viewString + "m";
    else viewString = viewString.toFixed(1) + "m";
  } else if (video.views > 1_000) {
    viewString = video.views / 1_000;
    if (Number.isInteger(viewString)) viewString = viewString + "k";
    else viewString = viewString.toFixed(1) + "k";
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#141414", flex: 1 }}>
      {/* Viddeo Player */}
      <Image style={styles.videoPlayer} source={{ uri: video.thumbnail }} />
      {/* tags */}
      <Text style={styles.tags}>{video.tags}</Text>
      {/* Video Info */}
      <View style={styles.videoInfoContainer}>
        <Text style={styles.title}>{video.title}</Text>
        <Text style={styles.subtitle}>{`${video.user.name} ${viewString} ${video.createdAt}`}</Text>
      </View>
      {/* Action List */}
      <View></View>

      {/* User Info */}
      {/* Comments */}
      {/* Recommended videos */}
    </SafeAreaView>
  );
};

export default VideoScreen;
