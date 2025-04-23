import { Test, TestingModule } from '@nestjs/testing';
import { OrederItemController } from './oreder-item.controller';
import { OrederItemService } from './oreder-item.service';

describe('OrederItemController', () => {
  let controller: OrederItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrederItemController],
      providers: [OrederItemService],
    }).compile();

    controller = module.get<OrederItemController>(OrederItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
