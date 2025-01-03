import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'
import dotenv from 'dotenv'
//import { Products } from './collections/Products/Products'
//import { Users } from './collections/users'
//import { Media } from './collections/Media'
//import { ProductFiles } from './collections/ProductFile'
//import { Orders } from './collections/Orders'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [], //add product, productfiles, orders, media and users to the list of collection
  routes: {
    admin: '/sell',
  },
  admin: {
  //  user: 'users',
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- SkilledIn',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.jpg',
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})