import { legacy_createStore as createStore} from 'redux'

const intialState = {counter : 0, isShow : true }
const counterReducer = (state = intialState ,action) => {

    if(action.type == "increase"){
        return{
            counter : state.counter +1,
            isShow : state.isShow,
        };
    }

    if(action.type == "decrease"){
        return{
            counter : state.counter -1,
            isShow : state.isShow,
        };
    }

    if(action.type == "IncreaseFive"){
        return{
            counter : state.counter + action.amount,
            isShow : state.isShow,
        };
    }

    if(action.type == "toggle"){
        return{
            isShow : !state.isShow,
        };
    }
    

    return state;
};


const store = createStore(counterReducer);

export default store;

