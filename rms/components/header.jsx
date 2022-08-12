import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'
import * as C from '@chakra-ui/react'
import * as I from 'react-feather'
import Logo from './logos'
import Google from './logos/google'

const Header = () => {
	const { data: session } = useSession()
	const router = useRouter()
	const { toggleColorMode } = C.useColorMode()
	const colorModeIcon = C.useColorModeValue(<I.Moon size={20} />, <I.Sun size={20} />)

	return (
		<C.chakra.header bg="#FFFFFF90" position="sticky" top={0} backdropFilter="blur(8px)" zIndex={100} _dark={{ bg: '#1A202C90' }}>
			<C.Container>
				<C.Flex align="center" gap={6} h={16}>
					<Logo display={{ base: 'none', md: 'block' }} />

					<C.Menu>
						<C.MenuButton as={C.IconButton} variant="outline" display={{ base: 'inline-flex', md: 'none' }} icon={<I.Menu size={20} />} />

						{session ? (
							<C.MenuList>
								<NextLink href="/dashboard" passHref>
									<C.MenuItem as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('dashboard') && 'blue.500'} cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ color: router.pathname.includes('dashboard') && 'blue.200', _hover: { color: 'blue.200' } }}>
										Dashboard
									</C.MenuItem>
								</NextLink>

								<NextLink href="/units" passHref>
									<C.MenuItem as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('units') && 'blue.500'} cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ color: router.pathname.includes('units') && 'blue.200', _hover: { color: 'blue.200' } }}>
										Units
									</C.MenuItem>
								</NextLink>

								<NextLink href="/tenants" passHref>
									<C.MenuItem as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('tenants') && 'blue.500'} cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ color: router.pathname.includes('tenants') && 'blue.200', _hover: { color: 'blue.200' } }}>
										Tenants
									</C.MenuItem>
								</NextLink>

								<NextLink href="/payments" passHref>
									<C.MenuItem as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('payments') && 'blue.500'} cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ color: router.pathname.includes('payments') && 'blue.200', _hover: { color: 'blue.200' } }}>
										Payments
									</C.MenuItem>
								</NextLink>

								<NextLink href="/settings" passHref>
									<C.MenuItem as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('settings') && 'blue.500'} cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ color: router.pathname.includes('settings') && 'blue.200', _hover: { color: 'blue.200' } }}>
										Settings
									</C.MenuItem>
								</NextLink>
							</C.MenuList>
						) : (
							<C.MenuList>
								<C.MenuItem as="a" fontSize="sm" fontWeight="medium" cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ _hover: { color: 'blue.200' } }}>
									Home
								</C.MenuItem>

								<C.MenuItem as="a" fontSize="sm" fontWeight="medium" cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ _hover: { color: 'blue.200' } }}>
									News
								</C.MenuItem>

								<C.MenuItem as="a" fontSize="sm" fontWeight="medium" cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ _hover: { color: 'blue.200' } }}>
									Features
								</C.MenuItem>

								<C.MenuItem as="a" fontSize="sm" fontWeight="medium" cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ _hover: { color: 'blue.200' } }}>
									Resources
								</C.MenuItem>

								<C.MenuItem as="a" fontSize="sm" fontWeight="medium" cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ _hover: { color: 'blue.200' } }}>
									Pricing
								</C.MenuItem>
							</C.MenuList>
						)}
					</C.Menu>

					{session ? (
						<C.Stack direction="row" spacing={6} display={{ base: 'none', md: 'flex' }}>
							<NextLink href="/dashboard" passHref>
								<C.Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('dashboard') && 'blue.500'} cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ color: router.pathname.includes('dashboard') && 'blue.200', _hover: { color: 'blue.200' } }}>
									Dashboard
								</C.Text>
							</NextLink>

							<NextLink href="/units" passHref>
								<C.Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('units') && 'blue.500'} cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ color: router.pathname.includes('units') && 'blue.200', _hover: { color: 'blue.200' } }}>
									Units
								</C.Text>
							</NextLink>

							<NextLink href="/tenants" passHref>
								<C.Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('tenants') && 'blue.500'} cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ color: router.pathname.includes('tenants') && 'blue.200', _hover: { color: 'blue.200' } }}>
									Tenants
								</C.Text>
							</NextLink>

							<NextLink href="/payments" passHref>
								<C.Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('payments') && 'blue.500'} cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ color: router.pathname.includes('payments') && 'blue.200', _hover: { color: 'blue.200' } }}>
									Payments
								</C.Text>
							</NextLink>

							<NextLink href="/settings" passHref>
								<C.Text as="a" fontSize="sm" fontWeight="medium" color={router.pathname.includes('settings') && 'blue.500'} cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ color: router.pathname.includes('settings') && 'blue.200', _hover: { color: 'blue.200' } }}>
									Settings
								</C.Text>
							</NextLink>
						</C.Stack>
					) : (
						<C.Stack direction="row" spacing={6} display={{ base: 'none', md: 'flex' }}>
							<C.Text as="a" fontSize="sm" fontWeight="medium" cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ _hover: { color: 'blue.200' } }}>
								Home
							</C.Text>

							<C.Text as="a" fontSize="sm" fontWeight="medium" cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ _hover: { color: 'blue.200' } }}>
								News
							</C.Text>

							<C.Text as="a" fontSize="sm" fontWeight="medium" cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ _hover: { color: 'blue.200' } }}>
								Features
							</C.Text>

							<C.Text as="a" fontSize="sm" fontWeight="medium" cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ _hover: { color: 'blue.200' } }}>
								Resources
							</C.Text>

							<C.Text as="a" fontSize="sm" fontWeight="medium" cursor="pointer" transition=".2s" _hover={{ color: 'blue.500' }} _dark={{ _hover: { color: 'blue.200' } }}>
								Pricing
							</C.Text>
						</C.Stack>
					)}

					<C.Spacer />

					<C.Stack direction="row" align="center" spacing={3}>
						{session && (
							<>
								<C.IconButton variant="ghost" icon={<I.Plus size={20} />} />
								<C.IconButton variant="ghost" icon={<I.Bell size={20} />} />
							</>
						)}
						<C.IconButton variant="ghost" icon={colorModeIcon} onClick={toggleColorMode} />

						{session ? (
							<C.Box>
								<C.Menu>
									<C.MenuButton>
										<C.Avatar size="sm" name={session.user.name} src={session.user.image} />
									</C.MenuButton>

									<C.MenuList>
										<C.MenuItem fontSize="sm" onClick={() => signOut()}>
											Sign Out
										</C.MenuItem>
									</C.MenuList>
								</C.Menu>
							</C.Box>
						) : (
							<C.Button variant="outline" leftIcon={<Google />} onClick={() => signIn('google')}>
								Sign In
							</C.Button>
						)}
					</C.Stack>
				</C.Flex>
			</C.Container>
		</C.chakra.header>
	)
}

export default Header
