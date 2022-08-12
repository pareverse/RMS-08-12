import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'

const Settings = () => {
	return <C.Container py={6}>Settings</C.Container>
}

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx)

	if (session) {
		return {
			props: {}
		}
	} else {
		return {
			redirect: {
				destination: '/'
			},

			props: {}
		}
	}
}

export default Settings
