import Groq from "groq-sdk";
import { RECEIPT_EXTRACTION_PROMPT } from "./prompts/receipt.prompt";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ResponseSchema } from "../schemas/responseSchema";

@Injectable()
export class AiService{
    private client: Groq;
    
    constructor(){
        if (!process.env.GROQ_API_KEY) {
            throw new Error('GEMINI_API_KEY no está configurada');
        }
        
        console.log('🔑 Inicializando Groq...');
         // Inicializa el modelo aquí
        this.client = new Groq({
            apiKey: process.env.GROQ_API_KEY,
        });
    }

    async extracReceiptData(text: string){
        try {
            console.log('📝 Texto enviado a Gemini (primeros 200 chars):', text.substring(0, 200));
            
            const response = await this.client.chat.completions.create({
                model: 'llama-3.3-70b-versatile',
                temperature: 0,
                messages:[
                    {
                        role: 'system',
                        content: RECEIPT_EXTRACTION_PROMPT,
                    },
                    {
                        role: 'user',
                        content: text
                    },
                ],
                response_format: { type: "json_object" } // Fuerza JSON válido
            });

            const content = response.choices[0].message.content;

            console.log('✅ Respuesta de Groq:', content);

            if(!content){
                throw new Error('Empty response from Gemini')
            }

            // Limpia el markdown si existe
            const cleanedContent = content.trim()
                .replace(/\n?/g, '')
                .replace(/```\n?/g, '')
                .trim();


            const resultJson = JSON.parse(cleanedContent)

            const resultValidate = ResponseSchema.safeParse(resultJson)

            if(resultValidate.success){
                console.log('formato esperado', resultValidate.data)
            } else{
                console.error('formato innesperado', resultValidate.error)
            }
            return resultValidate.data
            } catch(error: any){
                console.log(error)
                throw new Error('Error al ejecutar ia')
                
            }
        }
 }
    