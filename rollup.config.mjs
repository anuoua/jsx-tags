import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import { defineConfig } from "rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const configGen = (format) => {
  let fileNameMap = {
    cjs: "cjs",
    esm: "mjs",
    umd: "global.js",
  };

  return defineConfig({
    external: "react",
    input: "src/index.ts",
    output: [
      {
        name: format === "umd" ? "JSXTags" : undefined,
        dir: "dist",
        entryFileNames: `index.${fileNameMap[format]}`,
        format,
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve(),
      esbuild({
        sourceMap: true,
        target: "esnext",
      }),
    ],
  });
};

const dtsRollup = () =>
  defineConfig({
    input: "build/index.d.ts",
    output: [{ file: `dist/index.d.ts`, format: "es" }],
    plugins: [dts()],
  });

const config = [
  configGen("cjs"),
  configGen("esm"),
  configGen("umd"),
  dtsRollup(),
];

export default config;
