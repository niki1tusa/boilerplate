import { cva } from 'class-variance-authority';

export const sectionVariants = cva('w-full', {
	variants: {
		fullScreen: { true: 'min-h-screen min-h-dvh' },
		direction: { row: 'flex-row', col: 'flex-col' },
		justify: {
			start: 'justify-start',
			center: 'justify-center',
			end: 'justify-end',
			between: 'justify-between',
			around: 'justify-around',
			evenly: 'justify-evenly',
		},
		align: {
			start: 'items-start',
			center: 'items-center',
			end: 'items-end',
			stretch: 'items-stretch',
			baseline: 'items-baseline',
		},
		padding: { true: 'p-page' },
		display: { flex: 'flex', block: 'block' },
	},

	defaultVariants: {
		fullScreen: false,
		display: 'flex',
		direction: 'col',
		justify: 'center',
		align: 'center',
		padding: true,
	},
});
