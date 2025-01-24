import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Apply rules to your project files
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    rules: {
      // Your project-specific rules
      "@typescript-eslint/no-unused-vars": "warn", // Warn for unused vars in your code
    },
  },
  {
    // Ignore rules for the specific library file
    files: ["**/animated-beam.tsx"], // Match the specific file
    rules: {
      "@typescript-eslint/no-unused-vars": "off", // Disable the rule for this file
    },
  },
  {
  ignores: ["src/components/ui/sticky-scroll-reveal.tsx"], // Ignore the file
  },
];

export default eslintConfig;
