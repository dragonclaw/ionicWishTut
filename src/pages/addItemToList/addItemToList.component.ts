import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { FullList, ListItem } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-addItemToList',
    templateUrl: './addItemToList.component.html',
})
export class AddItemToListComponent implements OnInit {
    newList : FullList;
    newItemTask : string;

    constructor(public wishesService:WishesService, private navParams:NavParams) {
        const title = this.navParams.get('title')
        this.newList =  new FullList(title);
        this.wishesService.addTaskList(this.newList);
    }

    selectList (list:FullList){
        console.log(list);
    }
    addItem() {
        if( this.newItemTask.length > 0) {
            const newItem = new ListItem(this.newItemTask);
            this.newList.items.push(newItem);
            this.newItemTask = '';     
        } 
        else {
            return;    
        }   
    }
    deleteItem (index:number){
        this.newList.items.splice(index,1);
    }

    ngOnInit(): void { }
}
