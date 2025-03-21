const { fontFamily } = require("tailwindcss/defaultTheme")
import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: [
					'var(--font-sans)',
					...fontFamily.sans
				],
				spaceGrotesk: [
					'var(--font-space-grotesk)',
					...fontFamily.sans
				],
				gilroy: [
					'var(--font-gilroy)',
					...fontFamily.sans
				]
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					'50': 'hsl(var(--primary-50))',
					'100': 'hsl(var(--primary-100))',
					'200': 'hsl(var(--primary-200))',
					'300': 'hsl(var(--primary-300))',
					'400': 'hsl(var(--primary-400))',
					'500': 'hsl(var(--primary-500))',
					'600': 'hsl(var(--primary-600))',
					'700': 'hsl(var(--primary-700))',
					'800': 'hsl(var(--primary-800))',
					'900': 'hsl(var(--primary-900))',
					'950': 'hsl(var(--primary-950))',
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					'dark-green': '#0D241D',
					green: '#008629',
					'lemon-green': '#2DFF17',
					'bright-orange': '#FFC332'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					cyan: '#91FFE6',
					'sky-blue': '#E1FFF4'
				},
				destructive: {
					'50': 'hsl(var(--accent-50))',
					'100': 'hsl(var(--accent-100))',
					'200': 'hsl(var(--accent-200))',
					'300': 'hsl(var(--accent-300))',
					'400': 'hsl(var(--accent-400))',
					'500': 'hsl(var(--accent-500))',
					'600': 'hsl(var(--accent-600))',
					'700': 'hsl(var(--accent-700))',
					'800': 'hsl(var(--accent-800))',
					'900': 'hsl(var(--accent-900))',
					'950': 'hsl(var(--accent-950))',
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					'50': 'hsl(var(--accent-50))',
					'100': 'hsl(var(--accent-100))',
					'200': 'hsl(var(--accent-200))',
					'300': 'hsl(var(--accent-300))',
					'400': 'hsl(var(--accent-400))',
					'500': 'hsl(var(--accent-500))',
					'600': 'hsl(var(--accent-600))',
					'700': 'hsl(var(--accent-700))',
					'800': 'hsl(var(--accent-800))',
					'900': 'hsl(var(--accent-900))',
					'950': 'hsl(var(--accent-950))',
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'light-pink': '#FFA3FB',
				'sea-green': '#A7FF91'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			}
		},
		clipPath: {
			mypolygon: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
			WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
		}
	},
	plugins: [require("tailwindcss-animate"), require("tailwind-clip-path")],
} satisfies Config

export default config