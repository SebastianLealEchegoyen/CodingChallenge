import { Field } from '@nestjs/graphql/dist/decorators';
import { InputType } from '@nestjs/graphql/dist/decorators/input-type.decorator';

@InputType('HeaderInput')
export default class HeaderInput {
  @Field()
  name: string;

  @Field()
  value: string;
}
