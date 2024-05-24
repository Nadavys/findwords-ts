import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

// Remove whitespace from global names
const cleanedGlobals = Object.fromEntries(
  Object.entries(globals.browser).map(([key, value]) => [key.trim(), value])
);

export default [
  {languageOptions: { globals: cleanedGlobals }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];