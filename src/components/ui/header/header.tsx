import { headerVariants } from './header-config';
import { HeaderProps } from './header-types';
import { cn } from '@/lib/utils';

export default function Header({
	logo: Logo,
	items,
	anotherItems,
	position,
	className,
	...rest
}: HeaderProps) {
	const styleProps = cn(headerVariants({ position }), className);
	return (
		<header className={styleProps} {...rest}>
			{typeof Logo === 'string' ? Logo : <Logo />}
			<ul className='flex-center'>
				{items.map(el => (
					<li key={el}>{el}</li>
				))}
			</ul>
			<ul className='flex-center'>
				{anotherItems?.map(el => (
					<li key={el}>{el}</li>
				))}
			</ul>
		</header>
	);
}
