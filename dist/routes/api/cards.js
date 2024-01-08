"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
var express_1 = require("express");
var router = (0, express_1.Router)();
var ctrl = require("../../controllers").cards;
var ctrlWrapper = require("../../helpers/ctrlWrapper");
router.get("/", ctrlWrapper(ctrl.getAll));
module.exports = router;
