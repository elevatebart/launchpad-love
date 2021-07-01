export type TestingType = "e2e" | "component";

export const testingTypes: TestingType[] = ["e2e", "component"];

export type Bundler = {
  id: BundlerId;
  name: string;
  logo: string;
};

export const SupportedBundlerWebpack: Bundler = {
  id: "webpack",
  name: "Webpack",
  logo: "webpack",
};

export const SupportedBundlerVite: Bundler = {
  id: "vite",
  name: "ViteJs",
  logo: "vite",
};

export const supportedBundlers: Bundler[] = [
  SupportedBundlerWebpack,
  SupportedBundlerVite,
];

type BundlerId = "webpack" | "vite";
type Library = "vue" | "react";

export type Framework = {
  id: string;
  name: string;
  bundler?: BundlerId;
  library: Library;
  logo: string;
};

export const SupportedFrameworkNext: Framework = {
  id: "nextjs",
  name: "NextJs",
  bundler: "webpack",
  library: "react",
  logo: "nextjs",
};

export const SupportedFrameworkNuxt: Framework = {
  id: "nuxt",
  name: "NuxtJs",
  bundler: "webpack",
  library: "vue",
  logo: "nuxt",
};

export const SupportedFrameworkVueCLI: Framework = {
  id: "vuecli",
  name: "Vue CLI",
  bundler: "webpack",
  library: "vue",
  logo: "vue",
};

export const SupportedFrameworkCreateReactApp: Framework = {
  id: "cra",
  name: "Create React App",
  bundler: "webpack",
  library: "react",
  logo: "react",
};

export const SupportedFrameworkVue: Framework = {
  id: "vue",
  name: "VueJs",
  library: "vue",
  logo: "vue",
};

export const SupportedFrameworkReact: Framework = {
  id: "react",
  name: "React",
  library: "react",
  logo: "react",
};

export const supportedFrameworks = [
  SupportedFrameworkNuxt,
  SupportedFrameworkNext,
  SupportedFrameworkCreateReactApp,
  SupportedFrameworkVueCLI,
  SupportedFrameworkReact,
  SupportedFrameworkVue,
];
