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
        if(this.navParams.get('lista')){
            this.newList = this.navParams.get('lista');
        }
        else{
            this.newList =  new FullList(title);
            this.wishesService.addTaskList(this.newList);
        }
        
    }

    addItem() {
        if( this.newItemTask.length > 0) {
            const newItem = new ListItem(this.newItemTask);
            this.newList.items.push(newItem);
            this.wishesService.saveOnStorage();
            this.newItemTask = '';   
        } 
        else {
            return;    
        }   
    }
    deleteItem (index:number){
        this.newList.items.splice(index,1);
        this.wishesService.saveOnStorage();
    }
    checkTask(item: ListItem) {
        item.completed = !item.completed;
        const pendingTasks = this.newList.items.filter(data => {
            return !data.completed;
        }).length;
        if(pendingTasks === 0){
            this.newList.finished = true;
            this.newList.finishedAt =  new Date();
        }
        else{
            this.newList.finished = false;
            this.newList.finishedAt =  null;
        }
        this.wishesService.saveOnStorage();
    }

    ngOnInit(): void { }
}
