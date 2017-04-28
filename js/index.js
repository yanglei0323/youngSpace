$(function(){ 
	var m='无';
	$('.left-nav li').bind('click',function(){
		var n=$(this).data('n');
		$('.container').css('display','none');
		$('.container_'+n).css('display','block');
	});
	$('.right-nav li').bind('click',function(){
		var n=$(this).data('n');
		$('.container').css('display','none');
		$('.container_'+n).css('display','block');
	});
	$('.ewmdiv_1').bind('click',function(){
		window.open('https://itunes.apple.com/cn/app/yue-yi-shu-jia/id1019186333?mt=8');
	});
	$('.ewmdiv_2').bind('click',function(){
		window.open('http://apk.hiapk.com/appinfo/com.wzj.hairdressing_user');
	});
});