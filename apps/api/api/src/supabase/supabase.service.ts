import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

@Injectable()
export class SupabaseService{
    //creo al cliente
     private readonly supabaseClient: SupabaseClient;

     //creo la config del servicio
    constructor(private configService: ConfigService ){
        const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
        const supabaseKey = this.configService.get<string>('SUPABASE_SERVICE_ROLE_KEY');

        if( !supabaseUrl || !supabaseKey){
            console.log('Error al obtener url o key')
            throw new Error('Error al obtener supabaseUrl o supabaseKey')
        }

        //creo el nuevo cliente
        this.supabaseClient = createClient(supabaseUrl, supabaseKey)

    }

    getClient(): SupabaseClient{
        return this.supabaseClient
    }
}