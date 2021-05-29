import axios from 'axios'
import configJson from "../app-config.json";

class ApiClient {


    constructor(){
        this.baseUrl= configJson.apiURL
    }

   
    async getContactList() {
        return await axios.get(this.baseUrl+'/api/contacts')
    }

    async updateContact(payLoad,id){
        return await axios.put(this.baseUrl+'/api/contacts/'+id,payLoad)
    }

    async addContact(payLoad){
        return await axios.post(this.baseUrl+'/api/contacts',payLoad)
    }

    async deleteContact(id){
        return await axios.delete(this.baseUrl+'/api/contacts/'+id)
    }
}

export default new ApiClient()