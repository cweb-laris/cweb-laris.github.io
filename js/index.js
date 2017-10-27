window.onload=function (){
	var ofo=document.getElementById('footer');
	var o1 = document.getElementById('o1');
	var o1a = o1.getElementsByTagName('a');
	var o2 = document.getElementById('o2');
	var o2a = o2.getElementsByTagName('a');
	var omusic = document.getElementById('omusic');
	var nmusic = document.getElementById('nmusic');
	var lg = document.getElementById('lg');
	
	var oc =[
	'35150535',
	'68717',
	'68714',
	'68710',
	'68707',
	'68704',
	'2086900',
	'68695',
	'2284021',
	'2422368',
	'2523060',
	'2692092',
	'2759045',
	'2760583',
	'2786420',
	'2857213',
	];
	
	var nc = [
	'3066049',
	'3084962',
	'3119354',
	'3211207',
	'3415139',
	'34515022',
	'34767947',
	'34869215',
	'35022075',
	'35139432',
	'35425186',
	'35746033',
	'35908620',
	];
	
	ofo.onmouseover=function (){
		move(this,'opacity',100);
	};	
	ofo.onmouseout=function (){
		move(this,'opacity',30);
	};

	
	omusic.onmouseover = function (){
		o1.style.display = 'block';
	}
	omusic.onmouseout = function (){
		o1.style.display = 'none';
	}
	o1.onmouseover = function(){
		o1.style.display = 'block';
	}
	o1.onmouseout = function (){
		o1.style.display = 'none';
	}
	nmusic.onmouseover = function (){
		o2.style.display = 'block';
	}
	nmusic.onmouseout = function (){
		o2.style.display = 'none';
	}
	o2.onmouseover = function(){
		o2.style.display = 'block';
	}
	o2.onmouseout = function (){
		o2.style.display = 'none';
	}
	

function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
};

function move(obj,attr,iTarget){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var cur=0;
		if(attr=='opacity'){
			cur=parseFloat(getStyle(obj,attr))*100;
		}else{
			cur=parseInt(getStyle(obj,attr));
		}

		var speed=(iTarget-cur)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);

		if(cur==iTarget){
			clearInterval(obj.timer);
		}else{
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(cur+speed)+')';
				obj.style.opacity=(cur+speed)/100;
			}else{
				obj.style[attr]=cur+speed+'px';
			}
		}
	},30);
};

	
	for(i=0;i<o1a.length;i++){
		o1a[i].index = i;
		o1a[i].onclick = function(){
			box.innerHTML = '<iframe frameborder=no border=0 marginwidth=0 marginheight=0 width=330 height=450 src=https://music.163.com/outchain/player?type=1&id='+ oc[this.index] +'&auto=1&height=430 ></iframe>';	
		};
		
	};

		for(i=0;i<o2a.length;i++){
		o2a[i].index = i;
		o2a[i].onclick = function(){
			box.innerHTML = '<iframe frameborder=no border=0 marginwidth=0 marginheight=0 width=330 height=450 src=https://music.163.com/outchain/player?type=1&id='+ nc[this.index] +'&auto=1&height=430 ></iframe>';	
		};
		
	};


};
