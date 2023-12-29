import { Args, Query, Resolver } from '@nestjs/graphql';

import RecordInput from '../inputs/record.input';
import { RecordService } from 'src/app/record/services/record.service';
import { Response } from '../models/response.model';

@Resolver()
export class RecordsResolver {
  constructor(private recordService: RecordService) {}

  @Query(() => [Response], { name: 'JsonParse' })
  async getRecords(
    @Args({ name: 'recordInput', type: () => [RecordInput] })
    recordInput: RecordInput[],
  ) {
    return this.recordService.parseJson(recordInput);
  }
}
