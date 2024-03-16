import { Test, TestingModule } from '@nestjs/testing';
import { FalyService } from './faly.service';

describe('FalyService', () => {
  let service: FalyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FalyService],
    }).compile();

    service = module.get<FalyService>(FalyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
