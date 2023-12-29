import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommonHeader {
  @Field()
  returnPath: string;

  @Field(() => [String])
  from: [string];

  @Field(() => Date)
  date: [Date];

  @Field(() => [String])
  to: [string];

  @Field()
  messageId: string;

  @Field()
  subject: string;
}
