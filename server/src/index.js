import Express from "express";
import cors from "cors";
import path from "path";
import http from "http";
import https from "https";
import bodyParser from "body-parser";

global.__root = __dirname;

const app = Express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(Express.static(path.join(__dirname, "./../../build")));

app.get("*", (_, res) => res.sendFile(path.join(__dirname, "./../../build/index.html")));

const _http = http.createServer(app);
// const _https = https.createServer(credentials, app);

_http.listen(80, () => console.log("http server running on port:80"));