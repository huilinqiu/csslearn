//复制本页链接到clipboard中
	var copykey = document.querySelector('.is-link.m-copy');
	copykey.addEventListener('click',function(event){
		clipboard.copy(location.href);
	});
	
	//分享
	var sharekey = document.querySelector('.panel-heading a.is-success');
	var dropmenu = document.querySelector('.m-dropdown-menu');
	var display = getComputedStyle(dropmenu,null).getPropertyValue('display');
	dropmenu.addEventListener('mouseleave',function(){
		dropmenu.style.display = 'none';
	});
	dropmenu.addEventListener('mouseenter',function(){
		if(display === 'none'){
			dropmenu.style.display = 'block';
		}else{
			dropmenu.style.display = 'none';
		}
	});
	sharekey.addEventListener('mouseleave',function(){
		dropmenu.style.display = 'none';
	});
	sharekey.addEventListener('mouseenter',function(){
		if(display === 'none'){
			dropmenu.style.display = 'block';
		}else{
			dropmenu.style.display = 'none';
		}
	});	
  
// 点击回到顶部按键
	var toTop = document.querySelector('.toTop');
	toTop.addEventListener('click',function(){
		
		var up = toTop.querySelector('.toTop i');
		if(up.classList.contains('fa-arrow-circle-o-up')){
			up.classList.remove('fa-arrow-circle-o-up');
			up.classList.add('fa-arrow-circle-o-down');
			document.body.scrollTop = document.documentElement.scrollTop = 0; 
		}else{
			up.classList.remove('fa-arrow-circle-o-down');
			up.classList.add('fa-arrow-circle-o-up');
			document.body.scrollTop = document.documentElement.scrollTop = document.getElementsByTagName('body')[0].scrollHeight; 
		}
		
	});

  	// 回到上一级
  	var back = document.querySelector('.m-back');
  	var backup = document.querySelector('.m-back a.m-back-start');
  	var backhello = document.querySelector('.m-back a.m-back-end');
  	if(back){
  		back.addEventListener('mouseenter',function(){
  			backup.classList.add('is-hidden');
  			backhello.classList.remove('is-hidden');
	  	});
	  	back.addEventListener('mouseleave',function(){
	  		backup.classList.remove('is-hidden');
	  		backhello.classList.add('is-hidden');
	  	});
  	}
  	
  	// share 分享
  	// 获取url=当前网址+分享网页，分享内容title=分享的主标题,分享pic,以及其他。
  	var shareurl = location.href;
	var sharetitle = 'css参考手册--您事业的好帮手-----' + document.title;
	//	var pic = 'http://127.0.0.1:8020/csslearn/img/qhl.png';
	var pic = 'https://huilinqiu.github.io/csslearn/img/qhl.png';
  	var shares = document.querySelectorAll('.m-dropdown-menu a.dropdown-item');
  	if(shares[0]){
		shares[0].addEventListener('click',function(){
			window.open('http://v.t.sina.com.cn/share/share.php?title=' + sharetitle + '&url=' + shareurl +'&pic=' +pic, '_blank');
		});
  	}
  	if(shares[2]){
		shares[2].addEventListener('click',function(){
			 window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?site=www.tuan2.com&title=' + '' + '&desc=' + sharetitle + '&summary=' + '' + '&url=' + shareurl + '&pics=' + pic, '_blank');
		});
  	}
  	if(shares[3]){
		shares[3].addEventListener('click',function(){
			window.open('http://widget.renren.com/dialog/share?resourceUrl=' + shareurl + '&title=' + sharetitle + '&description=' + '' + '&pic=' + pic + '&charset=utf-8', '_blank')
		});
  	}

	// textarea元素中放入代码，并点击后在新窗口中运行。注意手机这块应需要重新调整。。。
	var textarea = document.querySelector('.panel-block.m-new-textarea textarea');
	if(textarea){
		var textcode = textarea.innerHTML.replace(/&gt;/g,">").replace(/&lt;/g,"<");
		var runhtml = document.querySelector('.panel a.m-run-html');
		var copycode = document.querySelector('.panel a.m-copy-code');
		copycode.addEventListener('click',function(){
			clipboard.copy(textcode);
		});
		runhtml.addEventListener('click',function(){
			var newwindow = window.open('','_blank','height=400,width=600,top=0,left=0');
			newwindow.document.write(textcode);
			newwindow.focus();
		});
	}
	
	// nav-level 部分页面下关闭
	var navLevel = document.querySelector('nav.level.is-mobile');
	if(navLevel){
		navLevel.classList.remove('is-mobile');
		navLevel.classList.add('is-hidden-touch');
		navLevel.classList.add('is-hidden-desktop-only');
	}
