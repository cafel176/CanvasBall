cc.Class({
    extends: cc.Component,

	properties: {
		bg0: {
			default: null,
			type: cc.Node
		},
		bg1: {
			default: null,
			type: cc.Node
		},
		bg2: {
			default: null,
			type: cc.Node
		},
		star: {
			default: null,
			type: cc.Prefab
		},
		hint: {
			default: null,
			type: cc.Node
		},
		audioSource: {
			type: cc.AudioSource,
			default: null
		},
		pausePanel: {
			default: null,
			type: cc.Node
		},
		ban: {
			default: null,
			type: cc.Node
		},
		correctText: {
			default: null,
			type: cc.Label
		},
		qusText: {
			default: null,
			type: cc.Label
		},
		starText: {
			default: null,
			type: cc.Label
		},
		totalqusText: {
			default: null,
			type: cc.Label
		},
		totalstarText: {
			default: null,
			type: cc.Label
		},
		qusbar: {
			default: null,
			type: cc.ProgressBar
		},
		starbar: {
			default: null,
			type: cc.ProgressBar
		},
		spawnTime:0.5,
		waitTime:1.0,
		spawnNum: 5,//一轮生成星星个数
		needNum: 15,//出现问题需要收集的星星个数
		qusNum: 30,//需要回答的问题数
		totalQusNum: 211,//问题总数
		can: true,
		music: false
    },

	onLoad: function () {
		var main = require("mainScene");
		this.correct = 0;
		this.time = 0;
		this.end = false;
		this.number = main.number;
		this.name = main.name;
		this.home = main.home;
		this.url = main.url;
		this.allNum = this.qusNum;
		this.totalqusText.string = "/" + this.qusNum.toString();
		this.totalstarText.string = "/" + this.needNum.toString();

		this.starNum = 0;
		this.spawn = false;
		this.timer = 0;
		this.num = 0;
		this.qusmanager = this.node.getComponent("question");
		this.connect = false;
		this.conTimer = 0;

		this.starPool = new cc.NodePool();
		let initCount = 5;
		for (let i = 0; i < initCount; ++i) {
			let stars = cc.instantiate(this.star); // 创建节点
			this.starPool.put(stars); // 通过 putInPool 接口放入对象池
		}
		if (this.music)
			this.audioSource.play();
	},

	update: function (dt) {

		this.timer += dt;
		if (!this.end)
			this.time += dt;
		if (this.bg0.position.y > 2960)
			this.bg0.position = cc.v2(540, -1040);
		if (this.bg1.position.y > 2960)
			this.bg1.position = cc.v2(540, -1040);
		if (this.bg2.position.y > 2960)
			this.bg2.position = cc.v2(540, -1040);

		if (this.starNum >= this.needNum) {
			this.starNum = 0;
			this.starText.string = this.starNum.toString();
			this.starbar.progress = (this.starNum / this.needNum).toFixed(1);
			this.can = false;
			this.qusNum -= 1;
			this.qusText.string = (this.allNum - this.qusNum).toString();
			this.qusbar.progress = ((this.allNum-this.qusNum) / this.allNum).toFixed(1);
			this.qusmanager.spawnQus();
		}

		if (this.can)
		{
			if (this.timer > this.waitTime) {
				this.spawn = true;
				this.timer = 0;
			}

			if (this.spawn) {
				if (this.timer > this.spawnTime) {
					this.num += 1;
					this.spawnStar();
					if (this.num >= this.spawnNum) {
						this.spawn = false;
						this.num = 0;
					}
					this.timer = 0;
				}
			}
		}

		if (this.connect) {
			this.conTimer += dt;
			if (this.conTimer > 3) {
				this.conTimer = 0;
				this.Aconnect();
			}
		}
	},

	spawnStar: function () {
		let star = null;
		if (this.starPool.size() > 0) { // 通过 size 接口判断对象池中是否有空闲的对象
			star = this.starPool.get();
		} else { // 如果没有空闲对象，也就是对象池中备用对象不够时，我们就用 cc.instantiate 重新创建
			star = cc.instantiate(this.star);
		}
		star.parent = this.node; 
		let r = Math.random() * 800 -400;
		star.position = cc.v2(r, -1100);
	},

	endGame: function () {
		this.end = true;
		this.Aconnect();
		this.connect = true;
		this.conTimer = 0;
	},

	pause: function (event, customEventData) {
		if (customEventData == 0) {
			this.pausePanel.active = true;
			cc.director.pause();
		} else {
			this.pausePanel.active = false;
			cc.director.resume();
		}
	},

	setMusic: function () {
		if (this.music) {
			this.audioSource.pause();
			this.music = false;
			this.ban.active = true;
		} else {
			this.audioSource.play();
			this.music = true;
			this.ban.active = false;
		}
	},

	changeStarNum:function() {
		this.starNum += 1;
		this.starText.string = this.starNum.toString();
		this.starbar.progress = (this.starNum / this.needNum).toFixed(1);
	},

	back: function () {
		cc.director.loadScene("MainScene");
	},

	Aconnect: function () {
		let xhr = cc.loader.getXMLHttpRequest();
		let pa = this;
		let yy = (Math.floor(this.time) + 3745 * 517) % 28396;
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
				pa.connect = false;
				var response = xhr.responseText;
				if (response.indexOf("success")!=-1) {
					pa.hint.active = true;
					pa.correct = pa.correct * 5;
					pa.correctText.string = pa.correct.toString();
				}
			}
		};
		xhr.open("POST", this.url + "/server/server.php", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send("Cty_pe=1&Anum_ber=" + this.number + "&Fna_me=" + this.name + "&Ecor_rect=" + this.correct + "&Lti_me=" + this.time + "&Mho_me=" + this.home + "&Wche_ck=" + yy);
	}
});
