import NextLink from 'next/link'
import { useState, useEffect } from 'react'
import { getSession } from 'next-auth/react'
import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Card from 'components/card'

const Units = () => {
	const { isOpen, onOpen, onClose } = C.useDisclosure()
	const [isLoading, setIsLoading] = useState(true)
	const [statusFilter, setStatusFilter] = useState('')

	const data = [
		{ id: 1, unit: 110, company: 'Company 1', tenant: 'Tenant 1', monthly: 25000, balance: 0, lease: 0, status: 'occupied' },
		{ id: 2, unit: 111, company: 'Company 2', tenant: 'Tenant 2', monthly: 30000, balance: 1000, lease: 1, status: 'occupied' },
		{ id: 3, unit: 112, company: '', tenant: '', monthly: 0, balance: 0, lease: 0, status: 'vacant' }
	]

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
						<C.Text fontWeight="semibold">Units</C.Text>

						<C.Spacer />

						<C.Stack direction="row" spacing={3}>
							<C.Select borderRadius="lg" placeholder="Unit" w="124px" fontSize="sm">
								<option>110</option>
							</C.Select>

							<C.Select borderRadius="lg" placeholder="Status" w="124px" fontSize="sm" onChange={(e) => setStatusFilter(e.target.value)}>
								<option>Occupied</option>
								<option>Vacant</option>
							</C.Select>

							<C.Button colorScheme="blue" onClick={onOpen}>
								Add new
							</C.Button>
						</C.Stack>
					</C.Stack>

					<C.TableContainer>
						<C.Table>
							<C.Thead>
								<C.Tr>
									<C.Th>Unit</C.Th>
									<C.Th>Company</C.Th>
									<C.Th>Tenant</C.Th>
									<C.Th>Monthly</C.Th>
									<C.Th>Balance</C.Th>
									<C.Th>Lease</C.Th>
									<C.Th>Status</C.Th>
									<C.Th>Action</C.Th>
								</C.Tr>
							</C.Thead>

							<C.Tbody>
								{isLoading ? (
									<>
										{[...Array(5)].map((data, index) => (
											<C.Tr key={index}>
												<C.Td>
													<C.Skeleton h={2} w="32px" />
												</C.Td>

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
													<C.Skeleton borderRadius="lg" h={8} w={8} />
												</C.Td>
											</C.Tr>
										))}
									</>
								) : (
									<>
										{data.map((data) => (
											<C.Tr key={data.id}>
												<C.Td>{data.unit}</C.Td>

												<C.Td>
													{data.company ? (
														<C.Stack direction="row" spacing={3} align="center">
															<C.Avatar size="sm" name="My Girl" />

															<C.Text w={124} overflow="hidden" textOverflow="ellipsis">
																My Girl Milk Tea
															</C.Text>
														</C.Stack>
													) : (
														<C.Stack direction="row" spacing={3} align="center">
															<C.SkeletonCircle size={8} />
															<C.Skeleton h={2} w={124} />
														</C.Stack>
													)}
												</C.Td>

												<C.Td>
													{data.tenant ? (
														<C.Text w={124} overflow="hidden" textOverflow="ellipsis">
															Lemuel Palwa
														</C.Text>
													) : (
														<C.Skeleton h={2} w={124} />
													)}
												</C.Td>

												<C.Td>₱{data.monthly.toLocaleString(undefined, { maximumFractionDigits: 2 })}</C.Td>

												<C.Td>₱{data.balance.toLocaleString(undefined, { maximumFractionDigits: 2 })}</C.Td>

												<C.Td>{data.lease}</C.Td>

												<C.Td>
													<C.Badge colorScheme={data.status === 'occupied' ? 'blue' : 'red'} size="sm">
														{data.status === 'occupied' ? 'Occupied' : 'Vacant'}
													</C.Badge>
												</C.Td>

												<C.Td>
													<NextLink href={'/units/' + data.unit} passHref>
														<C.IconButton as="a" variant="outline" size="sm" icon={<I.Eye size={14} />} />
													</NextLink>
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

			<C.Modal isOpen={isOpen} onClose={onClose}>
				<C.ModalOverlay />

				<C.ModalContent p={6}>
					<C.Stack spacing={6}>
						<C.Stack direction="row" align="center" spacing={6}>
							<C.Text fontWeight="semibold">Add new unit</C.Text>
							<C.Spacer />
							<C.IconButton variant="ghost" size="sm" icon={<I.X size={20} />} onClick={onClose} />
						</C.Stack>

						<C.Stack spacing={6}>
							<C.FormControl>
								<C.FormLabel>Unit Number</C.FormLabel>

								<C.InputGroup>
									<C.InputLeftElement pointerEvents="none" children="#" />
									<C.Input placeholder="000" />
								</C.InputGroup>
							</C.FormControl>

							<C.FormControl>
								<C.FormLabel>Monthly Rent</C.FormLabel>

								<C.InputGroup>
									<C.InputLeftElement pointerEvents="none" children="₱" />
									<C.Input placeholder="0.00" />
								</C.InputGroup>
							</C.FormControl>
						</C.Stack>

						<C.Stack direction="row" spacing={3}>
							<C.Spacer />
							<C.Button variant="outline" onClick={onClose}>
								Cancel
							</C.Button>
							<C.Button colorScheme="blue">Submit</C.Button>
						</C.Stack>
					</C.Stack>
				</C.ModalContent>
			</C.Modal>
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

export default Units
