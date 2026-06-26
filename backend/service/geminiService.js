const { GoogleGenAI } = require("@google/genai");



const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateItinerary = async (prompt) => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  }); console.log("Key:", process.env.GEMINI_API_KEY?.substring(0, 10));

  return response.text;
};

module.exports = { generateItinerary };