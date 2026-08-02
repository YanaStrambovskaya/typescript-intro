"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function highlightForbiddenWords(text, forbiddenWords) {
    if (text.length === 0)
        return "";
    if (forbiddenWords.length === 0)
        return text;
    let updatedText = text;
    forbiddenWords.forEach((word) => {
        updatedText = updatedText.replace(word, `<del>${word}</del>`);
    });
    return updatedText;
}
exports.default = highlightForbiddenWords;
//# sourceMappingURL=highlightForbiddenWords.js.map