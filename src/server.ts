import express from 'express'

//import { getPayloadClient } from './get-payload'
import payload, { Payload } from "payload"
import { nextApp, nextHandler } from './next-util'
import * as trpcExpress from '@trpc/server/adapters/express'
<<<<<<< HEAD
//import { appRouter } from './trpc'
=======
import { appRouter } from './trpc'
>>>>>>> signup
import { inferAsyncReturnType } from '@trpc/server'
import bodyParser from 'body-parser'
import { IncomingMessage } from 'http'
//import { stripeWebhookHandler } from './webhooks'
import nextBuild from 'next/dist/build'
import path from 'path'
import { PayloadRequest } from 'payload/dist/types/index'
import { parse } from 'url'
import dotenv from 'dotenv';
//import cartRouter from './trpc/authenticateMiddleware'
import { getPayloadClient } from './get-payload'
dotenv.config();

const app = express()
const PORT = Number(process.env.PORT) || 3000


const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  req,
  res,
})

export type ExpressContext = inferAsyncReturnType<
  typeof createContext
>

// export type WebhookRequest = IncomingMessage & {
//   rawBody: Buffer
// }

const start = async () => {
//   const webhookMiddleware = bodyParser.json({
//     verify: (req: WebhookRequest, _, buffer) => {
//       req.rawBody = buffer
//     },
//   })

//   app.post(
//     '/api/webhooks/stripe',
//     webhookMiddleware,
    //stripeWebhookHandler
 // )

  // await payload.({
  //   secret: process.env.PAYLOAD_SECRET || 'default-secret',
  //   db: process.env.MONGO_URL ||,
  //   express: app, // Attach Payload to the Express app
  //   onInit: async (cms) => {
  //     cms.logger.info(`Admin URL: ${cms.getAdminURL()}`);
  //   },
  // });
const payloads = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL: ${cms.getAdminURL()}`)
      },
    },
  })

  if (process.env.NEXT_BUILD) {
    app.listen(PORT, async () => {
      payloads.logger.info(
        'Next.js is building for production'
      )

      // @ts-expect-error
      await nextBuild(path.join(__dirname, '../'))

      process.exit()
    })

    return
  }

  //const cartRouter = express.Router()

//   cartRouter.use(payload.authenticate)

//   cartRouter.get('/', (req, res) => {
//     const request = req as PayloadRequest

//     if (!request.user)
//       return res.redirect('/sign-in?origin=cart')

//     const parsedUrl = parse(req.url, true)
//     const { query } = parsedUrl

//     return nextApp.render(req, res, '/cart', query)
//   })

//   app.use('/cart', cartRouter)

  app.use(
    '/api/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  )

  app.use((req, res) => nextHandler(req, res))

  nextApp.prepare().then(() => {
    payload.logger.info('Next.js started')

    app.listen(PORT, async () => {
      payload.logger.info(
        `Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`
      )
    })
  })
}

start()