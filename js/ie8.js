window.onload = function(argument) {

	var ie8 = document.getElementById('ie8');
	ie8.innerHTML = '<div>Why are you still using old IE browser?Try one of the best browser <a href="http://www.google.cn/intl/zh-CN/chrome/browser/desktop/index.html">Chrome</a> or <a href="http://www.firefox.com.cn/download/">FireFox</a>,you will like it really much.</div>';
	var customstyle = ie8.style;
	customstyle.textAlign = 'center';
	customstyle.backgroundColor = '#FCEBB6';
	customstyle.position = 'fixed';
	customstyle.zIndex = '9999';



	var icon = document.getElementsByTagName('i');
	for (var i = 0; i < icon.length; i++) {
		var customIcon = '';
		icon[i].style.fontSize = '300%';
	}

	var h1 = document.getElementsByTagName('h1');
	for (var i = 0; i < h1.length; i++) {
		h1[i].style.fontSize = '160%';
	}

}