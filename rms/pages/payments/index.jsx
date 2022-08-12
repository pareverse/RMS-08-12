import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'

const Payments = () => {
	return <C.Container py={6}>Payments</C.Container>
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

export default Payments
