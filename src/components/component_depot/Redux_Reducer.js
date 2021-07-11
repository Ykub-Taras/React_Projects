const initialState = {
    counterValue: 0,
    albumsData: [],
    commentsData: [],
    photosData: [],
    postsData: [],
    todosData: [],
    usersData: [],
    todoList: [],
    todoListEdit: [],
    todoListEditResult: []

}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC': {
            return {...state, counterValue: state.counterValue + 1};
        }
        case 'DEC': {
            return {...state, counterValue: state.counterValue - 1};
        }
        case 'RANDOM': {
            return {...state, counterValue: state.counterValue + Math.floor(Math.random() * (10 + 10) - 10)};
        }
        case 'INPUTTED': {
            return {...state, counterValue: state.counterValue + action.payload};
        }
        case 'RESET': {
            return {...state, counterValue: 0};
        }

        case 'ALBUMS':
            return {...state, albumsData: action.payload}
        case 'COMMENTS':
            return {...state, commentsData: action.payload}
        case 'PHOTOS':
            return {...state, photosData: action.payload}
        case 'POSTS':
            return {...state, postsData: action.payload}
        case 'TODOS':
            return {...state, todosData: action.payload}
        case 'USERS':
            return {...state, usersData: action.payload}

        case 'TODOLIST':
            return {...state, todoList: [...state.todoList, action.payload]}
        case 'TODOLISTDELETE':
            return {...state, todoList: state.todoList.filter(item => item !== action.payload)}
        case 'TODOLISTEDIT':
            return {...state, todoListEdit: action.payload}

        case 'TODOLISTEDITRESULT':
            return {
                ...state,
                todoList: state.todoList.map(value =>  JSON.stringify(value) ===  JSON.stringify(state.todoListEdit[0]) ? action.payload : value)
            }

        default:
            return state;
    }

};

export default Reducer;