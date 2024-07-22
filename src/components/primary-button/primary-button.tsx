import { FontAwesome } from "@expo/vector-icons";
import {
  TouchableHighlight,
  View,
  Text,
  GestureResponderEvent,
} from "react-native";

import { colors } from "#/src/design/colors";

import { styles } from "./primary-button.styles";

export interface PrimaryButtonProps {
  text: string;
  iconName?: "refresh" | "check-circle-o" | "camera";
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

export const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <TouchableHighlight
      style={styles.buttonTouchable}
      onPress={props.onPress}
      disabled={props.disabled}>
      <View
        style={
          props.disabled ? styles.buttonContentDisabled : styles.buttonContent
        }>
        {props.iconName && (
          <FontAwesome
            name={props.iconName}
            size={20}
            color={props.disabled ? colors.SECONDARY : colors.WHITE}
          />
        )}
        <Text
          style={
            props.disabled ? styles.buttonTextDisabled : styles.buttonText
          }>
          {props.text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};
