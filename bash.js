const pwd = require('./pwd');
process.stdout.write('promt > ');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        pwd();
    }
    process.stdout.write('\npromt > ');
});