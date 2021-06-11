import React from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";
import VideoListItem from "../components/VideoListItem";
import videos from "../assets/data/videos.json";

const HomeScreen = () => {
  return (
    <ScrollView>
      {/* Video List Item */}
      <FlatList data={videos} renderItem={({ item }) => <VideoListItem video={item} />} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
