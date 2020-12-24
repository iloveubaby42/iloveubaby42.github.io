//加载完毕事件
window.onload = function () {

    //顶部通栏滚动效果
    headerScroll();

    //倒计时
    cutDownTime();

    //轮播图
    banner_01();


    //顶部通栏滚动方法
    /*获取导航栏的高度
      在overcroll事件中去修改颜色
            0-1的透明度
            获取到滚动的距离
            滚动的距离/导航栏 0-1的浮点数
            滚动的距离大于导航栏>1 如果透明度>1变为1
            通过JS修改顶部通栏的透明度即可
                为了保证子元素能够正常显示，使用rgba()改变透明度
    * */
    function headerScroll(){
        //距离顶部的高度
        // console.log('offsetTop'+document.querySelector('.jd_nav').offsetTop);
        //元素自身的高度
        // console.log('offsetHeight'+document.querySelector('.jd_nav').offsetHeight);

        var navDom = document.querySelector('.jd_nav');
        var maxDistance = navDom.offsetTop + navDom.offsetHeight;

        var headerDom = document.querySelector('.jd_header');

        window.onscroll = function () {
            // var scrollDistance = window.document.body.scrollTop;
            var scrollDistance = document.documentElement.scrollTop;

            var percent = scrollDistance/maxDistance;
            if(percent>1){
                percent=1;
            }
            headerDom.style.backgroundColor = 'rgba(201,21,35,'+percent+')';
        }
    }

    //倒计时方法
    /* 定义一个倒计时的总时间
    * 获取想要修改的li标签
    * 开启定时器
    *      判断是否时间没有了
    *      递减时间
    *      修改对应标签的显示
    * */
    function cutDownTime(){
        var totalHour = 3;

        var totalSec = 3*60*60;

        //获取想要修改的li标签
        var liArr = document.querySelectorAll('.main_content:nth-child(1) .content_top li');

        var timeId = setInterval(function () {
            //判断是否小于0
            if(totalSec<=0){
                clearInterval(timeId);
                console.log('秒杀结束！')
            }

            //递减
            totalSec--;

            //当前的秒对应到多少小时，多少分钟
            var hour = Math.floor(totalSec/3600);
            var minute = Math.floor(totalSec % 3600 / 60);
            var sec = totalSec % 60;

            liArr[0].innerHTML = Math.floor(hour/10);
            liArr[1].innerHTML = hour%10;

            liArr[3].innerHTML = Math.floor(minute/10);
            liArr[4].innerHTML = minute%10;

            liArr[6].innerHTML = Math.floor(sec/10);
            liArr[7].innerHTML = sec%10;
        },1000)
    }






};