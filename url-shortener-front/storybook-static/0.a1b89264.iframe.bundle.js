"use strict";
(self.webpackChunkmantine_next_template =
  self.webpackChunkmantine_next_template || []).push([
  [0],
  {
    "./node_modules/@mantine/core/esm/core/utils/create-scoped-keydown-handler/create-scoped-keydown-handler.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, {
        Y: () => createScopedKeydownHandler,
      });
      var _find_element_ancestor_find_element_ancestor_mjs__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs",
        );
      function createScopedKeydownHandler({
        parentSelector,
        siblingSelector,
        onKeyDown,
        loop = !0,
        activateOnFocus = !1,
        dir = "rtl",
        orientation,
      }) {
        return (event) => {
          onKeyDown?.(event);
          const elements = Array.from(
              (0,
              _find_element_ancestor_find_element_ancestor_mjs__WEBPACK_IMPORTED_MODULE_0__.P)(
                event.currentTarget,
                parentSelector,
              )?.querySelectorAll(siblingSelector) || [],
            ).filter((node) =>
              (function onSameLevel(target, sibling, parentSelector) {
                return (
                  (0,
                  _find_element_ancestor_find_element_ancestor_mjs__WEBPACK_IMPORTED_MODULE_0__.P)(
                    target,
                    parentSelector,
                  ) ===
                  (0,
                  _find_element_ancestor_find_element_ancestor_mjs__WEBPACK_IMPORTED_MODULE_0__.P)(
                    sibling,
                    parentSelector,
                  )
                );
              })(event.currentTarget, node, parentSelector),
            ),
            current = elements.findIndex((el) => event.currentTarget === el),
            _nextIndex = (function getNextIndex(current, elements, loop) {
              for (let i = current + 1; i < elements.length; i += 1)
                if (!elements[i].disabled) return i;
              if (loop)
                for (let i = 0; i < elements.length; i += 1)
                  if (!elements[i].disabled) return i;
              return current;
            })(current, elements, loop),
            _previousIndex = (function getPreviousIndex(
              current,
              elements,
              loop,
            ) {
              for (let i = current - 1; i >= 0; i -= 1)
                if (!elements[i].disabled) return i;
              if (loop)
                for (let i = elements.length - 1; i > -1; i -= 1)
                  if (!elements[i].disabled) return i;
              return current;
            })(current, elements, loop),
            nextIndex = "rtl" === dir ? _previousIndex : _nextIndex,
            previousIndex = "rtl" === dir ? _nextIndex : _previousIndex;
          switch (event.key) {
            case "ArrowRight":
              "horizontal" === orientation &&
                (event.stopPropagation(),
                event.preventDefault(),
                elements[nextIndex].focus(),
                activateOnFocus && elements[nextIndex].click());
              break;
            case "ArrowLeft":
              "horizontal" === orientation &&
                (event.stopPropagation(),
                event.preventDefault(),
                elements[previousIndex].focus(),
                activateOnFocus && elements[previousIndex].click());
              break;
            case "ArrowUp":
              "vertical" === orientation &&
                (event.stopPropagation(),
                event.preventDefault(),
                elements[_previousIndex].focus(),
                activateOnFocus && elements[_previousIndex].click());
              break;
            case "ArrowDown":
              "vertical" === orientation &&
                (event.stopPropagation(),
                event.preventDefault(),
                elements[_nextIndex].focus(),
                activateOnFocus && elements[_nextIndex].click());
              break;
            case "Home":
              (event.stopPropagation(),
                event.preventDefault(),
                !elements[0].disabled && elements[0].focus());
              break;
            case "End": {
              (event.stopPropagation(), event.preventDefault());
              const last = elements.length - 1;
              !elements[last].disabled && elements[last].focus();
              break;
            }
          }
        };
      }
    },
    "./node_modules/@mantine/core/esm/core/utils/find-element-ancestor/find-element-ancestor.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      function findElementAncestor(element, selector) {
        let _element = element;
        for (
          ;
          (_element = _element.parentElement) && !_element.matches(selector);
        );
        return _element;
      }
      __webpack_require__.d(__webpack_exports__, {
        P: () => findElementAncestor,
      });
    },
    "./node_modules/zustand/esm/middleware.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { Zr: () => persist });
      var console = __webpack_require__(
        "./node_modules/console-browserify/index.js",
      );
      function createJSONStorage(getStorage, options) {
        let storage;
        try {
          storage = getStorage();
        } catch (e) {
          return;
        }
        return {
          getItem: (name) => {
            var _a;
            const parse = (str2) =>
                null === str2
                  ? null
                  : JSON.parse(
                      str2,
                      null == options ? void 0 : options.reviver,
                    ),
              str = null != (_a = storage.getItem(name)) ? _a : null;
            return str instanceof Promise ? str.then(parse) : parse(str);
          },
          setItem: (name, newValue) =>
            storage.setItem(
              name,
              JSON.stringify(
                newValue,
                null == options ? void 0 : options.replacer,
              ),
            ),
          removeItem: (name) => storage.removeItem(name),
        };
      }
      const toThenable = (fn) => (input) => {
          try {
            const result = fn(input);
            return result instanceof Promise
              ? result
              : {
                  then: (onFulfilled) => toThenable(onFulfilled)(result),
                  catch(_onRejected) {
                    return this;
                  },
                };
          } catch (e) {
            return {
              then(_onFulfilled) {
                return this;
              },
              catch: (onRejected) => toThenable(onRejected)(e),
            };
          }
        },
        persist = (config, baseOptions) => (set, get, api) => {
          let options = {
              storage: createJSONStorage(() => window.localStorage),
              partialize: (state) => state,
              version: 0,
              merge: (persistedState, currentState) => ({
                ...currentState,
                ...persistedState,
              }),
              ...baseOptions,
            },
            hasHydrated = !1,
            hydrationVersion = 0;
          const hydrationListeners = new Set(),
            finishHydrationListeners = new Set();
          let storage = options.storage;
          if (!storage)
            return config(
              (...args) => {
                (console.warn(
                  `[zustand persist middleware] Unable to update item '${options.name}', the given storage is currently unavailable.`,
                ),
                  set(...args));
              },
              get,
              api,
            );
          const setItem = () => {
              const state = options.partialize({ ...get() });
              return storage.setItem(options.name, {
                state,
                version: options.version,
              });
            },
            savedSetState = api.setState;
          api.setState = (state, replace) => (
            savedSetState(state, replace),
            setItem()
          );
          const configResult = config(
            (...args) => (set(...args), setItem()),
            get,
            api,
          );
          let stateFromStorage;
          api.getInitialState = () => configResult;
          const hydrate = () => {
            var _a, _b;
            if (!storage) return;
            const currentVersion = ++hydrationVersion;
            ((hasHydrated = !1),
              hydrationListeners.forEach((cb) => {
                var _a2;
                return cb(null != (_a2 = get()) ? _a2 : configResult);
              }));
            const postRehydrationCallback =
              (null == (_b = options.onRehydrateStorage)
                ? void 0
                : _b.call(options, null != (_a = get()) ? _a : configResult)) ||
              void 0;
            return toThenable(storage.getItem.bind(storage))(options.name)
              .then((deserializedStorageValue) => {
                if (deserializedStorageValue) {
                  if (
                    "number" != typeof deserializedStorageValue.version ||
                    deserializedStorageValue.version === options.version
                  )
                    return [!1, deserializedStorageValue.state];
                  if (options.migrate) {
                    const migration = options.migrate(
                      deserializedStorageValue.state,
                      deserializedStorageValue.version,
                    );
                    return migration instanceof Promise
                      ? migration.then((result) => [!0, result])
                      : [!0, migration];
                  }
                  console.error(
                    "State loaded from storage couldn't be migrated since no migrate function was provided",
                  );
                }
                return [!1, void 0];
              })
              .then((migrationResult) => {
                var _a2;
                if (currentVersion !== hydrationVersion) return;
                const [migrated, migratedState] = migrationResult;
                return (
                  (stateFromStorage = options.merge(
                    migratedState,
                    null != (_a2 = get()) ? _a2 : configResult,
                  )),
                  set(stateFromStorage, !0),
                  migrated ? setItem() : void 0
                );
              })
              .then(() => {
                currentVersion === hydrationVersion &&
                  (null == postRehydrationCallback ||
                    postRehydrationCallback(get(), void 0),
                  (stateFromStorage = get()),
                  (hasHydrated = !0),
                  finishHydrationListeners.forEach((cb) =>
                    cb(stateFromStorage),
                  ));
              })
              .catch((e) => {
                currentVersion === hydrationVersion &&
                  (null == postRehydrationCallback ||
                    postRehydrationCallback(void 0, e));
              });
          };
          return (
            (api.persist = {
              setOptions: (newOptions) => {
                ((options = { ...options, ...newOptions }),
                  newOptions.storage && (storage = newOptions.storage));
              },
              clearStorage: () => {
                null == storage || storage.removeItem(options.name);
              },
              getOptions: () => options,
              rehydrate: () => hydrate(),
              hasHydrated: () => hasHydrated,
              onHydrate: (cb) => (
                hydrationListeners.add(cb),
                () => {
                  hydrationListeners.delete(cb);
                }
              ),
              onFinishHydration: (cb) => (
                finishHydrationListeners.add(cb),
                () => {
                  finishHydrationListeners.delete(cb);
                }
              ),
            }),
            options.skipHydration || hydrate(),
            stateFromStorage || configResult
          );
        };
    },
    "./node_modules/zustand/esm/react.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { v: () => create });
      var react = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js",
      );
      const createStoreImpl = (createState) => {
          let state;
          const listeners = new Set(),
            setState = (partial, replace) => {
              const nextState =
                "function" == typeof partial ? partial(state) : partial;
              if (!Object.is(nextState, state)) {
                const previousState = state;
                ((state = (
                  null != replace
                    ? replace
                    : "object" != typeof nextState || null === nextState
                )
                  ? nextState
                  : Object.assign({}, state, nextState)),
                  listeners.forEach((listener) =>
                    listener(state, previousState),
                  ));
              }
            },
            getState = () => state,
            api = {
              setState,
              getState,
              getInitialState: () => initialState,
              subscribe: (listener) => (
                listeners.add(listener),
                () => listeners.delete(listener)
              ),
            },
            initialState = (state = createState(setState, getState, api));
          return api;
        },
        identity = (arg) => arg;
      const createImpl = (createState) => {
          const api = ((createState) =>
              createState ? createStoreImpl(createState) : createStoreImpl)(
              createState,
            ),
            useBoundStore = (selector) =>
              (function useStore(api, selector = identity) {
                const slice = react.useSyncExternalStore(
                  api.subscribe,
                  react.useCallback(
                    () => selector(api.getState()),
                    [api, selector],
                  ),
                  react.useCallback(
                    () => selector(api.getInitialState()),
                    [api, selector],
                  ),
                );
                return (react.useDebugValue(slice), slice);
              })(api, selector);
          return (Object.assign(useBoundStore, api), useBoundStore);
        },
        create = (createState) =>
          createState ? createImpl(createState) : createImpl;
    },
  },
]);
//# sourceMappingURL=0.a1b89264.iframe.bundle.js.map
