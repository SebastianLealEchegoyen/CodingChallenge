import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator';

@InputType('CommonHeaderInput')
export default class CommonHeaderInput {
  @Field()
  returnPath: string;

  @Field(() => [String])
  from: [string];

  @Field(() => Date)
  date: Date;

  @Field(() => [String])
  to: [string];

  @Field()
  messageId: string;

  @Field()
  subject: string;
}
