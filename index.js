console.log('Hello World!');

const http = require('http'); // imports Node's built-in web-server module

let lessons = [
	{
		id: 1,
		content: 'What first content is about',
		date: '2020-06-09T17:30:31.098Z',
		important: false
	},
	{
		id: 2,
		content: 'Whatever second content is about',
		date: '2020-06-09T17:30:31.098Z',
		important: false
	},
	{
		id: 3,
		content: 'Whatever third content is about',
		date: '2020-06-09T17:30:31.098Z',
		important: true
	}
];
const app = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World');
});

const port = 3001;
app.listen(port);
console.log(`Server running on port ${port}`);
