import React from "react";
import { View, Text, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

type VideoListItemProps = {
  video: {
    id: string;
    createdAt: string;
    title: string;
    thumbnail: string;
    videoUrl: string;
    duration: number;
    user: {
      name: string;
      image: string;
    };
    views: number;
  };
};

const VidoeListItem = (props: VideoListItemProps) => {
  const { video } = props;

  const minutes: number = Math.floor(video.duration / 60);
  const seconds: number = video.duration % 60;
  const computedSeconds: string = seconds < 10 ? "0" : "" + seconds;

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
    <View>
      {/* Thmbnail */}
      <View style={styles.videoCard}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: video.thumbnail
          }}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>
            {minutes}:{computedSeconds}
          </Text>
        </View>
      </View>
      {/* Title row */}
      <View style={styles.titleRow}>
        {/* Avatar */}
        <Image
          style={styles.avatar}
          source={{
            uri: video.user.image
          }}
        />
        {/* Middle container: Title, subtitle, etc. */}
        <View style={styles.middleContainer}>
          <Text style={styles.title}>{video.title}</Text>
          <Text
            style={styles.subtitle}
          >{`${video.user.name} ${viewString} ${video.createdAt}`}</Text>
        </View>
        {/* Icon */}
        <Entypo name="dots-three-vertical" size={18} color="white" />
      </View>
    </View>
  );
};

export default VidoeListItem;
