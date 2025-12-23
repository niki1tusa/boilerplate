import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { typographyVariants } from './typography-config';
import { TypographyProps } from './typography-types';
import { cn } from '@/lib/utils';

const Typography = forwardRef<HTMLElement, TypographyProps>(
	(
		{ size, weight, className, color, truncate, isHover, align, asChild, children, ...rest },
		ref
	) => {
		const Component = asChild ? Slot : 'span';
		const styleProps = cn(
			typographyVariants({ color, weight, size, truncate, isHover, align }),
			className
		);
		return (
			<Component className={styleProps} ref={ref} {...rest}>
				{children}
			</Component>
		);
	}
);
Typography.displayName = 'Typography';
export default Typography;
