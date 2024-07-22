import axios, { AxiosError, AxiosResponse } from "axios";

import { endpoints } from "#/src/constants";
import { crops } from "#/src/constants/crops";

export interface PredictCropTypeResponse {
  predictedCrop: crops;
  confidence: number;
}

export interface CropTypePrediction {
  cropType: crops | null;
  confidence: string | null;
  error: Error | null;
}

const baseURL = process.env.EXPO_PUBLIC_API_URL as string;

export const predictCropType = async (
  cropImage: string
): Promise<CropTypePrediction> => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + endpoints.PREDICT_CROP_TYPE, { image: cropImage })
      .then((response: AxiosResponse<PredictCropTypeResponse>) => {
        resolve({
          error: null,
          cropType: response.data.predictedCrop,
          confidence: (response.data.confidence * 100).toFixed(2) + "%",
        });
      })
      .catch((error: AxiosError) => {
        reject(error.cause);
      });
  });
};
