// src/utils/db.js

class LocalStorageDB {
    constructor() {
        this.storage = window.localStorage;
    }

    setItem(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    getItem(key) {
        const value = this.storage.getItem(key);
        return value ? JSON.parse(value) : null;
    }

    removeItem(key) {
        this.storage.removeItem(key);
    }

    clear() {
        this.storage.clear();
    }
}

// Exporting the LocalStorageDB class
export default new LocalStorageDB();