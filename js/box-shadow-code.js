 // textarea元素中放入代码，并点击后在新窗口中运行。注意手机这块应需要重新调整。。。
	var textarea = document.querySelector('.panel-block.control textarea');
    var positioncode = '<!DOCTYPE html>\n'+
						'<html lang="zh-cmn-Hans">\n'+
						'<head>\n'+
						'<meta charset="utf-8" />\n'+
						'<title>box-shadow_CSS参考手册_web前端开发参考手册系列</title>\n'+
						'<meta name="author" content="制作者：CarryQiu,联系：187346709@qq.com" />\n'+
						'<style>\n'+
						'.test li {\n'+
						'	margin-top: 20px;\n'+
						'	list-style: none;\n'+
						'	width: 400px;\n'+
						'	padding: 10px;\n'+
						'	background: #eee;\n'+
						'}\n'+
						'.test .outset {\n'+
						'	box-shadow: 5px 5px rgba(0, 0, 0, .6);\n'+
						'}\n'+
						'.test .outset-blur {\n'+
						'	box-shadow: 5px 5px 5px rgba(0, 0, 0, .6);\n'+
						'}\n'+
						'.test .outset-extension {\n'+
						'	box-shadow: 5px 5px 5px 10px rgba(0, 0, 0, .6);\n'+
						'}\n'+
						'.test .inset {\n'+
						'	box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, .6) inset;\n'+
						'}\n'+
						'.test .multiple-shadow {\n'+
						'	box-shadow:\n'+
						'		0 0 5px 3px rgba(255, 0, 0, .6),\n'+
						'		0 0 5px 6px rgba(0, 182, 0, .6),\n'+
						'		0 0 5px 10px rgba(255, 255, 0, .6);\n'+
						'}\n'+
						'</style>\n'+
						'</head>\n'+
						'<body>\n'+
						'<ul class="test">\n'+
						'	<li class="outset">外阴影常规效果<br />box-shadow:5px 5px rgba(0,0,0,.6);</li>\n'+
						'	<li class="outset-blur">外阴影模糊效果<br />box-shadow:5px 5px 5px rgba(0,0,0,.6);</li>\n'+
						'	<li class="outset-extension">外阴影模糊外延效果<br />box-shadow:5px 5px 5px 10px rgba(0,0,0,.6);</li>\n'+
						'	<li class="inset">内阴影效果<br />box-shadow:2px 2px 5px 1px rgba(0,0,0,.6) inset;</li>\n'+
						'	<li class="multiple-shadow">外阴影模糊效果<br />box-shadow:5px 5px 5px rgba(0,0,0,.6);</li>\n'+
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
