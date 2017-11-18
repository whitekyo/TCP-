/**
 * Created by YANGCHENG897 on 2017-11-18.
 */
var http = require("http");
const crypto = require('crypto');
var buffer = require("buffer");

var server = http.createServer(function(req, res){
    res.writeHead(426, {
        'Content-Length': http.STATUS_CODES[426].length,
        'Content-Type': 'text/plain'
    });
    res.end(body);
});

server.listen(3000);

server.on("upgrade", function(req, socket, head){
    const headers = [
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade: websocket',
        'Connection: Upgrade',
        'Sec-WebSocket-Accept: ' + crypto.createHash('sha1')
            .update(req.headers['sec-websocket-key'] + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11', 'binary')
            .digest('base64')
    ];
    socket.write(headers.concat('', '').join('\r\n'));
    //console.log(socket);
    socket.setEncoding("utf8");
    socket.on("data", function(data){
        console.log(data);
        //var data = buffer.Buffer.from(data);
        //var target = buffer.Buffer(data.length + 2);
        //target[0] = 2 | 0x80;
        //target[1] = data.length;
        //data.copy(target, 2);
        //socket.write(target);
        //console.log(buffer.Buffer.concat(data));
        //socket.write(Buffer.from(data));


        //this._fin = (buf[0] & 0x80) === 0x80;
        //this._opcode = buf[0] & 0x0f;
        //this._payloadLength = buf[1] & 0x7f;
    });
});



