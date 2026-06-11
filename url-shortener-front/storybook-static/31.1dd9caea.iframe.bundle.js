"use strict";
(self.webpackChunkmantine_next_template =
  self.webpackChunkmantine_next_template || []).push([
  [31],
  {
    "./node_modules/@mantine/core/esm/components/Combobox/Combobox.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { G: () => Combobox });
      var rem = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs",
        ),
        get_size = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs",
        ),
        create_vars_resolver = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs",
        ),
        use_props = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs",
        ),
        use_styles = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs",
        ),
        Popover = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Popover/Popover.mjs",
        ),
        Combobox_module_default = {
          dropdown: "m_88b62a41",
          search: "m_985517d8",
          options: "m_b2821a6e",
          option: "m_92253aa5",
          empty: "m_2530cd1d",
          header: "m_858f94bd",
          footer: "m_82b967cb",
          group: "m_254f3e4f",
          groupLabel: "m_2bb2e9e5",
          chevron: "m_2943220b",
          optionsDropdownOption: "m_390b5f4",
          optionsDropdownCheckIcon: "m_8ee53fc2",
          optionsDropdownCheckPlaceholder: "m_a530ee0a",
        },
        get_theme_color = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs",
        ),
        factory = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/factory/factory.mjs",
        ),
        Box = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/Box/Box.mjs",
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const defaultProps = { error: null },
        varsResolver = (0, create_vars_resolver.V)(
          (theme, { size, color }) => ({
            chevron: {
              "--combobox-chevron-size": (0, get_size.YC)(
                size,
                "combobox-chevron-size",
              ),
              "--combobox-chevron-color": color
                ? (0, get_theme_color.r)(color, theme)
                : void 0,
            },
          }),
        ),
        ComboboxChevron = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)(
              "ComboboxChevron",
              defaultProps,
              _props,
            ),
            {
              size,
              error,
              style,
              className,
              classNames,
              styles,
              unstyled,
              vars,
              attributes,
              mod,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: "ComboboxChevron",
              classes: Combobox_module_default,
              props,
              style,
              className,
              classNames,
              styles,
              unstyled,
              vars,
              varsResolver,
              attributes,
              rootSelector: "chevron",
            });
          return (0, jsx_runtime.jsx)(Box.a, {
            component: "svg",
            ...others,
            ...getStyles("chevron"),
            size,
            viewBox: "0 0 15 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            mod: ["combobox-chevron", { error }, mod],
            children: (0, jsx_runtime.jsx)("path", {
              d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
              fill: "currentColor",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }),
          });
        });
      ((ComboboxChevron.classes = Combobox_module_default),
        (ComboboxChevron.varsResolver = varsResolver),
        (ComboboxChevron.displayName = "@mantine/core/ComboboxChevron"));
      var create_safe_context = __webpack_require__(
        "./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs",
      );
      const [ComboboxProvider, useComboboxContext] = (0, create_safe_context.F)(
        "Combobox component was not found in tree",
      );
      var Input = __webpack_require__(
        "./node_modules/@mantine/core/esm/components/Input/Input.mjs",
      );
      function ComboboxClearButton({
        onMouseDown,
        onClick,
        onClear,
        ...others
      }) {
        return (0, jsx_runtime.jsx)(Input.p.ClearButton, {
          tabIndex: -1,
          "aria-hidden": !0,
          ...others,
          onMouseDown: (event) => {
            (event.preventDefault(), onMouseDown?.(event));
          },
          onClick: (event) => {
            (onClear(), onClick?.(event));
          },
        });
      }
      ComboboxClearButton.displayName = "@mantine/core/ComboboxClearButton";
      const ComboboxDropdown = (0, factory.P9)((props) => {
        const { classNames, styles, className, style, hidden, ...others } = (0,
          use_props.Y)("ComboboxDropdown", null, props),
          ctx = useComboboxContext();
        return (0, jsx_runtime.jsx)(Popover.A.Dropdown, {
          ...others,
          role: "presentation",
          "data-hidden": hidden || void 0,
          "data-floating-height": ctx.floatingHeight || void 0,
          ...ctx.getStyles("dropdown", {
            className,
            style,
            classNames,
            styles,
          }),
        });
      });
      ((ComboboxDropdown.classes = Combobox_module_default),
        (ComboboxDropdown.displayName = "@mantine/core/ComboboxDropdown"));
      var is_element = __webpack_require__(
        "./node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs",
      );
      const ComboboxDropdownTarget_defaultProps = { refProp: "ref" },
        ComboboxDropdownTarget = (0, factory.P9)((props) => {
          const { children, refProp, ref } = (0, use_props.Y)(
            "ComboboxDropdownTarget",
            ComboboxDropdownTarget_defaultProps,
            props,
          );
          if ((useComboboxContext(), !(0, is_element.v)(children)))
            throw new Error(
              "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
            );
          return (0, jsx_runtime.jsx)(Popover.A.Target, {
            ref,
            refProp,
            children,
          });
        });
      ComboboxDropdownTarget.displayName =
        "@mantine/core/ComboboxDropdownTarget";
      const ComboboxEmpty = (0, factory.P9)((props) => {
        const { classNames, className, style, styles, vars, ...others } = (0,
        use_props.Y)("ComboboxEmpty", null, props);
        return (0, jsx_runtime.jsx)(Box.a, {
          ...useComboboxContext().getStyles("empty", {
            className,
            classNames,
            styles,
            style,
          }),
          ...others,
        });
      });
      ((ComboboxEmpty.classes = Combobox_module_default),
        (ComboboxEmpty.displayName = "@mantine/core/ComboboxEmpty"));
      var get_ref_prop = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs",
        ),
        get_single_element_child = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-single-element-child/get-single-element-child.mjs",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        );
      function useComboboxTargetProps({
        onKeyDown,
        onClick,
        withKeyboardNavigation,
        withAriaAttributes,
        withExpandedAttribute,
        targetType,
        autoComplete,
      }) {
        const ctx = useComboboxContext(),
          [selectedOptionId, setSelectedOptionId] = (0, react.useState)(null);
        return {
          ...(withAriaAttributes
            ? {
                ...(withExpandedAttribute ? { role: "combobox" } : {}),
                "aria-haspopup": "listbox",
                "aria-expanded": withExpandedAttribute
                  ? !(!ctx.store.listId || !ctx.store.dropdownOpened)
                  : void 0,
                "aria-controls":
                  ctx.store.dropdownOpened && ctx.store.listId
                    ? ctx.store.listId
                    : void 0,
                "aria-activedescendant":
                  (ctx.store.dropdownOpened && selectedOptionId) || void 0,
                autoComplete,
                "data-expanded": ctx.store.dropdownOpened || void 0,
                "data-mantine-stop-propagation":
                  ctx.store.dropdownOpened || void 0,
              }
            : {}),
          onKeyDown: (event) => {
            if ((onKeyDown?.(event), !ctx.readOnly && withKeyboardNavigation)) {
              if (event.nativeEvent.isComposing) return;
              if (
                ("ArrowDown" === event.nativeEvent.code &&
                  (event.preventDefault(),
                  ctx.store.dropdownOpened
                    ? setSelectedOptionId(ctx.store.selectNextOption())
                    : (ctx.store.openDropdown("keyboard"),
                      setSelectedOptionId(ctx.store.selectActiveOption()),
                      ctx.store.updateSelectedOptionIndex("selected", {
                        scrollIntoView: !0,
                      }))),
                "ArrowUp" === event.nativeEvent.code &&
                  (event.preventDefault(),
                  ctx.store.dropdownOpened
                    ? setSelectedOptionId(ctx.store.selectPreviousOption())
                    : (ctx.store.openDropdown("keyboard"),
                      setSelectedOptionId(ctx.store.selectActiveOption()),
                      ctx.store.updateSelectedOptionIndex("selected", {
                        scrollIntoView: !0,
                      }))),
                "Enter" === event.nativeEvent.code ||
                  "NumpadEnter" === event.nativeEvent.code)
              ) {
                if (229 === event.nativeEvent.keyCode) return;
                const selectedOptionIndex = ctx.store.getSelectedOptionIndex();
                ctx.store.dropdownOpened && -1 !== selectedOptionIndex
                  ? (event.preventDefault(), ctx.store.clickSelectedOption())
                  : "button" === targetType &&
                    (event.preventDefault(),
                    ctx.store.openDropdown("keyboard"));
              }
              ("Escape" === event.key && ctx.store.closeDropdown("keyboard"),
                "Space" === event.nativeEvent.code &&
                  "button" === targetType &&
                  (event.preventDefault(),
                  ctx.store.toggleDropdown("keyboard")));
            }
          },
          onClick: (event) => {
            ("button" === targetType && event.currentTarget.focus(),
              onClick?.(event));
          },
        };
      }
      var use_merged_ref = __webpack_require__(
        "./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs",
      );
      const ComboboxEventsTarget_defaultProps = {
          refProp: "ref",
          targetType: "input",
          withKeyboardNavigation: !0,
          withAriaAttributes: !0,
          withExpandedAttribute: !1,
          autoComplete: "off",
        },
        ComboboxEventsTarget = (0, factory.P9)((props) => {
          const {
              children,
              refProp,
              withKeyboardNavigation,
              withAriaAttributes,
              withExpandedAttribute,
              targetType,
              autoComplete,
              ref,
              ...others
            } = (0, use_props.Y)(
              "ComboboxEventsTarget",
              ComboboxEventsTarget_defaultProps,
              props,
            ),
            child = (0, get_single_element_child.D)(children);
          if (!child)
            throw new Error(
              "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
            );
          const ctx = useComboboxContext();
          return (0, react.cloneElement)(child, {
            ...useComboboxTargetProps({
              targetType,
              withAriaAttributes,
              withKeyboardNavigation,
              withExpandedAttribute,
              onKeyDown: child.props.onKeyDown,
              onClick: child.props.onClick,
              autoComplete,
            }),
            ...others,
            [refProp]: (0, use_merged_ref.pc)(
              ref,
              ctx.store.targetRef,
              (0, get_ref_prop.x)(child),
            ),
          });
        });
      ComboboxEventsTarget.displayName = "@mantine/core/ComboboxEventsTarget";
      const ComboboxFooter = (0, factory.P9)((props) => {
        const { classNames, className, style, styles, vars, ...others } = (0,
        use_props.Y)("ComboboxFooter", null, props);
        return (0, jsx_runtime.jsx)(Box.a, {
          ...useComboboxContext().getStyles("footer", {
            className,
            classNames,
            style,
            styles,
          }),
          ...others,
          onMouseDown: (event) => {
            event.preventDefault();
          },
        });
      });
      ((ComboboxFooter.classes = Combobox_module_default),
        (ComboboxFooter.displayName = "@mantine/core/ComboboxFooter"));
      var use_id = __webpack_require__(
        "./node_modules/@mantine/hooks/esm/use-id/use-id.mjs",
      );
      const ComboboxGroup = (0, factory.P9)((props) => {
        const {
            classNames,
            className,
            style,
            styles,
            vars,
            children,
            label,
            id,
            ...others
          } = (0, use_props.Y)("ComboboxGroup", null, props),
          ctx = useComboboxContext(),
          _id = (0, use_id.B)(id);
        return (0, jsx_runtime.jsxs)(Box.a, {
          role: "group",
          "aria-labelledby": label ? _id : void 0,
          ...ctx.getStyles("group", { className, classNames, style, styles }),
          ...others,
          children: [
            label &&
              (0, jsx_runtime.jsx)("div", {
                id: _id,
                ...ctx.getStyles("groupLabel", { classNames, styles }),
                children: label,
              }),
            children,
          ],
        });
      });
      ((ComboboxGroup.classes = Combobox_module_default),
        (ComboboxGroup.displayName = "@mantine/core/ComboboxGroup"));
      const ComboboxHeader = (0, factory.P9)((props) => {
        const { classNames, className, style, styles, vars, ...others } = (0,
        use_props.Y)("ComboboxHeader", null, props);
        return (0, jsx_runtime.jsx)(Box.a, {
          ...useComboboxContext().getStyles("header", {
            className,
            classNames,
            style,
            styles,
          }),
          ...others,
          onMouseDown: (event) => {
            event.preventDefault();
          },
        });
      });
      function ComboboxHiddenInput({ value, valuesDivider = ",", ...others }) {
        return (0, jsx_runtime.jsx)("input", {
          type: "hidden",
          value: Array.isArray(value)
            ? value.join(valuesDivider)
            : value
              ? `${value}`
              : "",
          ...others,
        });
      }
      ((ComboboxHeader.classes = Combobox_module_default),
        (ComboboxHeader.displayName = "@mantine/core/ComboboxHeader"),
        (ComboboxHiddenInput.displayName =
          "@mantine/core/ComboboxHiddenInput"));
      const ComboboxOption = (0, factory.P9)((_props) => {
        const props = (0, use_props.Y)("ComboboxOption", null, _props),
          {
            classNames,
            className,
            style,
            styles,
            vars,
            onClick,
            id,
            active,
            onMouseDown,
            onMouseOver,
            disabled,
            selected,
            mod,
            ...others
          } = props,
          ctx = useComboboxContext(),
          uuid = (0, react.useId)(),
          _id = id || uuid;
        return (0, jsx_runtime.jsx)(Box.a, {
          ...ctx.getStyles("option", { className, classNames, styles, style }),
          ...others,
          id: _id,
          mod: [
            "combobox-option",
            {
              "combobox-active": active,
              "combobox-disabled": disabled,
              "combobox-selected": selected,
            },
            mod,
          ],
          role: "option",
          onClick: (event) => {
            disabled
              ? event.preventDefault()
              : (ctx.onOptionSubmit?.(props.value, props), onClick?.(event));
          },
          onMouseDown: (event) => {
            (event.preventDefault(), onMouseDown?.(event));
          },
          onMouseOver: (event) => {
            (ctx.resetSelectionOnOptionHover && ctx.store.resetSelectedOption(),
              onMouseOver?.(event));
          },
        });
      });
      ((ComboboxOption.classes = Combobox_module_default),
        (ComboboxOption.displayName = "@mantine/core/ComboboxOption"));
      const ComboboxOptions = (0, factory.P9)((_props) => {
        const {
            classNames,
            className,
            style,
            styles,
            id,
            onMouseDown,
            labelledBy,
            ...others
          } = (0, use_props.Y)("ComboboxOptions", null, _props),
          ctx = useComboboxContext(),
          _id = (0, use_id.B)(id);
        return (
          (0, react.useEffect)(() => {
            ctx.store.setListId(_id);
          }, [_id]),
          (0, jsx_runtime.jsx)(Box.a, {
            ...ctx.getStyles("options", {
              className,
              style,
              classNames,
              styles,
            }),
            ...others,
            id: _id,
            role: "listbox",
            "aria-labelledby": labelledBy,
            onMouseDown: (event) => {
              (event.preventDefault(), onMouseDown?.(event));
            },
          })
        );
      });
      ((ComboboxOptions.classes = Combobox_module_default),
        (ComboboxOptions.displayName = "@mantine/core/ComboboxOptions"));
      const ComboboxSearch_defaultProps = {
          withAriaAttributes: !0,
          withKeyboardNavigation: !0,
        },
        ComboboxSearch = (0, factory.P9)((_props) => {
          const {
              classNames,
              styles,
              unstyled,
              vars,
              withAriaAttributes,
              onKeyDown,
              onClick,
              withKeyboardNavigation,
              size,
              ref,
              ...others
            } = (0, use_props.Y)(
              "ComboboxSearch",
              ComboboxSearch_defaultProps,
              _props,
            ),
            ctx = useComboboxContext(),
            _styles = ctx.getStyles("search"),
            targetProps = useComboboxTargetProps({
              targetType: "input",
              withAriaAttributes,
              withKeyboardNavigation,
              withExpandedAttribute: !1,
              onKeyDown,
              onClick,
              autoComplete: "off",
            });
          return (0, jsx_runtime.jsx)(Input.p, {
            ref: (0, use_merged_ref.pc)(ref, ctx.store.searchRef),
            classNames: [{ input: _styles.className }, classNames],
            styles: [{ input: _styles.style }, styles],
            size: size || ctx.size,
            ...targetProps,
            ...others,
            __staticSelector: "Combobox",
          });
        });
      ((ComboboxSearch.classes = Combobox_module_default),
        (ComboboxSearch.displayName = "@mantine/core/ComboboxSearch"));
      const ComboboxTarget_defaultProps = {
          refProp: "ref",
          targetType: "input",
          withKeyboardNavigation: !0,
          withAriaAttributes: !0,
          withExpandedAttribute: !1,
          autoComplete: "off",
        },
        ComboboxTarget = (0, factory.P9)((props) => {
          const {
              children,
              refProp,
              withKeyboardNavigation,
              withAriaAttributes,
              withExpandedAttribute,
              targetType,
              autoComplete,
              ref,
              ...others
            } = (0, use_props.Y)(
              "ComboboxTarget",
              ComboboxTarget_defaultProps,
              props,
            ),
            child = (0, get_single_element_child.D)(children);
          if (!child)
            throw new Error(
              "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
            );
          const ctx = useComboboxContext(),
            clonedElement = (0, react.cloneElement)(child, {
              ...useComboboxTargetProps({
                targetType,
                withAriaAttributes,
                withKeyboardNavigation,
                withExpandedAttribute,
                onKeyDown: child.props.onKeyDown,
                onClick: child.props.onClick,
                autoComplete,
              }),
              ...others,
            });
          return (0, jsx_runtime.jsx)(Popover.A.Target, {
            refProp,
            ref: (0, use_merged_ref.pc)(ref, ctx.store.targetRef),
            children: clonedElement,
          });
        });
      ComboboxTarget.displayName = "@mantine/core/ComboboxTarget";
      var use_combobox = __webpack_require__(
        "./node_modules/@mantine/core/esm/components/Combobox/use-combobox/use-combobox.mjs",
      );
      const Combobox_defaultProps = {
          keepMounted: !0,
          withinPortal: !0,
          resetSelectionOnOptionHover: !1,
          width: "target",
          transitionProps: { transition: "fade", duration: 0 },
          size: "sm",
        },
        Combobox_varsResolver = (0, create_vars_resolver.V)(
          (_, { size, dropdownPadding }) => ({
            options: {
              "--combobox-option-fz": (0, get_size.ny)(size),
              "--combobox-option-padding": (0, get_size.YC)(
                size,
                "combobox-option-padding",
              ),
            },
            dropdown: {
              "--combobox-padding":
                void 0 === dropdownPadding
                  ? void 0
                  : (0, rem.D)(dropdownPadding),
              "--combobox-option-fz": (0, get_size.ny)(size),
              "--combobox-option-padding": (0, get_size.YC)(
                size,
                "combobox-option-padding",
              ),
            },
          }),
        ),
        Combobox = (_props) => {
          const props = (0, use_props.Y)(
              "Combobox",
              Combobox_defaultProps,
              _props,
            ),
            {
              classNames,
              styles,
              unstyled,
              children,
              store: controlledStore,
              vars,
              onOptionSubmit,
              onClose,
              size,
              dropdownPadding,
              resetSelectionOnOptionHover,
              __staticSelector,
              readOnly,
              attributes,
              floatingHeight,
              middlewares,
              ...others
            } = props,
            resolvedMiddlewares =
              "viewport" === floatingHeight
                ? {
                    ...middlewares,
                    flip: !1,
                    size: {
                      ...("object" == typeof middlewares?.size
                        ? middlewares.size
                        : {}),
                      padding:
                        "object" == typeof middlewares?.size &&
                        void 0 !== middlewares.size.padding
                          ? middlewares.size.padding
                          : 10,
                      apply: ({
                        availableHeight,
                        availableWidth,
                        elements,
                        ...rest
                      }) => {
                        elements.floating.style.setProperty(
                          "--combobox-floating-max-height",
                          `${availableHeight}px`,
                        );
                        const userSize = middlewares?.size;
                        "object" == typeof userSize && userSize.apply
                          ? userSize.apply({
                              availableHeight,
                              availableWidth,
                              elements,
                              ...rest,
                            })
                          : userSize &&
                            Object.assign(elements.floating.style, {
                              maxWidth: `${availableWidth}px`,
                              maxHeight: `${availableHeight}px`,
                            });
                      },
                    },
                  }
                : middlewares,
            uncontrolledStore = (0, use_combobox.B)(),
            store = controlledStore || uncontrolledStore,
            getStyles = (0, use_styles.I)({
              name: __staticSelector || "Combobox",
              classes: Combobox_module_default,
              props,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver: Combobox_varsResolver,
            });
          return (0, jsx_runtime.jsx)(ComboboxProvider, {
            value: {
              getStyles,
              store,
              onOptionSubmit,
              size,
              resetSelectionOnOptionHover,
              readOnly,
              floatingHeight,
            },
            children: (0, jsx_runtime.jsx)(Popover.A, {
              opened: store.dropdownOpened,
              ...others,
              middlewares: resolvedMiddlewares,
              onChange: (_opened) =>
                !_opened && (onClose?.(), void store.closeDropdown()),
              withRoles: !1,
              unstyled,
              children,
            }),
          });
        };
      ((Combobox.extend = (c) => c),
        (Combobox.classes = Combobox_module_default),
        (Combobox.varsResolver = Combobox_varsResolver),
        (Combobox.displayName = "@mantine/core/Combobox"),
        (Combobox.Target = ComboboxTarget),
        (Combobox.Dropdown = ComboboxDropdown),
        (Combobox.Options = ComboboxOptions),
        (Combobox.Option = ComboboxOption),
        (Combobox.Search = ComboboxSearch),
        (Combobox.Empty = ComboboxEmpty),
        (Combobox.Chevron = ComboboxChevron),
        (Combobox.Footer = ComboboxFooter),
        (Combobox.Header = ComboboxHeader),
        (Combobox.EventsTarget = ComboboxEventsTarget),
        (Combobox.DropdownTarget = ComboboxDropdownTarget),
        (Combobox.Group = ComboboxGroup),
        (Combobox.ClearButton = ComboboxClearButton),
        (Combobox.HiddenInput = ComboboxHiddenInput));
    },
    "./node_modules/@mantine/core/esm/components/Combobox/use-combobox/use-combobox.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      function findElementBySelector(selector, root = document) {
        const element = root.querySelector(selector);
        if (element) return element;
        const allElements = root.querySelectorAll("*");
        for (let i = 0; i < allElements.length; i += 1) {
          const el = allElements[i];
          if (el.shadowRoot) {
            const shadowElement = findElementBySelector(
              selector,
              el.shadowRoot,
            );
            if (shadowElement) return shadowElement;
          }
        }
        return null;
      }
      function findElementsBySelector(selector, root = document) {
        const results = [],
          elements = root.querySelectorAll(selector);
        results.push(...Array.from(elements));
        const allElements = root.querySelectorAll("*");
        for (let i = 0; i < allElements.length; i += 1) {
          const el = allElements[i];
          if (el.shadowRoot) {
            const shadowElements = findElementsBySelector(
              selector,
              el.shadowRoot,
            );
            results.push(...shadowElements);
          }
        }
        return results;
      }
      function getRootElement(targetElement) {
        if (!targetElement) return document;
        const root = targetElement.getRootNode();
        return root instanceof ShadowRoot || root instanceof Document
          ? root
          : document;
      }
      __webpack_require__.d(__webpack_exports__, { B: () => useCombobox });
      var react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        use_uncontrolled = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs",
        );
      function useCombobox({
        defaultOpened,
        opened,
        onOpenedChange,
        onDropdownClose,
        onDropdownOpen,
        loop = !0,
        scrollBehavior = "instant",
      } = {}) {
        const [dropdownOpened, setDropdownOpened] = (0, use_uncontrolled.Z)({
            value: opened,
            defaultValue: defaultOpened,
            finalValue: !1,
            onChange: onOpenedChange,
          }),
          listId = (0, react.useRef)(null),
          selectedOptionIndex = (0, react.useRef)(-1),
          searchRef = (0, react.useRef)(null),
          targetRef = (0, react.useRef)(null),
          focusSearchTimeout = (0, react.useRef)(-1),
          focusTargetTimeout = (0, react.useRef)(-1),
          selectedIndexUpdateTimeout = (0, react.useRef)(-1),
          openDropdown = (0, react.useCallback)(
            (eventSource = "unknown") => {
              dropdownOpened ||
                (setDropdownOpened(!0), onDropdownOpen?.(eventSource));
            },
            [setDropdownOpened, onDropdownOpen, dropdownOpened],
          ),
          closeDropdown = (0, react.useCallback)(
            (eventSource = "unknown") => {
              dropdownOpened &&
                (setDropdownOpened(!1), onDropdownClose?.(eventSource));
            },
            [setDropdownOpened, onDropdownClose, dropdownOpened],
          ),
          toggleDropdown = (0, react.useCallback)(
            (eventSource = "unknown") => {
              dropdownOpened
                ? closeDropdown(eventSource)
                : openDropdown(eventSource);
            },
            [closeDropdown, openDropdown, dropdownOpened],
          ),
          clearSelectedItem = (0, react.useCallback)(() => {
            const root = getRootElement(targetRef.current),
              selected = findElementBySelector(
                `#${listId.current} [data-combobox-selected]`,
                root,
              );
            (selected?.removeAttribute("data-combobox-selected"),
              selected?.removeAttribute("aria-selected"));
          }, []),
          selectOption = (0, react.useCallback)(
            (index) => {
              const root = getRootElement(targetRef.current),
                list = findElementBySelector(`#${listId.current}`, root),
                items = list
                  ? findElementsBySelector("[data-combobox-option]", list)
                  : null;
              if (!items) return null;
              const nextIndex =
                index >= items.length
                  ? 0
                  : index < 0
                    ? items.length - 1
                    : index;
              return (
                (selectedOptionIndex.current = nextIndex),
                items?.[nextIndex] &&
                !items[nextIndex].hasAttribute("data-combobox-disabled")
                  ? (clearSelectedItem(),
                    items[nextIndex].setAttribute(
                      "data-combobox-selected",
                      "true",
                    ),
                    items[nextIndex].setAttribute("aria-selected", "true"),
                    items[nextIndex].scrollIntoView({
                      block: "nearest",
                      behavior: scrollBehavior,
                    }),
                    items[nextIndex].id)
                  : null
              );
            },
            [scrollBehavior, clearSelectedItem],
          ),
          selectActiveOption = (0, react.useCallback)(() => {
            const root = getRootElement(targetRef.current),
              activeOption = findElementBySelector(
                `#${listId.current} [data-combobox-active]`,
                root,
              );
            return selectOption(
              activeOption
                ? findElementsBySelector(
                    `#${listId.current} [data-combobox-option]`,
                    root,
                  ).findIndex((option) => option === activeOption)
                : 0,
            );
          }, [selectOption]),
          selectNextOption = (0, react.useCallback)(() => {
            const root = getRootElement(targetRef.current),
              items = findElementsBySelector(
                `#${listId.current} [data-combobox-option]`,
                root,
              );
            return selectOption(
              (function getNextIndex(currentIndex, elements, loop) {
                for (let i = currentIndex + 1; i < elements.length; i += 1)
                  if (!elements[i].hasAttribute("data-combobox-disabled"))
                    return i;
                if (loop)
                  for (let i = 0; i < elements.length; i += 1)
                    if (!elements[i].hasAttribute("data-combobox-disabled"))
                      return i;
                return currentIndex;
              })(selectedOptionIndex.current, items, loop),
            );
          }, [selectOption, loop]),
          selectPreviousOption = (0, react.useCallback)(() => {
            const root = getRootElement(targetRef.current),
              items = findElementsBySelector(
                `#${listId.current} [data-combobox-option]`,
                root,
              );
            return selectOption(
              (function getPreviousIndex(currentIndex, elements, loop) {
                for (let i = currentIndex - 1; i >= 0; i -= 1)
                  if (!elements[i].hasAttribute("data-combobox-disabled"))
                    return i;
                if (loop)
                  for (let i = elements.length - 1; i > -1; i -= 1)
                    if (!elements[i].hasAttribute("data-combobox-disabled"))
                      return i;
                return currentIndex;
              })(selectedOptionIndex.current, items, loop),
            );
          }, [selectOption, loop]),
          selectFirstOption = (0, react.useCallback)(() => {
            const root = getRootElement(targetRef.current);
            return selectOption(
              (function getFirstIndex(elements) {
                for (let i = 0; i < elements.length; i += 1)
                  if (!elements[i].hasAttribute("data-combobox-disabled"))
                    return i;
                return -1;
              })(
                findElementsBySelector(
                  `#${listId.current} [data-combobox-option]`,
                  root,
                ),
              ),
            );
          }, [selectOption]),
          updateSelectedOptionIndex = (0, react.useCallback)(
            (target = "selected", options) => {
              if ("number" == typeof target) {
                selectedOptionIndex.current = target;
                const root = getRootElement(targetRef.current),
                  items = findElementsBySelector(
                    `#${listId.current} [data-combobox-option]`,
                    root,
                  );
                return void (
                  options?.scrollIntoView &&
                  items[target]?.scrollIntoView({
                    block: "nearest",
                    behavior: scrollBehavior,
                  })
                );
              }
              selectedIndexUpdateTimeout.current = window.setTimeout(() => {
                const root = getRootElement(targetRef.current),
                  items = findElementsBySelector(
                    `#${listId.current} [data-combobox-option]`,
                    root,
                  ),
                  index = items.findIndex((option) =>
                    option.hasAttribute(`data-combobox-${target}`),
                  );
                ((selectedOptionIndex.current = index),
                  options?.scrollIntoView &&
                    items[index]?.scrollIntoView({
                      block: "nearest",
                      behavior: scrollBehavior,
                    }));
              }, 0);
            },
            [],
          ),
          resetSelectedOption = (0, react.useCallback)(() => {
            ((selectedOptionIndex.current = -1), clearSelectedItem());
          }, [clearSelectedItem]),
          clickSelectedOption = (0, react.useCallback)(() => {
            const root = getRootElement(targetRef.current);
            findElementsBySelector(
              `#${listId.current} [data-combobox-option]`,
              root,
            )?.[selectedOptionIndex.current]?.click();
          }, []),
          setListId = (0, react.useCallback)((id) => {
            listId.current = id;
          }, []),
          focusSearchInput = (0, react.useCallback)(() => {
            focusSearchTimeout.current = window.setTimeout(
              () => searchRef.current?.focus(),
              0,
            );
          }, []),
          focusTarget = (0, react.useCallback)(() => {
            focusTargetTimeout.current = window.setTimeout(
              () => targetRef.current?.focus(),
              0,
            );
          }, []),
          getSelectedOptionIndex = (0, react.useCallback)(
            () => selectedOptionIndex.current,
            [],
          );
        return (
          (0, react.useEffect)(
            () => () => {
              (window.clearTimeout(focusSearchTimeout.current),
                window.clearTimeout(focusTargetTimeout.current),
                window.clearTimeout(selectedIndexUpdateTimeout.current));
            },
            [],
          ),
          {
            dropdownOpened,
            openDropdown,
            closeDropdown,
            toggleDropdown,
            selectedOptionIndex: selectedOptionIndex.current,
            getSelectedOptionIndex,
            selectOption,
            selectFirstOption,
            selectActiveOption,
            selectNextOption,
            selectPreviousOption,
            resetSelectedOption,
            updateSelectedOptionIndex,
            listId: listId.current,
            setListId,
            clickSelectedOption,
            searchRef,
            focusSearchInput,
            targetRef,
            focusTarget,
          }
        );
      }
    },
    "./node_modules/@mantine/core/esm/components/Stack/Stack.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { B: () => Stack });
      var get_size = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs",
        ),
        create_vars_resolver = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs",
        ),
        use_props = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs",
        ),
        use_styles = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs",
        ),
        factory = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/factory/factory.mjs",
        ),
        Box = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/Box/Box.mjs",
        ),
        Stack_module_default = { root: "m_6d731127" },
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const defaultProps = {
          gap: "md",
          align: "stretch",
          justify: "flex-start",
        },
        varsResolver = (0, create_vars_resolver.V)(
          (_, { gap, align, justify }) => ({
            root: {
              "--stack-gap": (0, get_size.GY)(gap),
              "--stack-align": align,
              "--stack-justify": justify,
            },
          }),
        ),
        Stack = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)("Stack", defaultProps, _props),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              vars,
              align,
              justify,
              gap,
              variant,
              attributes,
              ...others
            } = props;
          return (0, jsx_runtime.jsx)(Box.a, {
            ...(0, use_styles.I)({
              name: "Stack",
              props,
              classes: Stack_module_default,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver,
            })("root"),
            variant,
            ...others,
          });
        });
      ((Stack.classes = Stack_module_default),
        (Stack.varsResolver = varsResolver),
        (Stack.displayName = "@mantine/core/Stack"));
    },
  },
]);
//# sourceMappingURL=31.1dd9caea.iframe.bundle.js.map
