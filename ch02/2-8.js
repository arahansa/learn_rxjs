// 서브젝트는 멀티캐스팅을 지원하는데, 여러 옵저버가 이벤트 변경이나 값 전달을 관찰하도록 옵저버블을 구독한 후 실제 이벤트 변경이나 값 전달이 발생했을 때 이를 알린다는 뜻
const { Subject } = require('rxjs');

const subject = new Subject();
subject.subscribe({
    next: function(v) {
        console.log('observerA: ' + v);
    }
});

subject.subscribe({
    next: function(v) {
        console.log('observerB: ' + v);
    }
});

subject.next(1);
subject.next(2);

subject.complete();
subject.next(3); // 전달 안 됨
