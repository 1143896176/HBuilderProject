$(function() {
				positionInit();
				
                 /*数字滚动*/
				var index = 0
				function numberback(){
					$(".number li").eq(index).css({
							display: "block",
						}).siblings().css({
							display: "none"
						})
						index++;
						if(index >= 5) {
							index = 0;
						}
				}
				var num = setInterval(function() {
						 numberback()
					}, 100)
					/*图片初始化定位*/
				function positionInit() {

					var win_w = $(window).width();
					var win_h = $(window).height();

					var peo_w = $(".people").width();
					var red_w = $(".redbag").width();

					var peo_left = (win_w- peo_w) / 2;
					var red_left = (win_w - red_w) / 2;
/*
					$(".warp .center .people").css({
						left: peo_left + "px",
						top: win_h * 0.345 + "px"
					});
					$(".warp .center .redbag").css({
						left: red_left + "px",
						top: win_h * 0.4 + "px"
					});*/
					$(".warp .center .taijie").css({
						top: win_h * 0.7 + "px"
					});
				}
				/*窗口大小改变重新定位*/
				$(window).resize(function() {
					positionInit();
					mo();
				});
				/*蒙板跳出*/
				mo();
				function mo(){
					var win_w = $(window).width();
					var win_h = $(window).height();
					
					var  end_w=$(".end-img").width();
					var  end_h=$(".end-img").height();
					
					var  input_w=$(".name").width();
					
					var  left=(win_w-end_w)/2;
					var  top=(win_h-end_h)/2;
					
					var left_input=(end_w-input_w)/2;
					var top_input=end_h*0.5;
						$(".name").css({
						left:left_input+"px",
						top:top+"px"
					});
					$(".tele").css({
						left:left_input+"px",
						top:top+28+"px"
					});
					
				}
				function ends(){
					$(".end").css({
				        position:"absolut",
				        top:"0px",
						display: "block",
					});
					$(".center").css({
						display:"none",
					});
				}
				function starts(){
					 $(".end").css({						
				    	display:"none",
					});
					$(".center").css({
						display: "block",
					});
				}
				
					var end=setInterval(function() {
					clearInterval(num);
                    mo();
					ends();
					
				}, 3000);
				var reStart=setInterval(function(){
					var num = setInterval(function() {
						 numberback();
					}, 100)
					positionInit();
				    mo();
				   starts();
				},6000)
				
				

			});