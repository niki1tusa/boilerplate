import { cva } from 'class-variance-authority';

export const typographyVariants = cva('antialiased leading-normal tracking-normal', {
	variants: {
		color: {
			default: 'text-foreground',
			primary: 'text-primary',
			secondary: 'text-secondary',
			muted: 'text-muted',
		},
		isHover: { true: 'transition-colors hover:opacity-80' },
		weight: {
			regular: 'font-normal',
			medium: 'font-medium',
			semibold: 'font-semibold',
			bold: 'font-bold',
		},
		size: {
			xl: 'text-4xl md:text-5xl tracking-tight',
			lg: 'text-2xl md:text-3xl tracking-tight',
			md: 'text-base ',
			sm: 'text-sm leading-relaxed',
		},
		truncate: {
			none: '',
			one: 'truncate',
			two: 'line-clamp-2',
			three: 'line-clamp-3',
		},
		align: {
			center: 'text-center',
			left: 'text-left',
			right: 'text-right',
			justify: 'text-justify',
			start: 'text-start',
			end: 'text-end',
		},
	},
	defaultVariants: {
		color: 'default',
		isHover: false,
		weight: 'regular',
		size: 'md',
		truncate: 'none',
		align: 'justify',
	},
});
