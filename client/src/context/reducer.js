
export const initialState = {
    name: '',
    room: 'Français',
    messages: [],
    message: '',
    users: [],
    error: ''
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'SET_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'SET_ROOM':
            return {
                ...state,
                room: action.room
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.message
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}