module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"warn",
			"tab"
		],
		"linebreak-style": [
			"warn",
			"windows"
		],
		"quotes": [
			"warn",
			"single"
		],
		"semi": [
			"warn",
			"always"
        ],
        "react/prop-types": 0
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	}
};
