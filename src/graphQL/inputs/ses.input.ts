import MailInput from './mail.input';
import ReceiptInput from './receipt.input';

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator';

@InputType('SesInput')
export default class SesInput {
  @Field(() => ReceiptInput)
  receipt: ReceiptInput;

  @Field(() => MailInput)
  mail: MailInput;
}
