(function (doc, win) {
  var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
	  var clientWidth = docEl.clientWidth;
	  if (!clientWidth) return;
	 //总结：这一段脚本主要作用是 动态计算'html标签'字体大小
	  docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';

	  console.log('fontSize:'+20 * (clientWidth / 320) + 'px')
	};
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);