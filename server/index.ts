import express, {Request, Response} from "express";
import next from "next";

const dev = process.env.NODE_ENV !== "production";
const app = next({dev});
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

(async () => {
    try {
        await app.prepare();
        const server = express();
        // const io = require('socket.io')(server)

        // io.on('connection', (socket) => {
        //     socket.on('join-room', (roomId, userId) => {
        //         socket.join(roomId)
        //         socket.to(roomId).broadcast.emit('user-connected', userId)

        //         socket.on('disconnect', () => {
        //             socket.to(roomId).broadcast.emit('user-disconnected', userId)
        //         })
        //     })
        // })

        server.all("*", (req: Request, res: Response) => {
            return handle(req, res);
        });
        server.listen(port, (err?: any) => {
            if (err) throw err;
            console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
