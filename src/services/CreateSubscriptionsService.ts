import { SubscriptionsRepository } from "../repositories/subscriptionsRepository"


interface IRequest{
    name: string,
    active: boolean,
    last_message: string,
    email: string
}
class CreateSubscriptionsService {

    constructor(private subscriptionsRepository: SubscriptionsRepository){

    }

    execute({name, active, last_message, email}: IRequest): void  {
        const subsAlredyExists = this.subscriptionsRepository.findByEmail(email)

    
            var re = /\S+@\S+\.\S+/;
           var validEmail = re.test(email)
        if(!validEmail){
            throw new Error("Email inválido")
        }
        if (subsAlredyExists) {
            throw new Error('Esse email já foi cadastrado')
        }

        this.subscriptionsRepository.create({ name, active, last_message, email })
    }
}   
 
export { CreateSubscriptionsService }