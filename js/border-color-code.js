 // textarea元素中放入代码，并点击后在新窗口中运行。注意手机这块应需要重新调整。。。
	var textarea = document.querySelector('.panel-block.control textarea');
    var positioncode = '<!DOCTYPE html>\n'+
						'<html lang="zh-cmn-Hans">\n'+
						'<head>\n'+
						'<meta charset="utf-8" />\n'+
						'<title>border-color_CSS参考手册_web前端开发参考手册系列</title>\n'+
						'<meta name="author" content="制作者：CarryQiu,联系：187346709@qq.com" />\n'+
						'<style>\n'+
						'	.test{padding:10px;border-width:1px;border-style:solid;border-color:#000;}\n'+
						'	.test2{margin-top:10px;padding:10px;border-width:1px;border-style:solid;border-color:#000 #f00;}\n'+
						'	.test3{margin-top:10px;padding:10px;border-width:1px;border-style:solid;border-color:#000 #f00 #090;}\n'+
						'	.test4{margin-top:10px;padding:10px;border-width:1px;border-style:solid;border-color:#000 #f00 #090 #0ff;}\n'+
						'</style>\n'+
						'</head>\n'+
						'<body>\n'+
						'	<div class="test">提供1个参数</div>\n'+
						'	<div class="test2">提供2个参数</div>\n'+
						'	<div class="test3">提供3个参数</div>\n'+
						'	<div class="test4">提供4个参数</div>\n'+
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
