import Image from 'next/image';

import { headerVariants } from './header-config';
import { HeaderProps } from './header-types';
import { cn } from '@/lib/utils';

export default function Header({ items, anotherItems, position, className, ...rest }: HeaderProps) {
	const styleProps = cn(headerVariants({ position }), className);
	return (
		<header className={`${styleProps} border`} {...rest}>
			<Image width={96} height={85} src='/logo/logo-small.png' alt='logo' />
			<ul className='flex-center gap-[1.25em] text-[1rem] font-semibold'>
				{items.map(el => (
					<li key={el}>{el.toUpperCase()}</li>
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
