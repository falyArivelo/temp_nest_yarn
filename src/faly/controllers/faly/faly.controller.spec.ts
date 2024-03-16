import { Test, TestingModule } from '@nestjs/testing';
import { FalyController } from './faly.controller';

describe('FalyController', () => {
  let controller: FalyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FalyController],
    }).compile();

    controller = module.get<FalyController>(FalyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
