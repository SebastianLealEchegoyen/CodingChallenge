import { Injectable } from '@nestjs/common';
import RecordDTO from '../dto/record.dto';
import { ResponseDOC } from '../docs/response.doc';

@Injectable()
export class RecordService {
  constructor() {}

  async parseJson(recordDto: RecordDTO[]): Promise<ResponseDOC[]> {
    const response: ResponseDOC[] = recordDto.map((info) => {
      if (
        info.ses.receipt.spfVerdict.status === 'PASS' &&
        info.ses.receipt.dkimVerdict.status === 'PASS' &&
        info.ses.receipt.dmarcVerdict.status === 'PASS'
      ) {
        return {
          spam: info.ses.receipt.spamVerdict.status === 'PASS' ? true : false,
          virus: info.ses.receipt.virusVerdict.status === 'PASS' ? true : false,
          dns: true,
          mes: info.ses.mail.timestamp.toString(),
          retrasado:
            info.ses.receipt.processingTimeMillis > 1000 ? true : false,
          emisor: info.ses.mail.source.split('@')[0],
          receptor: info.ses.mail.destination.map(
            (destination) => destination.split('@')[0],
          ),
        };
      } else {
        return {
          spam: info.ses.receipt.spamVerdict.status === 'PASS' ? true : false,
          virus: info.ses.receipt.virusVerdict.status === 'PASS' ? true : false,
          dns: false,
          mes: info.ses.mail.timestamp.toString(),
          retrasado:
            info.ses.receipt.processingTimeMillis > 1000 ? true : false,
          emisor: info.ses.mail.source.split('@')[0],
          receptor: info.ses.mail.destination.map(
            (destination) => destination.split('@')[0],
          ),
        };
      }
    });
    return response;
  }
}
