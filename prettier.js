module.exports = {
	singleQuote: true,
	proseWrap: "always",
	arrowParens: "always",
	overrides: [
		{
			files: ".*rc",
			options: {
				parser: "json"
			}
		}
	]
};
