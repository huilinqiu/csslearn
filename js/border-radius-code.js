 // textarea元素中放入代码，并点击后在新窗口中运行。注意手机这块应需要重新调整。。。
	var textarea = document.querySelector('.panel-block.control textarea');
    var positioncode = '<!DOCTYPE html>\n'+
						'<html lang="zh-cmn-Hans">\n'+
						'<head>\n'+
						'<meta charset="utf-8" />\n'+
						'<title>border-radius_CSS参考手册_web前端开发参考手册系列</title>\n'+
						'<meta name="author" content="制作者：CarryQiu,联系：187346709@qq.com" />\n'+
						'<style>\n'+
						'	ul{margin:0;padding:0;}\n'+
						'	li{list-style:none;margin:10px 0 0 0;padding:10px;background:#bbb;}\n'+
						'	.test .one{border-radius:10px;}\n'+
						'	.test .two{border-radius:10px 20px;}\n'+
						'	.test .three{border-radius:10px 20px 30px;}\n'+
						'	.test .four{border-radius:10px 20px 30px 40px;}\n'+
						'	.test2 .one{border-radius:10px/5px;}\n'+
						'	.test2 .two{border-radius:10px 20px/5px 10px;}\n'+
						'	.test2 .three{border-radius:10px 20px 30px/5px 10px 15px;}\n'+
						'	.test2 .four{border-radius:10px 20px 30px 40px/5px 10px 15px 20px;}\n'+
						'</style>\n'+
						'</head>\n'+
						'<body>\n'+
						'<h2>水平与垂直半径相同时：</h2>\n'+
						'<ul class="test">\n'+
						'	<li class="one">提供1个参数<br />border-radius:10px;</li>\n'+
						'	<li class="two">提供2个参数<br />border-radius:10px 20px;</li>\n'+
						'	<li class="three">提供3个参数<br />border-radius:10px 20px 30px;</li>\n'+
						'	<li class="four">提供4个参数<br />border-radius:10px 20px 30px 40px;</li>\n'+
						'</ul>\n'+
						'<h2>水平与垂直半径不同时：</h2>\n'+
						'<ul class="test2">\n'+
						'	<li class="one">提供1个参数<br />border-radius:10px/5px;</li>\n'+
						'	<li class="two">提供2个参数<br />border-radius:10px 20px/5px 10px;</li>\n'+
						'	<li class="three">提供3个参数<br />border-radius:10px 20px 30px/5px 10px 15px;</li>\n'+
						'	<li class="four">提供4个参数<br />border-radius:10px 20px 30px 40px/5px 10px 15px 20px;</li>\n'+
						'</ul>\n'+
						'</body>\n'+
						'</html>';
	textarea.innerText = positioncode;
	var runhtml = document.querySelector('.panel a.m-run-html');
	var copycode = document.querySelector('.panel a.m-copy-code');
	copycode.addEventListener('click',function(){
		clipboard.copy(positioncode);
	});
	runhtml.addEventListener('click',function(){
		var newwindow = window.open('','_blank','height=400,width=600,top=0,left=0');
		newwindow.document.write(positioncode);
		newwindow.focus();
	});
