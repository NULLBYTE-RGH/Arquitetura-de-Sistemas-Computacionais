import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteGoogleCliComponent } from './componente-google-cli.component';

describe('ComponenteGoogleCliComponent', () => {
  let component: ComponenteGoogleCliComponent;
  let fixture: ComponentFixture<ComponenteGoogleCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteGoogleCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteGoogleCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
