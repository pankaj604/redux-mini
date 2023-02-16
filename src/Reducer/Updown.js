const initialState = 0 ;

export const Changenum = (state = initialState , action)=>{
    switch(action.type){
        case "INCREMENT" : return state + action.payload ;
        case "DECREMENT" : return state - 1 ;
        default : return state

    }
}

