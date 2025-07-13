$(document).ready(function(){





/**************visual 시작************** */
            const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

            // autoplay: {  /* 팝업 자동 실행 */
            //     delay: 2500,
            //     disableOnInteraction: true,
            // },

            //effect: "fade", /* fade 효과 */

            loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

            pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
                el: '.visual .paging', /* 해당 요소의 class명 */
                clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
                // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
                // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                //     return '<span class="' + className + '">' + (index + 1) + "</span>";
                // },
            },
            
        });
/***************tourist 시작**************************/
                // 1. 클릭한 li에서 data-content값을 가져와서
                //    ==>tab_item 중에 해당값이 id인 요소를 찾아서 나타나게 해야함 (다른 요소는 숨김)
                // 2. 클릭한 li에만 active 클래스 줌
                // 3.클릭한 li안에 있는 span에 선택됨이라고 글자 써줌( 다른 li에 있는건 삭제)
                // 4.클릭한 li속성 aria-selected값을 true로 변경 (다른 li는 모두 false)

                let tourist_content //클릭한 메뉴의 이름(id)
                $('.tourist .inner .tap_list ul li').on('click', function(){

                    
                    if($(this).hasClass('active') == false){
                        // console.log('선택안된메뉴...')
                        tourist_content = $(this).attr('data-content')//tab-item1
                        // console.log(find_content)
                        $('.tourist .tab_content .tab_item').removeClass('active')
                        $('.tourist .tab_content').find('#'+tourist_content).addClass('active')
                        
                        $('.tourist .inner .tap_list ul li').removeClass('active')
                        $(this).addClass('active')
                    }
                })


/******************notice시작**************************** */
    const popupzone_swiper = new Swiper('.popupzone .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.notice .ctrl_wrap .count', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (currentClass, totalClass) {   /* paging에 특정 코드 넣기 */
            return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
            },
            formatFractionCurrent: function (number) {
                return number < 10 ? '0' + number : number;  // 현재 슬라이드 숫자에 0 추가
            },
            formatFractionTotal: function (number) {
                return number < 10 ? '0' + number : number;  // 총 슬라이드 숫자에 0 추가
            },
        },


        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.popupzone .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.popupzone .btn_prev',  
        },

        });
})