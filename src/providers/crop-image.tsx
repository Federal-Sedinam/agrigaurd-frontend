import { createContext, PropsWithChildren, useCallback, useState } from "react";

import { crops } from "#/src/constants/crops";

export interface ICropImageContext {
  selectedCrop: crops | null;
  cropImage: string | null;
  setSelectedCrop?: React.Dispatch<React.SetStateAction<crops | null>>;
  setCropImage?: React.Dispatch<React.SetStateAction<string | null>>;
  reset?: () => void;
}

export const CropImageContext = createContext<ICropImageContext>({
  selectedCrop: null,
  cropImage: null,
});

export const CropImageProvider = (props: PropsWithChildren) => {
  const [selectedCrop, setSelectedCrop] = useState<crops | null>(null);
  const [cropImage, setCropImage] = useState<string | null>(null);

  const reset = useCallback(() => {
    setSelectedCrop(null);
    setCropImage(null);
  }, []);

  return (
    <CropImageContext.Provider
      value={{
        selectedCrop,
        cropImage,
        setSelectedCrop,
        setCropImage,
        reset,
      }}>
      {props.children}
    </CropImageContext.Provider>
  );
};
