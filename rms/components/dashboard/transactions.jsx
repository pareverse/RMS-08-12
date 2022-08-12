import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Transactions = () => {
	return (
		<C.GridItem colSpan={12}>
			<Card>
				<C.Box p={6}>
					<C.Text fontWeight="semibold">Transactions</C.Text>
				</C.Box>

				<C.TableContainer>
					<C.Table>
						<C.Thead>
							<C.Tr>
								<C.Th>Company</C.Th>
								<C.Th>Tenant</C.Th>
								<C.Th>Date</C.Th>
								<C.Th>Amount</C.Th>
								<C.Th>Status</C.Th>
								<C.Th>Pay</C.Th>
								<C.Th>Actions</C.Th>
							</C.Tr>
						</C.Thead>

						<C.Tbody>
							{[...Array(4)].map((data, index) => (
								<C.Tr key={index}>
									<C.Td>
										<C.Stack direction="row" spacing={3} align="center">
											<C.Avatar size="sm" name="My Girl" />

											<C.Text w={124} overflow="hidden" textOverflow="ellipsis">
												My Girl Milk Tea
											</C.Text>
										</C.Stack>
									</C.Td>

									<C.Td>
										<C.Text w={124} overflow="hidden" textOverflow="ellipsis">
											Lemuel Palwa
										</C.Text>
									</C.Td>

									<C.Td>June 12, 2022</C.Td>

									<C.Td>₱25,000</C.Td>

									<C.Td>
										<C.Badge colorScheme="yellow" size="sm">
											Pending
										</C.Badge>
									</C.Td>

									<C.Td>
										<C.Badge colorScheme="blue" size="sm">
											Gcash
										</C.Badge>
									</C.Td>

									<C.Td>
										<C.Stack direction="row" spacing={2}>
											<C.IconButton variant="outline" size="sm" icon={<I.Eye size={14} />} />
											<C.IconButton colorScheme="blue" size="sm" icon={<I.CheckCircle size={14} />} />
										</C.Stack>
									</C.Td>
								</C.Tr>
							))}

							<C.Tr>
								<C.Td>
									<C.Stack direction="row" spacing={3} align="center">
										<C.SkeletonCircle size={8} />
										<C.Skeleton h={2} w={124} />
									</C.Stack>
								</C.Td>

								<C.Td>
									<C.Skeleton h={2} w={124} />
								</C.Td>

								<C.Td>
									<C.Skeleton h={2} w="64px" />
								</C.Td>

								<C.Td>
									<C.Skeleton h={2} w="64px" />
								</C.Td>

								<C.Td>
									<C.Skeleton h={2} w="64px" />
								</C.Td>

								<C.Td>
									<C.Skeleton h={2} w="64px" />
								</C.Td>

								<C.Td>
									<C.Stack direction="row" spacing={2}>
										<C.Skeleton borderRadius="lg" h={8} w={8} />
										<C.Skeleton borderRadius="lg" h={8} w={8} />
									</C.Stack>
								</C.Td>
							</C.Tr>
						</C.Tbody>
					</C.Table>
				</C.TableContainer>
			</Card>
		</C.GridItem>
	)
}

export default Transactions
