// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";


// export default [
//   {files: ["**/*.{js,mjs,cjs,jsx}"]},
//   {languageOptions: { globals: {...globals.browser, ...globals.node} }},
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Disable prop-types validation rule globally
      'react/prop-types': 'off',

      // Disable the "React in scope" rule for JSX
      'react/react-in-jsx-scope': 'off',
    },
  },
];