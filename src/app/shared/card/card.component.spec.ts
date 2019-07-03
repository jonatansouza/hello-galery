import { LoginProviderService } from './../../core/services/login-provider.service';
import { HeroProviderService } from './../../core/services/hero-provider.service';
import { StorageProviderServiceMock, HeroProviderServiceMock, LoginProviderServiceMock } from './../tests/mocks';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { StorageProviderService } from 'src/app/core/services/storage-provider.service';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  let instance;
  let storageProvider = new StorageProviderServiceMock();
  let heroProvider = new HeroProviderServiceMock();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFontAwesomeModule],
      declarations: [ CardComponent ],
      providers: [
        { provide: StorageProviderService, useValue: storageProvider },
        { provide: HeroProviderService, useValue: heroProvider },
        { provide: LoginProviderService, useClass: LoginProviderServiceMock },
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CardComponent);
    instance = fixture.debugElement.componentInstance;
    instance["hero"] =  <any>{
      id: "1"
    }
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update favorites and cache hero', () => {
    spyOn(heroProvider, 'pushCacheHero').and.callFake(() => {});
    spyOn(storageProvider, 'updateUserFavorites').and.callThrough();
    spyOn(instance.favoritesIds, 'push').and.callThrough();
    instance.updateFavorite();
    expect(storageProvider.updateUserFavorites).toHaveBeenCalled();
    expect(heroProvider.pushCacheHero).toHaveBeenCalled();
    expect(instance.favoritesIds.push).toHaveBeenCalled();
  })
  it('should update favorites remove hero from array', () => {
    instance.hero.favorite = true;
    spyOn(heroProvider, 'pushCacheHero').and.callFake(() => {});
    spyOn(storageProvider, 'updateUserFavorites').and.callThrough();
    spyOn(instance.favoritesIds, 'splice').and.callThrough();
    instance.updateFavorite();
    expect(storageProvider.updateUserFavorites).toHaveBeenCalled();
    expect(heroProvider.pushCacheHero).not.toHaveBeenCalled();
    expect(instance.favoritesIds.splice).toHaveBeenCalled();
  })
});
