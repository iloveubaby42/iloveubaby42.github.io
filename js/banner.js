//轮播图方法
/*获取必须知道的变量
* 步骤1 不考虑过渡效果，直接切换
*       定时器中index++
*           判断是否越界
*           修改轮播图ul的位置
* 步骤2 下方的索引li标签 修改外观
*       由于我们是使用.current标示当前的索引值
*       清空所以的li的class
*       为当前的那个li添加current
* 步骤3 切换有动画效果
*       使用css3中的transition
*       .style.transition ='all .3s';
*       在获取的时候进行添加即可
* 步骤4 当切换到最后一张时候瞬间切换到第一张
*       关闭过渡
*       瞬间切换第一张
*
 *  */
// new Promise((resolve,reject)=>{
//     resolve();
//     // reject();
// }).then(()=>{
//     alert('成功')
// },()=>{
//     alert('失败')
// });

function banner(){
    var width = document.body.offsetWidth;

    var moveUL = document.querySelector('.banner_images');

    //添加过渡效果
    moveUL.style.transition = 'all .3s';

    var indexLiArr = document.querySelectorAll('.banner_index li');

    //默认ul已经往左边移动了一倍的宽度，所以index=1
    var index = 1;

    var timeId = setInterval(function () {
        index++;

        if(index>9){
            index = 1;
            moveUL.style.transition = '';
            moveUL.style.transform = 'translateX('+index*width*-1+'px)';

            index++;
            moveUL.style.transition = 'all .3s';
            //关闭过渡

        }

        moveUL.style.transform = 'translateX('+index*width*-1+'px)';

        //修改li标签外观
        for (var i = 0;i < indexLiArr.length;i++){
            indexLiArr[i].className = '';
        }

        //li标签索引从0开始
        //index是从1开始
        var ulIndex;
        if(index>=9){
            ulIndex = 0;
        }else {
            ulIndex = index - 1;
        }
        indexLiArr[ulIndex].className = 'current';

    },1000)
}

function banner_01(){
    var width = document.body.offsetWidth;

    var moveUL = document.querySelector('.banner_images');

    //添加过渡效果
    moveUL.style.transition = 'all .3s';

    var indexLiArr = document.querySelectorAll('.banner_index li');

    //默认ul已经往左边移动了一倍的宽度，所以index=1
    var index = 1;

    var timeId = setInterval(function () {
        index++;

        moveUL.style.transition = 'all .3s';

        moveUL.style.transform = 'translateX('+index*width*-1+'px)';


    },1000);
    moveUL.addEventListener('webkitTransitionEnd',function () {
        if(index>8){
            index=1;

            moveUL.style.transition = '';

            moveUL.style.transform = 'translateX('+index*width*-1+'px)';
        }else if(index<1){
            index=8;
        }
        for(var i =0;i<indexLiArr.length;i++){
            indexLiArr[i].className = '';
        }
        indexLiArr[index-1].className = 'current';
    });

    //注册三个touch事件

    //定义变量记录开始的X
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;

    moveUL.addEventListener('touchstart',function (event) {
        //关闭定时器
        clearInterval(timeId);
        //关闭过渡效果
        moveUL.style.transition = '';
        startX = event.touches[0].clientX;

    });
    moveUL.addEventListener('touchmove',function (event) {
        moveX = event.touches[0].clientX - startX;

        moveUL.style.transform = 'translateX('+(moveX+index*-1*width)+'px)';

    });
    moveUL.addEventListener('touchend',function (event) {
        var maxDistance = width/2;

        if(Math.abs(moveX)>maxDistance){
            if(moveX>0){
                index--;
            }else {
                index++;
            }
            moveUL.style.transition = 'all .3s';

            moveUL.style.transform = 'translateX('+(index*-1*width)+'px)';
        }else {
            moveUL.style.transition = 'all .3s';

            moveUL.style.transform = 'translateX('+(index*-1*width)+'px)';
        }

        timeId = setInterval(function () {
            index++;

            moveUL.style.transition = 'all .3s';

            moveUL.style.transform = 'translateX('+index*width*-1+'px)';


        },1000);

    });



}


