$(function(){
	var pageNum=0;
	var showTime=1.5;
	var allContorller = {};
	var page0Contorller = {};
	var page1Contorller={};
	var page2Contorller={};
	var page3Contorller={};
	var page4Contorller={};
	var contorllerArr=[page0Contorller,page1Contorller,page2Contorller,page4Contorller];
	page0Contorller.dom = {
		part0_0:$(".page0 .part0_0"),
		part0_1:$(".page0 .part0_1"),
		part0_2:$(".page0 .part0_2"),
		part0_3:$(".page0 .part0_3"),
		part0_4:$(".page0 .part0_4"),
		part0_5:$(".page0 .part0_5")
	}
	page0Contorller.show = function(){
		TweenLite.to(page0Contorller.dom.part0_0, showTime, {top: 0,ease: Power2.easeInOut});
		TweenLite.to(page0Contorller.dom.part0_1, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page0Contorller.dom.part0_2, showTime, {right: 0,ease: Power2.easeInOut});
		TweenLite.to(page0Contorller.dom.part0_3, showTime, {bottom: 0,ease: Power2.easeInOut});
		TweenLite.to(page0Contorller.dom.part0_4, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page0Contorller.dom.part0_5, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		page0Contorller.animate();
	}
	page0Contorller.hide = function(){
		TweenLite.to(page0Contorller.dom.part0_0, showTime, {top: "-500px",ease: Power2.easeInOut});
		TweenLite.to(page0Contorller.dom.part0_1, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page0Contorller.dom.part0_2, showTime, {right: "-500px",ease: Power2.easeInOut});
		TweenLite.to(page0Contorller.dom.part0_3, showTime, {bottom: "-1000px",ease: Power2.easeInOut});
		TweenLite.to(page0Contorller.dom.part0_4, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page0Contorller.dom.part0_5, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
	}
	page0Contorller.animate = function(){
		TweenMax.to(page0Contorller.dom.part0_4, 2, {top:"500px",left:"-300px",repeat:-1,repeatDelay:1.5});
		TweenMax.to(page0Contorller.dom.part0_5, 2.5, {top:"1080px",left:"300px",repeat:-1,repeatDelay:2});
		TweenMax.to(page0Contorller.dom.part0_1, 2, {autoAlpha:1,yoyo:true,repeat:-1});
		TweenMax.to(page0Contorller.dom.part0_2, 1.5, {autoAlpha:0.2,yoyo:true,repeat:-1});
	}
	
	page1Contorller.dom = {
		part1_0:$(".page1 .part1_0"),
		part1_1:$(".page1 .part1_1"),
		part1_2:$(".page1 .part1_2"),
		part1_3:$(".page1 .part1_3"),
		part1_4:$(".page1 .part1_4")
	}
	page1Contorller.show = function(){
		TweenLite.to(page1Contorller.dom.part1_0, showTime, {top: "-180px",ease: Power2.easeInOut});
		TweenLite.to(page1Contorller.dom.part1_1, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page1Contorller.dom.part1_2, showTime, {left: "5%",ease: Power2.easeInOut});
		TweenLite.to(page1Contorller.dom.part1_3, showTime, {bottom: "-180px",ease: Power2.easeInOut});
		TweenLite.to(page1Contorller.dom.part1_4, showTime, {bottom: "0",ease: Power2.easeInOut});
	}
	page1Contorller.hide = function(){
		TweenLite.to(page1Contorller.dom.part1_0, showTime, {top: "-300px",ease: Power2.easeInOut});
		TweenLite.to(page1Contorller.dom.part1_1, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page1Contorller.dom.part1_2, showTime, {left: "-100%",ease: Power2.easeInOut});
		TweenLite.to(page1Contorller.dom.part1_3, showTime, {bottom: "-300px",ease: Power2.easeInOut});
		TweenLite.to(page1Contorller.dom.part1_4, showTime, {bottom: "-500px",ease: Power2.easeInOut});
	}
	page1Contorller.animate = function(){
		TweenMax.to(page1Contorller.dom.part1_0, 10, {left:"-50%",repeat:-1,yoyo:true});
		TweenMax.to(page1Contorller.dom.part1_3, 10, {left:"0%",repeat:-1,yoyo:true});
		TweenMax.to(page1Contorller.dom.part1_1.find(".yun1"), 40, {left:"110%",repeat:-1});
		TweenMax.to(page1Contorller.dom.part1_1.find(".yun2"), 30, {left:"110%",repeat:-1});
	}
	
	page2Contorller.dom = {
		part2_0:$(".page2 .part2_0"),
		part2_1:$(".page2 .part2_1"),
		part2_2:$(".page2 .part2_2"),
		part2_3:$(".page2 .part2_3")
	}
	page2Contorller.show = function(){
		TweenLite.to(page2Contorller.dom.part2_0, showTime, {top: "-180px",ease: Power2.easeInOut});
		TweenLite.to(page2Contorller.dom.part2_1, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page2Contorller.dom.part2_2, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page2Contorller.dom.part2_3, showTime, {bottom: "-20px",ease: Power2.easeInOut});
		page2Contorller.chart(page2Contorller.dom.part2_2);
	}
	page2Contorller.chart = function(dom){
		var axisLabelColor = "#fff";
		var splitLineStyle = "#071329";
		var areaColor = "#fff"
		var myChart = echarts.init(document.getElementsByClassName("part2_2")[0]);
		var option = {
			    tooltip : {
			        trigger: 'axis'
		    },
		    grid: {
		        left: '5%',
		        right: '8%',
		        bottom: '10%',
		        containLabel: true
		    },
		    xAxis : [
		        {
		            type : 'category',
		            splitLine: {
					    lineStyle: {
					        color: splitLineStyle
					    }
					},
					axisLine: {
	                    lineStyle: {
	                        color: "axisLabelColor"
	                    }
	                },
		            boundaryGap : false,
		            data : [
			            	{
							    value: '一月',
							    textStyle: {
							        fontSize: 18,
							        color: axisLabelColor
							    }
							},
							{
							    value: '二月',
							    textStyle: {
							        fontSize: 18,
							        color: axisLabelColor
							    }
							},
							{
							    value: '三月',
							    textStyle: {
							        fontSize: 18,
							        color: axisLabelColor
							    }
							},
							{
							    value: '四月',
							    textStyle: {
							        fontSize: 18,
							        color: axisLabelColor
							    }
							},
							{
							    value: '五月 ',
							    textStyle: {
							        fontSize: 18,
							        color: axisLabelColor
							    }
							},
							{
							    value: '六月',
							    textStyle: {
							        fontSize: 18,
							        color: axisLabelColor
							    }
							},
							{
							    value: '七月',
							    textStyle: {
							        fontSize: 18,
							        color: axisLabelColor
							    }
							},
							{
							    value: '八月',
							    textStyle: {
							        fontSize: 18,
							        color: axisLabelColor
							    }
							},
							{
							    value: '九月',
							    textStyle: {
							        fontSize: 18,
							        color: axisLabelColor
							    }
							},
							{
							    value: '十月',
							    textStyle: {
							        fontSize: 18,
							        color: axisLabelColor
							    }
							},
							{
							    value: '十一月',
							    textStyle: {
							        fontSize: 18,
							        color: axisLabelColor
							    }
							},
							{
							    value: '十二月',
							    textStyle: {
							        fontSize: 18,
							        color: axisLabelColor
							    }
							}
						    ]
		        }
		    ],
		    yAxis : {
		    	type:"value",
		    	splitLine: {
				    lineStyle: {
				        color: splitLineStyle
				    }
				},
                axisLine: {
                    lineStyle: {
                        color: splitLineStyle
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: splitLineStyle,
                        fontSize: 18
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: splitLineStyle
                    }
                }
            },
		    series : [
		        {
		            type:'line',
		            smooth: true,
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'top',
		                    textStyle: {
		                        color: axisLabelColor,
		                        fontSize: 18
		                    }
		                }
		            },
		            areaStyle: {
			            normal: {
		                    color: "#ac2357"
		                }
	                },
	                lineStyle: {
		                normal: {
		                	color: "#722ff9",
		                    width: 5
		                }
		            },
		            data:[1.98, 1.75, 1.99, 2.13, 2.09, 2.08, 1.98,1.82,2.06,2.03,1.94,1.88]
		        }
		    ]
		};
		myChart.setOption(option);
	}
	page2Contorller.hide = function(){
		TweenLite.to(page2Contorller.dom.part2_0, showTime, {top: "-300px",ease: Power2.easeInOut});
		TweenLite.to(page2Contorller.dom.part2_1, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page2Contorller.dom.part2_2, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page2Contorller.dom.part2_3, showTime, {bottom: "-300px",ease: Power2.easeInOut});
	}
	page2Contorller.animate = function(){
		TweenMax.to(page2Contorller.dom.part2_0, 10, {left:"-50%",repeat:-1,yoyo:true});
	}
	
	page4Contorller.dom = {
		part4_0:$(".page4 .part4_0"),
		part4_1:$(".page4 .part4_1"),
		part4_2:$(".page4 .part4_2"),
		part4_3:$(".page4 .part4_3"),
		part4_4:$(".page4 .part4_4"),
		part4_5:$(".page4 .part4_5"),
		part4_6:$(".page4 .part4_6"),
		part4_7:$(".page4 .part4_7")
	}
	page4Contorller.show = function(){
		TweenLite.to(page4Contorller.dom.part4_0, showTime, {top: "-180px",ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_1, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_2, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_3, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_4, showTime-0.3, {bottom: "90px",ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_5, showTime, {bottom: "90px",ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_6, showTime-0.7, {bottom: "-5px",ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_7, showTime-0.7, {bottom: "30px",ease: Power2.easeInOut});
	}
	page4Contorller.hide = function(){
		TweenLite.to(page4Contorller.dom.part4_0, showTime, {top: "-300px",ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_1, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_2, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_3, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_4, showTime, {bottom: "-500px",ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_5, showTime-0.7, {bottom: "-500px",ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_6, showTime-0.3, {bottom: "-500px",ease: Power2.easeInOut});
		TweenLite.to(page4Contorller.dom.part4_7, showTime, {bottom: "-500px",ease: Power2.easeInOut});
	}
	page4Contorller.animate = function(){
		TweenMax.to(page4Contorller.dom.part4_0, 10, {left:"-50%",repeat:-1,yoyo:true});
		TweenMax.to(page4Contorller.dom.part4_4, 20, {left:"-100%",repeat:-1,ease: Power0.easeNone});
		TweenMax.to(page4Contorller.dom.part4_5, 20, {left:"0%",repeat:-1,ease: Power0.easeNone});
		TweenMax.to(page4Contorller.dom.part4_6, 30, {left:"0%",repeat:-1,ease: Power0.easeNone});
	}
	
	function init(){
		contorllerArr[0].show();
		page1Contorller.animate();
		page2Contorller.animate();
		page4Contorller.animate()
	}
	$("#wrap").on("click",function(){
		pageNum++;
		changePage(contorllerArr[pageNum-1],contorllerArr[pageNum])
	});
	function changePage(onCompleteHide,onCompleteShow){
		onCompleteHide.hide();
		setTimeout(function(){
			onCompleteShow.show()
		},showTime*1000);
	}
	init();
})
