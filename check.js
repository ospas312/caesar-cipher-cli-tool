const fs = require('fs');

function validateFile(file, arg){
    if (fs.existsSync(file)) {
        try {
            if (arg === 'input'){
                fs.accessSync(file, fs.constants.R_OK)
            } else if (arg === 'output'){
                fs.accessSync(file, fs.constants.W_OK)
            }
        } catch (err){
            console.error(arg === 'input' ? `"${file}" is not readable` : `"${file}" is read-only`);
            return true;
        }
    } else {
        console.error(`${file} does not exists`)
        return true
    }
    return false
}

function checkArguments(shift, input, output, action, valid){

    if (action !== 'encode' && action !== 'decode') {
        console.error('"action" must be "encode" or "decode"');
        valid('"action" only "encode" or "decode"');
    }
    if (action === undefined) {
        console.error('"action" is required option');
        valid('"action" is required option');
    }
    if (shift === undefined) {
        console.error('"shift" is required option');
        valid('"shift" is required option');
    }
    if (!Number.isInteger(+shift)) {
        console.error('"shift" only an integer');
        valid('"shift" only an integer');
    }
    if (input && validateFile(input, 'input')){
        valid('file cannot be read or does not exist ')
    }
    if (output && validateFile(output, 'output')){
        valid('file cannot be read or does not exist ')
    }

};

module.exports = checkArguments;