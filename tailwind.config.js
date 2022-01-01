module.exports = {
	content: ['./layouts/**/*.{html,js}'],
	theme: {
		extend: {
			fontFamily: {
				//using custom font familly.
				Barlow: ['Barlow', 'sans-serif'],
				BarlowCondensed: ['Barlow Condensed', 'sans-serif'],
				Bellefair: ['Bellefair', 'serif']
			},

			fontSize: {
				//using custom font sizes.
				v1: '9.375rem',
				v2: '6.25rem',
				v3: '5rem',
				v4: '3.5rem',
				v5: '2.5rem',
				v6: '2rem',
				v7: '1.75rem',
				v8: '1.5rem',
				v9: '1.25rem',
				v10: '1.125rem',
				v11: '1rem',
				v12: '.938rem',
				v13: '.875rem'
			},

			fontWeight: {
				fw400: '400',
				fw700: '700'
			},

			colors: {
				//using custom colors
				transparent: 'transparent',
				current: 'currentColor',
				pureWhite: '#fff',
				veryDark: '#0c0e18',
				grayishBlue: '#d2d8f9',
				bgNav: '#383636b2',
				largeBtnClr: '#ffffff26'
			},

			borderWidth: {
				DEFAULT: '1px',
				1: '1px',
				2: '2px',
				3: '3px',
				4: '4px',
				6: '6px',
				8: '8px'
			},

			transitionTimingFunction: {
				easeOutCirc: 'cubic-bezier(0, 0.55, 0.45, 1)'
			},

			screens: {
				smMax: { max: '639px' }
				// => @media (max-width: 639px) { ... }
			},

			backgroundImage: {
				//navbar img
				hamburger: "url('../assets/shared/icon-hamburger.svg')",
				cross: "url('../assets/shared/icon-close.svg')",

				//home bg img
				homeBgPhn: "url('../assets/home/background-home-mobile.jpg')",
				homeBgTab: "url('../assets/home/background-home-tablet.jpg')",
				homeBgDesk: "url('../assets/home/background-home-desktop.jpg')",

				//destination bg img
				desBgPhn:
					"url('../assets/destination/background-destination-mobile.jpg')",
				desBgTab:
					"url('../assets/destination/background-destination-tablet.jpg')",
				desBgDesk:
					"url('../assets/destination/background-destination-desktop.jpg')",

				//destination images
				desMoon: "url('../assets/destination/image-moon.webp')",
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};
