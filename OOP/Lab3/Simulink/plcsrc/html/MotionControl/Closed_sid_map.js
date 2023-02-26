function RTW_SidParentMap() {
    this.sidParentMap = new Array();
    this.sidParentMap["MotionControl:38"] = "MotionControl:28";
    this.sidParentMap["MotionControl:29"] = "MotionControl:28";
    this.sidParentMap["MotionControl:31"] = "MotionControl:28";
    this.sidParentMap["MotionControl:32"] = "MotionControl:28";
    this.sidParentMap["MotionControl:39"] = "MotionControl:28";
    this.sidParentMap["MotionControl:36"] = "MotionControl:28";
    this.sidParentMap["MotionControl:34"] = "MotionControl:28";
    this.sidParentMap["MotionControl:33"] = "MotionControl:28";
    this.sidParentMap["MotionControl:37"] = "MotionControl:28";
    this.sidParentMap["MotionControl:30"] = "MotionControl:28";
    this.sidParentMap["MotionControl:35"] = "MotionControl:28";
    this.getParentSid = function(sid) { return this.sidParentMap[sid];}
}
    RTW_SidParentMap.instance = new RTW_SidParentMap();
