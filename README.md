# HeroGallery

Hero gallery is a cool app to find heroes and save as favorite.

## Configuration

This projects use Firebase to Autenticate the users with google and also use Cloud Firestore as database. To setup, go to firebase console, create a project and enable the authentication with google, and at database tab, enable the cloud firestore. 

Create a file on `/src/environments/firebase-credentials.ts`, and add your firebase credentials with the follow sintax:

```
export const firebaseCredential = {
    apiKey: "<your api key>",
    authDomain: "<your auth domain>",
    databaseURL: "<your database url>",
    projectId: "<your project id>",
    storageBucket: "",
    messagingSenderId: "<your message sender id>",
    appId: "your app id"
}
```

The credentials above can be found on project configuration > general > your apps

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
