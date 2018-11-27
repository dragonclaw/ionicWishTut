import { Component, OnInit, Input } from '@angular/core';
import { WishesService } from '../services/wishes.service';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { FullList } from '../models';
import { AddItemToListComponent } from '../pages/addItemToList/addItemToList.component';


@Component({
    selector: 'app-lists',
    templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
    constructor(public wishesService:WishesService, private navCtrl: NavController, private alertCtrl:AlertController ) { }

    @Input() finished:boolean = false;

    ngOnInit(): void { }

    selectList (list:FullList){
        this.navCtrl.push(AddItemToListComponent,{
            title: list.title,
            lista: list,
        });
    }
    editListTitle (list:FullList, slideItem:ItemSliding){
        slideItem.close();
        const nAlert = this.alertCtrl.create({
            title : 'Edit List Name',
            message : 'Edti Name',
            inputs : [{
                name:'newListTitle',
                placeholder:'Name of the list',
                value: list.title,
            }],
            buttons:[{
                text:'Cancel',
                handler: data => {
                    console.log(data);
                }
            },{
                text:'Save',
                handler:data => {
                    if(data.newListTitle.length > 0){
                        console.log(data);
                        list.title = data.newListTitle;
                        this.wishesService.saveOnStorage();
                        
                    } else {
                        return;
                    }      
                }
            }
        ]
        });
        nAlert.present();
    }
}
