import { CROP_DISPLAY_NAMES, crops, CROP_IMAGES } from "../constants/crops";

export const getCropDisplayName = (crop: crops) => {
  return CROP_DISPLAY_NAMES[crop];
};

export const getCropImage = (crop: crops) => {
  return CROP_IMAGES[crop];
};
