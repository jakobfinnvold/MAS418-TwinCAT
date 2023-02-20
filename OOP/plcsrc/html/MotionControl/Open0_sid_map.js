function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["MotionControl:24"] = "MotionControl:23";
    this.sidParentMap["MotionControl:25"] = "MotionControl:23";
    this.sidParentMap["MotionControl:26"] = "MotionControl:23";
    this.sidParentMap["MotionControl:3"] = "MotionControl:23";
    this.sidParentMap["MotionControl:2"] = "MotionControl:23";
    this.sidParentMap["MotionControl:14"] = "MotionControl:23";
    this.sidParentMap["MotionControl:12"] = "MotionControl:23";
    this.sidParentMap["MotionControl:9"] = "MotionControl:23";
    this.sidParentMap["MotionControl:10"] = "MotionControl:23";
    this.sidParentMap["MotionControl:45"] = "MotionControl:23";
    this.sidParentMap["MotionControl:6"] = "MotionControl:23";
    this.sidParentMap["MotionControl:13"] = "MotionControl:23";
    this.sidParentMap["MotionControl:11"] = "MotionControl:23";
    this.sidParentMap["MotionControl:27"] = "MotionControl:23";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
