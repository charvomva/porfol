new fullpage('#fullpage', {
    
    autoScrolling:true,
    scrollHorizontally: true,
    scrollBar:true,
    sectionsColor: ['#fff', '#EBE7E4', '#FFC19E', '#BCE55C','#5CD1E5'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['GAH소개','제다큐어','연구개발','본사위치','연구소위치'], 
    easing: 'easeInOutCubic',
    anchors: ['1st', 'second', '3rd', '4th', '5th'],
    menu: '.gnb_list',
    normalScrollElements: '#2', // 오토스크롤링X 정상 스크롤 작동
    responsiveHeight:450, //세로 높이 가 특정 수치보다 작아지면 오토스크롤링 작동 X
});

/* 햄버거 버튼 클릭*/
$('.btn_total').click(function(){
    $('.total_menu_z').addClass('active');
});

//메뉴 팝업 닫기 버튼

$('.btn_totalClose').click(function(){
    $('.total_menu_z').removeClass('acrive')

});



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
document.querySelector('.nextA').addEventListener('click',function(e){
    e.preventDefault();
    fullpage_api.moveSectionDown();
});

document.querySelector('.prevA').addEventListener('click',function(e){
    e.preventDefault();
    fullpage_api.moveSectionUp();
});
