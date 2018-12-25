const { interval } = require('rxjs');
const observable1 = interval(1000);
const observable2 = interval(2000);

const subscription = observable1.subscribe(function(x) {
    console.log('first: ' + (Number(x)+1));
});
const childSubscription = observable2.subscribe(function(x) {
    console.log('second: ' + (Number(x)*2));
});

subscription.add(childSubscription);

setTimeout(function() {
    // Subscription 객체와 하위에 있는 자식 Subscription 객체의 구독을 취소
    subscription.unsubscribe();
}, 5000);
