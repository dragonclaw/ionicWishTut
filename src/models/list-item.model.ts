export class ListItem {
    description: String;
    completed:Boolean;
    
    constructor(desc: string) {
        this.description = desc,
        this.completed = false;
    }
}