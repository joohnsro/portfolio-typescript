export class Post {

    private _date: Date;
    
    public constructor( 
        public title: string, 
        public content: string
    ) {
        this._date = new Date();
    }

    get date(): Date {
        return this._date;
    }
}