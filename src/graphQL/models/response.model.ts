import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Response {
  @Field(() => Boolean)
  spam: boolean;

  @Field(() => Boolean)
  virus: boolean;

  @Field(() => Boolean)
  dns: boolean;

  @Field(() => String)
  mes: string;

  @Field(() => Boolean)
  retrasado: boolean;

  @Field()
  emisor: string;

  @Field(() => [String])
  receptor: [string];
}
