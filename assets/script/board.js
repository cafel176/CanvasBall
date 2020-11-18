 cc.Class({
    extends: cc.Component,

	properties: {
		player: {
			default: null,
			type: cc.Node
		},
		sys: {
			default: null,
			type: cc.Node
		},
		lineWidth: 40,
		strokeColor: cc.color(255, 255, 255),
		deltaTime :0.02,
		distance:40,
		needPoint:10,
		disappearTime:3.0,
		disappearDeltaTime: 3.0,
		totalPath:3
    },

	onLoad: function () {

		// 初始化参数
		this.group = this.addComponent('R.group');
		this.movePath = [];
		this.inMoving = false;
		this.num = 0;
		this.timer = 0;
		this.timer2 = 0;
		this.tt = 0;
		this.pass = [];
		this.total = 0;
		this.manager = this.sys.getComponent("Amanager");

		// 绑定触摸通知事件通知
		cc.eventManager.addListener({
			event: cc.EventListener.TOUCH_ONE_BY_ONE,
			onTouchBegan: this.onTouchBegan.bind(this),
			onTouchMoved: this.onTouchMoved.bind(this),
			onTouchEnded: this.onTouchEnded.bind(this),
		}, this.node);

		cc.director.getPhysicsManager().enabled = true;
		cc.director.getCollisionManager().enabled = true;
	},

	onTouchBegan: function (touch, event) {
		this.startTime = new Date().getTime() / 1000.0;
		if (this.total < this.totalPath)
		{
			// 获取触摸点数据
			var touchLoc = touch.getLocation();
			touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);

			// 从group获取一条Path实例
			var path = this.group.addPath();
			path.fillColor = 'none';

			path.lineWidth = this.lineWidth;
			path.strokeColor = this.strokeColor;

			// 初始化点数组，并赋值开始位置的点
			this.points = [touchLoc];
			var pas = [touchLoc];
			this.movePath.push(pas);

			return true;
		}
	},

	onTouchMoved: function (touch, event) {
		let y = new Date().getTime() / 1000.0;
		if (y - this.startTime < 1.0 && this.total < this.totalPath)
		{
			// 获取触摸点数据
			var touchLoc = touch.getLocation();
			touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);

			// 添加到点数组内
			this.points.push(touchLoc);
			this.movePath[this.movePath.length - 1].push(touchLoc);

			// 获取当前画的path实例，并更新内部展现点数据
			var path = this.group.children[this.group.children.length - 1];
			path.points(this.points);
		}
	},

	onTouchEnded: function (touch, event) {
		if (this.total < this.totalPath)
		{
			// 获取触摸点数据
			var touchLoc = touch.getLocation();
			touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);

			// 添加到点数组内
			this.points.push(touchLoc);
			this.movePath[this.movePath.length - 1].push(touchLoc);

			var path = this.group.children[this.group.children.length - 1];
			path.points(this.points);
			path.dashOffset = 0;
			path.dashArray = [path.getTotalLength()];
			this.total += 1;
		}
	},
	
	update: function (dt)
	{
		this.timer += dt;
		if (this.inMoving)
		{
			if (this.timer > this.deltaTime) {
				let ii = this.pass[this.num].x - this.player.position.x;
				if (ii > 0) {
					this.player.rotation += 10;
				} else {
					this.player.rotation -= 10;
				}
				let x = this.pass[this.num].x < -530 ? -530 : this.pass[this.num].x > 530 ? 530 : this.pass[this.num].x;
				let y = this.pass[this.num].y < -900 ? -900 : this.pass[this.num].y > 930 ? 930 : this.pass[this.num].y;
				this.player.position = cc.v2(x,y);
				this.num +=1;
				this.timer = 0;

				if (this.num >= this.pass.length) {
					this.pass = [];
					this.inMoving = false;
				}
			}
		}
		else
		{
			for (var i = this.movePath.length-1; i >=0 ; i--)
			{
				let check = false;
				for (var j = 0; j < this.movePath[i].length; j++)
				{
					var t = cc.v2(this.movePath[i][j].x - this.player.position.x, this.movePath[i][j].y - this.player.position.y);
					if (t.mag() < this.distance)
					{
						this.pass = this.movePath[i].slice(j);
						check = true;
						break;
					}
				}
				if (check) {
					if (this.pass.length >= this.needPoint) {
						this.inMoving = true;
						this.num = 0;
						this.timer = 0;
						break;
					}
				}
			}
		}
		if (this.group.children.length > 0)
		{
			this.timer2 += dt;
			if (this.timer2 > this.disappearTime) {
				// 时间递增
				this.tt += dt;

				if (this.tt <= this.disappearDeltaTime) {
					this.group.children[0].dashOffset = this.group.children[0].getTotalLength() * this.tt / this.disappearDeltaTime;
					this.group.children[0]._dirty = true;
					let f = Math.floor(this.movePath[0].length * (1 - this.tt / this.disappearDeltaTime) );
					while (this.movePath[0].length>f)
						this.movePath[0].shift();
				}
				else {
					this.group.children[0].dashOffset = this.group.children[0].getTotalLength();
					this.group.children[0]._dirty = true;
					this.group.children.shift();
					this.movePath.shift();
					this.timer2 = 0;
					this.tt = 0;
					this.total -= 1;
				}
			}
		}
	},

	onCollisionExit: function (other, self) {
		if (other.tag == 2) {
			this.manager.starPool.put(other.node);
		}
	},

	clean: function () {
		this.group.ctx.clear();
		this.group.children = [];
		this.movePath = [];
		this.inMoving = false;
		this.pass = [];
		this.num = 0;
		this.tt = 0;
		this.timer = 0;
		this.timer2 = 0;
		this.total = 0;
	}
	
});
