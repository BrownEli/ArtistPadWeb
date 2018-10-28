function loadPrivacyPolicy(){
	var loader = function (w,d) {
		//console.log("In loader script");
		var s = d.createElement("script");
		tag = d.getElementsByTagName("script")[0];  
		s.src = "https://cdn.iubenda.com/iubenda.js"; 
		tag.parentNode.insertBefore(s,tag);
		//console.log("loading privacy policy");
			if(w.addEventListener){
				w.addEventListener("load", loader, false);
			}
			else if(w.attachEvent){
				w.attachEvent("onload", loader);
			}
			else{
				w.onload = ppLoader;
			}
	}(window, document); 
} 