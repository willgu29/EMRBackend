import { Router } from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import axios from 'axios'

const router = Router()


/* GET emrs listing. */
router.get('/chats/', function (req, res, next) {
  var io = require('../helpers/io').io();


  io.of('/').clients((error, clients) => {
    if (error) throw error;
    console.log(clients);
  });

  res.json('ffff')
});




export default router
