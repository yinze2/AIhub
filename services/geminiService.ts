
import { GoogleGenAI } from "@google/genai";

// 动态获取 AI 实例，避免在模块加载阶段访问 process.env 导致崩溃
const getAIInstance = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY as string });
};

export const getSmartRecommendations = async (userPrompt: string) => {
  try {
    const ai = getAIInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is looking for an AI tool with this requirement: "${userPrompt}". 
      Explain what kind of tools would be best and suggest keywords they should search for. 
      Format the response naturally and use the user's language if possible.`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "AI Assistant is currently unavailable. Please try direct search.";
  }
};

export const analyzeReviewSentiment = async (comment: string) => {
  try {
    const ai = getAIInstance();
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze if this user review is positive or negative: "${comment}". Answer with just one word: POSITIVE, NEGATIVE, or NEUTRAL.`,
      config: {
        temperature: 0.1,
      },
    });
    return response.text.trim().toUpperCase();
  } catch (error) {
    console.error("Sentiment Analysis Error:", error);
    return "NEUTRAL";
  }
};
