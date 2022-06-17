import express, { json } from 'express'
import { subscriptionsRoutes } from './routes/subsciptions.routes'


const app = express()
app.use(express.json())

app.use("/subscriptions", subscriptionsRoutes)


app.listen(3333, () => console.log('Server is Running'))