import { extendTheme, theme as baseTheme } from '@chakra-ui/react'
import * as components from './components'
import * as foundations from './foundations'

const theme = extendTheme({
	...foundations,
	components: { ...components },
	space: {
		4.5: '1.125rem'
	},
	config: {
		initialColorMode: 'light',
		cssVarPrefix: 'css'
	}
})

export default theme
