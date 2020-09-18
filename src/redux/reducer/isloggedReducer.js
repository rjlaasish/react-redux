const { islogged } = require("../action/loggedAction")



const isloggedReducer=(state=false,action)=>{

switch(action.type){
    case islogged.LOG_IN:
        return !state;
        default:
            return state;
}

}

export default isloggedReducer;