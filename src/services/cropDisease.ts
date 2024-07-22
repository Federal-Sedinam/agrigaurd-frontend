import axios, { AxiosError, AxiosResponse } from "axios";

import { endpoints } from "#/src/constants";

export interface PredictCropDiseaseResponse {
  predictedDisease: string;
  confidence: number;
  description: {
    header: string;
    paragraphs: string[];
  } | null;
  treatment: {
    header: string;
    paragraphs: string[];
  } | null;
  disclaimer: {
    header: string;
    paragraphs: string[];
  } | null;
}

export interface CropDiseasePrediction {
  error: Error | null;
  predictionInfo: {
    predictedDisease: string;
    confidence: string;
    description: {
      header: string;
      paragraphs: string[];
    } | null;
    treatment: {
      header: string;
      paragraphs: string[];
    } | null;
    disclaimer: {
      header: string;
      paragraphs: string[];
    } | null;
  } | null;
}

const baseURL = process.env.EXPO_PUBLIC_API_URL as string;

export const predictCropDisease = async (
  selectedCrop: string,
  cropImage: string
): Promise<CropDiseasePrediction> => {
  return new Promise((resolve, reject) => {
    axios
      .post(baseURL + endpoints.PREDICT_CROP_DISEASE, {
        cropType: selectedCrop,
        image: cropImage,
      })
      .then(({ data }: AxiosResponse<PredictCropDiseaseResponse>) => {
        resolve({
          error: null,
          predictionInfo: {
            predictedDisease: data.predictedDisease,
            confidence: (data.confidence * 100).toFixed(2) + "%",
            description: data.description,
            treatment: data.treatment,
            disclaimer: data.disclaimer,
          },
        });
      })
      .catch((error: AxiosError) => {
        reject(error.cause);
      });
  });
};
