import { forwardRef } from 'react'
import { Box } from '@chakra-ui/react'

const Logo = forwardRef((props, ref) => {
	return (
		<Box ref={ref} {...props}>
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
				<path d="M12 12L2 17L12 22L22 17L12 12Z" fill="#0040FF" stroke="#0040FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path opacity="0.75" d="M12 7L2 12L12 17L22 12L12 7Z" fill="#CCD9FF" stroke="#CCD9FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				<path opacity="0.75" d="M12 2L2 7L12 12L22 7L12 2Z" fill="#99B2FF" stroke="#99B3FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</Box>
	)
})

export default Logo
