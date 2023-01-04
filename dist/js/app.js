import { PostController } from "./post/controller/index.js";
let app = document.getElementById('app');
const postController = new PostController();
app.append(postController.toAppend());
//# sourceMappingURL=app.js.map