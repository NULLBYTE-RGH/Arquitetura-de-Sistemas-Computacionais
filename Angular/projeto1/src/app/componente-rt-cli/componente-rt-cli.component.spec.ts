import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteRTCliComponent } from './componente-rt-cli.component';

describe('ComponenteRTCliComponent', () => {
  let component: ComponenteRTCliComponent;
  let fixture: ComponentFixture<ComponenteRTCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteRTCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteRTCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
