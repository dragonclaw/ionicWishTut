import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { FullList } from '../../models';

@Component({
    selector: 'page-addItemToList',
    templateUrl: './addItemToList.component.html',
})
export class AddItemToListComponent implements OnInit {
    
    constructor(public wishesService:WishesService) { 

    }

    selectList (list:FullList){
        console.log(list);
    }

    ngOnInit(): void { }
}
