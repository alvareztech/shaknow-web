# Shaknow Web

An experiment with _Angular 4_ and _Firebase Realtime Database_, creating a website with articles and others things. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Requirements

Need a file `src/app/keys.ts` with the following content:
 
```typescript
export const FIREBASE_CONFIG = {
  apiKey: '<YOUR_DATA>',
  authDomain: '<YOUR_DATA>',
  databaseURL: '<YOUR_DATA>',
  storageBucket: '<YOUR_DATA>',
  messagingSenderId: '<YOUR_DATA>'
};
```

This information is in the [Firebase Console](https://console.firebase.google.com/) in your project.

## What does this experiment use?

* [Angular Material](https://material.angular.io/)
* [Angular Fire 2](https://github.com/angular/angularfire2)
* [Angular Flex Layout](https://github.com/angular/flex-layout)

## Database structure

Building the structure...

```json
{
  "articles": {
    "demo_article": {
      "title": "An article",
      "body": "A body",
      "published": true,
      "mainTag": "firebase"
    }
  },
  "users": {
    "user1": {
      "name": "Daniel Alvarez",
      "email": "daniel@alvarez.tech"
    }
  }
}
```
