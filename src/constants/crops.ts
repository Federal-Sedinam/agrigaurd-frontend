export enum crops {
  CORN = "corn",
  PEPPER = "pepper",
  POTATO = "potato",
  TOMATO = "tomato",
}

export const allCrops: crops[] = [
  crops.CORN,
  crops.PEPPER,
  crops.POTATO,
  crops.TOMATO,
];

export const CROP_DISPLAY_NAMES: Record<crops, string> = {
  [crops.CORN]: "Corn",
  [crops.PEPPER]: "Pepper",
  [crops.POTATO]: "Potato",
  [crops.TOMATO]: "Tomato",
};

export const CROP_IMAGES: Record<crops, any> = {
  [crops.CORN]: require("#/assets/images/corn.png"),
  [crops.PEPPER]: require("#/assets/images/pepper.png"),
  [crops.POTATO]: require("#/assets/images/potato.png"),
  [crops.TOMATO]: require("#/assets/images/tomato.png"),
};
