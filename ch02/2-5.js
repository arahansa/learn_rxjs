const { Observable } = require('rxjs');
const observableCreated$ = Observable.create(function subscribe(observer) {
    // intervalID 자원 추적
    let i = 0;
    const intervalID = setInterval(function() {
        observer.next('hi : ' + i++);
    }, 1000);

    // intervalID 자원을 해제하고 재배치하는 방법을 제공
    return function unsubscribe() {
        clearInterval(intervalID);
    };
});


let i =0;
console.log('observableCreated$ : ', observableCreated$)

/*
observableCreated$.subscribe(
    function next(item) {
        console.log(item);
        if(item.endsWith("10")){
            console.log('종료')

        }
    },
    function error(e) {},
    function complete() { console.log('complete');}
)
*/
