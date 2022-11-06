interface IStorage {
    name: string;
    save(): boolean;
    get(): string;
}

class FileStorage implements IStorage {
    constructor(public name: string) {}

    /**
     * save
     */
    public save(): boolean {
        return true;
    }

    /**
     * get
     */
    public get(): string {
        return this.name;
    }
}

class DatabaseStorage implements IStorage {
    constructor(public name: string) {}

    /**
     * save
     */
    public save(): boolean {
        return true;
    }

    /**
     * get
     */
    public get(): string {
        return this.name;
    }
}

function saveFile(storageHandler: IStorage): boolean {
    return true;
}