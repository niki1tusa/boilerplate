import { Button } from '@/components/ui/button';
import Header from '@/components/ui/header/header';
import Section from '@/components/ui/section/section';
import Typography from '@/components/ui/typography/typography';

export default function Home() {
	return (
		<>
			<Section className='bg-green-500'>
				<Header
					className='bg-white'
					logo='logo'
					items={['Home', 'Marketing', 'Promotion', 'About']}
					anotherItems={['Login', 'Register']}
				/>
				<Typography weight='bold' size='xl'>
					Home page
				</Typography>
			</Section>
			<Section className='bg-blue-800'>
				<Button>Click me</Button>
			</Section>
		</>
	);
}
