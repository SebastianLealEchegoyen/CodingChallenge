import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Action {
  @Field()
  type: string;

  @Field()
  topicArn: string;
}
