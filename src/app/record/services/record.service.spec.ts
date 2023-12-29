import { Test, TestingModule } from '@nestjs/testing';

import { RecordService } from './record.service';
import { mockRecord, mockResponse } from '../mocks/record.mock';

describe('RecordService', () => {
  let recordService: RecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecordService],
    }).compile();

    recordService = module.get(RecordService);
  });

  describe('Modify a given Json', () => {
    it('modifies a json to a given format', async () => {
      const result = await recordService.parseJson(mockRecord);
      expect(result).toEqual(mockResponse);
    });
  });
});
