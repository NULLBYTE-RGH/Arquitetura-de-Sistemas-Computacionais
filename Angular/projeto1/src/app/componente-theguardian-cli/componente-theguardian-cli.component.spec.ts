import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTheguardianCliComponent } from './componente-theguardian-cli.component';

describe('ComponenteTheguardianCliComponent', () => {
  let component: ComponenteTheguardianCliComponent;
  let fixture: ComponentFixture<ComponenteTheguardianCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteTheguardianCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteTheguardianCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
