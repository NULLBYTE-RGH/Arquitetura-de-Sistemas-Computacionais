import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSkynewsarabiaCliComponent } from './componente-skynewsarabia-cli.component';

describe('ComponenteSkynewsarabiaCliComponent', () => {
  let component: ComponenteSkynewsarabiaCliComponent;
  let fixture: ComponentFixture<ComponenteSkynewsarabiaCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteSkynewsarabiaCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteSkynewsarabiaCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
