#!/usr/bin/env node

const program = require('commander')
const p = require('path')
const spawn = require('child_process').spawn
const package = p.join(__dirname, 'package.json')
const version = require(package).version
const options = { stdio: `inherit`}
const args = [
  `run`,
  `--prefix`,
  __dirname
]

program.version(version)

program
  .command('start')
  .description('Starts the webserver that powers Pete')
  .action(() => spawn(`npm`, args.concat([`start`]), options))

program
  .command('stop')
  .description('Stops the webserver that powers Pete')
  .action(() => spawn(`npm`, args.concat([`stop`]), options))

program
  .command('logs')
  .description('Tails the logs from pm2')
  .action(() => spawn(`npm`, args.concat([`logs`, `--lines`, `1000`]), options))

program.parse(process.argv)
