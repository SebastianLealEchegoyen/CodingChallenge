import { Args, Query, Resolver } from '@nestjs/graphql';
import { JsonMailService } from 'src/app/jsonMail/services/jsonMail.service';

@Resolver()
export class MailResolver {
  constructor(private mailService: JsonMailService) {}

  @Query(() => String, { name: 'MailJsonParse' })
  async getRecords(
    @Args({ name: 'Url', type: () => String })
    Url: string,
  ) {
    return this.mailService.parseJsonMail(Url);
  }
}
