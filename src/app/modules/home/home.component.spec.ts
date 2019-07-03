import { CardComponent } from './../../shared/card/card.component';
import { LoadingComponent } from './../../shared/loading/loading.component';
import { CardDeckComponent } from './../../shared/card-deck/card-deck.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { LoginProviderService } from './../../core/services/login-provider.service';
import { HeroProviderService } from './../../core/services/hero-provider.service';
import { StorageProviderService } from './../../core/services/storage-provider.service';
import { StorageProviderServiceMock, HeroProviderServiceMock, LoginProviderServiceMock } from './../../shared/tests/mocks';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DropdownComponent } from 'src/app/shared/dropdown/dropdown.component';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let storageProvider = new StorageProviderServiceMock();
  let heroProvider = new HeroProviderServiceMock();
  let instance;

  beforeEach(async(() => {
    HomeComponent.prototype.ngOnInit = () => {};
    TestBed.configureTestingModule({
      imports: [AngularFontAwesomeModule, ReactiveFormsModule, FormsModule],
      declarations: [ HomeComponent, DropdownComponent, CardDeckComponent, LoadingComponent, CardComponent ],
      providers: [
        { provide: StorageProviderService, useValue: storageProvider },
        { provide: HeroProviderService, useValue: heroProvider },
        { provide: LoginProviderService, useClass: LoginProviderServiceMock }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    instance = fixture.debugElement.componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
