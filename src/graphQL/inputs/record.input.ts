import SesInput from './ses.input';

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator';

@InputType('RecordInput')
export default class RecordInput {
  @Field()
  eventVersion: string;

  @Field(() => SesInput)
  ses: SesInput;

  @Field()
  eventSource: string;
}
