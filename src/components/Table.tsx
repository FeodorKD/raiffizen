import { FC } from 'react'
import { Table } from 'vienna-ui'
import { IUser } from '../types/user'

interface AppTableProps {
	users: IUser[]
}

export const AppTable: FC<AppTableProps> = ({ users }) => {
	return (
		<Table data={users}>
			<Table.Column id='id' title='#'></Table.Column>
			<Table.Column id='name' title='имя'></Table.Column>
			<Table.Column id='username' title='ник'></Table.Column>
			<Table.Column id='email' title='почта'></Table.Column>
		</Table>
	)
}
