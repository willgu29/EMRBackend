import express from 'express'
import { Nuxt, Builder } from 'nuxt'

import api from './api'
import mongoose from 'mongoose'


const app = express()


const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

//For Development if needed to prettify JSON
//app.set('json spaces', 2);
app.set('port', port)

// Import API Routes
app.use('/api', api)



// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.use(nuxt.render)

//Set up Database
if (config.dev) {
  const url = 'mongodb://' + config.env.dbUserTest + ":" + config.env.dbPasswordTest + "@ds121014.mlab.com:21014/emrtest"
  mongoose.connect(url)
} else {
  const url = 'mongodb://' + config.env.dbUser + ":" + config.env.dbPassword + "@ds161713.mlab.com:61713/emrworx"
  mongoose.connect(url)
}



//
// var server = require('http').Server(app);
// var io = require('./helpers/io').initialize(server);

// Listen the server
app.listen(port, host)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
