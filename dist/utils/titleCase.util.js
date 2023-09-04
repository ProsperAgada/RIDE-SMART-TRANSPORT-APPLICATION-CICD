"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleCase = void 0;
const titleCase = (str) => {
    return str
        .toLowerCase()
        .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
};
exports.titleCase = titleCase;
//# sourceMappingURL=titleCase.util.js.map