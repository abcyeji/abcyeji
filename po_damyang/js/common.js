/* Header, footer 공통요소에 들어가는 javacript / jquery */
/*****************
 * pc버전 모바일 버전 구분
 * 스크롤 값 계산
 * 
 * 
 * 스크롤을 내리면 header에 fixed 클래스 주기
 * 메뉴에 마우스를 올리면 header에 menu_over  클래스 추가
 * 메뉴를 오버한 li에 over 클래스 추가
 * 
 * 스크롤을 내릴때는 gnb_up클래스 추가
 * 스크롤을 올릴때는 ganb_up 클래스 삭제
 * =====> 이전에 스크롤값과 현재 스크롤 값을 비교해서 
 *        현재 값이 더 크면 내려가는중 ( 100 --> 200)
 *        현재 값이 작으면 올라가는 중 ( 200 --> 100)
 * ****************************/

let device_status //pc인지 모바일 구분하는 값
let scrolling //브라우저가 스크롤 된 값
let scroll_prev //이전에 스크롤 된 값
let window_w //브라우저의 넓이 값
let mobile_size = 1024 //모바일로 변경되는 사이즈
let menu_open //모바일에서 사용할 메뉴가 열렸는지 여부

$(window).scroll(function(){ //브라우저가 스크롤 될때마다 1번 실행
    // console.log('브라우저가 스크롤 된다!!!!!!!!')
    scroll_chk()
})
$(window).resize(function(){ //브라우저가 리사이즈 될때마다 1번 실행
    // console.log('브라우저 크기 변한다????')
    resize_chk() //함수의 실행
})

$(document).ready(function(){ // 문서가 로딩되고 단 1번 실행
    
    
    /*#####################TOP버튼을 클릭하면 상단으로 스크롤#########################*/
    $('footer .top').on('click', function(){
        // console.log('top버튼 눌렀다!!!!!!!!!!!')
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })


    // console.log('로딩됐다~~~~')
    resize_chk() //함수의 실행
    scroll_chk()

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
             // console.log('오버했다!!!!!!!!')
             $('header').addClass('menu_over')
             $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
             $(this).addClass('over')
        }//if
    })//메뉴오버종료
    $('header').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })



    /***********************모바일 메뉴 열고 닫기******************************** */
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })


    /***********************모바일 2차메뉴 열고 닫기********************************
     * 지금현재 메뉴가 열려있는지 닫혀있는지 구분 (li에 open클래스 있는지 유무)
     * 메뉴가 열려있으면 - li에 open클래스 삭제 , 2차 메뉴 접기
     * 메뉴가 닫혀있으면 - li에 open 클래스 추가 , 2차 메뉴 열기
     */
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            // console.log('눌린다!!!!!!!!!!!')
            e.preventDefault()
            menu_open = $(this).parents('li').hasClass('open')
            // console.log(menu_open)
            if(menu_open == true){//메뉴가 열려있으면
                $(this).parents('li').removeClass('open')
                $(this).next().slideUp()
            }else{ //닫혀있으면
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
            }
        }
            
    })

})

//함수의ㅡ 선언
function resize_chk(){
    window_w = $(window).width()
    // console.log(window_w)
    if(window_w > mobile_size){ //1024보다 크면
        device_status = 'pc'
    }else{  //같거나 작으면
        device_status = 'mobile'
    }
    // console.log(device_status)
}

function scroll_chk(){
    scroll_prev = scrolling //스크롤값을 다시 계산하기 전에 이전값을 prev에 저장
    scrolling = $(window).scrollTop()
    // console.log(scroll_prev, scrolling)
    if(scrolling > 0){ //조금이라도 스크롤 됐으면
        $('header').addClass('fixed')
        if(scrolling > scroll_prev){
            // console.log('내려가는중!!!!!')
            $('header').addClass('gnb_up')
        }else{
            // console.log('올라가는중!!!!!')
            $('header').removeClass('gnb_up')
        }
    }else{ //0일때
        $('header').removeClass('fixed')
    }
}




/***************rest js 수정전꺼************************ */
const rest_swiper = new Swiper('.rest .swiper', { /* 팝업을 감싼는 요소의 class명 */

    // autoplay: {  /* 팝업 자동 실행 */
    //     delay: 2500,
    //     disableOnInteraction: true,
    // },

    effect: "fade", /* fade 효과 */

    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
        el: '.rest .paging', /* 해당 요소의 class명 */
        clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
            // return '<span class="' + className + '">' + (index + 1) + "</span>";
        // },
    },


    navigation: {  /* 이전, 다음 버튼 */
        nextEl: '.rest_swiper-button-next',  /* 다음 버튼의 클래스명 */
        prevEl: '.rest_swiper-button-prev',  
    },

    });
    // rest_swiper.autoplay.stop();  /* 일시정지 기능 */
    // rest_swiper.autoplay.start();  /* 재생 기능 */


    /***************resort_add js***************** */
    const resort_add_swiper = new Swiper('.resort_add .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.resort_add .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            // },
        },


        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.resort_add .swiper-button-next',  /* 다음 버튼의 클래스명 */
            prevEl: '.resort_add .swiper-button-prev',  
        },

        });
        // resort_add_swiper.autoplay.stop();  /* 일시정지 기능 */
        // resort_add_swiper.autoplay.start();  /* 재생 기능 */