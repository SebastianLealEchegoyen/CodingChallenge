import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator';

@InputType('ActionInput')
export default class ActionInput {
  @Field()
  type: string;

  @Field()
  topicArn: string;
}
