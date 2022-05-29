import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCnnCliComponent } from './component-cnn-cli.component';

describe('ComponentCnnCliComponent', () => {
  let component: ComponentCnnCliComponent;
  let fixture: ComponentFixture<ComponentCnnCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCnnCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCnnCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
