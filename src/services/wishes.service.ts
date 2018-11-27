import { Injectable } from '@angular/core';
import { FullList } from '../models';

@Injectable()
export class WishesService {
    list:FullList [] = [];

    constructor () {
        this.loadFromStorage();
    }
    addTaskList(addList:FullList){
        this.list.push(addList);
        this.saveOnStorage();
    }
    deleteTaskList(deleteList:FullList){
        this.list = this.list.filter(data => {
            return data.id !== deleteList.id
        });
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