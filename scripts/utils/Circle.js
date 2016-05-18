function getAngle(r,angle,x0,y0){
	var x1 = x0 + r*Math.cos(angle*Math.PI/180);
	var y1 = y0 + r*Math.sin(angle*Math.PI/180);
	return [x1.toFixed(2),y1.toFixed(2)];
}

module.exports = function getPositions(count,r,angle){
	var pos = [],
		x0 = r,
		y0 = r;
	var step = 360/count;
	for(var i = 0;i<count;i++){
		pos.push(getAngle(r,i*step+angle,x0,y0));
	}
	return pos;
}