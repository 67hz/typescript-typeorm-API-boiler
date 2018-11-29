/**
 * Alternative approach to bootstrapping using Express Inversify Server scrap
 * app/server if this goes well
 */
import "reflect-metadata";
import * as bodyParser from "body-parser";
import { Container } from "inversify";
import { InversifyExpressServer } 
 from "inversify-express-utils";
import { bindings } from "./inversify.config";
import * as helmet from "helmet";




(async () => {

    const port = 3000;
    const container = new Container();
    await container.loadAsync(bindings);
    const server = new InversifyExpressServer(container);
    server.setConfig((app) => {
      app.use(helmet());
      app.use(bodyParser.urlencoded({
            extended: true
      }));
      app.use(bodyParser.json());
    });

    const app = server.build();
    
    app.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}/`)
    });

})();
