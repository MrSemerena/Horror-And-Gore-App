import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeBodyCardUiComponent } from './home-body-card-ui.component';

describe('HomeBodyCardUiComponent', () => {
  let component: HomeBodyCardUiComponent;
  let fixture: ComponentFixture<HomeBodyCardUiComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBodyCardUiComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBodyCardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
