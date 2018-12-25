const { interval } = require('rxjs');
const { filter } = require('rxjs/operators');
let divisor = 2;
setInterval(function() {
    divisor = (divisor + 1) % 10;
}, 500);

interval(1000).pipe(
    filter(function(value) {
        console.log('value: ', value, ', divisor : ',divisor, ', result : ', value % divisor == 0)
        return value % divisor == 0;
    })
).subscribe((value) => console.log('result:'+value));
