import { ref } from "vue";
import { SupportedBundlerWebpack } from "../utils/bundler";
import { SupportedFrameworkNext } from "../utils/frameworks";
import ConfigFile from "./ConfigFile.vue";

describe("<ConfigFile />", () => {
  beforeEach(() => {
    const display = ref(false);

    cy.mount(() => (
      <div class="m-10">
        <button
          data-cy="show"
          onClick={() => {
            display.value = true;
          }}
          class="hidden"
        ></button>
        {display.value ? <ConfigFile /> : undefined}
      </div>
    )).then(() => {
      Cypress.store.setComponentSetup({
        bundler: SupportedBundlerWebpack,
        framework: SupportedFrameworkNext,
        complete: false,
      });

      cy.get('[data-cy="show"]').click({ force: true });
    });
  });

  it("playground", { viewportWidth: 1280, viewportHeight: 1024 }, () => {
    cy.contains("button", "JavaScript").click();
  });

  it("should display a copy button when in manual mode", () => {
    cy.contains("Copy").should("not.exist");
    cy.contains("Create file manually").click();
    cy.contains("Copy").should("exist");
  });
});
