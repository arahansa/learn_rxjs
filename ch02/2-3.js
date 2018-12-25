const { Observable } = require('rxjs');
const observableCreated$ = Observable.create(function(observer) {
    console.log('===BEGIN Observable');
    observer.next(1);
    observer.next(2);
    observer.complete();
    console.log('===END Observable');
});

// 옵저버블 객체에서 subscribe 함수를 호출하면 옵저버블이 옵저버의 complete나 error 함수를 호출할 때까지 next 함수로 값을 발행

observableCreated$.subscribe(
    function next(item) {console.log(item);},
    function error(e) {},
    function complete() { console.log('complete');}
);


