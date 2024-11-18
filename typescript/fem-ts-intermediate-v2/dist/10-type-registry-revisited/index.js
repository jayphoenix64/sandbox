"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registry_1 = require("./lib/registry");
async function main() {
    const myBook = await (0, registry_1.fetchRecord)("book", "book_123");
    const myMagazine = await (0, registry_1.fetchRecord)("magazine", "magazine_123");
    const myBookList = await (0, registry_1.fetchRecords)("book", ["book_123"]);
    const myMagazineList = await (0, registry_1.fetchRecords)("magazine", ["magazine_123"]);
    //@ts-expect-error
    (0, registry_1.fetchRecord)("book", "booooook_123");
    //@ts-expect-error
    (0, registry_1.fetchRecord)("magazine", "mag_123");
    //@ts-expect-error
    (0, registry_1.fetchRecords)("book", ["booooook_123"]);
    //@ts-expect-error
    (0, registry_1.fetchRecords)("magazine", ["mag_123"]);
}
