import ActionDto from './action.dto';
import StatusDto from './status.dto';

export default class ReceiptDto {
  timestamp: Date;

  processingTimeMillis: number;

  recipients: string[];

  spamVerdict: StatusDto;

  virusVerdict: StatusDto;

  spfVerdict: StatusDto;

  dkimVerdict: StatusDto;

  dmarcVerdict: StatusDto;

  dmarcPolicy: string;

  action: ActionDto;
}
