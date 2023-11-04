import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

export interface messages {
  [key: string]: message;
}

export interface message {
  contents: string;
  id: number;
}

@Injectable()
export class MessagesRepository {
  async findOne(id: string): Promise<message> {
    const contents = await readFile('messages.json', 'utf-8');

    const messages: messages = JSON.parse(contents);

    return messages[id];
  }

  async findAll(): Promise<messages> {
    const contents = await readFile('messages.json', 'utf-8');

    const messages: messages = JSON.parse(contents);
    return messages;
  }

  async create(content: string): Promise<messages> {
    const contents = await readFile('messages.json', 'utf-8');

    const messages: messages = JSON.parse(contents);

    const id = Math.floor(Math.random() * 999).toString();

    const message: message = {
      contents: content,
      id: Number(id),
    };

    messages[id] = message;

    await writeFile('messages.json', JSON.stringify(messages));

    return messages;
  }
}
