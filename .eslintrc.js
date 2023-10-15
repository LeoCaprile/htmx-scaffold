module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["@typescript-eslint"],
	ignorePatterns: ["node_modules/", "dist/", "public/"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"@typescript-eslint/no-unused-vars": ["off"],
	},
};
