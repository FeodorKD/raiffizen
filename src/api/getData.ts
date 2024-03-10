import axios from 'axios'
import { IUser } from '../types/user'

export const getData = async (): Promise<IUser[]> => {
	const response = await axios.get<IUser[]>(
		'https://jsonplaceholder.typicode.com/users'
	)
	return response.data.map(({ id, name, username, email }) => ({
		id,
		name,
		username,
		email,
	}))
}
