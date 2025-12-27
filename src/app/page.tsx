import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header/header';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

import { HEADER_LINKS } from '@/shared/config/header-link-config';

export default function Home() {
	return (
		<div>
			<Section className='w bg-[url(/nomera/nomera-hero.jpg)]'>
				<Section className='w-full pt-[2em]'>
					<Header
						items={HEADER_LINKS}
						logo='/logo/logo-small.png'
						className='w-[750px] px-3.75 text-white lg:w-[970px] xl:w-[1170px]'
					/>
				</Section>
				<Typography weight='bold' size='xl'>
					Home page
				</Typography>
			</Section>
			<Section className='bg-blue-800'>
				<Button>Click me</Button>
			</Section>
		</div>
	);
}
