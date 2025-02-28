import express from 'express';
import 'express-async-errors'
import {json} from 'body-parser'

import { getUserRouter } from "./routes/current-user.routes";
import { signinRouter } from "./routes/singin.routes";
import { signoutRouter } from "./routes/signout.routes";
import { signupRouter } from "./routes/signup.routes";

const app = express();
app.use(json());

app.use("/api/users", getUserRouter);
app.use("/api/users", signinRouter);
app.use("/api/users", signupRouter);
app.use("/api/users", signoutRouter);

import { errorHandler } from "./middlewares/error-handler.middleware";
import { NotFoundError } from "./errors/not-found-error";


app.all("*", () => {
    throw new NotFoundError()
})
app.use(errorHandler);

app.listen(3000, () => {
    console.log('Listening on port 3000!!!');
})