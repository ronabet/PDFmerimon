"use strict";
exports.__esModule = true;
var express = require("express");
var http = require("http");
var config_1 = require("./config/config");
var DBlistener = require("./helpers/DbListener");
// import * as dotenv from 'dotenv';
// dotenv.config({ path: "\src\.env"});
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.server = http.createServer(this.app);
        this.server.listen(config_1.config.port, function () {
            console.log("Server running on port " + config_1.config.port);
        });
        DBlistener.listener();
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
