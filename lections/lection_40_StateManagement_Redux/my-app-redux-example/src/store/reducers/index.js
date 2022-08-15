export default (state, action) => {
    switch(action.type) {
        // Counter field
        case 'counter/decrement-counter':
        case 'counter/increment-counter':
            return {
                ...state,
                counter: state.counter + action.update
            };

        // Guests field
        case 'guests/add-guest':
            // state.guests.list.push(); // ERROR
            return {
                ...state,
                guests: {
                    ...state.guests,
                    list: [...state.guests.list, action.payload]
                }
            };
        // Weather field
        case 'weather/update':
            return {
                ...state,
                weather: {
                    ...state.weather,
                    current: action.payload
                }
            }
        default:
            return state;
    }
}