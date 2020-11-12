import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalasPage } from './salas.page';

describe('SalasPage', () => {
  let component: SalasPage;
  let fixture: ComponentFixture<SalasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
