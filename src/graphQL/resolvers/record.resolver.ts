import { Query, Resolver } from '@nestjs/graphql';

import { Records } from '../models/record.model';

@Resolver(() => Records)
export class RecordsResolver {
  constructor() {} //private authorsService: AuthorsService,

  @Query(() => Records, { name: 'records' })
  async getRecords() {
    return { eventVersion: '1' };
  }
}
