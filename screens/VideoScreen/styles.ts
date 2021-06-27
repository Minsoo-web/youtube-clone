import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  videoPlayer: {
    width: "100%",
    aspectRatio: 16 / 9
  },
  videoInfoContainer: {
    marginHorizontal: 10,
    flex: 1
  },
  tags: {
    color: "#0094e3",
    fontSize: 14,
    fontWeight: "500",
    marginVertical: 10
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500"
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
    fontWeight: "500",
    marginVertical: 5
  }
});

export default styles;
