import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {        
        if (process.send) {
            process.send(data.toString().toLowerCase());
        }
        else {
            console.error('No process.send function');
        }

    });

    ws.send('something');
});

console.log('WebSocket server started');