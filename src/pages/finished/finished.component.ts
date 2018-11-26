import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { FullList } from '../../models';

@Component({
    selector: 'page-finished',
    templateUrl: './finished.component.html',
})
export class FinishedComponent implements OnInit {
    constructor(public wishesService:WishesService ) { }
    selectList(list:FullList) {
        console.log(list);
    }
    ngOnInit(): void { }
}
