const { Toucan } = require('./dist/Toucan');

const toucan = new Toucan('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJiaXJkIjoiVG91Y2FuICIsImlhdCI6MTY5MDgxMzA1OCwiZXhwIjoxNjkwODE2NjU4fQ.1wDvQNja7P63vP9xY53bAqFVIryb_sAYOxdchlZYg-8');

console.log(toucan.getToken());
