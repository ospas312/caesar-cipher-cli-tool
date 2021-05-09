const program = require('commander');
const fs = require('fs');
const { Transform, pipeline } = require('stream');
const { description, version } = require('./package.json');
const checkArguments = require('./check.js');
const { encode, decode } = require('./cipher.js');


program
  .description(description)
  .version(version, '-v, - version')
  .option('-s, --shift <number>', 'a shift', '0')
  .option('-i, --input <file>', 'an input file')
  .option('-o, --output <file>', 'an output file')
  .option('-a, --action <action>', 'an action encode/decode')
  .parse(process.argv)

const { shift, input, output, action } = program.opts();

const valid = (text) =>{
  process.stderr.write(text)
  process.exit(-1);
}

checkArguments(shift, input, output, action, valid)

const ts = new Transform({
  transform(chunk, _, cb) {
    const num = Number.parseInt(shift, 10)
    const text = (action === 'encode' && num >= 0 || action === 'decode' && num < 0) ?
      encode(chunk,  Math.abs(num)) :
      decode(chunk,  Math.abs(num));
    cb(null, text.toString());
  }
});

pipeline(
  input ? fs.createReadStream(input) : process.stdin,
  ts,
  output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout,
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
      process.stderr.write('Pipeline failed.', err);
      process.exit(-1);
    }
  }
);
