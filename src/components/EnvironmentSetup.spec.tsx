import EnvironmentSetup from "./EnvironmentSetup.vue";

describe("<EnvironmentSetup />", () => {
  it("playground", () => {
    cy.mount(() => (
      <div class="m-10">
        <EnvironmentSetup />
      </div>
    ));
  });
});
