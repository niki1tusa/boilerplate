import { SectionProps } from './section-types';
import { sectionVariants } from './sections-config';
import { cn } from '@/lib/utils';

export default function Section({
	tag,
	children,
	className,
	fullScreen,
	direction,
	justify,
	align,
	padding,
	display,
	...rest
}: SectionProps) {
	const styleProps = cn(
		sectionVariants({
			fullScreen,
			direction,
			justify,
			align,
			padding,
			display,
		}),
		className
	);
	const Component = tag ? tag : 'div';
	return (
		<Component className={styleProps} {...rest}>
			{children}
		</Component>
	);
}
