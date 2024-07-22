import { StyleSheet } from "react-native";

import { colors } from "#/src/design/colors";

export const styles = StyleSheet.create({
  screenContentContainer: {
    flex: 1,
    padding: 15,
  },
  headerTextContainer: {
    paddingVertical: 10,
  },
  headerText: {
    fontFamily: "Inter_500Medium",
    fontSize: 30,
    color: colors.PRIMARY,
  },
  imageContainer: {
    marginTop: 10,
  },
  image: {
    width: "100%",
    aspectRatio: "1/1",
  },
  confidenceContainer: {
    marginVertical: 10,
    backgroundColor: colors.SECONDARY,
    padding: 5,
  },
  confidenceText: {
    fontFamily: "Inter_700Bold",
    color: colors.PRIMARY,
  },
  sectionContainer: {
    marginVertical: 15,
  },
  sectionHeader: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 30,
    marginBottom: 10,
  },
  sectionParagraph: {
    fontFamily: "Inter_400Regular",
    fontSize: 18,
    marginBottom: 15,
  },
  disclaimerSection: {
    borderTopWidth: 1,
    borderColor: colors.SECONDARY,
    marginVertical: 15,
    paddingTop: 10,
  },
  disclaimerHeader: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    marginBottom: 5,
  },
  disclaimerParagraph: {
    fontFamily: "Inter_400Regular",
    fontSize: 10,
    marginBottom: 5,
  },
  startOverButtonContainer: {
    marginBottom: 20,
  },
  startOverButtonTouchable: {
    borderColor: colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
  },
  startOverButtonContent: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: colors.PRIMARY,
    flexDirection: "row",
    justifyContent: "center",
  },
  startOverButtonText: {
    alignSelf: "center",
    marginLeft: 5,
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    color: colors.WHITE,
  },
});
