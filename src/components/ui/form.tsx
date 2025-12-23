import { ComponentPropsWithoutRef, ReactNode } from 'react';

import Typography from './typography/typography';
import { cn } from '@/lib/utils';

type FormProps = {
	children: ReactNode;
	title: string;
	description?: string;
	className?: string;
	contentClassName?: string;
} & ComponentPropsWithoutRef<'form'>;
// onSubmit будет в ...props
export default function Form({
	children,
	title,
	description,
	className,
	contentClassName,
	...props
}: FormProps) {
	return (
		<form className={cn('form', className)} {...props}>
			<Typography size='lg' weight='semibold'>
				{title}
			</Typography>
			{description && (
				<Typography color='muted' size='sm'>
					{description}
				</Typography>
			)}
			<div className={cn('space-y-4', contentClassName)}>{children}</div>
		</form>
	);
}
