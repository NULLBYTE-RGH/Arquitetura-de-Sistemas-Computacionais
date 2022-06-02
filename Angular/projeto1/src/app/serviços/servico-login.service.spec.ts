import { TestBed } from '@angular/core/testing';

import { ServicoLoginService } from './servico-login.service';

describe('ServicoLoginService', () => {
  let service: ServicoLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
