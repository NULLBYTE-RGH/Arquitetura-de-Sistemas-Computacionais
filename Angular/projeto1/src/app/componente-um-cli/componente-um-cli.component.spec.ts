import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteUmCliComponent } from './componente-um-cli.component';

describe('ComponenteUmCliComponent', () => {
  let component: ComponenteUmCliComponent;
  let fixture: ComponentFixture<ComponenteUmCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteUmCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteUmCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
