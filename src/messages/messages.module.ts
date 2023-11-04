import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.services';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
      port: 8000,
    }),
  ],
  controllers: [MessagesController],
  providers: [MessagesRepository, MessagesService],
})
export class MessagesModule {}
