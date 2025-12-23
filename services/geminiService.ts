
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getSmartRecommendations = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is looking for an AI tool with this requirement: "${userPrompt}". 
      Explain what kind of tools would be best and suggest keywords they should search for. 
      Format the response naturally.`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Could not fetch AI recommendations at this time.";
  }
};

export const analyzeReviewSentiment = async (comment: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze if this user review is positive or negative: "${comment}". Answer with just one word: POSITIVE, NEGATIVE, or NEUTRAL.`,
      config: {
        temperature: 0.1,
      },
    });
    return response.text.trim();
  } catch (error) {
    return "NEUTRAL";
  }
};
