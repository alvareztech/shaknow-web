import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AngularFireModule, AuthMethods, AuthProviders} from 'angularfire2';

import {AppComponent} from './app.component';
import {ArticlesComponent} from './articles/articles.component';
import {AdminComponent} from './admin/admin.component';
import {ArticleComponent} from './article/article.component';
import {TypesService} from './services/types.service';
import {FIREBASE_CONFIG} from './keys';
import {AppRoutingModule} from 'app/app-routing.module';

import {MarkdownToHtmlModule} from 'markdown-to-html-pipe';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
};

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
    AngularFireModule.initializeApp(FIREBASE_CONFIG, firebaseAuthConfig),
    AppRoutingModule,
    MarkdownToHtmlModule,
    NgbModule.forRoot()
  ],
  providers: [TypesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
