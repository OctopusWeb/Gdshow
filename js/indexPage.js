$(function(){
	var pageNum=0;
	var showTime=1.5;
	var page0Contorller={};
	var page1Contorller={};
	var page2Contorller={};
	var page3Contorller={};
	var page4Contorller={};
	var page5Contorller={};
	var page6Contorller={};
	var page7Contorller={};
	var contorllerArr=[page0Contorller,page1Contorller,page2Contorller,page3Contorller,page4Contorller,page5Contorller,page6Contorller,page7Contorller];
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
	
	page3Contorller.dom = {
		part3_0:$(".page3 .part3_0"),
		part3_1:$(".page3 .part3_1"),
		part3_2:$(".page3 .part3_2"),
		part3_3:$(".page3 .part3_3"),
		part3_4:$(".page3 .part3_4"),
		part3_5:$(".page3 .part3_5")
	}
	page3Contorller.show = function(){
		TweenLite.to(page3Contorller.dom.part3_0, showTime, {bottom: "-120px",ease: Power2.easeInOut});
		TweenLite.to(page3Contorller.dom.part3_1, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page3Contorller.dom.part3_3, showTime, {left: "5%",ease: Power2.easeInOut});
		TweenLite.to(page3Contorller.dom.part3_4, showTime-1.5, {left: "50%",ease: Power2.easeInOut});
		TweenLite.to(page3Contorller.dom.part3_5, showTime, {bottom: "-30px",ease: Power2.easeInOut});
		TweenMax.staggerFrom(page3Contorller.dom.part3_4.find("img"), 2, {marginLeft:"100px",opacity:0,delay:0.2, ease:Elastic.easeOut}, 0.1);
	}
	page3Contorller.hide = function(){
		TweenLite.to(page3Contorller.dom.part3_0, showTime, {bottom: "-300px",ease: Power2.easeInOut});
		TweenLite.to(page3Contorller.dom.part3_1, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page3Contorller.dom.part3_3, showTime, {left: "-50%",ease: Power2.easeInOut});
		TweenLite.to(page3Contorller.dom.part3_4, showTime, {left: "100%",ease: Power2.easeInOut});
		TweenLite.to(page3Contorller.dom.part3_5, showTime, {bottom: "-130px",ease: Power2.easeInOut});
	}
	page3Contorller.animate = function(){
		TweenMax.to(page3Contorller.dom.part3_5, 30, {left:"100%",repeat:-1,ease: Power0.easeNone});
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
	page5Contorller.dom = {
		part5_0:$(".page5 .part5_0"),
		part5_1:$(".page5 .part5_1"),
		part5_2:$(".page5 .part5_2"),
		part5_3:$(".page5 .part5_3"),
		part5_4:$(".page5 .part5_4"),
		part5_5:$(".page5 .part5_5"),
		part5_6:$(".page5 .part5_6")
	}
	page5Contorller.show = function(){
		TweenLite.to(page5Contorller.dom.part5_0, showTime, {top: "-180px",ease: Power2.easeInOut});
		TweenLite.to(page5Contorller.dom.part5_1, showTime, {left: 0,ease: Power2.easeInOut});
		TweenLite.to(page5Contorller.dom.part5_2, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page5Contorller.dom.part5_3, showTime, {bottom: "-180px",ease: Power2.easeInOut});
		TweenLite.to(page5Contorller.dom.part5_4, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page5Contorller.dom.part5_5, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page5Contorller.dom.part5_6, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenMax.staggerFrom(page5Contorller.dom.part5_2.find("img"), 2, {opacity:0,delay:0.2, ease:Elastic.easeOut}, 0.1);
		TweenMax.staggerFrom(page5Contorller.dom.part5_4.find("img"), 2, {marginLeft:"100px",opacity:0,delay:0.2, ease:Elastic.easeOut}, 0.1);
		TweenMax.staggerFrom(page5Contorller.dom.part5_5.find("img"), 2, {opacity:0,delay:0.2, ease:Elastic.easeOut}, 0.1);
		TweenMax.staggerFrom(page5Contorller.dom.part5_6.find("img"), 2, {marginLeft:"-100px",opacity:0,delay:0.2, ease:Elastic.easeOut}, 0.1);
	}
	page5Contorller.hide = function(){
		TweenLite.to(page5Contorller.dom.part5_0, showTime, {top: "-300px",ease: Power2.easeInOut});
		TweenLite.to(page5Contorller.dom.part5_1, showTime, {left: "-100%",ease: Power2.easeInOut});
		TweenLite.to(page5Contorller.dom.part5_3, showTime, {bottom: "-300px",ease: Power2.easeInOut});
		TweenLite.to(page5Contorller.dom.part5_2, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page5Contorller.dom.part5_4, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page5Contorller.dom.part5_5, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page5Contorller.dom.part5_6, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
	}
	page5Contorller.animate = function(){
		TweenMax.to(page5Contorller.dom.part5_0, 10, {left:"-50%",repeat:-1,yoyo:true});
		TweenMax.to(page5Contorller.dom.part5_3, 10, {left:"0%",repeat:-1,yoyo:true});
		
	}
	page6Contorller.dom = {
		part6_0:$(".page6 .part6_0"),
		part6_1:$(".page6 .part6_1"),
		part6_2:$(".page6 .part6_2"),
		part6_3:$(".page6 .part6_3"),
		part6_4:$(".page6 .part6_4"),
		part6_5:$(".page6 .part6_5"),
		part6_6:$(".page6 .part6_6")
	}
	page6Contorller.show = function(){
		TweenLite.to(page6Contorller.dom.part6_0, showTime, {top: "-180px",ease: Power2.easeInOut});
		TweenLite.to(page6Contorller.dom.part6_4, showTime, {left: "20%",ease: Power2.easeInOut});
		TweenLite.to(page6Contorller.dom.part6_1, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenLite.to(page6Contorller.dom.part6_2, showTime, {autoAlpha: 1,ease: Power2.easeInOut});
		TweenMax.staggerFrom(page6Contorller.dom.part6_1.find(".part6_11"), 3, {marginLeft:"300px",opacity:0,delay:0.5, ease:Elastic.easeOut}, 0.3);
		TweenLite.to(page6Contorller.dom.part6_3, showTime, {bottom: "-180px",ease: Power2.easeInOut});
		TweenMax.staggerFrom(page6Contorller.dom.part6_2.find("img"), 2, {marginTop:"-100px",opacity:0,delay:0.2, ease:Elastic.easeOut}, 0.1);
		
	}
	page6Contorller.hide = function(){
		TweenLite.to(page6Contorller.dom.part6_1, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page6Contorller.dom.part6_2, showTime, {autoAlpha: 0,ease: Power2.easeInOut});
		TweenLite.to(page6Contorller.dom.part6_0, showTime, {top: "-300px",ease: Power2.easeInOut});
		TweenLite.to(page6Contorller.dom.part6_4, showTime, {left: "120%",ease: Power2.easeInOut});
		TweenLite.to(page6Contorller.dom.part6_3, showTime, {bottom: "-300px",ease: Power2.easeInOut});
	}
	page6Contorller.animate = function(){
		TweenMax.to(page6Contorller.dom.part6_0, 10, {left:"-50%",repeat:-1,yoyo:true});
		TweenMax.to(page6Contorller.dom.part6_3, 10, {left:"0%",repeat:-1,yoyo:true});
	}
	page7Contorller.dom = {
		part7_0:$(".page7 .part7_0"),
		part7_1:$(".page7 .part7_1"),
		part7_2:$(".page7 .part7_2"),
		part7_3:$(".page7 .part7_3"),
		part7_4:$(".page7 .part7_4"),
		part7_5:$(".page7 .part7_5"),
		part7_6:$(".page7 .part7_6")
	}
	page7Contorller.show = function(){
		TweenLite.to(page7Contorller.dom.part7_0, showTime, {top: "-180px",ease: Power2.easeInOut});
		TweenLite.to(page7Contorller.dom.part7_3, showTime, {bottom: "-180px",ease: Power2.easeInOut});
		TweenLite.to(page7Contorller.dom.part7_4, showTime, {left: "10%",ease: Power2.easeInOut});
		TweenLite.to(page7Contorller.dom.part7_5, showTime, {right: "500px",ease: Power2.easeInOut});
		TweenLite.to(page7Contorller.dom.part7_6, showTime, {right: "0",ease: Power2.easeInOut});
		TweenLite.to(page7Contorller.dom.part7_1, showTime, {left: "10%",ease: Power2.easeInOut});
		TweenLite.to(page7Contorller.dom.part7_2, showTime, {left: "50%",ease: Power2.easeInOut});
	}
	page7Contorller.hide = function(){
		TweenLite.to(page7Contorller.dom.part7_0, showTime, {top: "-300px",ease: Power2.easeInOut});
		TweenLite.to(page7Contorller.dom.part7_3, showTime, {bottom: "-300px",ease: Power2.easeInOut});
		TweenLite.to(page7Contorller.dom.part7_4, showTime, {left: "-40%",ease: Power2.easeInOut});
		TweenLite.to(page7Contorller.dom.part7_5, showTime, {right: "-700px",ease: Power2.easeInOut});
		TweenLite.to(page7Contorller.dom.part7_6, showTime, {right: "-800px",ease: Power2.easeInOut});
		TweenLite.to(page7Contorller.dom.part7_1, showTime, {left: "-50%",ease: Power2.easeInOut});
		TweenLite.to(page7Contorller.dom.part7_2, showTime, {left: "150%",ease: Power2.easeInOut});
	}
	page7Contorller.animate = function(){
		TweenMax.to(page7Contorller.dom.part7_0, 10, {left:"-50%",repeat:-1,yoyo:true});
		TweenMax.to(page7Contorller.dom.part7_3, 10, {left:"0%",repeat:-1,yoyo:true});
	}
	
	function init(){
		contorllerArr[0].show();
		page1Contorller.animate();
		page2Contorller.animate();
		page3Contorller.animate();
		page4Contorller.animate();
		page5Contorller.animate();
		page6Contorller.animate();
		page7Contorller.animate();
	}
	bindEvent()
	function bindEvent(){
		$(".next").on("click",function(){
			pageNum++;
			if(pageNum>=contorllerArr.length){
				changePage(contorllerArr[contorllerArr.length-1],contorllerArr[0]);
				pageNum=0;
				offEvent();
				return
			}
			changePage(contorllerArr[pageNum-1],contorllerArr[pageNum]);
			offEvent();
		});
		$(".pre").on("click",function(){
			pageNum--;
			if(pageNum<0){return}
			changePage(contorllerArr[pageNum+1],contorllerArr[pageNum])
			offEvent()
		});
	}
	function offEvent(){
		$(".next").off("click");
		$(".pre").off("click");
	}
	
	function changePage(onCompleteHide,onCompleteShow){
		onCompleteHide.hide();
		setTimeout(function(){
			onCompleteShow.show();
			bindEvent();
		},showTime*1000);
	}
	init();
})
