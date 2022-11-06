"use strict";
class FileStorage {
    constructor(name) {
        this.name = name;
    }
    /**
     * save
     */
    save() {
        return true;
    }
    /**
     * get
     */
    get() {
        return this.name;
    }
}
class DatabaseStorage {
    constructor(name) {
        this.name = name;
    }
    /**
     * save
     */
    save() {
        return true;
    }
    /**
     * get
     */
    get() {
        return this.name;
    }
}
function saveFile(storageHandler) {
    return true;
}
