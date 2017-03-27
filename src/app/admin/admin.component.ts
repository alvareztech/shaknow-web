import {Component, OnInit} from '@angular/core';
import {TypesService} from '../services/types.service';
import {Tag} from '../models/tag';
import {Article} from '../models/article';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  tags: Tag[];
  article = new Article('Hola', 'Hola2', 'android', 'android-google');

  constructor(private typesService: TypesService, private af: AngularFire) {
    this.tags = typesService.getTags();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit...');
    const articles = this.af.database.list('articles');
    articles.push(this.article);
  }

  // get diagnostic() {
  //   return JSON.stringify(this.article);
  // }
}
