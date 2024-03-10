import { useMemo } from 'react'
import { IUser } from '../types/user'

export const useSortedUsers = (users: IUser[], isSorting: boolean) => {
	const sortedUsers = useMemo(() => {
		if (isSorting) {
			return [...users].sort((a, b) => a.name.localeCompare(b.name))
		}
		return users
	}, [users, isSorting])
	return sortedUsers
}

export const useUsers = (users: IUser[], query: string, isSorting: boolean) => {
	const sortedUsers = useSortedUsers(users, isSorting)

	const sortedAndSearchedUsers = useMemo(() => {
		return sortedUsers.filter(user =>
			user.username.toLowerCase().includes(query.toLowerCase())
		)
	}, [query, sortedUsers, isSorting])

	return sortedAndSearchedUsers
}
