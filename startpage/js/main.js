$(document).ready(function(){


		const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

			navigation: false, /* 오른쪽에 각 페이지의 paging */
			navigationPosition: 'left', /* 위치 */
			navigationTooltips: ['home', 'proflie', 'project1', 'project2'], /* 툴팁 */
			showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */
			
			lockAnchors: false,
			anchors: ['home', 'proflie', 'project1', 'project2'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

			autoScrolling:true, /* 한페이지씩 스크롤 */
			scrollHorizontally: true,

			verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
			
			scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 금지 */

			afterLoad: function(origin, destination, direction, trigger){
				$('header .gnb ul li').removeClass('active')
				$('header .gnb ul li').eq(destination.index).addClass('active')
			},

			responsiveWidth: 640 /* fullpage를 적용시키지 않을 모바일 사이즈 */
		});
		
/*************************************** */
		// const snbScroll = function() {
		// 	const $menu_wrap = $("header .gnb ul");  /* 선택자를 잘 입력해야함 */
		// 	const $menu_li = $("header .gnb ul li");  
		// 	function scrollToElement($element) {
		// 		const containerWidth = $menu_wrap.width();
		// 		const itemWidth = $element.outerWidth(true);
		// 		const totalItemsWidth = $menu_wrap[0].scrollWidth;
		// 		const newScrollPosition = ($element.index() === 0) ? 0 :
		// 			($element.index() === $menu_li.length - 1) ? totalItemsWidth - containerWidth :
		// 			$element.position().left + $menu_wrap.scrollLeft() - (containerWidth - itemWidth) / 2;
		// 		$menu_wrap.animate({
		// 			scrollLeft: newScrollPosition
		// 		}, 500);
		// 	}
		// 	const $activeItem = $menu_wrap.find(".active");
		// 	if ($activeItem.length) {
		// 		scrollToElement($activeItem);
		// 	}
		// } 
		// snbScroll();   /* 함수의 실행 */





	
})