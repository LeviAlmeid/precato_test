import { Router } from 'express'
import { SubscriptionsRepository } from '../repositories/subscriptionsRepository'
import { CreateSubscriptionsService } from '../services/CreateSubscriptionsService'
 
const subscriptionsRoutes = Router()
const subscriptionsRepository = new SubscriptionsRepository()


subscriptionsRoutes.post("/", (request, response) => {
    const { name, last_message , active=true, email } = request.body;

    const createSubscriptionsService = new CreateSubscriptionsService(subscriptionsRepository)

    createSubscriptionsService.execute({name, last_message, active, email})

    return response.status(201).send()
})

subscriptionsRoutes.get("/", (request, response) => {
    const all = subscriptionsRepository.list()

    return response.json(all)
})

export {subscriptionsRoutes}