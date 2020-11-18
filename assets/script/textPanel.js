
cc.Class({
    extends: cc.Component,

	properties: {
		ALabel: {
			default: null,
			type: cc.Label
		},

		Btn: {
			default: null,
			type: cc.Node
		},

		speed:0.1
    },

	onEnable() {
		if (this.ALabel.string.length > 0) {
			var talkArray = this.ALabel.string.split("");
			this.ALabel.string = "";
			var talkText = "";

			this.schedule(function () {
				talkText += talkArray.shift();
				this.ALabel.string = talkText;
				if (talkArray.length <= 0) {
					this.Btn.active = true;
				}
			}, this.speed, (talkArray.length - 1));
		}
	},

	onDisable() {
		this.Btn.active = false;
	}

});
