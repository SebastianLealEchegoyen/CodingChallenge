import { Field, ObjectType } from '@nestjs/graphql';
import { CommonHeader } from './commonHeaders.model';
import { Header } from './header.model';

@ObjectType()
export class Mail {
  @Field(() => Date)
  timestamp: Date;

  @Field()
  source: string;

  @Field()
  messageId: string;

  @Field(() => [String])
  destination: [string];

  @Field(() => Boolean)
  headersTruncated: boolean;

  @Field(() => [Header])
  headers: [Header];

  @Field(() => CommonHeader)
  commonHeaders: CommonHeader;
}
