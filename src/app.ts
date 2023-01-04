import { PostController } from "./post/controller/index.js";

let app: HTMLElement = <HTMLElement>document.getElementById('app');
const postController = new PostController();
app.append(postController.toAppend());