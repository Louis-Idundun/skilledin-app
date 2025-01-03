"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
var auth_router_1 = require("./auth-router");
var trpc_1 = require("./trpc");
//import { paymentRouter } from './payment-router'
exports.appRouter = (0, trpc_1.router)({
    anyApiRoute: trpc_1.publicProcedure.query(function () {
        return 'hello';
    }),
    auth: auth_router_1.authRouter,
});
