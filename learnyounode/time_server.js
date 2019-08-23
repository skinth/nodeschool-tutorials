var net = require('net');

function formatNumber(num) {
    return num < 10 ? '0'+num : num;
}

var server = net.createServer((socket) => {
    var data = new Date();
    var str = data.getFullYear()+"-"+
                formatNumber(data.getMonth()+1)+"-"+
                formatNumber(data.getDate())+" "+
                formatNumber(data.getHours())+":"+
                formatNumber(data.getMinutes())+"\n";
    socket.end(str);
});

server.listen(process.argv[2]);