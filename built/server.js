"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var ServerConfig_1 = require("./config/ServerConfig");
var DBManager = require("./utils/firebaseManager");
var DBlistener = require("./helpers/DbListener");
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.server.listen(ServerConfig_1.config.port, function () {
            console.log("Server running on port " + ServerConfig_1.config.port);
        });
        DBlistener.listener(DBManager.collectionRef);
    }
    Server.bootstrap = function () {
        return new Server();
    };
    Server.prototype.close = function () {
        this.server.close();
    };
    return Server;
}());
exports.Server = Server;
var server = new Server();
