import { styled } from "../theme"

interface BoxProps {
	color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'white'
}

export const Box = ({ color }: BoxProps) => {
	return (
		<StyledBox color={color} />
	)
}

const StyledBox = styled('div', {
	height: '100px',
	width: '100px',
	variants: {
		color: {
			primary: {
				backgroundColor: '$primary'
			},
			secondary: {
				backgroundColor: '$secondary'
			},
			info: {
				backgroundColor: '$info'
			},
			success: {
				backgroundColor: '$success'
			},
			warning: {
				backgroundColor: '$warning'
			},
			danger: {
				backgroundColor: '$danger'
			},
			white: {
				backgroundColor: '$white'
			},
		}
	}
})