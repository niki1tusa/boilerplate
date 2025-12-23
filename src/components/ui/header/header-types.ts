import { VariantProps } from 'class-variance-authority';
import { ComponentProps, ComponentType, SVGProps } from 'react';

import { headerVariants } from './header-config';

type HeaderVariantsProps = VariantProps<typeof headerVariants>;
type LogoSvg = ComponentType<SVGProps<SVGSVGElement>>;

export type HeaderProps = {
	logo: string | LogoSvg;
	items: string[];
	anotherItems?: string[];
	className?: string;
} & HeaderVariantsProps &
	ComponentProps<'header'>;
