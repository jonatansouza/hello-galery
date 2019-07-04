import { Hero } from './../interfaces/hero';
import { of, Observable } from 'rxjs';

export class AngularFirestoreMock {
    constructor() { }
}
export class AngularFireAuthMock {
    constructor() { }
}
export class RouterMock {
    constructor() { }
}
export class StorageProviderServiceMock {
    constructor() { }
    getUserFavorites(): Observable<string[]> {
        return of(["1", "2", "3"]);
    }
    updateUserFavorites() {
        return Promise.resolve();
    }

}
export class HeroProviderServiceMock {
    constructor() { }
    pushCacheHero(hero: Hero){
        return;
    }

}
export class LoginProviderServiceMock {
    constructor() { }
    isLoggedIn() {
        return true;
    }
}