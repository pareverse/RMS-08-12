import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
	name: String,
	email: String,
	image: String,
	role: String,
	emailVerified: String
})

const Users = mongoose.models.Users || mongoose.model('Users', UserSchema)

export default Users
