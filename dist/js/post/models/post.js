export class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this._date = new Date();
    }
    get date() {
        return this._date;
    }
}
//# sourceMappingURL=post.js.map