"use strict";

module.exports = core;

const pkg = require("../package.json");
const log = require("@create-toimc-app/log");

function core() {
  console.log("exec core");
  checkPkgVersion();
}

function checkPkgVersion() {
  console.log(pkg.version);
  log();
}
