// const express = require("express");
import { Router } from "express";

const router = Router();


const { cards: ctrl } = require("../../controllers");
const  ctrlWrapper  = require("../../helpers/ctrlWrapper");


router.get("/",  ctrlWrapper(ctrl.getAll));
router.get("/:id", ctrlWrapper(ctrl.getOne));

module.exports =  router;
