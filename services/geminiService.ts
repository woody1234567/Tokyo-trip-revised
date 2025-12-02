import { GoogleGenAI } from "@google/genai";

// Initialize properly with named export as per guidelines
// Note: In a real deployment, ensure process.env.API_KEY is available.
// For this static demo, we will safeguard against missing keys.

const getAiClient = () => {
  if (process.env.API_KEY) {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return null;
}

export const fetchLocationDetails = async (location: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) {
    console.warn("No API Key found for Gemini.");
    return `AI Guide: To see dynamic stories and tips for ${location}, please configure your Gemini API Key.`;
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Provide a very short, interesting 2-sentence story or "pro-tip" in Traditional Chinese (繁體中文) for a traveler visiting ${location} in Japan. Mention a specific food or photo spot if applicable.`,
    });
    return response.text || "No details available.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Could not fetch AI insights at this time.";
  }
};

export const fetchWeather = async (location: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) {
    console.warn("No API Key found for Gemini.");
    return "";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Get the current weather and next 5 days forecast for ${location}. 
      Strictly return plain text data with NO markdown formatting.
      
      Output Format:
      CURRENT|Temp(int)|Condition|Humidity|Wind
      FORECAST|Date(MM/DD)|Day(in Traditional Chinese, e.g. 週一)|Condition|High(int)|Low(int)
      (Repeat FORECAST line for 5 days)

      Rules:
      1. Condition MUST be mapped to exactly one of: Sunny, Cloudy, Rain. 
         (Map 'Partly Cloudy'->Cloudy, 'Clear'->Sunny, 'Snow'->Rain, 'Showers'->Rain)
      2. Temp should be just the number (e.g. 15).
      3. Humidity example: 45%
      4. Wind example: 3m/s
      `,
      config: {
        tools: [{googleSearch: {}}],
      },
    });
    return response.text || "";
  } catch (error) {
    console.error("Gemini Weather API Error:", error);
    return "";
  }
};
