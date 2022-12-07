import axios from 'axios'

//after making get and post api 

const instance = axios.create({
    baseURL : "https://tinder-bygovind.herokuapp.com/"
})

export default instance