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

// 回到上页，采取history back()方法
   	var prevPage = document.querySelector('.container .panel-heading a.is-pulled-right');

