import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { FullList } from '../../models';
import { NavController } from 'ionic-angular';
import { AddItemToListComponent } from '../addItemToList/addItemToList.component';

@Component({
    selector: 'page-pending',
    templateUrl: './pending.component.html',
})
export class PendingComponent implements OnInit {
    
    constructor(public wishesService:WishesService, private navCtrl: NavController) { 

    }

    selectList (list:FullList){
        console.log(list);
    }
    goToAddList(){
        this.navCtrl.push(AddItemToListComponent);
    }

    ngOnInit(): void { }
}
