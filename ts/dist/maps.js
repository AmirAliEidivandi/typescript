"use strict";
const items = new Map();
items.set("key 1", 123);
items.set("key 2", 125);
items.forEach((value, key) => {
    console.log(`${items.get(key)}`);
});
