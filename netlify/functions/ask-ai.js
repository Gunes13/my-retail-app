import fetch from 'node-fetch';

export async function handler(event, context) {
    const { presentationContext, useCaseData } = await import('../../data.js');

    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const { question } = JSON.parse(event.body);
        const API_KEY = process.env.GOOGLE_AI_API_KEY;

        if (!API_KEY) {
            throw new Error("API Key is not configured on the server.");
        }

        const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
        
        const fullContext = `
            CONTEXT from Presentation Deck:
            ${presentationContext}

            CONTEXT from Use Case Dashboard:
            ${JSON.stringify(useCaseData, null, 2)}
        `;

        const prompt = `
            You are an expert AI assistant for the 'AI-Powered Retail Revolution' presentation. 
            Your task is to answer the user's question based *only* on the context provided below. 
            Do not use any external knowledge. If the answer cannot be found in the context, say so.
            Be concise and direct. Format your answer clearly.

            Here is the full context:
            ${fullContext}

            ---
            User's Question: "${question}"
        `;

        const gcpResponse = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });

        if (!gcpResponse.ok) {
            const errorBody = await gcpResponse.text();
            console.error("Google AI API Error:", errorBody);
            return { statusCode: gcpResponse.status, body: `API Error: ${gcpResponse.statusText}` };
        }

        const data = await gcpResponse.json();
        const aiText = data.candidates[0].content.parts[0].text;
        
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ answer: aiText })
        };
    } catch (error) {
        console.error("Serverless function error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Sorry, there was an internal server error." })
        };
    }
}