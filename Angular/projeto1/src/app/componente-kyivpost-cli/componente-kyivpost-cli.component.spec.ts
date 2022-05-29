import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteKyivpostCliComponent } from './componente-kyivpost-cli.component';

describe('ComponenteKyivpostCliComponent', () => {
  let component: ComponenteKyivpostCliComponent;
  let fixture: ComponentFixture<ComponenteKyivpostCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteKyivpostCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteKyivpostCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
