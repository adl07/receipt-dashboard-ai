import { Controller, Get, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
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
    
    //GET
    @Get('receiptInfo')
    async getInfo(){
        const data = this.receiptService.getReceiptData();
        return data;
    }

    @Get('receiptFile/:file',)
    async getUserFile(@Param('file') file: string){
        const data = this.receiptService.getReceiptFile(file)
        return data;
    }
}