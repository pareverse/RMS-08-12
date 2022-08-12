import { useState, useEffect } from 'react'
import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Tenants = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const interval = setTimeout(() => {
			setIsLoading(false)
		}, 3000)

		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<C.Container py={6}>
				<Card>
					<C.Stack direction="row" spacing={6} p={6} align="center">
						<C.Text fontWeight="semibold">Tenants</C.Text>

						<C.Spacer />

						<C.Stack direction="row" spacing={3}>
							<C.IconButton size="sm" variant="ghost" icon={<I.Plus size={20} />} />
							<C.IconButton size="sm" variant="ghost" icon={<I.MoreVertical size={20} />} />
						</C.Stack>
					</C.Stack>

					<C.TableContainer>
						<C.Table>
							<C.Thead>
								<C.Tr>
									<C.Th>Tenant</C.Th>
									<C.Th>Email</C.Th>
									<C.Th>Rented</C.Th>
									<C.Th>Monthly</C.Th>
									<C.Th>Leases</C.Th>
									<C.Th>Invoices</C.Th>
									<C.Th>Status</C.Th>
									<C.Th>Actions</C.Th>
								</C.Tr>
							</C.Thead>

							<C.Tbody>
								{isLoading ? (
									<>
										{[...Array(5)].map((data, index) => (
											<C.Tr key={index}>
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
													<C.Skeleton h={2} w="64px" />
												</C.Td>

												<C.Td>
													<C.Stack direction="row" spacing={3}>
														<C.Skeleton borderRadius="lg" h={8} w={8} />
														<C.Skeleton borderRadius="lg" h={8} w={8} />
													</C.Stack>
												</C.Td>
											</C.Tr>
										))}
									</>
								) : (
									<>
										{[...Array(5)].map((data, index) => (
											<C.Tr key={index}>
												<C.Td>
													<C.Stack direction="row" spacing={3} align="center">
														<C.Avatar size="sm" name="My Girl" />

														<C.Text w={124} overflow="hidden" textOverflow="ellipsis">
															Lemuel Palwa
														</C.Text>
													</C.Stack>
												</C.Td>

												<C.Td>
													<C.Text w={124} overflow="hidden" textOverflow="ellipsis">
														lemuelpalwa@gmail.com
													</C.Text>
												</C.Td>

												<C.Td>110</C.Td>

												<C.Td>₱25,000.00</C.Td>

												<C.Td>1</C.Td>

												<C.Td>5</C.Td>

												<C.Td>
													<C.Badge colorScheme="blue" size="sm">
														Occupied
													</C.Badge>
												</C.Td>

												<C.Td>
													<C.Stack direction="row" spacing={3}>
														<C.IconButton variant="outline" size="sm" icon={<I.Edit size={14} />} />
														<C.IconButton variant="outline" size="sm" icon={<I.Trash2 size={14} />} />
													</C.Stack>
												</C.Td>
											</C.Tr>
										))}
									</>
								)}
							</C.Tbody>
						</C.Table>
					</C.TableContainer>
				</Card>
			</C.Container>
		</>
	)
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

export default Tenants
