import { Injectable, BadRequestException } from "@nestjs/common";
import { AiService } from "../ai/ai.service";
import { PDFParse } from "pdf-parse";
import { SupabaseService } from "../supabase/supabase.service";


@Injectable()
export class ReceiptService{
    constructor(private readonly aiService: AiService, 
        private readonly supabaseService: SupabaseService){}


    async processPdf(file: Express.Multer.File){
        if(!file){
            throw new BadRequestException('No file uploaded')
        }
       try {
         //Extraigo texto del PDF
        const pdfParser = new PDFParse({data: file.buffer})
        const pdfData: any = await pdfParser.getText()
        const text = pdfData.text;


        if(!text || text.trim().length === 0){
            throw new BadRequestException('PDF has no readable text')
        }

        //Enviar texto a OpenAI
        const extractedData = await this.aiService.extracReceiptData(text)

        console.log('extractedData:',extractedData)
        //validar con ZOD

        //guardar en la BD//

        const supabase = this.supabaseService.getClient();
        const {data, error} = await supabase
        .from('recibos_sueldo_core')
        .insert({
            empleado: extractedData?.empleado,
            documento: extractedData?.documento,
            cuil: extractedData?.cuil,
            legajo: extractedData?.legajo,
            puesto: extractedData?.puesto,
            categoria: extractedData?.categoria,
            antiguedad: extractedData?.antiguedad,
            obra_social: extractedData?.obraSocial,
            sueldo: extractedData?.sueldo,
            fecha: extractedData?.fecha,
            banco: extractedData?.banco
        })
        .select()
        .single();

        if(error){
            console.error('Error al insertar los datos en supabase', error)
            throw new BadRequestException('Error al insertar los datos en supabase', error.message)
        }

        console.log('Datos guardados exitosamente en supabase', data)

        return extractedData
       } catch (error) {
        if(error instanceof BadRequestException){
            throw error;
        }
        console.log('Error procesando el PDF', error)
        throw new BadRequestException('Error procesando el recibo', error)
       }
    }

}