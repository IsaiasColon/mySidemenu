import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablasComponent } from './tablas.component';

describe('TablasComponent', () => {
  let component: TablasComponent;
  let fixture: ComponentFixture<TablasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
