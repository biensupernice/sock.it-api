import { Router } from "express";

const apiRouter = Router();

apiRouter.get("/test", (req, res) => {
  console.log({ req });
  res.json({
    hello: "world"
  });
});

export { apiRouter };
