import CommonHeader from './commonHeaders.entity';
import Header from './header.entity';

export default class Mail {
  timestamp: Date;

  source: string;

  messageId: string;

  destination: string[];

  headersTruncated: boolean;

  headers: Header[];

  commonHeaders: CommonHeader;
}
