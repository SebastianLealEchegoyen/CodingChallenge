import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Status } from './status.model';
import { Action } from './action.model';

@ObjectType()
export class Receipt {
  @Field(() => Date)
  timestamp: Date;

  @Field()
  source: string;

  @Field(() => Int)
  processingTimeMillis: number;

  @Field(() => [String])
  recipients: [string];

  @Field(() => Status)
  spamVerdict: Status;

  @Field(() => Status)
  virusVerdict: Status;

  @Field(() => Status)
  spfVerdict: Status;

  @Field(() => Status)
  dkimVerdict: Status;

  @Field(() => Status)
  dmarcVerdict: Status;

  @Field()
  dmarcPolicy: string;

  @Field(() => [Action])
  action: [Action];
}
