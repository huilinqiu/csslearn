 // textarea元素中放入代码，并点击后在新窗口中运行。注意手机这块应需要重新调整。。。
	var textarea = document.querySelector('.panel-block.control textarea');
    var positioncode = '<!DOCTYPE html>\n'+
						'<html lang="zh-cmn-Hans">\n'+
						'<head>\n'+
						'<meta charset="utf-8" />\n'+
						'<title>clear_CSS参考手册_web前端开发参考手册系列</title>\n'+
						'<meta name="author" content="制作者：CarryQiu,联系：187346709@qq.comm" />\n'+
						'<style>\n'+
						'.test {\n'+
						'	float: right;\n'+
						'	background: #eee;\n'+
						'}\n'+
						'.test2 {\n'+
						'	clear: right;\n'+
						'	background: #ddd;\n'+
						'}\n'+
						'</style>\n'+
						'</head>\n'+
						'<body>\n'+
						'<div class="test">我将出现在屏幕右方</div>\n'+
						'<div class="test2">注意我出现的位置</div>\n'+
						'</body>\n'+
						'</html>';
	textarea.innerText = positioncode;
	var runhtml = document.querySelector('.panel a.m-run-html');
	var copycode = document.querySelector('.panel a.m-copy-code');
	copycode.addEventListener('click',function(){
		clipboard.copy(positioncode);
	});
	runhtml.addEventListener('click',function(){
		var newwindow = window.open('','_blank','');
		newwindow.document.write(positioncode);
		newwindow.focus();
	});