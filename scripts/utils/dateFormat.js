function dateFormat(timestamp){
	this.formatDate = this.init(timestamp);
}

dateFormat.prototype.init = function(timestamp){
	//var date;
	if(Number.isNaN(Number(timestamp))===false){
		return new Date(Number(timestamp));
	}else{
		return new Date(timestamp);
	}
	//return date;
	/*return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); */
}

dateFormat.prototype.getDateOnly = function(){
	//return this.formatDate.split(" ")[0];
	console.log(this.formatDate.toLocaleDateString()+"!");
	return this.formatDate.toLocaleDateString();
}

dateFormat.prototype.getTimeOnly = function(){

	//return this.formatDate.split(" ")[1];
	return this.formatDate.toLocaleTimeString('zh-CN',{hour12:false});
}
dateFormat.prototype.getYear = function(){

	//return this.formatDate.split(" ")[1];
	return this.formatDate.getFullYear();
}
dateFormat.prototype.getYearAndMonth = function(){

	//return this.formatDate.split(" ")[1];
	return this.formatDate.getFullYear() + '/'+(this.formatDate.getMonth()+1);
}
dateFormat.prototype.getDateTimeServer = function(){
	var date = this.formatDate;

	return date.toLocaleDateString().replace(/\//g,'-') + " "+date.toLocaleTimeString('zh-CN',{hour12:false});

}

module.exports = dateFormat;