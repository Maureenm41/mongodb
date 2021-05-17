const mongoose = require("mongoose")

require('dotenv').config()

const MONGO_USER = process.env.MONGO_USER;
const MONGO_PW = process.env.MONGO_PW;
const MONGO_DB = process.env.MONGO_DB;