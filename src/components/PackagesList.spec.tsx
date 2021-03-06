import { SupportedBundlerWebpack } from "../utils/bundler";
import { SupportedFrameworkNext } from "../utils/frameworks";
import PackagesList from "./PackagesList.vue";

describe("<PackagesList />", () => {
  it("playground", () => {
    cy.mount(() => <PackagesList />).then(() => {
      Cypress.store.setComponentSetup({
        bundler: SupportedBundlerWebpack,
        framework: SupportedFrameworkNext,
        complete: true,
      });
    });
  });
});
