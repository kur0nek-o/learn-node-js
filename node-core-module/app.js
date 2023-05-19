const fs = require('node:fs');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const dirPath 	= './data';
const filePath	= dirPath + '/orang.json';

if (!fs.existsSync(dirPath)) {
	fs.mkdirSync(dirPath);
	console.log('directory created successfully');
}

if (!fs.existsSync(filePath)) {
	fs.writeFileSync(filePath, '[]');
	console.log('file created successfully');
}

// const question = () => {
// 	return new Promise()
// }

// const rl = readline.createInterface({ input, output });

// rl.question('Masukan nama : ', nama => {
// 	rl.question('Masukan umur : ', umur => {
// 		const data = {nama, umur};
// 		const file = JSON.parse(fs.readFileSync('data/mahasiswa.json', 'utf8'));

// 		file.push(data);
// 		fs.writeFileSync('data/mahasiswa.json', JSON.stringify(file));
// 		console.log('Terimakasih karena telah mengisi form, data telah berhasil disimpan.');
// 		rl.close();
// 	});
// });
