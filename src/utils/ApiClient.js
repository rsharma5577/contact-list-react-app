import axios from 'axios'

class ApiClient {
    constructor(){
        this.axiosConfig ={
            baseUrl: 'http://localhost:3000/api'

        }
        this.axiosInstance = axios.create(this.axiosConfig)
    
    }

   
    async getContactList() {
        return await axios.get('contacts')
    }

    async updateContact(payLoad){
        return await axios.put('/contacts',payLoad)
    }

    async addContact(payLoad){
        return await axios.post('/contacts',payLoad)
    }

    async deleteContact(id){
        return await axios.delete('/contacts'+id)
    }
}

export default new ApiClient()