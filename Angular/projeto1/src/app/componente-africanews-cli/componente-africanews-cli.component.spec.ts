import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAfricanewsCliComponent } from './componente-africanews-cli.component';

describe('ComponenteAfricanewsCliComponent', () => {
  let component: ComponenteAfricanewsCliComponent;
  let fixture: ComponentFixture<ComponenteAfricanewsCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteAfricanewsCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteAfricanewsCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
