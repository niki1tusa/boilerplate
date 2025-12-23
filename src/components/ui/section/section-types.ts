import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, ReactNode } from 'react';

import { sectionVariants } from './sections-config';

type SectionVariantsProps = VariantProps<typeof sectionVariants>;

export type SectionProps = {
	tag?: 'section' | 'div' | 'main';
	children: ReactNode;
	className?: string;
} & SectionVariantsProps &
	HTMLAttributes<HTMLElement>;
