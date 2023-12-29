import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator';
import StatusInput from './status.input';
import ActionInput from './action.input';

@InputType('ReceiptInput')
export default class ReceiptInput {
  @Field(() => Date)
  timestamp: Date;

  @Field()
  processingTimeMillis: number;

  @Field(() => [String])
  recipients: [string];

  @Field(() => StatusInput)
  spamVerdict: StatusInput;

  @Field(() => StatusInput)
  virusVerdict: StatusInput;

  @Field(() => StatusInput)
  spfVerdict: StatusInput;

  @Field(() => StatusInput)
  dkimVerdict: StatusInput;

  @Field(() => StatusInput)
  dmarcVerdict: StatusInput;

  @Field()
  dmarcPolicy: string;

  @Field(() => ActionInput)
  action: ActionInput;
}
