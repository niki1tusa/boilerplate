import { cva } from 'class-variance-authority';

export const headerVariants = cva('w-full z-50 flex justify-between items-center', {
	variants: {
		position: {
			relative: 'relative',
			fixed: 'fixed top-0',
		},
	},
	defaultVariants: {
		position: 'fixed',
	},
});
