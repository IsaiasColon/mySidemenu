import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablasPage } from './tablas.page';

describe('TablasPage', () => {
  let component: TablasPage;
  let fixture: ComponentFixture<TablasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
