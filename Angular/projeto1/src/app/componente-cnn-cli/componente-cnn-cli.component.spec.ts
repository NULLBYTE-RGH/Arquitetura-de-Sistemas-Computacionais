import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCnnCliComponent } from './componente-cnn-cli.component';

describe('ComponenteCnnCliComponent', () => {
  let component: ComponenteCnnCliComponent;
  let fixture: ComponentFixture<ComponenteCnnCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteCnnCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteCnnCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
