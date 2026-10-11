// src/stubs/async-hooks.ts
export class AsyncLocalStorage {
  run(store: unknown, callback: () => unknown) {
    return callback();
  }
  getStore() {
    return undefined;
  }
}
