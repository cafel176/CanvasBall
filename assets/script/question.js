cc.Class({
    extends: cc.Component,

	properties: {
		qus: {
			default: null,
			type: cc.Node
		},
		qusLabel: {
			default: null,
			type: cc.Label
		},
		stars: {
			default: [],
			type: [cc.Node]
		},
		board: {
			default: null,
			type: cc.Node
		}
    },

	onLoad: function () {
		this.manager = this.node.getComponent("Amanager");
		let p = this.manager.totalQusNum;
		this.array = new Array(p);
		for (let i = 0; i < p; i++)
			this.array[i] = i;
	},

	spawnQus: function () {
		let r = Math.floor(Math.random() * (this.array.length - 1));
		this.stars[0].active = true;
		this.stars[1].active = true;
		this.stars[2].active = true;
		this.stars[3].active = true;
		this.setMsg(this.array[r]);
		this.array.splice(r, 1);
	},

	//第二个参数，1,2,3,4分别对应ABCD,多选题则采用12或123或1234等大于10的数字，判断题则1,2对应false,true
	//最后一个参数是题目类型，0-2分别是，判断，单选，多选
	setMsg: function (num) {
		this.q = [];
		switch (num) {
			case 0: this.q.push("征信机构对个人不良信息的保存期限，自不良行为或者事件终止之日起为( )年。\nA.5\nB.4\nC.3\nD.2");
				this.q.push(1); this.q.push(1);
				break;
			case 1: this.q.push("征信机构对个人不良信息的保存期限，超过5年的，应当（）。\nA.进档保存\nB.不作处理\nC.删除\nD.纸质保存");
				this.q.push(3); this.q.push(1);
				break;
			case 2: this.q.push("信息主体可以向征信机构查询自身信息，个人信息主体有权每年（）次免费获取本人的信用报告。\nA.1\nB.2\nC.3\nD.4");
				this.q.push(2); this.q.push(1);
				break;
			case 3: this.q.push("向征信机构查询个人信息的，应当取得信息主体本人的（）并约定用途。\nA.认可\nB.签署授权书\nC.口头同意\nD.书面同意");
				this.q.push(4); this.q.push(1);
				break;
			case 4: this.q.push("个人征信系统身份信息核查结果来自于（）。\nA.民政部\nB.公安部\nC.人民银行\nD.商业银行");
				this.q.push(2); this.q.push(1);
				break;
			case 5: this.q.push("个人信用报告中的本人声明是客户本人对信用报告中（）所做的说明。\nA.信息来源\nB.查询授权\nC.某些无法核实的异议\nD.已经更正的异议");
				this.q.push(3); this.q.push(1);
				break;
			case 6: this.q.push("个人信用报告中的异议标注是指（）。\nA.因技术原因无法及时对异议事项进行更正时所做的特别说明。\nB.商业银行异议处理用户针对信用报告中异议信息所做的标注或因技术原因无法及时对异议事项进行更正时所做的特别说明。\nC.征信中心异议处理人员针对信用报告中异议信息所做的标注\nD.征信中心异议处理人员针对信用报告中异议信息所做的标注或因技术原因无法及时对异议事项进行更正时所做的特别说明。");
				this.q.push(4); this.q.push(1);
				break;
			case 7: this.q.push("查询历史反映了客户信用报告被查询的历史记录，显示何机构或何人在何时以何种理由查询过该人的信用报告，以保证客户信息的（）。\nA.有效性\nB.安全和保密性\nC.及时性\nD.正确性");
				this.q.push(2); this.q.push(1);
				break;
			case 8: this.q.push("不属于商业银行用户个人信用报告查询原因的是（）。\nA.贷后管理\nB.客户介入\nC.担保资格审查\nD.异议查询");
				this.q.push(2); this.q.push(1);
				break;
			case 9: this.q.push("以下不属于个人信用报告中个人基本信息的是（）。\nA.公积金信息\nB.个人身份信息\nC.居住信息\nD.职业信息");
				this.q.push(1); this.q.push(1);
				break;
			case 10: this.q.push("个人信用报告系统中个人基本信息来源于（）。\nA.人民银行\nB.公安部\nC.商业银行或其他机构\nD.商业银行");
				this.q.push(3); this.q.push(1);
				break;
			case 11: this.q.push("个人信用报告中最多会展示客户最新的（）条不同的居住信息。\nA.3\nB.4\nC.5\nD.6");
				this.q.push(3); this.q.push(1);
				break;
			case 12: this.q.push("个人信用报告中最多会展示客户最新的（）条不同的职业信息。\nA.2\nB.3\nC.4\nD.5");
				this.q.push(4); this.q.push(1);
				break;
			case 13: this.q.push("个人信用报告中银行信贷汇总信息是对客户所有（）的汇总。\nA.非销户/非结清贷款和信用卡账户\nB.非销户/非结清贷款\nC.信号用卡账户\nD.以上都不对");
				this.q.push(1); this.q.push(1);
				break;
			case 14: this.q.push("个人信用报告中授信额度指（）。\nA.客户所有非销户/非结清贷款的共享授信额度之和\nB.客户所有非销户/非结清贷款和信用卡账户的共享授信额度之和\nC.客户所有信用卡账户的共享授信额度之和\nD.以上都不多");
				this.q.push(2); this.q.push(1);
				break;
			case 15: this.q.push("个人信用报告中信用卡汇总信息是对客户所有（）信息的汇总。\nA.非销户贷记卡和准贷记卡\nB.贷记卡和准贷记卡\nC.非销户贷记卡、准贷记卡和借记卡\nD.贷记卡、准贷记卡和借记卡");
				this.q.push(1); this.q.push(1);
				break;
			case 16: this.q.push("个人信用报告中的贷记卡信用额度是指（）。\nA.是按照客户统计的被征信人所有贷记卡信用额度的合计\nB.是按照客户统计的被征信人所有贷记卡和准贷记卡信用额度的合计\nC.是按照贷记卡类型统计的被征信人所有贷记卡和准贷记卡信用额度的合计\nD.是按照贷记卡类型统计的被征信人所有贷记卡信用额度的合计");
				this.q.push(4); this.q.push(1);
				break;
			case 17: this.q.push("个人信用报告准贷记卡汇总信息准贷记卡透支180天以上未付余额中的透支天数是从（）开始统计。\nA.首透日\nB.结息日\nC.到期日\nD.以上都不是");
				this.q.push(1); this.q.push(1);
				break;
			case 18: this.q.push("个人信用报告准贷记卡汇总信息准贷记卡透支180天以上未付余额是指（）。\nA.全部透支余额\nB.全部透支余额及其产生的利息之和\nC.全部透支金额\nD.全部透支金额及其产生的利息之和");
				this.q.push(2); this.q.push(1);
				break;
			case 19: this.q.push("个人信用报告中为他人贷款担保汇总信息，是从（）获取的详细记录被征信人为他人贷款担保的汇总信息。\nA.金融机构\nB.商业银行\nC.人民银行\nD.财政部");
				this.q.push(1); this.q.push(1);
				break;
			case 20: this.q.push("个人信用报告中为他人担保金额合计是被征信人为他人贷款业务进行担保的担保合同金额的合计，在一定程度上反映了被征信人的（）。\nA.债务\nB.或有债务\nC.担保能力\nD.以上都不对");
				this.q.push(2); this.q.push(1);
				break;
			case 21: this.q.push("《个人信用信息基础数据库管理暂行办法》自（）开始施行。\nA.二零零四年十月一\nB.二零零五年十月一日\nC.二零零六年十月一日\nD.二零零七年十月一日");
				this.q.push(2); this.q.push(1);
				break;
			case 22: this.q.push("（）负责组织商业银行建立个人信用信息基础数据库。\nA.中国人民银行\nB.银监会\nC.保监会\nD.证监会");
				this.q.push(1); this.q.push(1);
				break;
			case 23: this.q.push("《个人信用信息基础数据库管理暂行办法》中个人信用信息不包括（）。\nA.个人基本信息\nB.个人信贷交易信息\nC.个人家庭财产信息\nD.反映个人信用状况的其他信息");
				this.q.push(3); this.q.push(1);
				break;
			case 24: this.q.push("以下哪种情况,商业银行不可以向个人信用数据库查询个人信用报告。\nA.审核个人贷款申请\nB.审核个人贷记卡、准贷记卡申请\nC.审核个人作为担保人\nD.代理小额贷款公司审核个人信用");
				this.q.push(4); this.q.push(1);
				break;
			case 25: this.q.push("除（）外,商业银行查询个人信用报告时应当取得被查询人的书面授权。\nA.审核个人贷款申请的\nB.审核个人贷记卡、准贷记卡申请的\nC.审核个人作为担保人的\nD.对已发放的个人信贷进行贷后风险管理的");
				this.q.push(4); this.q.push(1);
				break;
			case 26: this.q.push("个人认为本人信用报告中的信用信息存在错误时,可以通过（）中国人民银行征信管理部门或直接向征信服务中心提出书面异议申请。\nA.个人所在地\nB.任意地区\nC.信息错误发生地区\nD.报送错误信息银行总部所在地区");
				this.q.push(1); this.q.push(1);
				break;
			case 27: this.q.push("对于住房公积金管理中心自行核算，商业银行提供放款和还款渠道的个人住房公积金贷款，（）负责报送其征信数据\nA.住房公积金管理中心\nB.商业银行\nC.社保局\nD.人民银行征信管理中心");
				this.q.push(1); this.q.push(1);
				break;
			case 28: this.q.push("《山东省社会信用体系建设规划(2015—2020年)》总体目标：以（）年初见成效、六年基本完善为总体目标。\nA.3\nB.4\nC.5\nD.6");
				this.q.push(2); this.q.push(1);
				break;
			case 29: this.q.push("《山东省社会信用体系建设规划(2015—2020年)》总体目标：2015年至（     ）年为基础建设阶段。\nA.2016\nB.2018\nC.2020\nD.2022");
				this.q.push(2); this.q.push(1);
				break;
			case 30: this.q.push("《山东省社会信用体系建设规划(2015—2020年)》总体目标：到（     ）年，信用法规制度和标准体系健全完善，覆盖全省的公共信用信息平台功能齐备、运行良好，基本实现与京津冀、长三角、珠三角等发达地区信用信息的互为查询，守信激励和失信惩戒机制全面有效运行，信用服务业成为我省现代服务业的重要组成部分，经济社会发展信用环境明显改善，市场和社会满意度大幅提高。\nA.2018\nB.2020\nC.2022\nD.2024");
				this.q.push(2); this.q.push(1);
				break;
			case 31: this.q.push("社会保险信息纳入企业和个人征信系统，交换数据从（）中提取。\nA.住房和城乡建设部金保工程联网数据\nB.民政部金保工程联网数据\nC.人力资源和社会保障部金保工程联网数据\nD.中国人民银行金保工程联网数据");
				this.q.push(3); this.q.push(1);
				break;
			case 32: this.q.push("社会保险信息纳入企业和个人征信系统后， 信息交换的内容中由人民银行提供的是（）。\nA.养老保险的单位参保和欠费信息\nB.应参保未参保单位名单\nC.个人参保和缴费信息\nD.贷款单位名单");
				this.q.push(4); this.q.push(1);
				break;
			case 33: this.q.push("社会保险信息纳入企业和个人征信系统，人民银行有关分支机构工作内容不包括（）。\nA.做好对商业银行使用社保数据的培训工作\nB.做好对商业银行使用社保数据的合规检查工作\nC.由于商业银行使用不当而引发的纠纷，由人民银行负责\nD.对商业银行使用社保数据过程发现的问题，及时解决");
				this.q.push(3); this.q.push(1);
				break;
			case 34: this.q.push("《征信管理条例》自（）开始实施。\nA.二〇一一年三月十五日\nB.二〇一二年三月十五日\nC.二〇一三年三月十五日\nD.二〇一四年三月十五日");
				this.q.push(3); this.q.push(1);
				break;
			case 35: this.q.push("下列情况的“一次告知，长久沿用”沿用时限设定为“永久沿用”的是（）。\nA.对有充分证明材料证实借款人已出国定居或移居港澳台地区的\nB.对于借款人服刑且无其他承接人的,并取得其相关判决书等证明材料的\nC.对于依照《中华人民共和国民法通则》宣告失踪或死亡,我行依法对其财产或遗产进行清偿,并对担保人进行追偿后未能收回的债权,在取得相关死亡或失踪证明,以及已追偿的相关证明后\nD.对于已核销的贷款,已无法联系到借款人,并有行内已核销证据的");
				this.q.push(3); this.q.push(1);
				break;
			case 36: this.q.push("对于依照《中华人民共和国民法通则》宣告失踪或死亡,中国银行依法对其财产或遗产进行清偿,并对担保人进行追偿后未能收回的债权,在取得相关死亡或失踪证明,以及已追偿的相关证明后,“一次告知，长久沿用”沿用时限可设定为（）。\nA.一年内\nB.两年内\nC.三年内\nD.永久沿用");
				this.q.push(4); this.q.push(1);
				break;
			case 37: this.q.push("对于确实无法联系到借款人(如助学贷款学生毕业后不知去向、借款人长期外出打工未告知中国银行新的联系方式).并有邮局的挂号信或快件的回退件,或通过省级报刊公告催收的，“一次告知，长久沿用”沿用时限可设定为（）。\nA.一年内\nB.两年内\nC.三年内\nD.永久沿用");
				this.q.push(2); this.q.push(1);
				break;
			case 38: this.q.push("对有充分证明材料证实借款人日,已出国定居或移居港澳台地区的，“一次告知，长久沿用”沿用时限可设定为（）。\nA.一年内\nB.两年内\nC.三年内\nD.永久沿用");
				this.q.push(2); this.q.push(1);
				break;
			case 39: this.q.push("对于借款人服刑且无其他承接人的,并取得其相关判决书等证明材料的，“一次告知，长久沿用”沿用时限可设定为（）。\nA.一年内\nB.两年内\nC.三年内\nD.永久沿用");
				this.q.push(2); this.q.push(1);
				break;
			case 40: this.q.push("对于已核销的贷款,已无法联系到借款人,并有行内已核销证据的，“一次告知，长久沿用”沿用时限设定为（）。\nA.一年内\nB.两年内\nC.三年内\nD.永久沿用");
				this.q.push(2); this.q.push(1);
				break;
			case 41: this.q.push("人民银行分支机构收到征信投诉，投诉人为自然人的，应当登记其（）。\nA.姓名\nB.年龄\nC.有效身份证件\nD.性别");
				this.q.push(3); this.q.push(1);
				break;
			case 42: this.q.push("人民银行分支机构收到征信投诉，投诉人为法人或其他组织的，登记有效的机构设立文件、经办人身份证件，留存（）。\nA.身份证\nB.指纹\nC.户口本\nD.介绍信");
				this.q.push(4); this.q.push(1);
				break;
			case 43: this.q.push("投诉人委托代理人进行投诉的，人民银行分支机构应当登记代理人的有效身份证件（或有效机构设立文件），留存（）。\nA.身份证\nB.指纹\nC.户口本\nD.授权委托书");
				this.q.push(4); this.q.push(1);
				break;
			case 44: this.q.push("投诉人所在地与被投诉机构所在地不一致的，投诉人可以向（）分支机构投诉\nA.总行\nB.分行\nC.支行\nD.任一人民银行");
				this.q.push(4); this.q.push(1);
				break;
			case 45: this.q.push("投诉人、被投诉机构对投诉处理结果持有异议的，可以向做出投诉处理决定的人民银行分支机构（）机构申请复议。\nA.平级\nB.下一级\nC.上一级\nD.高级");
				this.q.push(3); this.q.push(1);
				break;
			case 46: this.q.push("人民银行省会（首府）城市中心支行以上分支机构应当于每季度第一个月10日前向人民银行（）报送辖区内上季度的征信投诉办理情况。\nA.支行\nB.分行\nC.总行\nD.任一行");
				this.q.push(3); this.q.push(1);
				break;
			case 47: this.q.push("投诉人所在地与被投诉机构所在地（）的，投诉人可以向任一人民银行分支机构投诉。\nA.一致\nB.相同\nC.接近\nD.不一致");
				this.q.push(4); this.q.push(1);
				break;
			case 48: this.q.push(" 信息主体可以向征信机构查询自身信息。个人信息主体有权每年（  ）次免费获取本人的信用报告。\nA.1次\nB.2次\nC.3次\nD.4次");
				this.q.push(2); this.q.push(1);
				break;
			case 49: this.q.push("目前，征信机构对个人不良信息的保存期限，自不良行为或者事件终止之日起为（  ）年。\nA.5\nB.7\nC.10\nD.15");
				this.q.push(1); this.q.push(1);
				break;
			case 50: this.q.push("下列对负面记录保存期限的阐述中，不正确的是：\nA.负面记录的保存期是从该笔贷款还清之日开始计算，一般是终身保留。\nB.按照美国的做法，一般的负面信息保留七年，破产的、特别严重和明显恶意的负面信息保留十年。\nC.超过保留期限，负面信息就将在信用报告中被删除。\nD.负面记录会影响信息主体的融资成本和融资便利。");
				this.q.push(1); this.q.push(1);
				break;
			case 51: this.q.push("（  ）有权对各行个人信用报告查询的合法、合规性进行检查。\nA.中国人民银行信贷部门 \nB.中国人民银行综合部门\nC.中国人民银行征信管理部门\nD.中国人民银行会计部门");
				this.q.push(3); this.q.push(1);
				break;
			case 52: this.q.push("信用报告的查询记录记载了个人信用报告在过去（  ）被查询的情况。\nA.一年内\nB.二年内\nC.三年内\nD.四年内");
				this.q.push(2); this.q.push(1);
				break;
			case 53: this.q.push("以下哪类信息不是个人信用信息基础数据采集和保存的信息：\nA.借款信息\nB.信用卡信息 \nC.担保信息\nD.存款信息");
				this.q.push(4); this.q.push(1);
				break;
			case 54: this.q.push("征信机构对个人不良信息的保存期限从什么时候开始计算？\nA.从还款日的第二日开始计算\nB.从宽限期结束之日开始计算\nC.自不良行为或者事件终止之日开始计算\nD.从银行催款日开始计算");
				this.q.push(3); this.q.push(1);
				break;
			case 55: this.q.push("《金融信用信息基础数据库管理暂行办法》规定：个人信贷交易信息是指商业银行提供的自然人在个人贷款、（  ）、准贷记卡、担保等信用活动中形成的交易记录\nA.借记卡 \nB.贷记卡\nC.结算\nD.存款");
				this.q.push(2); this.q.push(1);
				break;
			case 56: this.q.push(" 逾期指到还款日最后期限仍未足额还款。以下情况不属于逾期行为的是：\nA.比到期还款日晚一两天还款；\nB.过了到期日，银行工作人员电话催缴后，客户还清了欠款；\nC.信用卡到期未还全额，但是按期归还了最低还款额；\nD.客户已经在到期还款日之前还款，但由于不清楚应还的具体金额，没有足额还款。");
				this.q.push(3); this.q.push(1);
				break;
			case 57: this.q.push(" 个人信用数据库是否采集配偶的信息？\nA.采集\nB.不采集\nC.以夫妻共同的名义发生信贷关系的情况下才会采集\nD.涉及到夫妻共同财产的情况下才会采集");
				this.q.push(1); this.q.push(1);
				break;
			case 58: this.q.push("“本人声明”的真实性由（  ）负责。\nA.异议受理人员\nB.异议申请人\nC.商业银行\nD.征信中心");
				this.q.push(2); this.q.push(1);
				break;
			case 59: this.q.push("信用报告中以下哪个时间对应着24个月还款状态里最近1个月的还款状态的时间？（  ）\nA.开户时间\nB.信息获取时间\nC.结算年月\nD.查询时间");
				this.q.push(2); this.q.push(1);
				break;
			case 60: this.q.push("信用报告中的信息获取时间指: （  ）\nA.该信息被载入金融信用信息基础数据库的时间\nB.该记录的结算应还款日期\nC.报文生成日期\nD.报文上报日期");
				this.q.push(1); this.q.push(1);
				break;
			case 61: this.q.push("委托代理人提出异议申请的，代理人应提交的材料不包括（   ）。\nA.委托人和代理人的有效身份证件\nB.授权委托书\nC.异议申请表\nD.委托人信用报告");
				this.q.push(3); this.q.push(1);
				break;
			case 62: this.q.push("中国人民银行征信中心的个人征信系统异常查询监测子系统的非工作时段查询这一监测指标的定义是指（   ）\nA.用户每日19:00-次日7:00期间进行查询\nB.用户每日20:00-次日7:00进行查询\nC.用户每日21：00-次日6:00进行查询\nD.用户每日22:00-次日6:00进行查询");
				this.q.push(4); this.q.push(1);
				break;
			case 63: this.q.push("贷款明细信息中累计逾期期数的含义。（  ）\nA.自贷款开立以来，逾期次数的总和，逾期一期算作违约一次。\nB.最高逾期期数\nC.当前逾期期数\nD.历史最大的连续逾期期数");
				this.q.push(1); this.q.push(1);
				break;
			case 64: this.q.push("个人信用报告负面记录的保存期限从什么时候开始计算？(      )\nA.从贷款之日起计算\nB.从逾期之日起计算\nC.从该笔贷款还清之日开始计算\nD.从负面记录形成之日计算");
				this.q.push(3); this.q.push(1);
				break;
			case 65: this.q.push("网上查询个人信用报告的身份验证方式不包括（    ）。\nA.手机验证码方式验证\nB.回答问题方式验证\nC.数字证书方式验证\nD.银行卡方式验证");
				this.q.push(1); this.q.push(1);
				break;
			case 66: this.q.push("信用报告被人们喻为(      )。\nA.经济快车 \nB.经济身份证\nC.经济名牌 \nD.以上都是");
				this.q.push(2); this.q.push(1);
				break;
			case 67: this.q.push("负面记录后，个人可以采取哪些措施修复自己的信用记录？(      )\nA.找人修改不良记录\nB.永远不再发生贷款\nC.树立良好的信用意识，不再发生新的不良信用记录\nD.不再使用信用卡");
				this.q.push(3); this.q.push(1);
				break;
			case 68: this.q.push("下列关于网上查询个人信用报告说法正确的是（   ）\nA.身份验证通过后于次日生成信用报告\nB.仅限于山东、江苏、北京等9个试点省市可以查询\nC.网上查询和现场查询的信用报告内容不一致\nD.对于已经注册的老用户再次查询本人信用报告时，不需进行身份验证");
				this.q.push(1); this.q.push(1);
				break;
			case 69: this.q.push("《征信业管理条例》规定可以不经信息主体同意而查询信用报告的情形不包括（    ）\nA.司法机关在侦查刑事案件时\nB.商业银行对信贷客户准入时\nC.司法机关审理刑事案件时\nD.部分有执法权的行政机构在调查事件相关资料时");
				this.q.push(2); this.q.push(1);
				break;
			case 70: this.q.push("为保证互联网查询个人信用报告的安全性，个人已获得的查询结果仅在人民银行网站保存（   ）天，到期后系统自动删除。\nA.3\nB.5\nC.7\nD.10");
				this.q.push(3); this.q.push(1);
				break;
			case 71: this.q.push("防范洗钱活动要做到以下（）\nA.保管好自己的身份证件和账户\nB.出租出借自己的账户\nC.用自己的账户替他人提现\nD.出租出借自己的身份证和账户");
				this.q.push(1); this.q.push(1);
				break;
			case 72: this.q.push("银行卡丢失后，应该采取（）\nA.迅速通过电话拨打银行服务电话，进行口头挂失，实现该账户的立即停止支付。口头挂失后请您赶紧持本人的有效身份证件到发卡行的营业网点办理挂失手续，一段时间后就能获得一张新卡。\nB.到公安局报案\nC.旧的不去新的不来\nD.去银行办新卡");
				this.q.push(1); this.q.push(1);
				break;
			case 73: this.q.push("信用卡恶意透支（）\nA.对信用卡，银行允许善意透支，不过有额度和时间的限制，如果超出了限制，银行就可能认为您在恶意透支，轻则罚款，重则让您吃官司\nB.信用卡可根据自己的还款能力随意还款\nC.对信用记录无影响\nD.信用卡不能透支");
				this.q.push(1); this.q.push(1);
				break;
			case 74: this.q.push("防范银行卡使用风险（）\nA.拿到银行卡时，应依据金融机构的说明，不更换初始密码\nB.密码设定尽可能使用生日、身份证号码等简单数字\nC.在银行自助设备输入密码时注意用手遮盖，如果发现设备的密码防护罩和卡槽有异常现象，为了安全起见，不要使用，同时立即告知银行\nD.在银行自助设备上办理业务时，当发生吞卡、吞币或存取款不成功时，用力拍打设备");
				this.q.push(3); this.q.push(1);
				break;
			case 75: this.q.push("妥善保管您的银行卡签购单、对账单（）\nA.可以丢弃\nB.可将卡号告知他人或回复要求提供卡号的可疑邮件或短信\nC.在公共场所使用的电脑里留下卡号信息不会有危险\nD.在任何情况下，银行都不会发送索取您卡片密码的邮件或短信");
				this.q.push(4); this.q.push(1);
				break;
			case 76: this.q.push("如果个人需要查询自己的信用报告，可以到（）提出查询申请\nA.中国人民银行征信中心\nB.中国银监会征信中心\nC.中国证监会征信中心\nD.中国保监会征信中心");
				this.q.push(1); this.q.push(1);
				break;
			case 77: this.q.push("在日常生活中容易出现不良记录的行为，包括（）\nA.信用卡透支消费没有按时还款而产生逾期记录\nB.按揭贷款按时还款\nC.按揭贷款、消费贷款等贷款的利率上调后，原金额支付“月供”随之变化\nD.为第三方提供担保时，第三方按时偿还贷款");
				this.q.push(1); this.q.push(1);
				break;
			case 78: this.q.push("个人应当在日常生活中养成良好的信用意识和习惯，避免因出现不良记录而给自己造成不利的影响（）\nA.随心消费，不用在意还款时间\nB.对于日常消费、贷款和各类缴费，要注意还款期限，避免出现逾期 \nC.信用对个人起不到任何作用\nD.不能开展任何信贷活动");
				this.q.push(2); this.q.push(1);
				break;
			case 79: this.q.push("国家助学贷款学生毕业后（）年期间为偿还本金宽限期，只需要偿还利息。\nA.1\nB.2\nC.3\nD.4");
				this.q.push(3); this.q.push(1);
				break;
			case 80: this.q.push("国家助学贷款期限原则上按学制加（）年确定。\nA.13\nB.6\nC.10\nD.4");
				this.q.push(1); this.q.push(1);
				break;
			case 81: this.q.push("学生在一个学制之内能申请（）次校园地国家助学贷款。\nA.4\nB.3\nC.2\nD.1");
				this.q.push(4); this.q.push(1);
				break;
			case 82: this.q.push("校园地国家助学贷款的贷款银行是（）。\nA.中国工商银行\nB.中国银行\nC.中国人民银行  \nD.中国建设银行");
				this.q.push(2); this.q.push(1);
				break;
			case 83: this.q.push("国家助学贷款期限最长不超过（）年\nA.10\nB.15\nC.20\nD.25");
				this.q.push(3); this.q.push(1);
				break;
			case 84: this.q.push("国家助学贷款还款周期（）\nA.每月\nB.每季度\nC.每年\nD.自行决定");
				this.q.push(1); this.q.push(1);
				break;
			case 85: this.q.push("(多选)国家助学贷款学生本科毕业后考取硕士研究生，下列说法正确的是：（   ）\nA.本科毕业当年考取研究生可以申请继续贴息\nB.本科毕业即进入还款期\nC.本科毕业后在还款期内考取研究生可以申请继续贴息\nD.贷款不用还了");
				this.q.push(13); this.q.push(2);
				break;
			case 86: this.q.push("(多选)国家助学贷款得还款方式有哪些（）\nA.中国银行网上银行贷款管理模块自助提前还款\nB.中国银行手机银行贷款模块自助提前还款\nC.本人携带身份证和还款银行卡到中国银行历城支行个金部办理\nD.给中国银行历城支行寄提前还款申请书（山东大学学生资助中心网站下载），并将钱存入还款账户等待扣款");
				this.q.push(1234); this.q.push(2);
				break;
			case 87: this.q.push("(多选)还款银行卡丢失后（）\nA.本省内，挂失换卡，卡号变，12位账号不变\nB.本省外，挂失销户，办理新的银行卡后，并及时更改还款账户\nC.及时将还款账户更改为其他有效中国银行借记卡\nD.为了账户资金安全，及时进行挂失操作，如有疑问可咨询银行工作人员");
				this.q.push(1234); this.q.push(2);
				break;
			case 88: this.q.push("(多选)在POS机上刷卡消费时，应该（）\nA.不要让卡片离开您的视线范围\nB.留意收银员的刷卡次数\nC.拿到签购单及卡片时，核对签购单上的金额是否正确\nD.拿到签购单及卡片时，核对是否为本人的卡");
				this.q.push(1234); this.q.push(2);
				break;
			case 89: this.q.push("(多选)防范银行卡诈骗（）\nA.收到可疑短信、电话、信函时，一定要提高警惕，对一些貌似合理的汇款事由，要谨慎确认，不要向自己不知道的账号汇款，防止上当受骗\nB.网络交易切记登录正确的银行网址；交易前查看安全锁；设置复杂的密码作为网上银行密码；避免在网吧、公共场所登录网银\nC.使用自助银行服务终端时要小心，留意周围是否有可疑的人，操作时应避免他人干扰，防止他人偷窥密码\nD.遭遇吞卡、未吐钞等情况，应拨打发卡银行的全国统一客服热线电话，及时与发卡银行去的联系，不要拨打机具旁临时粘贴的不熟悉的电话号码，不要随意丢弃打印单据");
				this.q.push(1234); this.q.push(2);
				break;
			case 90: this.q.push("(多选)关于异议处理下列说法正确的是：（   ）\nA.针对客户异议应建议其到中国人民银行征信服务窗口办理\nB.客户异议处理结果应及时回复客户\nC.异议核查依据须充分、更正方式须恰当\nD.异议材料保管应妥当");
				this.q.push(234); this.q.push(2);
				break;
			case 91: this.q.push("(多选)下面关于征信授权说法正确的是：（）\nA.查询信用报告及相关信息时，必须取得被查询人书面同意并约定用途\nB.书面授权指客户本人签署的我行的征信授权书或已嵌入征信授权条款的制式合同文本\nC.授权时间与该笔业务存续期一致\nD.查询信用报告时，应严格按照客户授权的查询用途选择相应查询原因，授权时间不得晚于查询时间");
				this.q.push(1234); this.q.push(2);
				break;
			case 92: this.q.push("(多选)个人征信授权材料包括：（）\nA.受理人员与征信授权人员的合照照片\nB.授权人员的证件复印件\nC.业务申请书\nD.需单独签署授权书的，提供征信授权书");
				this.q.push(234); this.q.push(2);
				break;
			case 93: this.q.push("(多选)征信不良信息包括下列哪些信息：（）\nA.信息主体在借贷、赊购、担保、租赁、保险、使用信用卡等活动中未按照合同履行义务的信息\nB.对信息主体的行政处罚信息\nC.人民法院判决或裁定信息主体履行义务以及强制执行的信息\nD.其他不良信息");
				this.q.push(1234); this.q.push(2);
				break;
			case 94: this.q.push("(多选)下列查询个人信用报告时需要取得被查询人书面授权的有：（）\nA.审核个人贷款申请\nB.审核个人贷记卡、准贷记卡申请\nC.对已发放的个人信贷进行贷后风险管理，且该笔业务办理时已授权进行相关风险管理\nD.审核个人作为担保人");
				this.q.push(124); this.q.push(2);
				break;
			case 95: this.q.push("(多选)授信及负债信息概要包括：（）\nA.未结清贷款信息汇总\nB.未销户贷记卡信息汇总\nC.未销户准贷记卡信息汇总\nD.对外担保信息汇总");
				this.q.push(1234); this.q.push(2);
				break;
			case 96: this.q.push("(多选)根据个人信用报告信息，信用主体被认为没有担保的情况有：（）\nA.信用主体没有对外担保\nB.被担保贷款的账户状态为“结清”\nC.“担保状态”字段的代码为“2-解除担保”\nD.被担保贷款已转出");
				this.q.push(1234); this.q.push(2);
				break;
			case 97: this.q.push("(多选)信息主体对本人信用报告中的信用信息有异议时，需要向本人信贷业务经办行提交的材料是：（）\nA.异议申请人身份证原件及复印件\nB.异议申请表\nC.个人信用报告\nD.业务信贷业务申请表");
				this.q.push(12); this.q.push(2);
				break;
			case 98: this.q.push("(多选)个人信贷交易信息是指自然人在以下哪些信用活动中形成的交易记录；（    ）\nA.借记卡\nB.贷记卡\nC.准贷记卡\nD.贷款");
				this.q.push(234); this.q.push(2);
				break;
			case 99: this.q.push("(多选)个人信用报告逐笔展示信息主体对外担保的明细情况，目前主要是信息主体为他人贷款进行担保的明细情况。主要包括：（）\nA.担保贷款发放机构及合同金额\nB.发放日期及到期日期\nC.担保金额及本金余额\nD.五级分类");
				this.q.push(1234); this.q.push(2);
				break;
			case 100: this.q.push("(多选)个人信用报告的个人基本信息的内容包括以下部分：（）\nA.身份信息\nB.配偶信息\nC.居住信息\nD.职业信息");
				this.q.push(1234); this.q.push(2);
				break;
			case 101: this.q.push("(多选)信用报告有了不良信息是否无法获得贷款？以下说法正确的是：（）\nA.有了不良信息确实会对贷款申请产生不利影响\nB.信用报告是审贷的必要条件，但不是唯一条件\nC.信用报告记录客观信息，没有任何主观评价\nD.商业银行会结合收入水平、信用状况等因素综合考虑");
				this.q.push(1234); this.q.push(2);
				break;
			case 102: this.q.push("(多选)目前，个人可以通过以下（   ）途径查询个人信用报告。\nA.人民银行征信服务窗口现场查询\nB.互联网查询\nC.自助查询机查询\nD.微信查询");
				this.q.push(123); this.q.push(2);
				break;
			case 103: this.q.push("(多选)作为一名金融消费者，如何保持良好的信用记录？\nA.保管好个人身份证件\nB.如实填写个人信贷资料\nC.按时足额归还贷款和信用卡\nD.养成良好的信用交易习惯 ");
				this.q.push(1234); this.q.push(2);
				break;
			case 104: this.q.push("(多选)对个人信用记录产生异议的主要原因一般包括以下几种(      )。\nA.个人的基本信息发生了变化但没有及时将变化后的信息提供给商业银行等数据报送机构\nB.商业银行等数据报送机构数据信息录入错误或信息更新不及时\nC.技术原因造成数据处理出错\nD.他人盗用或冒用个人身份获取贷款或信用卡，由此产生的信用记录不为被盗用者（被冒用者)所知");
				this.q.push(1234); this.q.push(2);
				break;
			case 105: this.q.push("(多选)个人信用报告中负面信息主要出现在哪些栏目(      )。\nA.“贷款明细信息”中的“累计逾期次数”、“最高逾期期数”\nB.“贷款最近24 个月每个月的还款状态记录”中出现“/”、“*”、“N”、“C”以外的标记，比如是数字1 到7，或者是“D”、“Z”\nC.“信用卡明细信息”的贷记卡“未还最低还款额次数”出现0 以外的情况\nD.“信用卡明细信息”的“准贷记卡透支180 天以上未付余额”出现0 以外的情况");
				this.q.push(1234); this.q.push(2);
				break;
			case 106: this.q.push("(多选)个人信用报告信贷交易信息包括（   ）。\nA.资产处置信息\nB.保证人代偿信息\nC.贷款信息\nD.贷记卡及准贷记卡信息");
				this.q.push(1234); this.q.push(2);
				break;
			case 107: this.q.push("(多选)个人信用报告出错了，可以通过(      )渠道反映出错信息要求核查、纠正。\nA.由您本人或委托他人向所在地的中国人民银行分支行征信管理部门反映\nB.直接向征信中心反映\nC.可以直接向涉及出错信息的商业银行经办机构反映\nD.向法院提起诉讼，以法律手段维护您的权益");
				this.q.push(1234); this.q.push(2);
				break;
			case 108: this.q.push("(多选)个人信用报告中，以下体现出负面信息的有？(      )\nA.欠税未缴信息\nB.法院民事判决和强制执行记录\nC.行政处罚记录\nD.逾期还贷");
				this.q.push(1234); this.q.push(2);
				break;
			case 109: this.q.push("(多选)征信的失信惩戒机制有效运作的前提条件是(      )。\nA.信用管理法律体系完备 \nB.社会征信业发达 \nC.信息透明度较高\nD.计算机网络发达");
				this.q.push(1234); this.q.push(2);
				break;
			case 110: this.q.push("(多选)什么人有信用报告？(      )\nA.与银行发生信贷关系\nB.开立了个人结算账户\nC.有出国留学经历\nD.开立了炒股账户");
				this.q.push(12); this.q.push(2);
				break;
			case 111: this.q.push("(多选)为了使金融信用信息基础数据库（人民银行征信系统）更全面准确地记录本人信息，可以从以下几方面入手(      )。\nA.在申请银行贷款、信用卡等业务时，要准确、完整地填写个人资料\nB.基本信息变化通知银行\nC.关心自己的信用记录，主动查询信用报告，做到“心中有数”\nD.一旦发现信用报告出错，要及时与办理业务的商业银行取得联系，及时纠正错误");
				this.q.push(1234); this.q.push(2);
				break;
			case 112: this.q.push("(多选)为了在日常生活中注意养成良好的信用意识和习惯，个人可以从以下哪些方面着手？(      )\nA.注意养成良好的消费习惯和还款习惯\nB.对于日常消费、贷款和各类缴费，要注意还款期限，避免出现逾期 \nC.妥善安排有关信贷活动，并做好关联预警提示\nD.选择合适的还款方式，采用有效的提醒措施，确保每笔贷款和信用卡按时还款");
				this.q.push(1234); this.q.push(2);
				break;
			case 113: this.q.push("(多选)未按时归还国家助学贷款对个人信用有影响吗？(      )。\nA.没有影响，国家助学贷款是国家扶持贫困学生的政策性贷款，体现了对学生的关爱，迟一点还影响不大\nB.有影响，国家助学贷款由商业银行发放，自发放之时，商业银行就将这些信息报送到了金融信用信息基础数据库中\nC.有影响，如果不按时归还国家助学贷款，违背了借款人向金融机构借款时与金融机构建立的按期还本付息的约定，属于违约行为\nD.没有影响，按时归还国家助学贷款会在个人信用报告中不会形成负面记录，更不会影响个人将来的经济金融活动");
				this.q.push(23); this.q.push(2);
				break;
			case 114: this.q.push("(多选)下列选项中哪些情况容易出现负面记录(      )。\nA.信用卡透支消费没有按时还款而产生逾期记录\nB.按揭贷款没有按期还款而产生逾期记录\nC.为第三方提供担保时，第三方没有按时偿还贷款而形成的逾期记录\nD.按揭贷款、消费贷款等贷款的利率上调后，仍按原金额支付“月供”而产生的欠息逾期");
				this.q.push(1234); this.q.push(2);
				break;
			case 115: this.q.push("(多选)征信机构查询个人信息的，应当取得信息主体本人的(      )。但是，法律规定可以不经同意查询的除外。\nA.口头同意\nB.书面同意\nC.约定用途\nD.使用范围");
				this.q.push(23); this.q.push(2);
				break;
			case 116: this.q.push("(多选)信用卡的“最低还款额”包含(      )两层意思。\nA.最低还款额是针对贷记卡而言的\nB.最低还款额是针对准贷记卡而言的\nC.银行在还款日并不要求客户归还全部金额，而是允许客户归还使用额度一定比例的金额，比如10%，这就是最低还款额\nD.信用卡消费额的一半");
				this.q.push(13); this.q.push(2);
				break;
			case 117: this.q.push("(多选)以下关于个人信用报告的描述正确的是(      )。\nA.人民银行征信中心出具的信用报告是对个人过去信用行为的客观记录，并不对个人的信用好坏进行定性的判断\nB.商业银行等信用报告的使用机构会根据个人的实际情况和其他信息对客户的履约能力和意愿进行综合判断\nC.人民银行征信中心以客观、中立的原则对采集到的信息进行汇总、整合，既不制造信息，不对个人的信用行为进行评判\nD.不同的银行、不同的信贷业务员，判断标准可能会不相同，对同一个人的信用状况作出的评判可能并不完全相同");
				this.q.push(1234); this.q.push(2);
				break;
			case 118: this.q.push("(多选)个人信用报告中查询记录汇总包括以下几个方面内容：\nA.对最近一个月内，贷款审批、信用卡审批查询原因的查询机构数汇总\nB.对最近一个月内的贷款审批、信用卡审批查询原因的查询次数汇总\nC.对最近2年的贷后管理、担保资格审查、特约商户实名审查查询原因的查询次数汇总\nD.对最近3年的贷后管理、担保资格审查、特约商户实名审查查询原因的查询次数汇总");
				this.q.push(123); this.q.push(2);
				break;
			case 119: this.q.push("(多选)个人信用报告中的贷款，不包括（   ）机构报送的贷款数据。\nA.商业银行\nB.资产管理公司\nC.担保机构\nD.农村信用合作社");
				this.q.push(12); this.q.push(2);
				break;
			case 120: this.q.push("(多选)规范业务受理的征信查询流程，完整的授权材料包括\nA.个人身份证件复印件\nB.包含征信授权条款的业务申请书\nC.需单独签署授权书的，提供征信授权书\nD.以上均是");
				this.q.push(1234); this.q.push(2);
				break;
			case 121: this.q.push("(多选)征信机构不得采集的个人信息包括（）。\nA.宗教信仰；\nB.病史信息；\nC.个人的收入；\nD.纳税数额信息。");
				this.q.push(1234); this.q.push(2);
				break;
			case 122: this.q.push("(多选)信息主体认为征信机构或者信息提供者、信息使用者侵害其合法权益的，可以（）。\nA.向相关行政机构投诉；\nB.向所在地的国务院征信业监督管理部门派出机构投诉；\nC.向金融机构索赔；\nD.直接向人民法院起诉。");
				this.q.push(24); this.q.push(2);
				break;
			case 123: this.q.push("(多选)不良信息，是指对信息主体信用状况构成负面影响的（）信息。\nA.信息主体在借贷、赊购、担保、租赁、保险、使用信用卡等活动中未按照合同履行义务的信息\nB.对信息主体的行政处罚信息\nC.人民法院判决或者裁定信息主体履行义务以及强制执行的信息\nD.国务院征信业监督管理部门规定的其他不良信息");
				this.q.push(1234); this.q.push(2);
				break;
			case 124: this.q.push("(多选)中国人民银行征信中心管理的个人信用信息基础数据库(以下简称个人征信系统)是一个涵盖（）的采集与处理的数据共享平台。\nA.个人基本信息\nB.信贷信息\nC.公共信息\nD.私人信息");
				this.q.push(123); this.q.push(2);
				break;
			case 125: this.q.push("(多选)个人征信系统身份信息核查结果包括（）。\nA.客户住址\nB.身份证号码和姓名\nC.身份证的签发机关\nD.照片");
				this.q.push(234); this.q.push(2);
				break;
			case 126: this.q.push("(多选)个人基本信息表示客户本人的一些基本信息，包括客户（）。\nA.基本身份信息\nB.婚姻信息\nC.居住信息\nD.职业信息");
				this.q.push(1234); this.q.push(2);
				break;
			case 127: this.q.push("(多选)个人信用报告内容中除（）外，都是从各家银行或其他各类机构采集所得。\nA.本人声明\nB.个人基本信息\nC.异议标注\nD.查询记录");
				this.q.push(134); this.q.push(2);
				break;
			case 128: this.q.push("(多选)商业银行用户，个人信用报告查询原因包括（）。\nA.贷后管理\nB.贷款审批\nC.信用卡审批\nD.异议查询");
				this.q.push(1234); this.q.push(2);
				break;
			case 129: this.q.push("(多选)《个人信用信息基础数据库管理暂行办法》中个人信用信息包括（）。\nA.个人基本信息\nB.个人信贷交易信息\nC.个人家庭财产信息\nD.反映个人信用状况的其他信息");
				this.q.push(124); this.q.push(2);
				break;
			case 130: this.q.push("(多选)社会保险信息纳入企业和个人征信系统后， 信息交换的内容包括（）。\nA.养老保险的单位参保和欠费信息\nB.应参保未参保单位名单\nC.个人参保和缴费信息\nD.贷款单位名单");
				this.q.push(1234); this.q.push(2);
				break;
			case 131: this.q.push("(多选)下列情况的“一次告知，长久沿用”沿用时限设定为两年内的是（）。\nA.对于确实无法联系到借款人(如助学贷款学生毕业后不知去向、借款人长期外出打工未告知我行新的联系方式).并有邮局的挂号信或快件的回退件,或通过省级报刊公告催收的\nB.对有充分证明材料证实借款人已出国定居或移居港澳台地区的\nC.对于已核销的贷款,已无法联系到借款人,并有行内已核销证据的\nD.对于借款人服刑且无其他承接人的,并取得其相关判决书等证明材料的");
				this.q.push(1234); this.q.push(2);
				break;
			case 132: this.q.push("(多选)下列情况的“一次告知，长久沿用”沿用时限可设定“永久沿用”的是（）。\nA.对于依照《中华人民共和国民法通则》宣告失踪,我行依法对其财产或遗产进行清偿,并对担保人进行追偿后未能收回的债权,在取得相关失踪证明,以及已追偿的相关证明后\nB.对于依照《中华人民共和国民法通则》宣告死亡,我行依法对其财产或遗产进行清偿,并对担保人进行追偿后未能收回的债权,在取得相关死亡证明,以及已追偿的相关证明后\nC.对于确实无法联系到借款人(如助学贷款学生毕业后不知去向、借款人长期外出打工未告知我行新的联系方式)，并有邮局的挂号信或快件的回退件,或通过省级报刊公告催收的\nD.对于我行与公积金中心达成书面协议,并约定公积金中心承担其不良信息告知义务的公积金贷款");
				this.q.push(124); this.q.push(2);
				break;
			case 133: this.q.push("(多选)对已生效的“一次告知，长久沿用”，下列描述正确的有（）。\nA.在沿用期内不再生成不良信息人工告知提示\nB.对超过沿用期限的业务，将再次生成不良信息人工告知提醒\nC.对取得客户手机号的业务，将再次生成不良信息人工告知提醒。\nD.对取得客户手机号的业务，自动转按手机号进行短信告知，并上报征信数据。");
				this.q.push(124); this.q.push(2);
				break;
			case 134: this.q.push("只要偿还了欠款，曾经逾期的记录就会自动在个人信用报告中删除。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 135: this.q.push("学生申请助学贷款，如果没有能力偿还，可以不用还。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 136: this.q.push("攒够钱想一次性还款，只要把钱存到账户里就行。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 137: this.q.push("国家助学贷款提前还款没有次数、金额限制。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 138: this.q.push("申请了国家代偿就可以不用还款了。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 139: this.q.push("国家助学贷款利率随着国家贷款基准利率的调整而调整。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 140: this.q.push("还款账户内余额不足，银行可以自行从中行其他银行卡内扣除贷款。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 141: this.q.push("原还款账户关户后无需进行操作，银行会自动变更还款账户。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 142: this.q.push("没有签订还款协议就可以不还款。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 143: this.q.push("发生逾期后如果需要可以消除征信逾期记录。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 144: this.q.push("没有收到学校、银行的催收信息就可以不用还款，也不会发生逾期。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 145: this.q.push("毕业后继续攻读学位，无需向银行申请即可自动继续贴息。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 146: this.q.push("国家助学贷款直接发放到学生个人账户。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 147: this.q.push("国家助学贷款按照申请学年数按年分次发放。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 148: this.q.push("未成年人申请国家助学贷款需要监护人同意。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 149: this.q.push("在境外从事征信业务及相关活动的我国公民及企业也适用征信业管理条例。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 150: this.q.push("个人信息主体有权每年五次免费获取本人的信用报告。 \nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 151: this.q.push("个人信用报告是中国人民银行征信中心出具的记录客户历史信用信息的文件，是个人征信系统提供的最基础产品，它记录了客户与银行之间发生的信贷交易的历史信息。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 152: this.q.push("只要客户在银行办理过信用卡、贷款、担保等信贷业务的客户，其在银行登记过的基本信息和账户信息就会通过商业银行报送给的个人征信系统，个人征信系统进行汇总整理后形成客户的信用报告。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 153: this.q.push("在国内任何商业银行的分支机构都可以查询到任何个人在全国范围内的信用信息。 \nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 154: this.q.push("银行信贷交易信息是客户在各商业银行办理的贷款或信用卡账户的明细和汇总信息。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 155: this.q.push("如果客户的基本信息发生变化，应及时向当地人民银行申请信息更新。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 156: this.q.push("个人征信系统根据客户的姓名、证件类型、证件号码三项标识，将同一人名下的所有信用交易信息进行关联和汇总整理后展示在信用报告中。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 157: this.q.push("信用汇总信息是个人征信系统根据商业银行报送的信用明细信息进行的汇总，主要包括银行信贷汇总信息、信用卡汇总信息、贷记卡汇总信息、准贷记卡汇总信息和贷款汇总信息。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 158: this.q.push("个人信用报告中共享授信额度是指两个账户共享同一个授信额度。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 159: this.q.push("贷款的共享授信额度等于授信额度，即合同金额。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 160: this.q.push("信用卡的共享授信额度是可以使用的最大信用额度。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 161: this.q.push("在个人信用报告的银行信贷汇总信息中的余额是指客户所有非销户/非结清的贷款合同金额、准贷记卡透支余额和贷记卡已使用额度的合计。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 162: this.q.push("个人信用报告中的贷记卡汇总信息中的信用额度反映了授信机构对被征信人的信用评估状况。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 163: this.q.push("个人信用报告中贷款汇总信息是对客户所有贷款信息的汇总。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 164: this.q.push("个人参保缴费包括参保人按期足额缴纳和欠费两种情况。当参保人欠费时，其个人缴费状态为欠费。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 165: this.q.push("个人信用报告中一旦出现负面信息，就无法从商业银行取得贷款了\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 166: this.q.push("个人信用报告不展示5年前已经结束的逾期及违约行为，以及5年前的欠税记录、强制执行记录、民事判决记录、行政处罚记录、电信欠费记录。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break
			case 167: this.q.push("个人信用报告的查询记录是记录最近三年的查询情况。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 168: this.q.push("信用卡只要对最低还款额进行还款就不会在信用报告中产生逾期记录。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 169: this.q.push("逾期（透支）信息汇总主要反映信用主体最近2年内有多少个月发生逾期（透支），以及逾期（透支）的严重程度。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 170: this.q.push("商业银行以“贷后管理”为由查询个人信用报告的适用期为此笔信贷业务发放以后至该笔业务终结。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 171: this.q.push("当账户结清年月早于报告生成时间，且在最近5年时间区间之外时，不展示“最近5年内的逾期记录”。\nA.错误\nB.正确");
				this.q.push(2); this.q.push(0);
				break;
			case 172: this.q.push("信用卡出现欠款，为防止个人信用报告出现负面记录正确的做法是直接销卡。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
			case 173: this.q.push("(多选)中国银行手机银行目前的优惠活动有（）。\nA.2018年5月14-7月31日手机银行话费充值随机立减，最高可减5元\nB.2018年6月，中行手机银行移动支付支付码坐公交车只需1分钱\nC.至2018年6月30日，通过手机银行绑定中行银联信用卡，在指定影院出示中国银行手机银行APP付款码有收银员扫码收款，可享受6元/张影票优惠\nD.中行手机银行“生活”频道每周三/周五上午十点准时开抢众多美食优惠券，数量有限，先抢先得");
				this.q.push(1234); this.q.push(2);
				break;
			case 174: this.q.push("徐某在大学期间办理国家助学贷款，毕业后因对代偿及还款政策不了解，未及时关注还款状态，卡内余额不足造成逾期。现楼市火爆，徐某想购买住房。其国家助学贷款已经结清，虽有几次逾期记录但不会对购房贷款造成不利影响。\nA.错误\nB.正确");
				this.q.push(1); this.q.push(0);
				break;
		}
		/*
		case 17: this.q.push("\nA.错误\nB.正确");
		this.q.push(1); this.q.push(0);
		break;
		*/
		this.qusLabel.string = this.q[0];
		if (this.q[2]==0){
			this.stars[2].active = false;
			this.stars[3].active = false;
		}
		this.qus.runAction(cc.moveTo(2, 0, 0));
		var tt = this.board.getComponent("board");
		tt.clean();
    },

	checkAnswer: function (num) {
		if (this.q[2] == 1) {
			if (this.q[1] == num-10)
				this.manager.correct += 1;
			var finished = cc.callFunc(this.callFuc, this);
			var seq = cc.sequence(cc.moveTo(2, 0, 1700), finished);
			this.stars[0].active = false;
			this.stars[1].active = false;
			this.stars[2].active = false;
			this.stars[3].active = false;
			this.qus.runAction(seq);
		} else if (this.q[2] == 0) {
			if (this.q[1] == num - 10)
				this.manager.correct += 1;
			var finished = cc.callFunc(this.callFuc, this);
			var seq = cc.sequence(cc.moveTo(2, 0, 1700), finished);
			this.stars[0].active = false;
			this.stars[1].active = false;
			this.qus.runAction(seq);
		} else {
			let k = this.q[1].toString().indexOf((num - 10).toString());
			if (k == -1) {
				var finished = cc.callFunc(this.callFuc, this);
				var seq = cc.sequence(cc.moveTo(2, 0, 1700), finished);
				this.stars[0].active = false;
				this.stars[1].active = false;
				this.stars[2].active = false;
				this.stars[3].active = false;
				this.qus.runAction(seq);
			} else {
				if (this.q[1].toString().length == 1) {
					this.q[1] = this.q[1]*10+9;
				}
				this.q[1] = parseInt(this.q[1].toString().replace(this.q[1].toString().charAt(k), ""));
				if (this.q[1] == 9) {
					this.manager.correct += 1;
					var finished = cc.callFunc(this.callFuc, this);
					var seq = cc.sequence(cc.moveTo(2, 0, 1700), finished);
					this.stars[0].active = false;
					this.stars[1].active = false;
					this.stars[2].active = false;
					this.stars[3].active = false;
					this.qus.runAction(seq);
				}
			}
		}

	},

	callFuc: function () {
		this.qus.position = cc.v2(0, -1940);
		if (this.manager.qusNum <= 0) {
			this.manager.endGame();
		} else {
			this.manager.can = true;
		}
	}

});
