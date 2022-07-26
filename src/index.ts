#!/usr/bin/env npx 

const program = require('commander');

console.log("=====================MKR-CLIv3=====================")

program
  .version('0.0.1')
  .usage('[options]')
  .option('-n, --name ', 'Your name.')
  .parse(process.argv);
 
if (program.args.length < 1) {
  program.outputHelp();
  process.exit();
}
 
console.log('Hello, %s.', (program.name || 'World'));