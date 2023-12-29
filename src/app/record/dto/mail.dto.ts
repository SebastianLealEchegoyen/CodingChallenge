import CommonHeaderDTO from './commonHeaders.dto';
import HeaderDto from './header.dto';

export default class MailDto {
  timestamp: Date;

  source: string;

  messageId: string;

  destination: string[];

  headersTruncated: boolean;

  headers: HeaderDto[];

  commonHeaders: CommonHeaderDTO;
}
