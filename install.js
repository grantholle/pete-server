const homedir = require('os').homedir()
const  mkdirp = require('mkdirp')
const p = require('path')
const dirPath = p.join(homedir, `.config`, `pete`)

mkdirp(dirPath)
