 // textarea元素中放入代码，并点击后在新窗口中运行。注意手机这块应需要重新调整。。。
	var textarea = document.querySelector('.panel-block.control textarea');
    var positioncode = '<!DOCTYPE html>\n'+
					   '<html lang="zh-cmn-Hans">\n'+
						'<head>\n'+
						'<meta charset="utf-8" />\n'+
						'<title>z-index_CSS参考手册_web前端开发参考手册系列</title>\n'+
						'<meta name="author" content="制作者：CarryQiu,联系：187346709@qq.com" />\n'+
						'<style>\n'+
						'.z1,\n'+
						'.z2,\n'+
						'.z3 {\n'+
						'    position: absolute;\n'+
						'	 width: 200px;\n'+
						'	 height: 100px;\n'+
						'	 padding: 5px 10px;\n'+
						'	 color: #fff;\n'+
						'	 text-align: right;\n'+
						'}\n'+
						'.z1 {\n'+
						'	 z-index: 1;\n'+
						'	 background: #000;\n'+
						'}\n'+
						'.z2 {\n'+
						'	 z-index: 2;\n'+
						'	 top: 30px;\n'+
						'	 left: 30px;\n'+
						'	 background: #C00;\n'+
						'}\n'+
						'.z3 {\n'+
						'	 z-index: 3;\n'+
						'	 top: 60px;\n'+
						'	 left: 60px;\n'+
						'	 background: #999;\n'+
						'}\n'+
						'</style>\n'+
						'</head>\n'+
						'<body>\n'+
						'<div class="z1">z-index:1</div>\n'+
						'<div class="z2">z-index:2</div>\n'+
						'<div class="z3">z-index:3</div>\n'+
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
