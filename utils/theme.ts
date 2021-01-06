import { createMuiTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
	spacing: [
		0.5,
		1,
		1.5,
		2,
	],
	palette: {
		type: 'light',
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#ff0000',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
		success: {
			main: '#138200',
		},
	},
});

export default theme;
