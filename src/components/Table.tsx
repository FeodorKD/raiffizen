import { FC } from 'react'
import { Table } from 'vienna-ui'
import { IUser } from '../types/user'

interface AppTableProps {
	data: IUser[]
}
type sortOptions = {
	field: keyof IUser
	direction: 'asc' | 'desc'
}

export const AppTable: FC<AppTableProps> = ({ data }) => {
	const onSort = (
		event: React.FormEvent,
		{ field, direction }: sortOptions
	): void => {
		const dir = direction === 'desc' ? 1 : -1
		if (field) {
			data.sort(function (a, b) {
				let A = String(a[field]).toUpperCase()
				let B = String(b[field]).toUpperCase()
				return A.localeCompare(B) * dir
			})
		}
	}
	return (
		<Table data={data} onSort={onSort}>
			<Table.Column id='id' title='#'></Table.Column>
			<Table.Column id='name' title='имя' sortable></Table.Column>
			<Table.Column id='username' title='ник' sortable></Table.Column>
			<Table.Column id='email' title='почта' sortable></Table.Column>
		</Table>
	)
}
