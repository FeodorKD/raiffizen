import { ChangeEventHandler, useEffect, useState } from 'react'
import { Button, Input } from 'vienna-ui'
import { getData } from './api/getData'
import { AppTable } from './components/Table'
import { useUsers } from './hooks/useUsers'
import { IUser } from './types/user'

export const App = () => {
	const [users, setUsers] = useState<IUser[]>([])
	const [searchString, setSearch] = useState<string>('')
	const [isSort, setIsSort] = useState<boolean>(false)
	useEffect(() => {
		getData()
			.then(users => setUsers(users))
			.catch(() => setUsers([]))
	}, [])

	const sortedUsers = useUsers(users, searchString, isSort)

	const onInputValueChange: ChangeEventHandler<HTMLInputElement> = event => {
		setSearch(event.target.value)
	}

	return (
		<>
			<AppTable users={sortedUsers} />
			<Input
				placeholder='Поиск по нику'
				value={searchString}
				onChange={onInputValueChange}
			/>
			<Button onClick={() => setIsSort(prev => !prev)}>
				Сортировать по Имени
			</Button>
		</>
	)
}
