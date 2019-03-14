const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

let _db

const mongoConnect = callback => {
	MongoClient.connect('mongodb+srv://rcvioleta_13:rcviolet@_13@cluster0-zrpht.mongodb.net/todo?retryWrites=true', { useNewUrlParser: true })
		.then(client => {
			console.log('Connected')
			_db = client.db('todo')
			callback()
		})
		.catch(err => {
			console.log(err)
			throw err
		})
}

const getDb = () => {
	if (_db) {
		return _db
	}
	throw 'No database found'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb