function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <S1>/Enable_Signal */
	this.urlHashMap["MotionControl:25"] = "msg=&block=MotionControl:25";
	/* <S1>/QMax_ref(L//MIN) */
	this.urlHashMap["MotionControl:26"] = "msg=&block=MotionControl:26";
	/* <S1>/Annulus_Area */
	this.urlHashMap["MotionControl:3"] = "MotionControl.exp:36";
	/* <S1>/Boreside_Area */
	this.urlHashMap["MotionControl:2"] = "MotionControl.exp:37";
	/* <S1>/Constant */
	this.urlHashMap["MotionControl:14"] = "MotionControl.exp:47";
	/* <S1>/Divide */
	this.urlHashMap["MotionControl:12"] = "MotionControl.exp:49";
	/* <S1>/Product */
	this.urlHashMap["MotionControl:9"] = "MotionControl.exp:38";
	/* <S1>/Product1 */
	this.urlHashMap["MotionControl:10"] = "MotionControl.exp:39";
	/* <S1>/Saturation */
	this.urlHashMap["MotionControl:45"] = "MotionControl.exp:56,64";
	/* <S1>/Switch */
	this.urlHashMap["MotionControl:6"] = "MotionControl.exp:35,45";
	/* <S1>/Switch1 */
	this.urlHashMap["MotionControl:13"] = "MotionControl.exp:46,55";
	/* <S1>/UnitConv */
	this.urlHashMap["MotionControl:11"] = "MotionControl.exp:48";
	/* <S1>/Ctrl_signal(m//s) */
	this.urlHashMap["MotionControl:27"] = "msg=&block=MotionControl:27";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "MotionControl"};
	this.sidHashMap["MotionControl"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>/vel_ref(m//s)"] = {sid: "MotionControl:24"};
	this.sidHashMap["MotionControl:24"] = {rtwname: "<S1>/vel_ref(m//s)"};
	this.rtwnameHashMap["<S1>/Enable_Signal"] = {sid: "MotionControl:25"};
	this.sidHashMap["MotionControl:25"] = {rtwname: "<S1>/Enable_Signal"};
	this.rtwnameHashMap["<S1>/QMax_ref(L//MIN)"] = {sid: "MotionControl:26"};
	this.sidHashMap["MotionControl:26"] = {rtwname: "<S1>/QMax_ref(L//MIN)"};
	this.rtwnameHashMap["<S1>/Annulus_Area"] = {sid: "MotionControl:3"};
	this.sidHashMap["MotionControl:3"] = {rtwname: "<S1>/Annulus_Area"};
	this.rtwnameHashMap["<S1>/Boreside_Area"] = {sid: "MotionControl:2"};
	this.sidHashMap["MotionControl:2"] = {rtwname: "<S1>/Boreside_Area"};
	this.rtwnameHashMap["<S1>/Constant"] = {sid: "MotionControl:14"};
	this.sidHashMap["MotionControl:14"] = {rtwname: "<S1>/Constant"};
	this.rtwnameHashMap["<S1>/Divide"] = {sid: "MotionControl:12"};
	this.sidHashMap["MotionControl:12"] = {rtwname: "<S1>/Divide"};
	this.rtwnameHashMap["<S1>/Product"] = {sid: "MotionControl:9"};
	this.sidHashMap["MotionControl:9"] = {rtwname: "<S1>/Product"};
	this.rtwnameHashMap["<S1>/Product1"] = {sid: "MotionControl:10"};
	this.sidHashMap["MotionControl:10"] = {rtwname: "<S1>/Product1"};
	this.rtwnameHashMap["<S1>/Saturation"] = {sid: "MotionControl:45"};
	this.sidHashMap["MotionControl:45"] = {rtwname: "<S1>/Saturation"};
	this.rtwnameHashMap["<S1>/Switch"] = {sid: "MotionControl:6"};
	this.sidHashMap["MotionControl:6"] = {rtwname: "<S1>/Switch"};
	this.rtwnameHashMap["<S1>/Switch1"] = {sid: "MotionControl:13"};
	this.sidHashMap["MotionControl:13"] = {rtwname: "<S1>/Switch1"};
	this.rtwnameHashMap["<S1>/UnitConv"] = {sid: "MotionControl:11"};
	this.sidHashMap["MotionControl:11"] = {rtwname: "<S1>/UnitConv"};
	this.rtwnameHashMap["<S1>/Ctrl_signal(m//s)"] = {sid: "MotionControl:27"};
	this.sidHashMap["MotionControl:27"] = {rtwname: "<S1>/Ctrl_signal(m//s)"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
