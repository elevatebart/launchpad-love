import { Bundler, Framework, TestingType } from "./statics";
import { reactive, readonly, inject, App } from "vue";

interface State {
  title: string;
  description: string;
  testingType?: TestingType;
  firstOpen: boolean;
  component: {
    framework?: Framework;
    bundler?: Bundler;
  };
}

function createInitialState(): State {
  return {
    title: "Welcome to Cypress",
    description:
      "Before we get started with testing your project, please confirm which method of testing you would like to use for the initial tests that you’ll be writing.",
    firstOpen: true,
    testingType: undefined,
    component: {
      framework: undefined,
    },
  };
}

const storeKey = Symbol("store");

class Store {
  private state: State;

  install(app: App) {
    app.provide(storeKey, this);
  }

  constructor(initialState: State) {
    this.state = reactive(initialState);
  }

  getState() {
    return readonly(this.state);
  }

  setMeta(meta: { title: string; description: string }) {
    this.state.title = meta.title;
    this.state.description = meta.description;
  }

  setTestingType(testingType: TestingType) {
    this.state.testingType = testingType;
  }

  setComponentFramework(framework: Framework) {
    this.state.component.framework = framework;
  }

  setComponentBundler(bundler: Bundler) {
    this.state.component.bundler = bundler;
  }
}

// useful for testing
export function createStore(stateOverrides: Partial<State> = {}) {
  return new Store({
    ...createInitialState(),
    ...stateOverrides,
  });
}

export const store = new Store(createInitialState());

export const useStore = (): Store => {
  const _store = inject<Store>(storeKey);

  if (!_store) {
    throw Error("`store` not found. Did you forget to do `app.use(store)`?");
  }

  return _store;
};
