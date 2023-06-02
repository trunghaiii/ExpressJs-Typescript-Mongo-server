import express from "express"

export const getUser = async (req: express.Request, res: express.Response) => {
    res.send("Hello World !!")
};