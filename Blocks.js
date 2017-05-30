Blocks = {
	"Move": {
		"cat": "Motion",
		 "text": [
		 	["text","Move"],
		 	["arg","number","steps","10"],
		 	["text","steps"]
		 ]
	},
	"Turn": {
		"cat": "Motion",
		"text": [
			["text","Turn"],
			["arg","number","deg","15"],
			["text","degrees"]
		]
	},
	"Point": {
		"cat": "Motion",
		"text": [
			["text","Point"],
			["arg","number","deg","0"],
			["text","degrees"]
		]
	},
	"PointTo": {
		"cat": "Motion",
		"text": [
			["text","Point towards"],
			["arg","text","sprite","sprite1"]
		]
	},
	"PointToXY": {
		"cat": "Motion",
		"text": [
			["text", "Point to XY"],
			["arg","text","sprite","sprite1"]
		]
	},
	"Goto": {
		"cat": "Motion",
		"text": [
			["text", "Go to XY"],
			["arg","number","x","0"],
			["arg","number","y","0"]
		]
	},
	"GotoSprite": {
		"cat": "Motion",
		"text": [
			["text", "Go to"],
			["arg","text","sprite","sprite1"]
		]
	},
	"GlideToXY": {
		"cat": "Motion",
		"text": [
			["text", "Glide"],
			["arg","number","secs","1"],
			["text", "secs to XY"],
			["arg","number","x","0"],
			["arg","number","y","0"]
		]
	},
	
	
	"SayFor": {
		"cat": "Looks",
		"text": [
			["text","Say"],
			["arg","text","text to say","Hello!"],
			["text","for"],
			["arg","number","secs","2"],
			["text","secs"]
		]
	}
}