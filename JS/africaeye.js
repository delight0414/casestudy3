$(function(){
    const mainSwiper = new Swiper(".mainSwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        spaceBetween: 30,
        pagination: {
        el: "#main_slider .swiper-pagination",
        clickable:true
    }
    }); 
    const subSwiper = new Swiper(".subSwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
        el: "#sub_slider .swiper-pagination",
        },
        on: {
            slideChange:function(){
                let idx=this.realIndex; 
                $(".new_open .controller ul li").removeClass("active");
                $(".new_open .controller ul li").eq(idx).addClass("active");       
            }
        }
    });
    $("#gnb").hover(function(){
        $("#header").addClass("active");
    },
    function(){
        $("#header").removeClass("active");
}
    );
    $(".controller ul li").click(function(e){
        e.preventDefault();
        let idx=$(this).index();
        subSwiper.slideTo(idx,300);
        $(".controller ul li").removeClass("active");
        $(this).addClass("active");
    });
    $("#gnb > ul > li > a").focusin(function(){
        $("#header").addClass("active");
        $(this).parent().addClass("on");
    });
    $("#gnb li ul li:last-child").focusout(function(){
        $(this).parent().parent().removeClass("on");
        $("#header").removeClass("active");
    });
    $("#gnb > ul > li > a").focusout(function(){
    if($(this).next().length === 0){
        $(this).parent().removeClass("on");
    }
    });

    //
    $("#city > a").click(function(e){
        e.preventDefault();
        if($("#city").hasClass("active") == false){
            $("#city").addClass("active");

			if($("#branch").hasClass("active") == true){
				$("#branch").removeClass("active");
			}
        }
        else{
            $("#city").removeClass("active");
        }
    });

    $("#city ul li a").click(function(e){
        e.preventDefault();
        if($("#city").hasClass("active") == true){
            $("#city").removeClass("active");
        }

		let string=$(this).text();
		console.log(string);

		// client rendering
		$("#city > a").text(string);
    });
    $("#branch > a").click(function(e){
        e.preventDefault();
        if($("#branch").hasClass("active") == false){
            $("#branch").addClass("active");

			if($("#city").hasClass("active") == true){
				$("#city").removeClass("active");
			}
        }
        else{
            $("#branch").removeClass("active");
        }
    });
    $("#branch ul li a").click(function(e){
        e.preventDefault();
        if($("#branch").hasClass("active") == true){
            $("#branch").removeClass("active");
        }
	});
    const ftSwiper = new Swiper(".ftSwiper", {
		slidesPerView: 7,
		loopedSlides: 3,
		speed: 300,
		loop: true
	});

	$("a.prev").click(function(e){
		e.preventDefault();
		ftSwiper.slidePrev();
	});

	$("a.next").click(function(e){
		e.preventDefault();
		ftSwiper.slideNext();
	});
}); 