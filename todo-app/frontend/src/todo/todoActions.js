import axios from 'axios'

const url = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search =  (description) => {
    //const search = description ? `&description__regex=/${description}/` : ''
    //axios.get(`${url}?sort=-createdAt` + search).then((resp) => this.setState({...this.state,description: description,list: resp.data}))

    const request = axios.get(`${url}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCH',
        payload: request
    }
}

/*
export const add = (description) => {

    const request = axios.post(url,{description})

    return [{
        type: 'TODO_ADDED',
        payload: request
    },search()]

}*/

export const add = (description) => {
    return dispatch => {
        axios.post(url , {description}).then(resp => dispatch(clear())).then(resp=> dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${url}/${todo._id}`,{...todo,done:true}).then(resp => dispatch({type: 'TODO_MARKED_AS_DONE', payload: resp.data}))
        .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${url}/${todo._id}`,{...todo,done:false}).then(resp => dispatch({type: 'TODO_MARKED_AS_PENDING', payload: resp.data}))
        .then(resp => dispatch(search()))
    }
}

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${url}/${todo._id}`).then( resp => dispatch({type: 'TODO_REMOVED',payload: resp.data}))
        .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return {
        type: 'TODO_CLEAR',
        payload: ''
    }
}