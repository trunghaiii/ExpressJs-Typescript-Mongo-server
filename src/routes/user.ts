import express from "express"
const apiRouter = express.Router()
import { getUser } from "./../controller/user"

// export default (userRoute: express.Router) => {
//     userRoute.get('/user', getUser);
// };

apiRouter.get('/user', getUser);


export default apiRouter;