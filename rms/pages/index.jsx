import { getSession } from 'next-auth/react'

const Home = () => {
	return <></>
}

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx)

	if (session) {
		return {
			redirect: {
				destination: '/dashboard'
			},

			props: {}
		}
	} else {
		return {
			props: {}
		}
	}
}

export default Home
