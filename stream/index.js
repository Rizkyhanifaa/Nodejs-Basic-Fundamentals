/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');

// READABLE STREAM
const readableStream = fs.createReadStream('./stream/input.txt', {
    highWaterMark: 15,
    encoding: 'utf8'
});

// WRITABLE STREAM
const writableStream = fs.createWriteStream('./stream/output.txt');
 
readableStream.on('readable', () => {
    let chunk;
    while ((chunk = readableStream.read()) !== null) {
        writableStream.write(`${chunk}\n`);
    }
});
 
readableStream.on('end', () => {
    console.log('Done menyalin ke output.txt');
});


 
