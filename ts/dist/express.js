"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.app = express();
    }
    /**
     * router
     */
    router() {
        this.app.get("/", (req, res) => {
            res.send("hello world");
        });
    }
    run() {
        this.app.listen(8000, () => console.log(`Server running on port 8000`));
    }
}
const runExpress = new App();
runExpress.run();
runExpress.router();
