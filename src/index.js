"use strict";

const Logger = require("./struct/logger.js");

function Raistrom(options = {}) {
	return new Logger(options);
}

Raistrom.Raistrom = Raistrom;
Raistrom.Logger = Logger;

module.exports = Raistrom;