
import { GoogleGenAI } from "@google/genai";

export class GeminiAssistant {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getCleaningTip(query: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Eres un asistente experto de "Zona Clean", una tienda de productos de limpieza.
        El usuario pregunta: "${query}". 
        Responde de forma amable, profesional y concisa. Si mencionas productos, usa nombres genéricos como "detergente multiuso", "limpiavidrios", etc.`,
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Lo siento, tuve un pequeño problema conectando con mi base de conocimientos. ¡Pero sigo aquí para ayudarte!";
    }
  }
}

export const assistant = new GeminiAssistant();
