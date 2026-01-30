import { Controller, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from '@nestjs/platform-express';
import { ReceiptService } from "./receipt.service";

@Controller('receipt')
export class ReceiptController{
    constructor(private readonly receiptService: ReceiptService){}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async upload(@UploadedFile() file: Express.Multer.File){
        return this.receiptService.processPdf(file)
    }
}