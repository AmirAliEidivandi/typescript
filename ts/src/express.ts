import * as express from "express";
import { Application, Request, Response } from "express";

class App {
    private app: Application;

    constructor() {
        this.app = express();
    }

    /**
     * router
     */
    public router() {
        this.app.get("/", (req: Request, res: Response) => {
            res.send("hello world");
        });
    }

    public run() {
        this.app.listen(8000, () => console.log(`Server running on port 8000`));
    }
}

const runExpress = new App();
runExpress.run();
runExpress.router();
