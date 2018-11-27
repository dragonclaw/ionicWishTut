import { Injectable } from '@angular/core';
import { FullList } from '../models';

@Injectable()
export class WishesService {
    list:FullList [] = [];

    constructor () {
        this.loadFromStorage();
    }
    addTaskList(list:FullList){
        this.list.push(list);
        this.saveOnStorage();
    }

    saveOnStorage () {
        localStorage.setItem('data',JSON.stringify(this.list));
        console.log("guarde");
    }

    loadFromStorage () {
        if(localStorage.getItem('data')){
            this.list = JSON.parse(localStorage.getItem('data'));
        }
    }
}