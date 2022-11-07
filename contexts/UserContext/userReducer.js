



export default (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                usuario: action.payload
            }
    
        default:
            return state
    }
    
}