import { TestBed, inject } from '@angular/core/testing';

import { AddToBoardService } from './add-to-board.service';

describe('AddToBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddToBoardService]
    });
  });

  it('should be created', inject([AddToBoardService], (service: AddToBoardService) => {
    expect(service).toBeTruthy();
  }));
});
