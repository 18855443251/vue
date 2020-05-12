export default {
    login(state, v) {
        state.userInfo = v;
        alert(JSON.stringify(state.userInfo));//{"account":"123456","password":"a123456"}
    },
    setMemberInfo(state, v) {
        state.userStatus = v.userStatus
        alert(JSON.stringify(state.userStatus));//0
        state.vipLevel = v.vipLevel
        alert(JSON.stringify(state.vipLevel));//0
    },
    countIncrease(state,number){
        state.count=number;
    }
}
