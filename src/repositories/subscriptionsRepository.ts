import { subsciptions } from "../model/subscription";
const mysql = require('../../mysql');

interface ICreateSubscriptionsDTO {
    name: string
    active: boolean
    last_message: string
    email: string
}

class SubscriptionsRepository {
    private subscriptions: subsciptions[]

    constructor() {
        this.subscriptions = []
    }

    create({ name, active, last_message, email }: ICreateSubscriptionsDTO): void {
        const sub = new subsciptions()

        Object.assign(sub, {
            name,
            subscription_date: new Date(),
            active,
            last_message,
            email
        })


        // mysql.getConnection((error, conn) =>{
        //     conn.query('INSERT INTO subscription (id,  name, date, last_message, email, active) VALUES (?, ?, ?, ?, ?, ?)'),
        //     [sub.id, sub.name, sub.subscription_date, sub.last_message, sub.email, sub.active],
        //     (error, result, field) =>{
        //         conn.release();

        //         if(error){
        //             throw new Error("Erro ao inserir dados")
        //         }
        //     }
        // })


        this.subscriptions.push(sub)
    }

    list(): subsciptions[] {
        return this.subscriptions

    }

    findByEmail(email: string): subsciptions {
        const subs = this.subscriptions.find((subsciptions) => subsciptions.email === email)

        return subs;

    }
}

export { SubscriptionsRepository }