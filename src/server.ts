import express from "express";
import path from "path";
import homeRouter from "./routes/homeRouter";
import forbiddenWordsRouter from "./routes/forbiddenWordsRouter";

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname)));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", homeRouter);
app.use("/check", forbiddenWordsRouter);

app.listen(3000, () => {
  console.log("Server is running");
});
