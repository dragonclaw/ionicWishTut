import { ListItem } from "./list-item.model";

export class FullList {
    id: number;
    title: String;
    createdAt: Date;
    finishedAt: Date;
    finished: boolean;
    items: ListItem[];

    constructor(title:String){
        this.title = title;
        this.createdAt = new Date();
        this.finished = false;
        this.items = [];
        this.id = new Date().getTime();

    }
}