const t=`{
	"name": "@agnos-ui/svelte",
	"description": "Bootstrap-based widget library for Svelte.",
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"keywords": [
		"svelte",
		"bootstrap",
		"components",
		"widgets",
		"alert",
		"modal",
		"pagination",
		"rating"
	],
	"type": "module",
	"main": "dist/lib/index.cjs",
	"module": "dist/lib/index.js",
	"types": "dist/lib/index.d.ts",
	"files": [
		"dist/lib"
	],
	"exports": {
		".": {
			"types": "./dist/lib/index.d.ts",
			"svelte": "./dist/lib/index.js"
		}
	},
	"scripts": {
		"dev": "vite -c vite.demo.config.ts",
		"dev:coverage": "vite -c vite.demo-coverage.config.ts",
		"build": "npm run build:lib && npm run build:demo && npm run svelte-check:lib && npm run svelte-check:demo",
		"build:lib": "svelte-package -i lib -o dist/lib",
		"build:coverage": "vite build -c vite.demo-coverage.config.ts",
		"build:demo": "vite build -c vite.demo.config.ts",
		"preview": "vite preview -c vite.demo.config.ts",
		"svelte-check:lib": "svelte-check --fail-on-warnings --tsconfig ./tsconfig.json --output human-verbose",
		"svelte-check:demo": "svelte-check --fail-on-warnings --tsconfig ./demo/tsconfig.json --output human-verbose"
	},
	"dependencies": {
		"@agnos-ui/core": "",
		"@amadeus-it-group/tansu": "0.0.22"
	},
	"peerDependencies": {
		"svelte": "*"
	},
	"devDependencies": {
		"@sveltejs/package": "^2.2.1",
		"@sveltejs/vite-plugin-svelte": "^2.4.5",
		"eslint-plugin-svelte": "^2.32.4",
		"prettier-plugin-svelte": "^2.10.1",
		"svelte": "^4.2.0",
		"svelte-check": "^3.5.0"
	},
	"license": "MIT",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"repository": {
		"type": "git",
		"url": "https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "svelte"
	}
}
`;export{t as default};