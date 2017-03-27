import { Injectable } from '@angular/core';
import {Tag} from '../models/tag';
import {TAGS} from '../mock-tags';


@Injectable()
export class TypesService {

  constructor() { }

  getTags(): Tag[] {
    return TAGS;
  }

}
