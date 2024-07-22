import {
  View,
  Text,
  TouchableHighlight,
  GestureResponderEvent,
} from "react-native";
import { Image } from "expo-image";

import { styles } from "./crop-card.styles";

export interface CropCardProps {
  cropName: string;
  cropImageSrc: string;
  onClick: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent
  ) => void;
}

export const CropCard = (props: CropCardProps) => {
  return (
    <TouchableHighlight
      onPress={props.onClick}
      style={styles.touchableHighlight}>
      <View style={styles.card}>
        <Text style={styles.cardText}>{props.cropName}</Text>
        <Image
          style={styles.cropImage}
          source={props.cropImageSrc}
          contentFit="contain"
        />
      </View>
    </TouchableHighlight>
  );
};
