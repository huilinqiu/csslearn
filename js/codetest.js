 // textarea元素中放入代码，并点击后在新窗口中运行。注意手机这块应需要重新调整。。。
	var textarea = document.querySelector('.panel-block.control textarea');
    var positioncode = '<!DOCTYPE html>\n'+'<html lang="zh">\n'+
					    '<head>\n'+'<meta charset="utf-8" />\n'+
						'<title>position_CSS参考手册_web前端开发参考手册</title>\n'+
						'<meta name="author" content="制作者：CarryQiu,联系：187346709@qq.com" />\n'+
						'<style>\n'+
						'#position {\n'+
						'	position: absolute;\n'+
						'	top: 50%;\n'+
						'	left: 50%;\n'+
						'	width: 150px;\n'+
						'	height: 40px;\n'+
						'	margin: -20px 0 0 -75px;\n'+
						'	padding: 0 10px;\n'+
						'	background: #eee;\n'+
						'	line-height: 2.4;\n'+
						'}\n'+
						'</style>\n'+
						'</head>\n'+
						'<body>\n'+
						'<div id="position">水平垂直居中的对象</div>\n'+
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
