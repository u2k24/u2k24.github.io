const helper=(function(w,u){
	
	function isScrollAtBottom(elid){
		let content=scrollOffset=null;
		elid=elid||null;
		if(elid===null){
			content=document.body;
		}
		else{
			content=document.getElementById(elid);
		}
		scrollOffset=window.innerHeight + window.scrollY;
		return scrollOffset>=content.offsetHeight;
	}
	
	function generateColorItem(tag,i){
		i=i||randomInt(0,0xffffff);
		tag=tag||'span';
		hex=i.toString(16).padStart(6,'0');
		el=document.createElement(tag);
		el.style.backgroundColor="#"+hex;
		el.innerHTML='#'+hex;
		return el;
	}
	
	function randomInt(min,max){
		const random=Math.random();
		const randomInt=min+Math.floor(random*(max-min+1));
		return randomInt;
	}
	
	return{
		isScrollAtBottom:isScrollAtBottom,
		generateColorItem:generateColorItem,
	}
	
})(window,undefined);