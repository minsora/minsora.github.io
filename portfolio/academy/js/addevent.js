function addEvent(obj,evntName,fncName){
	if(obj.addEventListener){
		obj.addEventListener(evntName,fncName,false);
	}else if(obj.attachEvent){
		obj.attachEvent("on"+evntName,fncName);
	}
}