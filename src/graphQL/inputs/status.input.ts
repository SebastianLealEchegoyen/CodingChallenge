import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator';

@InputType('StatusInput')
export default class StatusInput {
  @Field()
  status: string;
}
