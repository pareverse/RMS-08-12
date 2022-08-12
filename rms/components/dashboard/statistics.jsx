import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Statistics = () => {
	const data = [
		{ id: 1, title: 'Vacant Units', value: 15, progress: 25, icon: <I.CheckSquare /> },
		{ id: 2, title: 'Total Units', value: 30, progress: 50, icon: <I.Grid /> },
		{ id: 3, title: 'Total Tenants', value: 25, progress: 75, icon: <I.Users /> },
		{ id: 4, title: 'Monthly Collected', value: '₱' + 25000, progress: 90, icon: <I.DollarSign /> }
	]

	return (
		<>
			{data.map((data) => (
				<C.GridItem colSpan={{ base: 12, md: 6, xl: 3 }} key={data.id}>
					<Card p={6}>
						<C.Grid templateColumns="1fr 64px" gap={3}>
							<C.GridItem noOfLines={1}>
								<C.Text as="h1" fontSize="2xl" fontWeight="semibold">
									{data.value}
								</C.Text>
							</C.GridItem>

							<C.GridItem rowSpan={2}>
								<C.Flex bg="hsl(220, 100%, 50%, 3%)" justify="center" align="center" borderRadius="full" h={16} w={16}>
									<C.Flex bg="hsl(220, 100%, 50%, 5%)" justify="center" align="center" borderRadius="full" h={12} w={12} color="blue.500" _dark={{ color: 'blue.200' }}>
										{data.icon}
									</C.Flex>
								</C.Flex>
							</C.GridItem>

							<C.GridItem>
								<C.Text fontSize="xs" fontWeight="medium" color="muted">
									{data.title}
								</C.Text>
							</C.GridItem>

							<C.GridItem colSpan={2}>
								<C.Progress colorScheme="blue" size="xs" value={data.progress} />
							</C.GridItem>
						</C.Grid>
					</Card>
				</C.GridItem>
			))}
		</>
	)
}

export default Statistics
