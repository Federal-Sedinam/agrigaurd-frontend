import { colors } from "#/src/design/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerTextContainer: {
    paddingVertical: 5,
    marginBottom: 10,
  },
  headerText: {
    fontFamily: "Inter_500Medium",
    fontSize: 25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    marginBottom: 15,
  },
  touchableHighlight: {
    borderColor: colors.SECONDARY,
    borderWidth: 1,
    borderRadius: 5,
    flex: 1,
  },
  buttonContent: {
    paddingVertical: 35,
    paddingHorizontal: 10,
    backgroundColor: colors.SECONDARY,
  },
  buttonText: {
    fontFamily: "Inter_400Regular",
    fontSize: 15,
    marginTop: 5,
    color: colors.PRIMARY,
  },
  imageContainer: {
    marginTop: 15,
  },
  image: {
    width: "100%",
    aspectRatio: "1/1",
  },
  cropTypeCheckInfoContainer: {
    marginTop: 5,
  },
  cropTypeCheckInfoTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  cropTypeCheckInfoText: {
    fontFamily: "Inter_400Regular",
    fontSize: 12,
    alignSelf: "center",
    color: colors.PRIMARY,
  },
  detectDiseaseButtonContainer: {
    marginTop: 20,
  },
  detectDiseaseButtonTouchable: {
    borderColor: colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
  },
  detectDiseaseButtonContent: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: colors.PRIMARY,
    flexDirection: "row",
    justifyContent: "center",
  },
  detectDiseaseButtonText: {
    alignSelf: "center",
    marginLeft: 5,
    fontFamily: "Inter_500Medium",
    fontSize: 15,
    color: colors.WHITE,
  },
});
