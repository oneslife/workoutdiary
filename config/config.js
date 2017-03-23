
/*
 * 설정
 */

module.exports = {
	server_port: 3000,
	db_url: 'mongodb://localhost:27017/shopping',
	db_schemas: [
	    {file:'./user_schema', collection:'users7', schemaName:'UserSchema', modelName:'UserModel'}
	],
	route_info: [
	],
	facebook: {
		clientID:'1750170908626875',
		clientSecret: '66017f8773e49cfe8ddbdaf8a0ad58d3',
		callbackURL: '/auth/facebook/callback'
	}
}