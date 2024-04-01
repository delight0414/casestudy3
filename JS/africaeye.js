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
	const data={
		city: ["서울", "경기/강원", "대전/충청", "대구/경북", "광주/전라", "부산/경남"],
		branch: [
			{
				location: "서울",
				center: ["롯데월드몰 잠실점", "더현대서울점", "신용산점",	"이마트 월계점", "김포공항점", "동대문두타점", "현대시티몰 가든파이브점", "홍대점", "서울스퀘어점", "건대스타시티점"]
			},
			{
				location: "경기/강원",
				center: ["스타필드 고양점", "롯데아울렛 이천점", "롯데몰 수지점", "동탄레이크꼬모점", "롯데몰 수원점", "현대프리미엄아울렛 김포점", "현대백화점킨텍스점"]
			},
			{
				location:"대전/충청",
				center: ["NC대전 유성점"]
			},
			{
				location: "대구/경북",
				center: ["롯데아울렛 이시아폴리스점", "동아백화점 쇼핑점", "롯데백화점 대구점", "롯데대구점"]
			},
			{
				location: "광주/전라",
				center: ["에코시티점", "롯데몰 군산점", "롯데아울렛 광주수완점", "NC백화점 순천점"]
			},
			{
				location:"부산/경남",
				center: ["신세계백화점 센텀시티점", "서면NC점", "롯데백화점 센텀시티점", "롯데백화점 동래점", "부산NC 해운대점", "와이즈파크 광복점"]
			}
		]
	};

	let city=data.city;
	let cityDOM="";
	let branchDOM="";

	for(let i=0; i<city.length; i++){
		cityDOM+=`<li><a href="">${city[i]}</a></li>`;
	}

	$("#city ul").html(cityDOM);

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

		let n=$(this).parent().index();
		let title=$(this).text();
		let subTitle=data.branch[n].location;

		$("#city > a").text(title);
		$("#branch > a").text(subTitle+" 센터");

		let locationDOM="";
		
		for(let i=0; i<data.branch[n].center.length; i++){
			locationDOM+=`<li><a href="">${data.branch[n].center[i]}</a></li>`;
		}

		$("#branch > ul").html(locationDOM);
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
}); 