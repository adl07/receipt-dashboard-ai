import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ReceiptModule } from './receipt/receipt.module';
import { AiModule } from './ai/ai.module';
import { SupabaseModule } from './supabase/supabase.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ReceiptModule,
    AiModule,
    SupabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
