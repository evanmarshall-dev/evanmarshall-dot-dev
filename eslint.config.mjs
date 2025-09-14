import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Use above imports to create equivalents of __dirname and __filename. ESM does not provide these by default.
// The fileURLToPath function converts module's URL to a file path string.
// The dirname function extracts the directory path from that file path string.
// Now all file paths can be resolved correctly.
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create an instance of FlatCompat, providing the base directory as the current directory. This tells eslint where to resolve config files and plugins from relative to this config.
// Important when migrating older ESLint configs to the new Flat config format.
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Builds ESLint flat config as an array.
// Spread the array returned by compat.extends() into eslintConfig to include the recommended Next.js and TypeScript rules.
// The .extends converts older config formats (e.g. TypeScript) to the new Flat config format and spread ensures the entries are included in order before any custom rules or settings.
// Set ignores to a list of glob patterns to exclude files and directories from linting.
// First presets from .extends are applied, then ignored patterns are set and the paths are all relative to the baseDirectory provided to FlatCompat.
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
