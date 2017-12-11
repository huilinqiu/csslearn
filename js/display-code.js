 // textarea元素中放入代码，并点击后在新窗口中运行。注意手机这块应需要重新调整。。。
	var textarea = document.querySelector('.panel-block.control textarea');
    var positioncode = '<!DOCTYPE html>\n'+
						'<html lang="zh-cmn-Hans">\n'+
						'<head>\n'+
						'<meta charset="utf-8" />\n'+
						'<title>display_CSS参考手册_web前端开发参考手册系列</title>\n'+
						'<meta name="author" content="制作者：CarryQiu,联系：187346709@qq.com" />\n'+
						'<style>\n'+
						'body{font:14px/1.5 georgia,simsun,arial;}\n'+
						'h1{margin:10px 0;font-size:20px;}\n'+
						'ul{margin:0;padding:0;list-style:none;}\n'+
						'.table{display:table;border-collapse:collapse;border:1px solid #ccc;}\n'+
						'.table-caption{display:table-caption;margin:0;padding:0;font-size:16px;}\n'+
						'.table-column-group{display:table-column-group;}\n'+
						'.table-column{display:table-column;width:100px;}\n'+
						'.table-row-group{display:table-row-group;}\n'+
						'.table-row{display:table-row;}\n'+
						'.table-row-group .table-row:hover,.table-footer-group .table-row:hover{background:#f6f6f6;}\n'+
						'.table-cell{display:table-cell;padding:0 5px;border:1px solid #ccc;}\n'+
						'.table-header-group{display:table-header-group;background:#eee;font-weight:bold;}\n'+
						'.table-footer-group{display:table-footer-group;}\n'+
						'</style>\n'+
						'</head>\n'+
						'<body>\n'+
						'<h1>display构造的table小例子，IE7及以下浏览器不支持本示例</h1>\n'+
						'<div class="table">\n'+
						'	<h2 class="table-caption">花名册：</h2>\n'+
						'	<div class="table-column-group">\n'+
						'		<div class="table-column"></div>\n'+
						'		<div class="table-column"></div>\n'+
						'		<div class="table-column"></div>\n'+
						'	</div>\n'+
						'	<div class="table-header-group">\n'+
						'		<ul class="table-row">\n'+
						'			<li class="table-cell">序号</li>\n'+
						'			<li class="table-cell">姓名</li>\n'+
						'			<li class="table-cell">年龄</li>\n'+
						'		</ul>\n'+
						'	</div>\n'+
						'	<div class="table-footer-group">\n'+
						'		<ul class="table-row">\n'+
						'			<li class="table-cell">footer</li>\n'+
						'			<li class="table-cell">footer</li>\n'+
						'			<li class="table-cell">footer</li>\n'+
						'		</ul>\n'+
						'	</div>\n'+
						'	<div class="table-row-group">\n'+
						'		<ul class="table-row">\n'+
						'			<li class="table-cell">1</li>\n'+
						'			<li class="table-cell">John</li>\n'+
						'			<li class="table-cell">19</li>\n'+
						'		</ul>\n'+
						'		<ul class="table-row">\n'+
						'			<li class="table-cell">2</li>\n'+
						'			<li class="table-cell">Mark</li>\n'+
						'			<li class="table-cell">21</li>\n'+
						'		</ul>\n'+
						'		<ul class="table-row">\n'+
						'			<li class="table-cell">3</li>\n'+
						'			<li class="table-cell">Kate</li>\n'+
						'			<li class="table-cell">26</li>\n'+
						'		</ul>\n'+
						'	</div>\n'+
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
