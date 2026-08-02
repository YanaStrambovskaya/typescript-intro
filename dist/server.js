"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const homeRouter_1 = __importDefault(require("./routes/homeRouter"));
const forbiddenWordsRouter_1 = __importDefault(require("./routes/forbiddenWordsRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.use(express_1.default.static(path_1.default.join(__dirname)));
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", homeRouter_1.default);
app.use("/check", forbiddenWordsRouter_1.default);
app.listen(3000, () => {
    console.log("Server is running");
});
//# sourceMappingURL=server.js.map