import { StyleSheet } from "react-native";

import { colors } from "#/src/design/colors";

export const styles = StyleSheet.create({
  buttonTouchable: {
    borderColor: colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContent: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: colors.PRIMARY,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContentDisabled: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: colors.PRIMARY,
    flexDirection: "row",
    justifyContent: "center",
    opacity: 0.4,
  },
  buttonText: {
    alignSelf: "center",
    marginLeft: 5,
    fontFamily: "Inter_500Medium",
    fontSize: 20,
    color: colors.WHITE,
  },
  buttonTextDisabled: {
    alignSelf: "center",
    marginLeft: 5,
    fontFamily: "Inter_500Medium",
    fontSize: 20,
    color: colors.SECONDARY,
  },
});
