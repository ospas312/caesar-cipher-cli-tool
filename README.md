# caesar-cipher-cli-tool

The application is used to encrypt and decrypt using the Caesar cipher.
It transform only latin letters.

## how to install

1. Download or clone this repository
2. Change directory
3. Install dependencies.

`npm i` or `npm install`

## how to use

    Command:

`node caesar_cli options`

    Options:

* `-s, --shift`: a shift
* `-i, --input`: an input file
* `-o, --output`: an output file
* `-a, --action`: an action encode/decode

## exaples

* `node caesar_cli --action encode -s 28 -i ./input.txt -o ./output.txt`
* `node caesar_cli -a encode -s 28 -i ./input.txt -o ./output.txt`
* `node caesar_cli -a encode -s 28 -i ./input.txt`
* `node caesar_cli -a encode -s 28 -o ./output.txt`
* `node caesar_cli -a decode -s 28`
* `node caesar_cli -a decode -s -28`
