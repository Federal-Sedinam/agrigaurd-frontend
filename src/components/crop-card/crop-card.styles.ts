import { StyleSheet } from "react-native";

import { colors } from "#/src/design/colors";

export const styles = StyleSheet.create({
  touchableHighlight: {
    borderRadius: 5,
  },
  card: {
    backgroundColor: colors.SECONDARY,
    borderColor: colors.SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,

    flexDirection: "row",
    justifyContent: "space-between",

    height: 105,
  },
  cardText: {
    color: colors.PRIMARY,
    fontSize: 23,
    fontFamily: "Inter_400Regular",
    alignSelf: "center",
  },
  cropImage: {
    width: "30%",
  },
});
