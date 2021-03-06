const path = require(`path`);

module.exports = {
	siteMetadata: {
		title: `Marcel Michau - I write code & stuff`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: path.join(__dirname, `src`, `markdown`),
				name: 'pages',
			},
			__key: 'pages',
		},
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: path.join(__dirname, `src`, `images`),
			},
			__key: 'images',
		},
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Marcel Michau - I write code & stuff',
				short_name: 'Marcel Michau',
				start_url: '/',
				background_color: '#272932',
				theme_color: '#30333c',
				display: 'minimal-ui',
				icon: path.join(__dirname, `src`, `images`, `mm-logo.png`),
			},
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Fira Sans:400,500', 'Fira Mono'],
					text: 'acdefghiIlMnorstuw.&"();',
				},
			},
		},
	],
};
