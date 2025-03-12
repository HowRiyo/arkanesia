import Hapi from "@hapi/hapi";
import Vision from "@hapi/vision";
import Inert from "@hapi/inert";
import Pug from "pug";
import Path from "path";
import Home from "./routes/index.js";

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: "localhost",
        debug: { request: ["error"] }
    });


    await server.register([Vision, Inert]);


    server.views({
        engines: { pug: Pug },
        relativeTo: Path.resolve("src"),
        path: "views",
        layoutPath: "layouts",
        partialsPath: "partials"
    });


    server.route({
        method: "GET",
        path: "/public/{param*}",
        handler: {
            directory: {
                path: Path.join(process.cwd(), "public"),
                listing: false,
                index: false
            }
        }
    });


    Home(server);

    await server.start();
    console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();
