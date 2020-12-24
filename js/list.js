window.onload = function () {
    left_scroll();
};

function $(sel) {
    return document.querySelector(sel);
}

function left_scroll() {
    // var moveUl = document.querySelector(".main_left ul");
    var moveUl = $(".main_left ul");

    // var parentHeight = document.querySelector('.main_left').offsetHeight;
    var parentHeight = $('.main_left').offsetHeight;

    var ulHeight = moveUl.offsetHeight;

    var headerHeight = $('.header').offsetHeight;

    var minDistance = parentHeight - ulHeight - headerHeight;

    var maxDistance = 0;

    // var headerHeight = document.querySelector('header').offsetHeight;

    var startY = 0;
    var moveY = 0;
    var distanceY = 0;

    var startTransition = function () {
        moveUl.style.transition = 'all .5s';
    };
    var endTransition = function () {
        moveUl.style.transition = '';
    };
    var setTransform = function (distance) {
        moveUl.style.transform = 'translateY('+distance+'px)';
    };

    var delayDistance = 100;

    moveUl.addEventListener('touchstart',function (event) {
        startY = event.touches[0].clientY;
    });
    moveUl.addEventListener('touchmove',function (event) {
        moveY = event.touches[0].clientY - startY;

        if((moveY+distanceY)>(maxDistance+delayDistance)){
            moveY = 0;
            distanceY = maxDistance+delayDistance;
        }else if ((moveY+distanceY)<(minDistance-delayDistance)){
            moveY = 0;
            distanceY = minDistance-delayDistance;
        }

        // moveUl.style.transition = '';
        endTransition();
        // moveUl.style.transform = 'translateY('+(moveY+distanceY)+'px)';
        setTransform(moveY+distanceY);
    });
    moveUl.addEventListener('touchend',function (event) {
        distanceY+=moveY;

        if(distanceY>maxDistance){
            distanceY = maxDistance;
        }else if(distanceY<minDistance){
            distanceY = minDistance;
        }

        // moveUl.style.transition = 'all .5s';
        startTransition();
        // moveUl.style.transform = 'translateY('+(distanceY)+'px)';
        setTransform(distanceY);

    });

    var liHeight = $('.main_left ul li').offsetHeight;
    var liArr = document.querySelectorAll(".main_left ul li");
    for (var i=0;i<liArr.length;i++){
        liArr[i].dataset['index'] = i;
    }


    fox_tap(moveUl,function (e) {
        for (var i =0;i<liArr.length;i++){
            liArr[i].className = '';
        }
        e.target.parentNode.className = 'current';

        var currentIndex = e.target.parentNode.dataset['index'];

        var moveDistancec = currentIndex*liHeight*-1;

        if(moveDistancec>maxDistance){
            moveDistancec = maxDistance;
        }else if(moveDistancec<minDistance){
            moveDistancec = minDistance;
        }

        startTransition();
        setTransform(moveDistancec);


    })




}