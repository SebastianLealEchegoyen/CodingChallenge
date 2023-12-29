import { Test, TestingModule } from '@nestjs/testing';

import { JsonMailService } from './jsonMail.service';
import { mockEmailResponse1, mockEmailResponse2 } from '../mocks/json.mock';

describe('RecordService', () => {
  let mailService: JsonMailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JsonMailService],
    }).compile();

    mailService = module.get(JsonMailService);
  });

  describe('Get a JSON from an email', () => {
    it('obtains a given JSON from an email attachment', async () => {
      const result = await mailService.parseJsonMail(
        'src/mail/CodeChallenge.eml',
      );
      expect(result).toEqual(mockEmailResponse1);
    });

    it('obtains a given JSON from an email link', async () => {
      const result = await mailService.parseJsonMail(
        'src/mail/CodeChallenge2.eml',
      );
      expect(result).toEqual(mockEmailResponse2);
    });
  });
});
