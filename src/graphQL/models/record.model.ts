import { Field, ObjectType } from '@nestjs/graphql';
import { Ses } from './ses.model';

@ObjectType()
export class Records {
  @Field()
  eventVersion: string;

  @Field(() => Ses)
  ses: Ses;

  @Field()
  eventSource: string;
}
