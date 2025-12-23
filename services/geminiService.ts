
import { GoogleGenAI, Type } from "@google/genai";

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
    return "AI Assistant is currently unavailable.";
  }
};

export const fetchLatestAINews = async (lang: 'en' | 'zh') => {
  try {
    const ai = getAIInstance();
    const query = lang === 'zh' 
      ? "获取过去24小时内关于 OpenAI, Google Gemini, Anthropic, Meta AI 的最新重要新闻和舆情，返回JSON数组。"
      : "Fetch the latest important news and public sentiment about OpenAI, Google Gemini, Anthropic, and Meta AI from the last 24 hours. Return a JSON array.";

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              summary: { type: Type.STRING },
              source: { type: Type.STRING },
              url: { type: Type.STRING },
              publishedAt: { type: Type.STRING },
              sentiment: { type: Type.STRING, description: "POSITIVE, NEGATIVE, or NEUTRAL" }
            },
            required: ["id", "title", "summary", "source", "url", "publishedAt", "sentiment"]
          }
        }
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Fetch News Error:", error);
    return [];
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
