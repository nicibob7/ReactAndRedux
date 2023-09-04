export const upVote = () => {
    return (dispatch) => {
        dispatch({
            type: "upvote",
            likes: 1
        })
    }
}

export const downVote = () => {
    return (dispatch) => {
        dispatch({
            type: "downvote",
            likes: 1
        })
    }
}