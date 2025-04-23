import { Test, TestingModule } from '@nestjs/testing';
import { OrederItemService } from './oreder-item.service';

describe('OrederItemService', () => {
  let service: OrederItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrederItemService],
    }).compile();

    service = module.get<OrederItemService>(OrederItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
