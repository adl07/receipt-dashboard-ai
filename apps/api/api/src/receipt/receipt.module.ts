import { Module } from '@nestjs/common';
import { ReceiptController } from './receipt.controller';
import { AiModule } from '../ai/ai.module';
import { ReceiptService } from './receipt.service';
import { SupabaseModule } from '../supabase/supabase.module';

@Module({
  imports: [AiModule, SupabaseModule],
  controllers: [ReceiptController],
  providers: [ReceiptService],
})
export class ReceiptModule {}
