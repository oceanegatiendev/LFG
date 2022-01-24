import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatelfgPage } from './createlfg.page';

describe('CreatelfgPage', () => {
  let component: CreatelfgPage;
  let fixture: ComponentFixture<CreatelfgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelfgPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatelfgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
