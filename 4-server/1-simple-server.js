const http = require('http');
const PORT = 8000;
const user = { name: 'Marvin', age: 42 };
const routing = {
    '/': '<h1>welcome to my page!</h1>',
    '/user': user,
    '/user/name': () => user.name,
    '/user/age': () => user.age,
};
const types = {
    object: JSON.stringify,
    string: (s) => s,
    undefined: () => 'not found',
    function: (fn, req, res) => fn(req, res).toString(),
};

http.createServer((req, res) => {
    const data = routing[req.url];
    const type = typeof data;
    const serializer = types[type];
    const result = serializer(data, req, res);

    res.end(result);
}).listen(PORT);
