"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const highlightForbiddenWords_1 = __importDefault(require("../services/highlightForbiddenWords"));
function forbiddenWordsController(req, res) {
    const updatedText = (0, highlightForbiddenWords_1.default)(req.body.text, req.body.forbiddenWordsArr);
    res.status(200).send({ updatedText });
}
exports.default = forbiddenWordsController;
//# sourceMappingURL=forbiddenWordsController.js.map