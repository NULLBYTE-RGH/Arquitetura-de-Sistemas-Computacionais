import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCriarContaCliComponent } from './componente-criar-conta-cli.component';

describe('ComponenteCriarContaCliComponent', () => {
  let component: ComponenteCriarContaCliComponent;
  let fixture: ComponentFixture<ComponenteCriarContaCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteCriarContaCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCriarContaCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
