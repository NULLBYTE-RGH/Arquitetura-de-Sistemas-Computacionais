import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMainCliComponent } from './componente-main-cli.component';

describe('ComponenteMainCliComponent', () => {
  let component: ComponenteMainCliComponent;
  let fixture: ComponentFixture<ComponenteMainCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteMainCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteMainCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
