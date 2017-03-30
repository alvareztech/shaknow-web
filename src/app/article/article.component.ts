import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Article} from '../models/article';
import {ActivatedRoute, Params} from '@angular/router';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: FirebaseObjectObservable<Article>;
  // private DOM: any;

  constructor(private route: ActivatedRoute, private af: AngularFire, private titleService: Title, private metaService: Meta) {
    // this.DOM = getDOM();
    // console.log('El dom: ' + this.DOM);
  }

  ngOnInit() {
    this.route.params.forEach(x => {
      console.log('hola:' + x['id']);
      this.article = this.af.database.object('/articles/' + x['id']);
      this.article.subscribe(xyz => {
        console.log('se termino de cargar: ' + xyz.title);
        this.titleService.setTitle(xyz.title);
        this.metaService.updateTag({name: 'author', content: 'Daniel Alvarez'});
        this.metaService.updateTag({name: 'og:title', content: xyz.title});
        this.metaService.updateTag({name: 'og:description', content: xyz.desc});
        this.metaService.updateTag({name: 'og:url', content: 'http://alvarez.tech'});
        this.metaService.updateTag({name: 'og:image', content: 'assets/img/logos/android.svg'});
        this.metaService.updateTag({name: 'twitter:title', content: xyz.title});
        this.metaService.updateTag({name: 'twitter:description', content: xyz.desc});
      });
    });

    // this.route.params.switchMap((params: Params) => this.af.database.object('/articles/-Kg7O3hGFDmc9jg_gVe7'))
    //   .subscribe(hero => {
    //     console.log('llega la información: ' + JSON.stringify(hero));
    //     this.article = hero;
    //   });
  }

}
