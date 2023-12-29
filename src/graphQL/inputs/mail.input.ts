import CommonHeaderInput from './commonHeaders.input';
import HeaderInput from './header.input';

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator';

@InputType('MailInput')
export default class MailInput {
  @Field()
  timestamp: Date;

  @Field()
  source: string;

  @Field()
  messageId: string;

  @Field(() => [String])
  destination: [string];

  @Field()
  headersTruncated: boolean;

  @Field(() => [HeaderInput])
  headers: [HeaderInput];

  @Field(() => CommonHeaderInput)
  commonHeaders: CommonHeaderInput;
}
