import { useContext } from "react";

import { CropImageContext } from "#/src/providers/crop-image";

export const useCropImage = () => {
  return useContext(CropImageContext);
};
