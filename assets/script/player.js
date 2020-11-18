cc.Class({
    extends: cc.Component,

	properties: {
		sys: {
			default: null,
			type: cc.Node
		},
		qusManager: {
			default: null,
			type: cc.Node
		}
	},

	onLoad: function () {
		this.manager = this.sys.getComponent("Amanager");
		this.qusmanager = this.qusManager.getComponent("question");
	},

	onCollisionEnter: function (other, self) {
		if (other.tag == 2) {
			this.manager.changeStarNum();
			this.manager.starPool.put(other.node);
		} else if (other.tag > 10) {
			this.qusmanager.checkAnswer(other.tag);
			this.qusmanager.stars[other.tag - 11].active = false;
		}
	}

});
