import { createStore } from "redux";
import reducers from "./reducers";

const initialStore = { 
    counter: 0, 
    x: 20,
    guests: {
        list: [{ id: 'G1' }, { id: 'G2' }, { id: 'G3' }],
        list2: []
    },
    weather: {
        current: null
    }
};

function configureStore() {
    return createStore(reducers, initialStore);
}

export default configureStore;
