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
		panel1: {
			default: null,
			type: cc.Node
		},
		panel2: {
			default: null,
			type: cc.Node
		},
		panel3: {
			default: null,
			type: cc.Node
		},
		hintpanel: {
			default: null,
			type: cc.Node
		},
		hintText: {
			default: null,
			type: cc.Label
		},
		numText: {
			default: null,
			type: cc.EditBox
		},
		nameText: {
			default: null,
			type: cc.EditBox
		},
		homeText: {
			default: null,
			type: cc.EditBox
		},
		url:""
	},

	onLoad: function () {
		this.cfg = {
			number: "",
			name: "",
			home: "",
			url: ""
		};
		this.cfg.url = this.url;
		this.check = false;
		this.already = false;
		this.home = false;
		this.start = false;
		cc.director.getPhysicsManager().enabled = true;
	},

	btn0: function () {
		this.panel1.active = true;
	},

	btn1: function () {
		this.panel1.active = false;
		this.panel3.active = true;
	},

	btn1_2: function () {
		this.panel3.active = false;
		this.panel2.active = true;
	},

	btn2: function () {
		this.testInput();
	},

	showHint: function (num) {
		switch (num) {
			case 0: this.hintText.string = "同学你的输入有误哦！要输入正确的12位学号且姓名不能为空，请重新输入吧！"; break;
			case 1: this.hintText.string = "不好意思哦同学，你已经参与过答题了，每个人只有两次机会哦"; break;
			case 2: this.hintText.string = "不好意思哦同学，你的学院名字输错了，请准确的输入学院全称哦，不清楚的话请问问其他的同学和老师吧"; break;
			case 3: this.hintText.string = "游戏规则如下：\n1.本游戏共20道题，你可以通过电脑鼠标或手机触摸画出轨迹操纵小球，收集屏幕下方出现的星星。每收集8个星星，会出现1道题，请慎重作答哟~全部完成20道题后会出现提示，未全部完成就离开则答题作废哦。温馨提示：操作小球的轨迹有长度限制，且屏幕上最多出现6条哟~\n2.每道题5分，满分100分，分值相同时答题所用时间较短者胜出，当分值及用时都相同时，早答题者胜出哟~\n3.每个人有两次答题机会，选较好成绩计为得分。请珍惜每一次答题机会，在认真学习完题库后再开始答题。\n同意以上规则，可以开始答题"; this.start = true; break;
		}
		this.check = false;
		this.already = false;
		this.hintpanel.active = true;
	},

	hideHint: function () {
		if (this.start == true)
			this.startGame();
		else {
			this.hintpanel.active = false;
			this.hintText.string = "";
		}
	},

	testInput: function () {
		var tt = this.numText.string;
		if (tt.slice(0, 3) == "201") {
			var n = Number(tt);
			if (!isNaN(n) && tt.length == 12) {
				this.cfg.number = tt;
			} else
				this.check = true;
		} else
			this.check = true;

		var yy = this.nameText.string;
		if (yy.length > 1) {
			this.cfg.name = this.nameText.string;
		} else
			this.check = true;

		var kk = this.homeText.string;
		var h = [];

		h.push("哲学与社会发展学院");
		h.push("经济学院");
		h.push("政治学与公共管理学院");
		h.push("法学院");
		h.push("文学院");
		h.push("艺术学院");
		h.push("外国语学院");
		h.push("历史文化学院");
		h.push("数学学院");
		h.push("物理学院");
		h.push("化学与化工学院");
		h.push("信息科学与工程学院");
		h.push("计算机科学与技术学院");
		h.push("生命科学学院");
		h.push("材料科学与工程学院");
		h.push("机械工程学院");
		h.push("控制科学与工程学院");
		h.push("能源与动力工程学院");
		h.push("电气工程学院");
		h.push("土建与水利学院");
		h.push("环境科学与工程学院");
		h.push("公共卫生学院");
		h.push("口腔医学院");
		h.push("护理学院");
		h.push("药学院");
		h.push("管理学院");
		h.push("体育学院");
		h.push("软件学院");
		h.push("泰山学堂");
		h.push("国际教育学院");
		h.push("儒学高等研究院");
		h.push("微电子学院");
		h.push("基础医学院");
		h.push("临床医学院");
		h.push("新闻传播学院");

		this.home = false;
		for (let i = 0; i < h.length; i++) {
			if (kk == h[i]) {
				this.home = true;
				this.cfg.home = h[i];
				break;
			}
		}

		//接下来检测是否已经完成过了
		let xhr = cc.loader.getXMLHttpRequest();
		let pa = this;
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
				var response = xhr.responseText;
				if (response.indexOf("success") == -1) {
					pa.already = true;
				} 

				if (pa.check) {
					pa.showHint(0);
				} else if (pa.already)
					pa.showHint(1);
				else if (pa.home==false)
					pa.showHint(2);
				else
					pa.showHint(3);
			}
		};
		xhr.open("POST", this.url+"/server/server.php", true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send("Cty_pe=0&Anum_ber=" + tt);
	},

	startGame: function () {
		module.exports = this.cfg;
		cc.director.loadScene("GameScene");
	},

	update: function (dt) {
		if (this.bg0.position.y > 1960)
			this.bg0.position = cc.v2(0, -1960);
		if (this.bg1.position.y > 1960)
			this.bg1.position = cc.v2(0, -1960);
		if (this.bg2.position.y > 1960)
			this.bg2.position = cc.v2(0, -1960);
	}
});
