const TelegramBot = require('node-telegram-bot-api');
var http = require("https");
/*      WarlockClass NeutralClass */
const token= '1207888092:AAHPopYZY3TfuSLquFMesDcTX3regI62PZA';
const bot = new TelegramBot(token, {
    polling: true
}); 

//#region basics 

bot.on("polling_error", function (err){
    console.log(err);
});

bot.onText(/\/start/,(msg,match) =>{
    bot.sendMessage(msg.chat.id,"Benvenuto nel bot di HeartStone, qui potrai eseguire diverse azioni tra cui: vedere tutte le carte di gioco e non, cercare una singola carta, visualizzare le carte di una certa classe (esempio Paladino, mago ecc...) e tanto altro... ");
});

bot.onText(/\/help/, (msg) => {

    bot.sendMessage(msg.chat.id,"/AllCards - visualizza tutte le carte"+"\n \n"+"/SpellCard - visualizza le carte spell "+ "\n \n"+"/MinionCard - visualizza le carte minion "+ "\n \n"+"/WeaponCard - visualizza le carte weapon "+ "\n \n"+"/HeroCard - visualizza le carte hero "+ "\n \n"+"/FreeRarity - visualizza le carte di rarità free"+"\n \n"+"/CommonRarity - visualizza le carte di rarità common"+"\n \n"+"/RareRarity - visualizza le carte di rarità rare"+"\n \n"+"/EpicRarity - visualizza le carte di rarità epic"+"\n \n"+"/LegendaryRarity - visualizza le carte di rarità legendary"+"\n \n"+"/DruidClass - visualizza le carte di classe druid"+"\n \n"+"/HunterClass - visualizza le carte di classe hunter"+"\n \n"+"/MageClass - visualizza le carte di classe mage"+"\n \n"+"/PaladinClass - visualizza le carte di classe paladin"+"\n \n"+"/PriestClass - visualizza le carte di classe priest"+"\n \n"+"/RogueClass - visualizza le carte di classe rogue"+"\n \n"+"/ShamanClass - visualizza le carte di classe shaman"+"\n \n"+"/WarlockClass - visualizza le carte di classe warlock"+"\n \n"+"/NeutralClass - visualizza le carte di classe neutral"+"\n \n");


});

//#endregion

//#region allcards
bot.onText(/\/AllCards/, (msg) => {
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();
    
});

//#endregion

//#region type
bot.onText(/\/SpellCard/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/types/Spell",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();

    
});

bot.onText(/\/MinionCard/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/types/Minion",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();

    
});

bot.onText(/\/WeaponCard/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/types/Weapon",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();

    
});

bot.onText(/\/HeroCard/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/types/Hero",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();

    
});
//#endregion

//#region rarity

bot.onText(/\/FreeRarity/, (msg) => {

var options = {
	"method": "GET",
	"hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
	"port": null,
	"path": "/cards/qualities/Free",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		bot.sendMessage(msg.chat.id,body.toString());
	});
});

req.end();
    
});

bot.onText(/\/CommonRarity/, (msg) => {

var options = {
	"method": "GET",
	"hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
	"port": null,
	"path": "/cards/qualities/Common",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		bot.sendMessage(msg.chat.id,body.toString());
	});
});

req.end();
    
});

bot.onText(/\/RareRarity/, (msg) => {
    
var options = {
	"method": "GET",
	"hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
	"port": null,
	"path": "/cards/qualities/Rare",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		bot.sendMessage(msg.chat.id,body.toString());
	});
});

req.end();
    
});

bot.onText(/\/EpicRarity/, (msg) => {
    
var options = {
	"method": "GET",
	"hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
	"port": null,
	"path": "/cards/qualities/Epic",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		bot.sendMessage(msg.chat.id,body.toString());
	});
});

req.end();
    
});

bot.onText(/\/LegendaryRarity/, (msg) => {
    
var options = {
	"method": "GET",
	"hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
	"port": null,
	"path": "/cards/qualities/Leggendary",
	"headers": {
		"x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
		"x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		bot.sendMessage(msg.chat.id,body.toString());
	});
});

req.end();
    
});

//#endregion

//#region class
bot.onText(/\/DruidClass/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/classes/Druid",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();
    
});

bot.onText(/\/HunterClass/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/classes/Hunter",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();
    
});

bot.onText(/\/MageClass/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/classes/Mage",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();
    
});

bot.onText(/\/PaladinClass/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/classes/Paladin",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();
    
});

bot.onText(/\/PriestClass/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/classes/Priest",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();
    
});

bot.onText(/\/RogueClass/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/classes/Rogue",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();
    
});

bot.onText(/\/ShamanClass/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/classes/Shaman",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();
    
});

bot.onText(/\/WarlockClass/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/classes/Warlock",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();
    
});

bot.onText(/\/NeutralClass/, (msg) => {
    
    var options = {
        "method": "GET",
        "hostname": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "port": null,
        "path": "/cards/classes/Neutral",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "b774013fe1msh70e59960ba38e80p1ca6bbjsn720a5a56eb53"
        }
    };
    
    var req = http.request(options, function (res) {
        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function () {
            var body = Buffer.concat(chunks);
            bot.sendMessage(msg.chat.id,body.toString());
        });
    });
    
    req.end();
    
});

//#endregion