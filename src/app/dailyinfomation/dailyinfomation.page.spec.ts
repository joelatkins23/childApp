import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyinfomationPage } from './dailyinfomation.page';

describe('DailyinfomationPage', () => {
  let component: DailyinfomationPage;
  let fixture: ComponentFixture<DailyinfomationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyinfomationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyinfomationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
