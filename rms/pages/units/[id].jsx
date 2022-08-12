import { useRouter } from 'next/router'
import * as C from '@chakra-ui/react'

const UnitId = () => {
	const router = useRouter()

	const { id } = router.query

	return <C.Container py={6}>unit {id}</C.Container>
}

export default UnitId
