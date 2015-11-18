var getFortune = require('./library/fortune').display;

// getFortune()

var times = process.argv[2];

for (var i = 0; i < times; i++) {
    console.log(getFortune());
}