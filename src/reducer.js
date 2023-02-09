
const reducer = (state = 5, action) =>{
    switch(action.type){
      case 'INC':
        return state + 1;
      case 'DEC':
        return state - 1;
      case 'REP':
        return state = 0;
      case 'RAN':
        return state + action.value;
      default :
        return state;
    }
  }
  export default reducer;