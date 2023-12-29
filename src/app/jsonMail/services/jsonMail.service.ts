import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { simpleParser } from 'mailparser';
import fetch from 'node-fetch';

@Injectable()
export class JsonMailService {
  constructor() {}

  async parseJsonMail(url: string) {
    const input = fs.createReadStream(url || 'src/mail/codeChallenge.eml');

    const parsedJson = await simpleParser(input);

    if (parsedJson.attachments.length > 0) {
      const jsonBuffers: string[] = parsedJson.attachments.map((buffer) => {
        const buf = Buffer.from(buffer.content);
        const jsonBuffer = JSON.parse(buf.toString());
        return jsonBuffer;
      });

      return JSON.stringify(jsonBuffers);
    }

    const jsonUrl = parsedJson.text;

    const response = await fetch(jsonUrl);
    const body = await response.text();

    return JSON.stringify(body);
  }
}
