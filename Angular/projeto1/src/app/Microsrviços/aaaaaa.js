const got = require('got')
var fs = require('fs')
const jsdom = require("jsdom");
const { url } = require('inspector')
const scrape = require('website-scraper')
const PuppeteerPlugin = require('website-scraper-puppeteer')
const path = require('path')
const { PassThrough } = require('stream')
const express = require('express')
const axios = require('axios')

require('dotenv').config()
const app = express()
app.use(express.json())
const { JSDOM } = jsdom;




fs.mkdirSync(path.join(__dirname, Nome_Dir));