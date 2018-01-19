import axios from 'axios'

const url = 'http://localhost:3003/api/todos'

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search =  () => {
    //const search = description ? `&description__regex=/${description}/` : ''
    //axios.get(`${url}?sort=-createdAt` + search).then((resp) => this.setState({...this.state,description: description,list: resp.data}))

    const request = axios.get(`${url}?sort=-createdAt`)
    return {
        type: 'TODO_SEARCH',
        payload: request
    }
}