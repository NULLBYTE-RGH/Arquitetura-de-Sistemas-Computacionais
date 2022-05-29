import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteIsraelhayomCliComponent } from './componente-israelhayom-cli.component';

describe('ComponenteIsraelhayomCliComponent', () => {
  let component: ComponenteIsraelhayomCliComponent;
  let fixture: ComponentFixture<ComponenteIsraelhayomCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteIsraelhayomCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteIsraelhayomCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
