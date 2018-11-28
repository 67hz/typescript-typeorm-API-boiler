/**
 * Alternative approach to bootstrapping using Express Inversify Server scrap
 * app/server if this goes well
 */

 import * as bodyParser from 'body-parser';
 import { Container } from "inversify";
 import { interfaces, InversifyExpressServer, TYPE } 
   from "inversify-express-utils";



(async () => {

    const port = 3000;
    const container = new Container();
    await container.loadAsync(bindings);
    const app = new InversifyExpressServer(container);
    const server = app.build();
    
    server.listen(port, () => {
        console.log(`Server running at http://127.0.0.1:${port}/`)
    });

})();
