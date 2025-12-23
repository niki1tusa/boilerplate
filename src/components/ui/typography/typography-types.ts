import { type VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactElement, ReactNode } from 'react';

import { typographyVariants } from './typography-config';

type TypographyVariantsProps = VariantProps<typeof typographyVariants>;

type TypographyWithChildren = {
	children: ReactNode;
	asChild?: false;
};

type TypographyWithASChild = {
	asChild: true;
	children: ReactElement;
};

type TypographyContent = TypographyWithChildren | TypographyWithASChild;

export type TypographyProps = { className?: string } & TypographyVariantsProps &
	TypographyContent &
	HTMLAttributes<HTMLElement>;
