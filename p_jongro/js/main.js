$(document).ready(function(){

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