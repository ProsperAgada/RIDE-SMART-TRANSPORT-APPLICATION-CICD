"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSlug = void 0;
const generateSlug = () => {
    let result = "6";
    const characters = "0123456789";
    const charactersLength = characters.length;
    for (let i = 1; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }
    return result;
};
exports.generateSlug = generateSlug;
//# sourceMappingURL=slug.util.js.map