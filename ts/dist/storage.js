"use strict";
var FileStorage = /** @class */ (function () {
    function FileStorage(name) {
        this.name = name;
    }
    /**
     * save
     */
    FileStorage.prototype.save = function () {
        return true;
    };
    /**
     * get
     */
    FileStorage.prototype.get = function () {
        return this.name;
    };
    return FileStorage;
}());
var DatabaseStorage = /** @class */ (function () {
    function DatabaseStorage(name) {
        this.name = name;
    }
    /**
     * save
     */
    DatabaseStorage.prototype.save = function () {
        return true;
    };
    /**
     * get
     */
    DatabaseStorage.prototype.get = function () {
        return this.name;
    };
    return DatabaseStorage;
}());
function saveFile(storageHandler) {
    return true;
}
