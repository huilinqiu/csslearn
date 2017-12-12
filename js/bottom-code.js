 // textarea元素中放入代码，并点击后在新窗口中运行。注意手机这块应需要重新调整。。。
	var textarea = document.querySelector('.panel-block.control textarea');
    var positioncode = '<!DOCTYPE html>\n'+
						'<html lang="zh-cmn-Hans">\n'+
						'<head>\n'+
						'<meta charset="utf-8" />\n'+
						'<title>bottom_CSS参考手册_web前端开发参考手册系列</title>\n'+
						'<meta name="author" content="制作者：CarryQiu,联系：187346709@qq.com" />\n'+
						'<style>\n'+
						'.test {\n'+
						'	position: absolute;\n'+
						'	bottom: 0;\n'+
						'	width: 200px;\n'+
						'	height: 200px;\n'+
						'	padding: 5px 10px;\n'+
						'	background: #c00;\n'+
						'	color: #fff;\n'+
						'	line-height: 12;\n'+
						'}\n'+
						'</style>\n'+
						'</head>\n'+
						'<body>\n'+
						'<div class="test">我将出现在浏览器底部</div>\n'+
						'</body>\n'+
						'</html>';
	textarea.innerText = positioncode;
	var runhtml = document.querySelector('.panel a.m-run-html');
	var copycode = document.querySelector('.panel a.m-copy-code');
	copycode.addEventListener('click',function(){
		clipboard.copy(positioncode);
	});
	runhtml.addEventListener('click',function(){
		var newwindow = window.open('','_blank','height=400,width=600');
		newwindow.document.write(positioncode);
		newwindow.focus();
	});
