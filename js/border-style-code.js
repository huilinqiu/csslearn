 // textarea元素中放入代码，并点击后在新窗口中运行。注意手机这块应需要重新调整。。。
	var textarea = document.querySelector('.panel-block.control textarea');
    var positioncode = '<!DOCTYPE html>\n'+
						'<html lang="zh-cmn-Hans">\n'+
						'<head>\n'+
						'<meta charset="utf-8" />\n'+
						'<title>border-style_CSS参考手册_web前端开发参考手册系列</title>\n'+
						'<meta name="author" content="制作者：CarryQiu,联系：187346709@qq.com" />\n'+
						'<style>\n'+
						'	div{float:left;margin-right:5px;}\n'+
						'	.none{padding:10px;border:0 none;background:#eee;}\n'+
						'	.hidden{padding:10px;border:3px hidden #000;background:#eee;}\n'+
						'	.dotted{padding:10px;border:3px dotted #000;background:#eee;}\n'+
						'	.dashed{padding:10px;border:3px dashed #000;background:#eee;}\n'+
						'	.solid{padding:10px;border:3px solid #000;background:#eee;}\n'+
						'	.double{padding:10px;border:3px double #000;background:#eee;}\n'+
						'	.groove{padding:10px;border:3px groove #000;background:#eee;}\n'+
						'	.ridge{padding:10px;border:3px ridge #000;background:#eee;}\n'+
						'	.inset{padding:10px;border:3px inset #000;background:#eee;}\n'+
						'	.outset{padding:10px;border:3px outset #000;background:#eee;}\n'+
						'</style>\n'+
						'</head>\n'+
						'<body>\n'+
						'	<div class="none">none</div>\n'+
						'	<div class="hidden">hidden</div>\n'+
						'	<div class="dotted">dotted</div>\n'+
						'	<div class="dashed">dashed</div>\n'+
						'	<div class="solid">solid</div>\n'+
						'	<div class="double">double</div>\n'+
						'	<div class="groove">groove</div>\n'+
						'	<div class="ridge">ridge</div>\n'+
						'	<div class="inset">inset</div>\n'+
						'	<div class="outset">outset</div>\n'+
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
