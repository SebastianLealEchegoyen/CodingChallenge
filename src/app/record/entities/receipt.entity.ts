import Action from './action.entity';
import Status from './status.entity';

export default class Receipt {
  timestamp: Date;

  processingTimeMillis: number;

  recipients: string[];

  spamVerdict: Status;

  virusVerdict: Status;

  spfVerdict: Status;

  dkimVerdict: Status;

  dmarcVerdict: Status;

  dmarcPolicy: string;

  action: Action;
}
