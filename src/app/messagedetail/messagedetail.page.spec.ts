import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessagedetailPage } from './messagedetail.page';

describe('MessagedetailPage', () => {
  let component: MessagedetailPage;
  let fixture: ComponentFixture<MessagedetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagedetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessagedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
