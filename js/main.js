new fullpage('#fullpage', {
    
    autoScrolling:true,
    scrollHorizontally: true,
    scrollBar:true,
    sectionsColor: ['#fff', '#000000', '#FFC19E', '#BCE55C',''],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['사이트1','사이트2','사이트3','사이트5','기타 등등'], 
    easing: 'easeInOutCubic',
    anchors: ['1st', 'second', '3rd', '4th', '5th'],
    menu: '.gnb_list',
    normalScrollElements: '#2', // 오토스크롤링X 정상 스크롤 작동
    responsiveHeight:450, //세로 높이 가 특정 수치보다 작아지면 오토스크롤링 작동 X
});

const sideMenu = document.querySelector(".sideMenu")

function showSide (){
    side.style.display="block"
}

sideMenu.addEventListener("click",showSide)

const sideOff = document.querySelector("#sideOff")
const side = document.querySelector(".side")

function sideOffplz(){
    side.style.display ="none"
}

sideOff.addEventListener("click",sideOffplz)


var myScroll = new IScroll('.total_menu', {
    mouseWheel: true,
    //scrollbars: true
});

$('.totalMitem').click(function(){

    if( $(this).hasCalss('active')){
        $(this).removeClass('active')
    } else{
        $('.totalMitem').removeClass('active')
        $(this).addClass('active');
    }

});

// 섹션이동 버튼
document.querySelector('.prevA').addEventListener('click',function(e){
    e.preventDefault();
    fullpage_api.moveSectionUp();
});

document.querySelector('.nextA').addEventListener('click',function(e){
    e.preventDefault();
    fullpage_api.moveSectionDown();
});


