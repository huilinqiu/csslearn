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
  