import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Article} from '../models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: FirebaseListObservable<Article[]>;

  constructor(af: AngularFire) {
    this.articles = af.database.list('/articles');
  }

  ngOnInit() {
  }

}
