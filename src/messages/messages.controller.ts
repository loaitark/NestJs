import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessagesDto } from './dtos/create-messages.dtos';
@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: CreateMessagesDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
