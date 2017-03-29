import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Article} from '../models/article';
import {ActivatedRoute, Params} from '@angular/router';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: FirebaseObjectObservable<Article>;

  constructor(private route: ActivatedRoute, private af: AngularFire, private titleService: Title) {
    console.log('constructor');
    // this.article = this.af.database.object('/articles/-Kg7O3hGFDmc9jg_gVe7');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.route.params.forEach(x => {
      console.log('hola:' + x['id']);
      this.article = this.af.database.object('/articles/' + x['id']);
      this.article.subscribe(xyz => {
        console.log('se termino de cargar: ' + xyz.title);
        this.titleService.setTitle(xyz.title);
      });
    });

    // this.route.params.switchMap((params: Params) => this.af.database.object('/articles/-Kg7O3hGFDmc9jg_gVe7'))
    //   .subscribe(hero => {
    //     console.log('llega la información: ' + JSON.stringify(hero));
    //     this.article = hero;
    //   });
  }

}
