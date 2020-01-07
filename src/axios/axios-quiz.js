import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-a8254.firebaseio.com/'
})