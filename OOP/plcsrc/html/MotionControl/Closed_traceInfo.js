function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Enable */
	this.urlHashMap["MotionControl:38"] = "msg=&block=MotionControl:38";
	/* <S1>/KpGain */
	this.urlHashMap["MotionControl:29"] = "msg=&block=MotionControl:29";
	/* <S1>/PosRef */
	this.urlHashMap["MotionControl:31"] = "msg=&block=MotionControl:31";
	/* <S1>/Pos_feedback */
	this.urlHashMap["MotionControl:32"] = "msg=&block=MotionControl:32";
	/* <S1>/Constant */
	this.urlHashMap["MotionControl:39"] = "MotionControl.exp:48";
	/* <S1>/Predefined Saturation */
	this.urlHashMap["MotionControl:36"] = "MotionControl.exp:38,44";
	/* <S1>/Product */
	this.urlHashMap["MotionControl:34"] = "MotionControl.exp:36";
	/* <S1>/Sum */
	this.urlHashMap["MotionControl:33"] = "MotionControl.exp:34";
	/* <S1>/Switch */
	this.urlHashMap["MotionControl:37"] = "MotionControl.exp:45,51";
	/* <S1>/Ctrl_signal_Pos */
	this.urlHashMap["MotionControl:30"] = "msg=&block=MotionControl:30";
	/* <S1>/PosErr */
	this.urlHashMap["MotionControl:35"] = "msg=&block=MotionControl:35";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "MotionControl"};
	this.sidHashMap["MotionControl"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/Enable"] = {sid: "MotionControl:38"};
	this.sidHashMap["MotionControl:38"] = {rtwname: "<S1>/Enable"};
	this.rtwnameHashMap["<S1>/KpGain"] = {sid: "MotionControl:29"};
	this.sidHashMap["MotionControl:29"] = {rtwname: "<S1>/KpGain"};
	this.rtwnameHashMap["<S1>/PosRef"] = {sid: "MotionControl:31"};
	this.sidHashMap["MotionControl:31"] = {rtwname: "<S1>/PosRef"};
	this.rtwnameHashMap["<S1>/Pos_feedback"] = {sid: "MotionControl:32"};
	this.sidHashMap["MotionControl:32"] = {rtwname: "<S1>/Pos_feedback"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "MotionControl:39"};
	this.sidHashMap["MotionControl:39"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Predefined Saturation"] = {sid: "MotionControl:36"};
	this.sidHashMap["MotionControl:36"] = {rtwname: "<S1>/Predefined Saturation"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "MotionControl:34"};
	this.sidHashMap["MotionControl:34"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Sum"] = {sid: "MotionControl:33"};
	this.sidHashMap["MotionControl:33"] = {rtwname: "<S1>/Sum"};
	this.rtwnameHashMap["<S1>/Switch"] = {sid: "MotionControl:37"};
	this.sidHashMap["MotionControl:37"] = {rtwname: "<S1>/Switch"};
	this.rtwnameHashMap["<S1>/Ctrl_signal_Pos"] = {sid: "MotionControl:30"};
	this.sidHashMap["MotionControl:30"] = {rtwname: "<S1>/Ctrl_signal_Pos"};
	this.rtwnameHashMap["<S1>/PosErr"] = {sid: "MotionControl:35"};
	this.sidHashMap["MotionControl:35"] = {rtwname: "<S1>/PosErr"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
