import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteLoginCliComponent } from './componente-login-cli.component';

describe('ComponenteLoginCliComponent', () => {
  let component: ComponenteLoginCliComponent;
  let fixture: ComponentFixture<ComponenteLoginCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteLoginCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteLoginCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
