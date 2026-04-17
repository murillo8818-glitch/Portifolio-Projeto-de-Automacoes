import axios from 'axios' 

const api = axios.create({

    baseURL: 'http://localhost:3000'
})

export default api


const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()


    async function getUsers(){
      // e ta guardando na geladeira;
     const usersFromApi =  await api.get('/user')
    // aqui proc ve;
    setUsers (usersFromApi.data)
    }