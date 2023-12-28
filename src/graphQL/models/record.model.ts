import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Records {
  @Field()
  eventVersion: string;
}
