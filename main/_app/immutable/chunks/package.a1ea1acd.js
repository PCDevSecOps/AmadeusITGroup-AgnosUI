const t=`{
	"name": "@agnos-ui/react",
	"description": "Bootstrap-based widget library for React.",
	"homepage": "https://amadeusitgroup.github.io/AgnosUI/latest/",
	"keywords": [
		"react",
		"bootstrap",
		"components",
		"widgets",
		"alert",
		"modal",
		"pagination",
		"rating"
	],
	"main": "dist/lib/index.js",
	"module": "dist/lib/index.mjs",
	"types": "dist/lib/index.d.ts",
	"files": [
		"dist/lib"
	],
	"scripts": {
		"dev": "vite -c vite.demo.config.ts",
		"dev:coverage": "vite -c vite.demo-coverage.config.ts",
		"build": "npm run build:rollup && npm run build:dts && npm run build:api-extractor && npm run build:demo && npm run build:tsc",
		"build:coverage": "vite build -c vite.demo-coverage.config.ts",
		"build:rollup": "vite build -c vite.lib.config.ts",
		"build:dts": "tsc -p tsconfig.d.json",
		"build:api-extractor": "api-extractor run",
		"build:demo": "vite build -c vite.demo.config.ts",
		"build:tsc": "tsc",
		"preview": "vite preview -c vite.demo.config.ts"
	},
	"devDependencies": {
		"@types/react": "^18.2.18",
		"@types/react-dom": "^18.2.7",
		"@vitejs/plugin-react": "^4.0.4",
		"eslint-plugin-react": "^7.33.1",
		"react": "^18.2.0",
		"react-dom": "^18.2.0",
		"react-router-dom": "^6.14.2"
	},
	"dependencies": {
		"@agnos-ui/core": "",
		"@amadeus-it-group/tansu": "0.0.22",
		"classnames": "^2.3.2"
	},
	"peerDependencies": {
		"react": "*",
		"react-dom": "*"
	},
	"license": "MIT",
	"bugs": "https://github.com/AmadeusITGroup/AgnosUI/issues",
	"repository": {
		"type": "git",
		"url": "https://github.com/AmadeusITGroup/AgnosUI.git",
		"directory": "react"
	}
}
`;export{t as default};