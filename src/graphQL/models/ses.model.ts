import { Field, ObjectType } from '@nestjs/graphql';
import { Receipt } from './receipt.model';
import { Mail } from './mail.model';

@ObjectType()
export class Ses {
  @Field(() => [Receipt])
  receipt: [Receipt];

  @Field(() => Mail)
  mail: Mail;
}
