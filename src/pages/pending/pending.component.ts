import { Component, OnInit, Input } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import { FullList } from '../../models';
import { NavController, AlertController } from 'ionic-angular';
import { AddItemToListComponent } from '../addItemToList/addItemToList.component';


@Component({
    selector: 'page-pending',
    templateUrl: './pending.component.html',
})
export class PendingComponent implements OnInit {
    
    
    
    constructor(public wishesService:WishesService, private navCtrl: NavController, private alertCtrl:AlertController) { 

    }

    selectList (list:FullList){
        this.navCtrl.push(AddItemToListComponent,{
            title: list.title,
            lista: list,
        });
    }

    goToAddList(){
        const nAlert = this.alertCtrl.create({
            title : 'New List',
            message : 'Name of the new list',
            inputs : [{
                name:'newListTitle',
                placeholder:'Name of the list',
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
                        this.navCtrl.push(AddItemToListComponent,{
                            title: data.newListTitle
                        });
                    } else {
                        return;
                    }      
                }
            }
        ]
        });

        nAlert.present();
        
    }

    ngOnInit(): void { }
}
