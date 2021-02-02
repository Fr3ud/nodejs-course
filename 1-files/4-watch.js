const fs = require('fs');

fs.watch('./4-watch.js', (event, file) => {
    console.dir({ event, file });
});
