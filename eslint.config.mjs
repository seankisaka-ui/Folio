import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "coverage/**", "data/**", "Folio-design-system/**", "Atkinson_Hyperlegible_Next/**", "Bricolage_Grotesque/**", "next-env.d.ts"]),
]);
