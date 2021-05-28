import ApiClient from './ApiClient'

class Apis {
    
    static async getContactList(){
        try{
            const res  = await ApiClient.getContactList()
            return {response: res.data , error:null}
        }
        catch (err){
            if(err){
                return{response:null, error:err}
            }
        }
    }

    static async updateContact(payLoad){
        try{
            const res  = await ApiClient.updateContact(payLoad)
            return {response: res.data , error:null}
        }
        catch (err){
            if(err){
                return{response:null, error:err}
            }
        }
    }

    static async addContact(payLoad){
        try{
            const res  = await ApiClient.addContact(payLoad)
            return {response: res.data , error:null}
        }
        catch (err){
            if(err){
                return{response:null, error:err}
            }
        }
    }

    static async deleteContact(id){
        try{
            const res  = await ApiClient.deleteContact(id)
            return {response: res.data , error:null}
        }
        catch (err){
            if(err){
                return{response:null, error:err}
            }
        }
    }

    static async getContactList(){
        try{
            const res  = await ApiClient.getContactList()
            return {response: res.data , error:null}
        }
        catch (err){
            if(err){
                return{response:null, error:err}
            }
        }
    }
}