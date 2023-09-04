"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rmSpecialCharacters = void 0;
const rmSpecialCharacters = (str) => {
    const regex = /[\W_]+/g;
    // Remove the special characters and spaces from the string
    const result = str.replace(regex, "");
    return result;
};
exports.rmSpecialCharacters = rmSpecialCharacters;
//# sourceMappingURL=rmcharacter.util.js.map