import { v4 as uuidv4 } from 'uuid'


class subsciptions{
    id?: String;
    name:  String;
    subscription_date: Date;    
    active: boolean;
    last_message: BigInteger;
    email: string

    constructor(){
        if(!this.id){
            this.id = uuidv4()  
        }
    }
}

export {subsciptions}