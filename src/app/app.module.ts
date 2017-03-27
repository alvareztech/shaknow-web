import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';

import {AppComponent} from './app.component';
import 'hammerjs';
import {ArticlesComponent} from './articles/articles.component';
import {Routes, RouterModule} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ArticleComponent } from './article/article.component';
import {TypesService} from './services/types.service';
import {FIREBASE_CONFIG} from './keys';


const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

const appRoutes: Routes = [
  {
    path: '',
    component: ArticlesComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: ':id',
    component: ArticleComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    AdminComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TypesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
