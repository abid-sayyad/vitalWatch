import Express, { Response, Request, NextFunction } from "express";
import { config } from "dotenv";
import cors from "cors";
import errorHandler from "./errors/error.handlers";
import { DatabaseService } from "./services/database.service";

config();

const app = Express();
app.use(Express.json());
app.use(cors());
app.set("trust proxy", true);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({
    success: true,
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

app.use("*", (req: Request, res: Response, next: NextFunction) => {
  res.status(405).json({
    success: false,
    message: "Method Not Allowed!",
  });
});

app.use(errorHandler());

Promise.all([DatabaseService.getInstance().initialize()])
  .then(() => {
    app.listen(process.env.PORT!, () => {
      console.log(
        `> 🗃️ - Server ::: ${process.env.NODE_ENV} ::: http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((_) => {
    process.exit(1);
  });
process.on("SIGHUP", (_) => {
  process.exit(0);
});
process.on("SIGINT", (_) => {
  process.exit(0);
});
