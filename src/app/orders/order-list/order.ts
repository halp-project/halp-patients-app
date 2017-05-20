export class Order {
    id: number;
    type: string;
    title: string;
    addressee: string;
    room: number;
    date: Date;
    completed: boolean;
    image: string;

    constructor(
        id: number,
        type: string,
        title: string,
        addressee: string,
        room: number,
        date: Date,
        completed: boolean
    )
    
    {   this.id = id;
        this.type = type;
        this.title = title;
        this.addressee = addressee;
        this.room = room;
        this.date = date;
        this.completed = completed;
        
        if(type == 'book'){
            this.image = './assets/icons/book.svg'; 
        } else if(type == 'item'){
            this.image = './assets/icons/bag.svg'; 
        } else{
            this.image = './assets/icons/dish.svg'; 
        }
    }

    getTimeAgo(){
        let millis = this.date.getTime();
        let now = new Date().getTime();
        
        return Math.trunc(((now-millis)/1000)/60);
    }
}