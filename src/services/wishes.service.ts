import { Injectable } from '@angular/core';
import { FullList } from '../models';

@Injectable()
export class WishesService {
    list:FullList [] = [];

    constructor () {
        const list1 = new FullList('first list');
        const list2 = new FullList('second list');
        this.list.push(list1,list2);
        console.log(this.list);
        
    }
}