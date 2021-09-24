const prettierConfig = Object.assign({}, require("./prettier"));
delete prettierConfig.overrides;
const restrictedGlobals = require("confusing-browser-globals");

module.exports = {
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 2018
	},
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		jest: true,
		node: true
	},
	extends: [
		"eslint:recommended",
		"plugin:node/recommended",
		"plugin:import/recommended",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"standard",
		"standard-jsx",
		"prettier",
		"prettier/react",
		"prettier/standard"
	],
	plugins: ["import", "react", "react-hooks", "jsx-a11y", "prettier"],
	rules: {
		// Built-in ESLint rules.
		// See: https://github.com/prettier/eslint-config-prettier#curly
		curly: ["error", "all"],
		"no-console": "error",
		"no-nested-ternary": "error",
		"no-process-exit": "off",
		"no-restricted-globals": ["error"].concat(restrictedGlobals),
		"no-var": "error",

		// Plugin defined rules.
		"node/no-unsupported-features/es-syntax": "off",
		"node/shebang": "off",

		"import/no-named-as-default": "off",
		"import/no-unresolved": [
			"error",
			{
				// Resolved via Jest using `moduleNameMapper`.
				ignore: [
					"^enzyme$",
					"^@testing-library/jest-dom$",
					"^@testing-library/jest-dom/extend-expect$",
					"^@testing-library/react$",
					"^react-hooks-testing-library$"
				]
			}
		],
		"import/unambiguous": "off",

		// `next/link` adds `href` via `cloneElement`, so this check is wrong.
		"jsx-a11y/anchor-is-valid": "off",
		"jsx-a11y/iframe-has-title": "warn",
		"jsx-a11y/label-has-associated-control": "off",
		"jsx-a11y/label-has-for": "off",
		"jsx-a11y/mouse-events-have-key-events": "warn",
		"jsx-a11y/no-onchange": "off",

		"prettier/prettier": ["warn", prettierConfig],

		"react/button-has-type": "error",
		"react/display-name": "error",
		"react/jsx-sort-default-props": "error",
		"react/no-access-state-in-setstate": "error",
		"react/no-danger-with-children": "error",
		"react/no-deprecated": "error",
		"react/no-find-dom-node": "error",
		"react/no-redundant-should-component-update": "error",
		"react/no-this-in-sfc": "error",
		"react/no-typos": "error",
		"react/no-unescaped-entities": "off",
		"react/no-unused-prop-types": "error",
		"react/no-unused-state": "error",
		"react/no-unsafe": "warn",
		"react/prefer-es6-class": "error",
		"react/prop-types": "error",
		"react/sort-prop-types": "error",
		"react/static-property-placement": "error",
		"react/void-dom-elements-no-children": "error",

		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	},
	settings: {
		react: {
			version: "detect"
		}
	}
};
