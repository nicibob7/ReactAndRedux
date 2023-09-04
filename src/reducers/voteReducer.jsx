const voteReducer = (state = 0, action ) => {
    switch(action.type) {
        case "upvote":
            return state + action.likes;
        case "downvote":
            return state - action.likes;
        default:
            return state;
    }
}

export default voteReducer