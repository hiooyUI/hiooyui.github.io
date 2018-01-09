/**
 * 回到顶部缓动效果
 * 
 * @param {Float|undefine} a (acceleration)
 * @param {Number|undefine} t (time)
 */
export const goTop = (a, t) => {
    const acceleration = a || -0.02;
    const time = t || 16; // 1秒内播放60帧以上(1000 / 60 = 16.6667)肉眼就不会觉得眩晕，感觉是平滑过度
    const _goTop = () => {
	    let y1 = 0;
	    let y2 = 0;
	    let y3 = 0;
	    if (document.documentElement) {
	        y1 = document.documentElement.scrollTop || 0;
	    }
	    if (document.body) {
	        y2 = document.body.scrollTop || 0;
	    }
	    y3 = window.scrollY || 0;
	    // 滚动条到页面顶部的垂直距离
		    let y = Math.max(y1, Math.max(y2, y3));
		    // 在相同的时间，因为要距离原来越小,直到0为止，
		    // Δs = vt - at^2/2  下面将采用近似法
		    // v = at
		    // => s = at^2/2
		    // => t = Math.sqrt(-2*y/acceleration)
		    // => v = acceleration * Math.sqrt(-2*y/acceleration)
		    // => Δs = vΔt = acceleration * Math.sqrt(-2*y/acceleration) * time 采用近似法
		    let s = acceleration * Math.sqrt(-2 * y / acceleration) * time;
		    window.scrollTo(0, Math.floor(y + s));
		    // 如果距离不为零, 继续调用迭代本函数
		    if (y > 0) {
		        window.setTimeout(function(){
		        	_goTop();
		        }, time);
		    }
    }
    _goTop();
};