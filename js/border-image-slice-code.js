 // textarea元素中放入代码，并点击后在新窗口中运行。注意手机这块应需要重新调整。。。
	var textarea = document.querySelector('.panel-block.control textarea');
    var positioncode = '<!DOCTYPE html>\n'+
						'<html lang="zh-cmn-Hans">\n'+
						'<head>\n'+
						'<meta charset="utf-8" />\n'+
						'<title>border-image-slice_CSS参考手册_web前端开发参考手册系列</title>\n'+
						'<meta name="author" content="制作者：CarryQiu,联系：187346709@qq.com" />\n'+
						'<style>\n'+
						'.test1,\n'+
						'.test2 {\n'+
						'	margin-top: 10px;\n'+
						'	padding: 5px;\n'+
						'	border-width: 1px 9px;\n'+
						'	border-style: solid;\n'+
						'	border-color: orange;\n'+
						'	border-image-source: url(img/border.png);\n'+
						'	border-image-repeat: repeat stretch;\n'+
						'}\n'+
						'.test1 {\n'+
						'	border-image-slice: 1 9;\n'+
						'}\n'+
						'.test2 {\n'+
						'	border-image-slice: 1 9 fill;\n'+
						'}\n'+
												'</style>\n'+
						'</head>\n'+
						'<body>\n'+
						'<div class="test1">不保留裁减后的中间区域</div>\n'+
						'<div class="test2">保留裁减后的中间区域</div>\n'+
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
