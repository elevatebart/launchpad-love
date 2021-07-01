import BigSelect from "./BigSelect.vue";

const manyOptions = [
  {
    name: "VueJs",
    logo: "vue",
    id: "vue",
  },
  {
    name: "ReactJs",
    description: "(detected)",
    logo: "react",
    id: "react",
  },
];

describe("<BigSelect />", () => {
  it("playground", () => {
    cy.mount(() => (
      <div class="m-10">
        <BigSelect
          name="Front-end Framework"
          options={manyOptions}
          value="react"
        />
      </div>
    ));

    cy.contains("button", "ReactJs").click();
  });

  it("renders the name", () => {
    cy.mount(() => <BigSelect name="Front-end Framework" options={[]} />);

    cy.contains("Front-end Framework").should("exist");
  });

  it("shows a placeholder when no value is specified", () => {
    cy.mount(() => (
      <BigSelect
        name="Front-end Framework"
        placeholder="placeholder"
        options={[
          {
            name: "VueJs",
            logo: "vue",
            id: "vue",
          },
        ]}
      />
    ));

    cy.contains("button", "placeholder").should("exist");
  });

  it("should select the value", () => {
    cy.mount(() => (
      <BigSelect
        name="Front-end Framework"
        options={manyOptions}
        value="react"
      />
    ));

    cy.contains("button", "ReactJs").should("exist");
  });

  it("should select the clicked item", () => {
    cy.mount(() => (
      <BigSelect
        name="Front-end Framework"
        options={manyOptions}
        value="react"
      />
    ));

    cy.contains("button", "ReactJs").click();
    cy.contains("VueJs").click();
    cy.contains("ReactJs").should("not.exist");
  });
});
