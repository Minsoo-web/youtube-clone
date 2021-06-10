import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View>
      {/* Video component */}
      <View>
        {/* Thmbnail */}
        <View style={styles.videoCard}>
          <Image
            style={styles.thumbnail}
            source={{
              uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/thumbnails/thumbnail1.jpeg"
            }}
          />
          <View style={styles.timeContainer}>
            <Text style={styles.time}>15:23</Text>
          </View>
        </View>
        {/* Title row */}
        <View style={styles.titleRow}>
          {/* Avatar */}
          <Image
            style={styles.avatar}
            source={{
              uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg"
            }}
          />
          {/* Middle container: Title, subtitle, etc. */}
          <View style={styles.middleContainer}>
            <Text style={styles.title}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <Text style={styles.subtitle}>123</Text>
          </View>
          {/* Icon */}
          <Entypo name="dots-three-vertical" size={18} color="white" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoCard: {},
  thumbnail: {
    width: "100%",
    aspectRatio: 16 / 9
  },
  timeContainer: {
    backgroundColor: "#00000099",
    height: 25,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    position: "absolute",
    right: 5,
    bottom: 10
  },
  time: {
    color: "#fff",
    fontWeight: "bold"
  },

  //
  titleRow: {
    flexDirection: "row",
    padding: 10
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  //
  middleContainer: {
    marginHorizontal: 10,
    flex: 1
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500"
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
    fontWeight: "500"
  }
});

export default HomeScreen;
