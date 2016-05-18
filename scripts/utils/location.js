var superW = $("#map-module").width();
var superH = $("#map-module").height();
console.log(superH);
var pointX = superW/2;
var pointY = superH/2;

module.exports.location1 = {
	l1:{
		x:pointX+20,
		y:pointY+20
	}
};
module.exports.location3 = {
	l1:{
		x:pointX+20,
		y:pointY+20
	},
	l2:{
		x:pointX-40,
		y:pointY+20
	},
	l3:{
		x:pointX-80,
		y:pointY+20
	}
}
module.exports.location2 = {
	l1:{
		x:pointX+20,
		y:pointY+20
	},
	l2:{
		x:pointX-40,
		y:pointY+20
	}
}
