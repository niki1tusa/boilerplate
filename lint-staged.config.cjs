module.exports = {
	'./src/**/*.{js,jsx,ts,tsx}': ['pnpm lint:fix', 'pnpm format', 'git add .'],
	'**/*.{json,css,scss,md,webmanifest}': ['pnpm format', 'git add .'],
};
