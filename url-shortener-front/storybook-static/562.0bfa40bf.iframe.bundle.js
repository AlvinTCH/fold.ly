/*! For license information please see 562.0bfa40bf.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkmantine_next_template =
  self.webpackChunkmantine_next_template || []).push([
  [562],
  {
    "./node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { M: () => ActionIcon });
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
        polymorphic_factory = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs",
        ),
        Box = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/Box/Box.mjs",
        ),
        UnstyledButton = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs",
        ),
        Transition = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Transition/Transition.mjs",
        ),
        Loader = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Loader/Loader.mjs",
        ),
        ActionIcon_module_default = {
          root: "m_8d3f4000",
          icon: "m_8d3afb97",
          loader: "m_302b9fb1",
          group: "m_1a0f1b21",
          groupSection: "m_437b6484",
        },
        rem = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs",
        ),
        factory = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/factory/factory.mjs",
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const defaultProps = { orientation: "horizontal" },
        varsResolver = (0, create_vars_resolver.V)((_, { borderWidth }) => ({
          group: { "--ai-border-width": (0, rem.D)(borderWidth) },
        })),
        ActionIconGroup = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)(
              "ActionIconGroup",
              defaultProps,
              _props,
            ),
            {
              className,
              style,
              classNames,
              styles,
              unstyled,
              orientation,
              vars,
              borderWidth,
              variant,
              mod,
              attributes,
              ...others
            } = (0, use_props.Y)("ActionIconGroup", defaultProps, _props);
          return (0, jsx_runtime.jsx)(Box.a, {
            ...(0, use_styles.I)({
              name: "ActionIconGroup",
              props,
              classes: ActionIcon_module_default,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver,
              rootSelector: "group",
            })("group"),
            variant,
            mod: [{ "data-orientation": orientation }, mod],
            role: "group",
            ...others,
          });
        });
      ((ActionIconGroup.classes = ActionIcon_module_default),
        (ActionIconGroup.varsResolver = varsResolver),
        (ActionIconGroup.displayName = "@mantine/core/ActionIconGroup"));
      const ActionIconGroupSection_varsResolver = (0, create_vars_resolver.V)(
          (theme, { radius, color, gradient, variant, autoContrast, size }) => {
            const colors = theme.variantColorResolver({
              color: color || theme.primaryColor,
              theme,
              gradient,
              variant: variant || "filled",
              autoContrast,
            });
            return {
              groupSection: {
                "--section-height": (0, get_size.YC)(size, "section-height"),
                "--section-padding-x": (0, get_size.YC)(
                  size,
                  "section-padding-x",
                ),
                "--section-fz": (0, get_size.ny)(size),
                "--section-radius":
                  void 0 === radius ? void 0 : (0, get_size.nJ)(radius),
                "--section-bg": color || variant ? colors.background : void 0,
                "--section-color": colors.color,
                "--section-bd": color || variant ? colors.border : void 0,
              },
            };
          },
        ),
        ActionIconGroupSection = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)(
              "ActionIconGroupSection",
              null,
              _props,
            ),
            {
              className,
              style,
              classNames,
              styles,
              unstyled,
              vars,
              variant,
              gradient,
              radius,
              autoContrast,
              attributes,
              ...others
            } = props;
          return (0, jsx_runtime.jsx)(Box.a, {
            ...(0, use_styles.I)({
              name: "ActionIconGroupSection",
              props,
              classes: ActionIcon_module_default,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver: ActionIconGroupSection_varsResolver,
              rootSelector: "groupSection",
            })("groupSection"),
            variant,
            ...others,
          });
        });
      ((ActionIconGroupSection.classes = ActionIcon_module_default),
        (ActionIconGroupSection.varsResolver =
          ActionIconGroupSection_varsResolver),
        (ActionIconGroupSection.displayName =
          "@mantine/core/ActionIconGroupSection"));
      const ActionIcon_varsResolver = (0, create_vars_resolver.V)(
          (theme, { size, radius, variant, gradient, color, autoContrast }) => {
            const colors = theme.variantColorResolver({
              color: color || theme.primaryColor,
              theme,
              gradient,
              variant: variant || "filled",
              autoContrast,
            });
            return {
              root: {
                "--ai-size": (0, get_size.YC)(size, "ai-size"),
                "--ai-radius":
                  void 0 === radius ? void 0 : (0, get_size.nJ)(radius),
                "--ai-bg": color || variant ? colors.background : void 0,
                "--ai-hover": color || variant ? colors.hover : void 0,
                "--ai-hover-color":
                  color || variant ? colors.hoverColor : void 0,
                "--ai-color": colors.color,
                "--ai-bd": color || variant ? colors.border : void 0,
              },
            };
          },
        ),
        ActionIcon = (0, polymorphic_factory.v)((_props) => {
          const props = (0, use_props.Y)("ActionIcon", null, _props),
            {
              className,
              unstyled,
              variant,
              classNames,
              styles,
              style,
              loading,
              loaderProps,
              size,
              color,
              radius,
              __staticSelector,
              gradient,
              vars,
              children,
              disabled,
              "data-disabled": dataDisabled,
              autoContrast,
              mod,
              attributes,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: ["ActionIcon", __staticSelector],
              props,
              className,
              style,
              classes: ActionIcon_module_default,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver: ActionIcon_varsResolver,
            });
          return (0, jsx_runtime.jsxs)(UnstyledButton.N, {
            ...getStyles("root", {
              active: !disabled && !loading && !dataDisabled,
            }),
            ...others,
            unstyled,
            variant,
            size,
            disabled: disabled || loading,
            mod: [{ loading, disabled: disabled || dataDisabled }, mod],
            children: [
              "boolean" == typeof loading &&
                (0, jsx_runtime.jsx)(Transition.e, {
                  mounted: loading,
                  transition: "slide-down",
                  duration: 150,
                  children: (transitionStyles) =>
                    (0, jsx_runtime.jsx)(Box.a, {
                      component: "span",
                      ...getStyles("loader", { style: transitionStyles }),
                      "aria-hidden": !0,
                      children: (0, jsx_runtime.jsx)(Loader.a, {
                        color: "var(--ai-color)",
                        size: "calc(var(--ai-size) * 0.55)",
                        ...loaderProps,
                      }),
                    }),
                }),
              (0, jsx_runtime.jsx)(Box.a, {
                component: "span",
                mod: { loading },
                ...getStyles("icon"),
                children,
              }),
            ],
          });
        });
      ((ActionIcon.classes = ActionIcon_module_default),
        (ActionIcon.varsResolver = ActionIcon_varsResolver),
        (ActionIcon.displayName = "@mantine/core/ActionIcon"),
        (ActionIcon.Group = ActionIconGroup),
        (ActionIcon.GroupSection = ActionIconGroupSection));
    },
    "./node_modules/@mantine/core/esm/components/Anchor/Anchor.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { M: () => Anchor });
      var use_props = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs",
        ),
        polymorphic_factory = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs",
        ),
        Text = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Text/Text.mjs",
        ),
        Anchor_module_default = { root: "m_849cf0da" },
        clsx = __webpack_require__("./node_modules/clsx/dist/clsx.mjs"),
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const defaultProps = { underline: "hover" },
        Anchor = (0, polymorphic_factory.v)((props) => {
          const { underline, className, unstyled, mod, ...others } = (0,
          use_props.Y)("Anchor", defaultProps, props);
          return (0, jsx_runtime.jsx)(Text.E, {
            component: "a",
            className: (0, clsx.A)(
              { [Anchor_module_default.root]: !unstyled },
              className,
            ),
            ...others,
            mod: [{ underline }, mod],
            __staticSelector: "Anchor",
            unstyled,
          });
        });
      ((Anchor.classes = Anchor_module_default),
        (Anchor.displayName = "@mantine/core/Anchor"));
    },
    "./node_modules/@mantine/core/esm/components/List/List.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { B: () => List });
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
        create_safe_context = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs",
        );
      const [ListProvider, useListContext] = (0, create_safe_context.F)(
        "List component was not found in tree",
      );
      var List_module_default = {
          root: "m_abbac491",
          item: "m_abb6bec2",
          itemWrapper: "m_75cd9f71",
          itemIcon: "m_60f83e5b",
        },
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const ListItem = (0, factory.P9)((_props) => {
        const {
            classNames,
            className,
            style,
            styles,
            vars,
            icon,
            children,
            mod,
            ...others
          } = (0, use_props.Y)("ListItem", null, _props),
          ctx = useListContext(),
          _icon = icon || ctx.icon,
          stylesApiProps = { classNames, styles };
        return (0, jsx_runtime.jsx)(Box.a, {
          ...ctx.getStyles("item", { ...stylesApiProps, className, style }),
          component: "li",
          mod: [{ "with-icon": !!_icon, centered: ctx.center }, mod],
          ...others,
          children: (0, jsx_runtime.jsxs)("div", {
            ...ctx.getStyles("itemWrapper", stylesApiProps),
            children: [
              _icon &&
                (0, jsx_runtime.jsx)("span", {
                  ...ctx.getStyles("itemIcon", stylesApiProps),
                  children: _icon,
                }),
              (0, jsx_runtime.jsx)("span", {
                ...ctx.getStyles("itemLabel", stylesApiProps),
                children,
              }),
            ],
          }),
        });
      });
      ((ListItem.classes = List_module_default),
        (ListItem.displayName = "@mantine/core/ListItem"));
      const defaultProps = { type: "unordered" },
        varsResolver = (0, create_vars_resolver.V)((_, { size, spacing }) => ({
          root: {
            "--list-fz": (0, get_size.ny)(size),
            "--list-lh": (0, get_size.ks)(size),
            "--list-spacing": (0, get_size.GY)(spacing),
          },
        })),
        List = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)("List", defaultProps, _props),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              vars,
              children,
              type,
              withPadding,
              icon,
              spacing,
              center,
              listStyleType,
              mod,
              attributes,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: "List",
              classes: List_module_default,
              props,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver,
            });
          return (0, jsx_runtime.jsx)(ListProvider, {
            value: { center, icon, getStyles },
            children: (0, jsx_runtime.jsx)(Box.a, {
              ...getStyles("root", { style: { listStyleType } }),
              component: "unordered" === type ? "ul" : "ol",
              mod: [
                {
                  "with-padding": withPadding,
                  type: icon ? "none" : listStyleType,
                },
                mod,
              ],
              ...others,
              children,
            }),
          });
        });
      ((List.classes = List_module_default),
        (List.varsResolver = varsResolver),
        (List.displayName = "@mantine/core/List"),
        (List.Item = ListItem));
    },
    "./node_modules/@mantine/core/esm/components/PasswordInput/PasswordInput.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { y: () => PasswordInput });
      var get_size = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs",
        ),
        create_vars_resolver = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs",
        ),
        use_props = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs",
        ),
        use_resolved_styles_api = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs",
        ),
        use_styles = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs",
        ),
        extract_style_props = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs",
        ),
        factory = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/factory/factory.mjs",
        ),
        ActionIcon = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/ActionIcon/ActionIcon.mjs",
        ),
        Input = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Input/Input.mjs",
        ),
        InputBase = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/InputBase/InputBase.mjs",
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      var PasswordInput_module_default = {
          root: "m_f61ca620",
          input: "m_ccf8da4c",
          innerInput: "m_f2d85dd2",
          visibilityToggle: "m_b1072d44",
        },
        use_id = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-id/use-id.mjs",
        ),
        use_uncontrolled = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs",
        ),
        clsx = __webpack_require__("./node_modules/clsx/dist/clsx.mjs");
      const defaultProps = {
          visibilityToggleIcon: function PasswordToggleIcon({ reveal }) {
            return (0, jsx_runtime.jsx)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 256 256",
              style: {
                width: "var(--psi-icon-size)",
                height: "var(--psi-icon-size)",
              },
              children: reveal
                ? (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      (0, jsx_runtime.jsx)("path", {
                        fill: "none",
                        d: "M0 0h256v256H0z",
                      }),
                      (0, jsx_runtime.jsx)("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "16",
                        d: "M48 40l160 176M154.91 157.6a40 40 0 01-53.82-59.2M135.53 88.71a40 40 0 0132.3 35.53",
                      }),
                      (0, jsx_runtime.jsx)("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "16",
                        d: "M208.61 169.1C230.41 149.58 240 128 240 128s-32-72-112-72a126 126 0 00-20.68 1.68M74 68.6C33.23 89.24 16 128 16 128s32 72 112 72a118.05 118.05 0 0054-12.6",
                      }),
                    ],
                  })
                : (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                      (0, jsx_runtime.jsx)("path", {
                        fill: "none",
                        d: "M0 0h256v256H0z",
                      }),
                      (0, jsx_runtime.jsx)("path", {
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "16",
                        d: "M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72z",
                      }),
                      (0, jsx_runtime.jsx)("circle", {
                        cx: "128",
                        cy: "128",
                        r: "40",
                        fill: "none",
                        stroke: "currentColor",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "16",
                      }),
                    ],
                  }),
            });
          },
          size: "sm",
        },
        varsResolver = (0, create_vars_resolver.V)((_, { size }) => ({
          root: {
            "--psi-icon-size": (0, get_size.YC)(size, "psi-icon-size"),
            "--psi-button-size": (0, get_size.YC)(size, "psi-button-size"),
          },
        })),
        PasswordInput = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)(
              ["Input", "InputWrapper", "PasswordInput"],
              defaultProps,
              _props,
            ),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              vars,
              required,
              error,
              leftSection,
              disabled,
              id,
              variant,
              inputContainer,
              description,
              label,
              size,
              errorProps,
              descriptionProps,
              labelProps,
              withAsterisk,
              inputWrapperOrder,
              wrapperProps,
              radius,
              rightSection,
              rightSectionWidth,
              rightSectionPointerEvents,
              leftSectionWidth,
              visible,
              defaultVisible,
              onVisibilityChange,
              visibilityToggleIcon: VisibilityToggleIcon,
              visibilityToggleButtonProps,
              rightSectionProps,
              leftSectionProps,
              leftSectionPointerEvents,
              withErrorStyles,
              mod,
              attributes,
              ...others
            } = props,
            uuid = (0, use_id.B)(id),
            [_visible, setVisibility] = (0, use_uncontrolled.Z)({
              value: visible,
              defaultValue: defaultVisible,
              finalValue: !1,
              onChange: onVisibilityChange,
            }),
            toggleVisibility = () => setVisibility(!_visible),
            getStyles = (0, use_styles.I)({
              name: "PasswordInput",
              classes: PasswordInput_module_default,
              props,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver,
            }),
            { resolvedClassNames, resolvedStyles } = (0,
            use_resolved_styles_api.Y)({ classNames, styles, props }),
            { styleProps, rest } = (0, extract_style_props.j)(others),
            errorId = errorProps?.id || `${uuid}-error`,
            descriptionId = descriptionProps?.id || `${uuid}-description`,
            _describedBy = `${error && "boolean" != typeof error ? errorId : ""} ${description ? descriptionId : ""}`,
            describedBy =
              _describedBy.trim().length > 0 ? _describedBy.trim() : void 0,
            visibilityToggleButton = (0, jsx_runtime.jsx)(ActionIcon.M, {
              ...getStyles("visibilityToggle"),
              disabled,
              radius,
              "aria-pressed": _visible,
              tabIndex: -1,
              "aria-label": "Toggle password visibility",
              ...visibilityToggleButtonProps,
              variant: visibilityToggleButtonProps?.variant ?? "subtle",
              color: "gray",
              unstyled,
              onTouchEnd: (event) => {
                (event.preventDefault(),
                  visibilityToggleButtonProps?.onTouchEnd?.(event),
                  toggleVisibility());
              },
              onMouseDown: (event) => {
                (event.preventDefault(),
                  visibilityToggleButtonProps?.onMouseDown?.(event),
                  toggleVisibility());
              },
              onKeyDown: (event) => {
                (visibilityToggleButtonProps?.onKeyDown?.(event),
                  " " === event.key &&
                    (event.preventDefault(), toggleVisibility()));
              },
              children: (0, jsx_runtime.jsx)(VisibilityToggleIcon, {
                reveal: _visible,
              }),
            });
          return (0, jsx_runtime.jsx)(Input.p.Wrapper, {
            required,
            id: uuid,
            label,
            error,
            description,
            size,
            classNames: resolvedClassNames,
            styles: resolvedStyles,
            __staticSelector: "PasswordInput",
            __stylesApiProps: props,
            unstyled,
            withAsterisk,
            inputWrapperOrder,
            inputContainer,
            variant,
            labelProps: { ...labelProps, htmlFor: uuid },
            descriptionProps: { ...descriptionProps, id: descriptionId },
            errorProps: { ...errorProps, id: errorId },
            mod,
            attributes,
            ...getStyles("root"),
            ...styleProps,
            ...wrapperProps,
            children: (0, jsx_runtime.jsx)(Input.p, {
              component: "div",
              error,
              leftSection,
              size,
              classNames: {
                ...resolvedClassNames,
                input: (0, clsx.A)(
                  PasswordInput_module_default.input,
                  resolvedClassNames?.input,
                ),
              },
              styles: resolvedStyles,
              radius,
              disabled,
              __staticSelector: "PasswordInput",
              __stylesApiProps: props,
              rightSectionWidth,
              rightSection: rightSection ?? visibilityToggleButton,
              variant,
              unstyled,
              leftSectionWidth,
              rightSectionPointerEvents: rightSectionPointerEvents || "all",
              rightSectionProps,
              leftSectionProps,
              leftSectionPointerEvents,
              withAria: !1,
              withErrorStyles,
              attributes,
              children: (0, jsx_runtime.jsx)("input", {
                required,
                "data-invalid": !!error || void 0,
                "data-with-left-section": !!leftSection || void 0,
                ...getStyles("innerInput"),
                disabled,
                id: uuid,
                ...rest,
                "aria-describedby": describedBy,
                autoComplete: rest.autoComplete || "off",
                type: _visible ? "text" : "password",
              }),
            }),
          });
        });
      ((PasswordInput.classes = {
        ...InputBase.O.classes,
        ...PasswordInput_module_default,
      }),
        (PasswordInput.varsResolver = varsResolver),
        (PasswordInput.displayName = "@mantine/core/PasswordInput"));
    },
    "./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { Z: () => useUncontrolled });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js",
      );
      function useUncontrolled({
        value,
        defaultValue,
        finalValue,
        onChange = () => {},
      }) {
        const [uncontrolledValue, setUncontrolledValue] = (0,
        react__WEBPACK_IMPORTED_MODULE_0__.useState)(
          void 0 !== defaultValue ? defaultValue : finalValue,
        );
        return void 0 !== value
          ? [value, onChange, !0]
          : [
              uncontrolledValue,
              (val, ...payload) => {
                (setUncontrolledValue(val), onChange?.(val, ...payload));
              },
              !1,
            ];
      }
    },
    "./node_modules/@storybook/nextjs/dist/images/next-image.js"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        A: () => next_image_default,
      });
      var defaultLoader = ({ src, width, quality = 75 }) => {
          let missingValues = [];
          if (
            (src || missingValues.push("src"),
            width || missingValues.push("width"),
            missingValues.length > 0)
          )
            throw new Error(
              `Next Image Optimization requires ${missingValues.join(", ")} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({ src, width, quality })}`,
            );
          let url = new URL(src, window.location.href);
          return (
            !url.searchParams.has("w") &&
              !url.searchParams.has("q") &&
              (url.searchParams.set("w", width.toString()),
              url.searchParams.set("q", quality.toString())),
            src.startsWith("http://") || src.startsWith("https://")
              ? url.toString()
              : url.toString().slice(url.origin.length)
          );
        },
        react =
          (__webpack_require__(
            "./node_modules/@storybook/nextjs/dist/_browser-chunks/chunk-A242L54C.js",
          ),
          __webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          )),
        image_context = __webpack_require__(
          "./node_modules/@storybook/nextjs/dist/image-context.js",
        ),
        next_image = __webpack_require__("./node_modules/next/image.js"),
        OriginalNextImage = __webpack_require__.n(next_image)(),
        { getImageProps: originalGetImageProps } = next_image,
        ImageContext = image_context.Z,
        MockedNextImage = react.forwardRef(({ loader, ...props }, ref) => {
          let imageParameters = react.useContext(ImageContext);
          return react.createElement(OriginalNextImage, {
            ref,
            ...imageParameters,
            ...props,
            loader: loader ?? defaultLoader,
          });
        });
      MockedNextImage.displayName = "NextImage";
      var next_image_default = MockedNextImage;
    },
    "./node_modules/@tabler/icons-react/dist/esm/icons/IconChartBar.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      "use strict";
      __webpack_require__.d(__webpack_exports__, { A: () => IconChartBar });
      const IconChartBar = (0,
      __webpack_require__(
        "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs",
      ).A)("outline", "chart-bar", "ChartBar", [
        [
          "path",
          {
            d: "M3 13a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -6",
            key: "svg-0",
          },
        ],
        [
          "path",
          {
            d: "M15 9a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -10",
            key: "svg-1",
          },
        ],
        [
          "path",
          {
            d: "M9 5a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -14",
            key: "svg-2",
          },
        ],
        ["path", { d: "M4 20h14", key: "svg-3" }],
      ]);
    },
    "./node_modules/next/dist/client/image-component.js"(
      module,
      exports,
      __webpack_require__,
    ) {
      "use strict";
      (Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "Image", {
          enumerable: !0,
          get: function () {
            return Image;
          },
        }));
      const _interop_require_default = __webpack_require__(
          "./node_modules/@swc/helpers/cjs/_interop_require_default.cjs",
        ),
        _interop_require_wildcard = __webpack_require__(
          "./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs",
        ),
        _jsxruntime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _react = _interop_require_wildcard._(
          __webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
        ),
        _reactdom = _interop_require_default._(
          __webpack_require__(
            "./node_modules/next/dist/compiled/react-dom/index.js",
          ),
        ),
        _head = _interop_require_default._(
          __webpack_require__("./node_modules/next/dist/shared/lib/head.js"),
        ),
        _getimgprops = __webpack_require__(
          "./node_modules/next/dist/shared/lib/get-img-props.js",
        ),
        _imageconfig = __webpack_require__(
          "./node_modules/next/dist/shared/lib/image-config.js",
        ),
        _imageconfigcontextsharedruntime = __webpack_require__(
          "./node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js",
        ),
        _routercontextsharedruntime =
          (__webpack_require__(
            "./node_modules/next/dist/shared/lib/utils/warn-once.js",
          ),
          __webpack_require__(
            "./node_modules/next/dist/shared/lib/router-context.shared-runtime.js",
          )),
        _imageloader = _interop_require_default._(
          __webpack_require__(
            "./node_modules/next/dist/shared/lib/image-loader.js",
          ),
        ),
        _usemergedref = __webpack_require__(
          "./node_modules/next/dist/client/use-merged-ref.js",
        ),
        configEnv = {
          NODE_ENV: "production",
          NODE_PATH: [],
          STORYBOOK: "true",
          PUBLIC_URL: ".",
        }.__NEXT_IMAGE_OPTS;
      function handleLoading(
        img,
        placeholder,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        unoptimized,
        sizesInput,
      ) {
        const src = img?.src;
        if (!img || img["data-loaded-src"] === src) return;
        img["data-loaded-src"] = src;
        ("decode" in img ? img.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (img.parentElement && img.isConnected) {
              if (
                ("empty" !== placeholder && setBlurComplete(!0),
                onLoadRef?.current)
              ) {
                const event = new Event("load");
                Object.defineProperty(event, "target", {
                  writable: !1,
                  value: img,
                });
                let prevented = !1,
                  stopped = !1;
                onLoadRef.current({
                  ...event,
                  nativeEvent: event,
                  currentTarget: img,
                  target: img,
                  isDefaultPrevented: () => prevented,
                  isPropagationStopped: () => stopped,
                  persist: () => {},
                  preventDefault: () => {
                    ((prevented = !0), event.preventDefault());
                  },
                  stopPropagation: () => {
                    ((stopped = !0), event.stopPropagation());
                  },
                });
              }
              onLoadingCompleteRef?.current &&
                onLoadingCompleteRef.current(img);
            }
          });
      }
      function getDynamicProps(fetchPriority) {
        return Boolean(_react.use)
          ? { fetchPriority }
          : { fetchpriority: fetchPriority };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      const ImageElement = (0, _react.forwardRef)(
        (
          {
            src,
            srcSet,
            sizes,
            height,
            width,
            decoding,
            className,
            style,
            fetchPriority,
            placeholder,
            loading,
            unoptimized,
            fill,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            setShowAltText,
            sizesInput,
            onLoad,
            onError,
            ...rest
          },
          forwardedRef,
        ) => {
          const ownRef = (0, _react.useCallback)(
              (img) => {
                img &&
                  (onError && (img.src = img.src),
                  img.complete &&
                    handleLoading(
                      img,
                      placeholder,
                      onLoadRef,
                      onLoadingCompleteRef,
                      setBlurComplete,
                    ));
              },
              [
                src,
                placeholder,
                onLoadRef,
                onLoadingCompleteRef,
                setBlurComplete,
                onError,
                unoptimized,
                sizesInput,
              ],
            ),
            ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
          return (0, _jsxruntime.jsx)("img", {
            ...rest,
            ...getDynamicProps(fetchPriority),
            loading,
            width,
            height,
            decoding,
            "data-nimg": fill ? "fill" : "1",
            className,
            style,
            sizes,
            srcSet,
            src,
            ref,
            onLoad: (event) => {
              handleLoading(
                event.currentTarget,
                placeholder,
                onLoadRef,
                onLoadingCompleteRef,
                setBlurComplete,
              );
            },
            onError: (event) => {
              (setShowAltText(!0),
                "empty" !== placeholder && setBlurComplete(!0),
                onError && onError(event));
            },
          });
        },
      );
      function ImagePreload({ isAppRouter, imgAttributes }) {
        const opts = {
          as: "image",
          imageSrcSet: imgAttributes.srcSet,
          imageSizes: imgAttributes.sizes,
          crossOrigin: imgAttributes.crossOrigin,
          referrerPolicy: imgAttributes.referrerPolicy,
          ...getDynamicProps(imgAttributes.fetchPriority),
        };
        return isAppRouter && _reactdom.default.preload
          ? (_reactdom.default.preload(imgAttributes.src, opts), null)
          : (0, _jsxruntime.jsx)(_head.default, {
              children: (0, _jsxruntime.jsx)(
                "link",
                {
                  rel: "preload",
                  href: imgAttributes.srcSet ? void 0 : imgAttributes.src,
                  ...opts,
                },
                "__nimg-" +
                  imgAttributes.src +
                  imgAttributes.srcSet +
                  imgAttributes.sizes,
              ),
            });
      }
      const Image = (0, _react.forwardRef)((props, forwardedRef) => {
        const isAppRouter = !(0, _react.useContext)(
            _routercontextsharedruntime.RouterContext,
          ),
          configContext = (0, _react.useContext)(
            _imageconfigcontextsharedruntime.ImageConfigContext,
          ),
          config = (0, _react.useMemo)(() => {
            const c =
                configEnv || configContext || _imageconfig.imageConfigDefault,
              allSizes = [...c.deviceSizes, ...c.imageSizes].sort(
                (a, b) => a - b,
              ),
              deviceSizes = c.deviceSizes.sort((a, b) => a - b),
              qualities = c.qualities?.sort((a, b) => a - b);
            return {
              ...c,
              allSizes,
              deviceSizes,
              qualities,
              localPatterns:
                "undefined" == typeof window
                  ? configContext?.localPatterns
                  : c.localPatterns,
            };
          }, [configContext]),
          { onLoad, onLoadingComplete } = props,
          onLoadRef = (0, _react.useRef)(onLoad);
        (0, _react.useEffect)(() => {
          onLoadRef.current = onLoad;
        }, [onLoad]);
        const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
        (0, _react.useEffect)(() => {
          onLoadingCompleteRef.current = onLoadingComplete;
        }, [onLoadingComplete]);
        const [blurComplete, setBlurComplete] = (0, _react.useState)(!1),
          [showAltText, setShowAltText] = (0, _react.useState)(!1),
          { props: imgAttributes, meta: imgMeta } = (0,
          _getimgprops.getImgProps)(props, {
            defaultLoader: _imageloader.default,
            imgConf: config,
            blurComplete,
            showAltText,
          });
        return (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
          children: [
            (0, _jsxruntime.jsx)(ImageElement, {
              ...imgAttributes,
              unoptimized: imgMeta.unoptimized,
              placeholder: imgMeta.placeholder,
              fill: imgMeta.fill,
              onLoadRef,
              onLoadingCompleteRef,
              setBlurComplete,
              setShowAltText,
              sizesInput: props.sizes,
              ref: forwardedRef,
            }),
            imgMeta.preload
              ? (0, _jsxruntime.jsx)(ImagePreload, {
                  isAppRouter,
                  imgAttributes,
                })
              : null,
          ],
        });
      });
      ("function" == typeof exports.default ||
        ("object" == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, "__esModule", { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default));
    },
    "./node_modules/next/dist/client/use-merged-ref.js"(
      module,
      exports,
      __webpack_require__,
    ) {
      "use strict";
      (Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return useMergedRef;
          },
        }));
      const _react = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js",
      );
      function useMergedRef(refA, refB) {
        const cleanupA = (0, _react.useRef)(null),
          cleanupB = (0, _react.useRef)(null);
        return (0, _react.useCallback)(
          (current) => {
            if (null === current) {
              const cleanupFnA = cleanupA.current;
              cleanupFnA && ((cleanupA.current = null), cleanupFnA());
              const cleanupFnB = cleanupB.current;
              cleanupFnB && ((cleanupB.current = null), cleanupFnB());
            } else
              (refA && (cleanupA.current = applyRef(refA, current)),
                refB && (cleanupB.current = applyRef(refB, current)));
          },
          [refA, refB],
        );
      }
      function applyRef(refA, current) {
        if ("function" == typeof refA) {
          const cleanup = refA(current);
          return "function" == typeof cleanup ? cleanup : () => refA(null);
        }
        return (
          (refA.current = current),
          () => {
            refA.current = null;
          }
        );
      }
      ("function" == typeof exports.default ||
        ("object" == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, "__esModule", { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default));
    },
    "./node_modules/next/dist/shared/lib/find-closest-quality.js"(
      __unused_webpack_module,
      exports,
    ) {
      "use strict";
      function findClosestQuality(quality, config) {
        const q = quality || 75;
        return config?.qualities?.length
          ? config.qualities.reduce(
              (prev, cur) =>
                Math.abs(cur - q) < Math.abs(prev - q) ? cur : prev,
              config.qualities[0],
            )
          : q;
      }
      Object.defineProperty(exports, "findClosestQuality", {
        enumerable: !0,
        get: function () {
          return findClosestQuality;
        },
      });
    },
    "./node_modules/next/dist/shared/lib/get-img-props.js"(
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) {
      "use strict";
      Object.defineProperty(exports, "getImgProps", {
        enumerable: !0,
        get: function () {
          return getImgProps;
        },
      });
      __webpack_require__(
        "./node_modules/next/dist/shared/lib/utils/warn-once.js",
      );
      const _deploymentid = __webpack_require__(
          "./node_modules/next/dist/shared/lib/deployment-id.js",
        ),
        _imageblursvg = __webpack_require__(
          "./node_modules/next/dist/shared/lib/image-blur-svg.js",
        ),
        _imageconfig = __webpack_require__(
          "./node_modules/next/dist/shared/lib/image-config.js",
        ),
        INVALID_BACKGROUND_SIZE_VALUES = [
          "-moz-initial",
          "fill",
          "none",
          "scale-down",
          void 0,
        ];
      function isStaticRequire(src) {
        return void 0 !== src.default;
      }
      new Map();
      function getInt(x) {
        return void 0 === x
          ? x
          : "number" == typeof x
            ? Number.isFinite(x)
              ? x
              : NaN
            : "string" == typeof x && /^[0-9]+$/.test(x)
              ? parseInt(x, 10)
              : NaN;
      }
      function generateImgAttrs({
        config,
        src,
        unoptimized,
        width,
        quality,
        sizes,
        loader,
      }) {
        if (unoptimized) {
          if (src.startsWith("/") && !src.startsWith("//")) {
            let deploymentId = (0, _deploymentid.getDeploymentId)();
            if (deploymentId) {
              const qIndex = src.indexOf("?");
              if (-1 !== qIndex) {
                const params = new URLSearchParams(src.slice(qIndex + 1));
                params.get("dpl") ||
                  (params.append("dpl", deploymentId),
                  (src = src.slice(0, qIndex) + "?" + params.toString()));
              } else src += `?dpl=${deploymentId}`;
            }
          }
          return { src, srcSet: void 0, sizes: void 0 };
        }
        const { widths, kind } = (function getWidths(
            { deviceSizes, allSizes },
            width,
            sizes,
          ) {
            if (sizes) {
              const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g,
                percentSizes = [];
              for (let match; (match = viewportWidthRe.exec(sizes)); match)
                percentSizes.push(parseInt(match[2]));
              if (percentSizes.length) {
                const smallestRatio = 0.01 * Math.min(...percentSizes);
                return {
                  widths: allSizes.filter(
                    (s) => s >= deviceSizes[0] * smallestRatio,
                  ),
                  kind: "w",
                };
              }
              return { widths: allSizes, kind: "w" };
            }
            return "number" != typeof width
              ? { widths: deviceSizes, kind: "w" }
              : {
                  widths: [
                    ...new Set(
                      [width, 2 * width].map(
                        (w) =>
                          allSizes.find((p) => p >= w) ||
                          allSizes[allSizes.length - 1],
                      ),
                    ),
                  ],
                  kind: "x",
                };
          })(config, width, sizes),
          last = widths.length - 1;
        return {
          sizes: sizes || "w" !== kind ? sizes : "100vw",
          srcSet: widths
            .map(
              (w, i) =>
                `${loader({ config, src, quality, width: w })} ${"w" === kind ? w : i + 1}${kind}`,
            )
            .join(", "),
          src: loader({ config, src, quality, width: widths[last] }),
        };
      }
      function getImgProps(
        {
          src,
          sizes,
          unoptimized = !1,
          priority = !1,
          preload = !1,
          loading,
          className,
          quality,
          width,
          height,
          fill = !1,
          style,
          overrideSrc,
          onLoad,
          onLoadingComplete,
          placeholder = "empty",
          blurDataURL,
          fetchPriority,
          decoding = "async",
          layout,
          objectFit,
          objectPosition,
          lazyBoundary,
          lazyRoot,
          ...rest
        },
        _state,
      ) {
        const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
        let config,
          c = imgConf || _imageconfig.imageConfigDefault;
        if ("allSizes" in c) config = c;
        else {
          const allSizes = [...c.deviceSizes, ...c.imageSizes].sort(
              (a, b) => a - b,
            ),
            deviceSizes = c.deviceSizes.sort((a, b) => a - b),
            qualities = c.qualities?.sort((a, b) => a - b);
          config = { ...c, allSizes, deviceSizes, qualities };
        }
        if (void 0 === defaultLoader)
          throw Object.defineProperty(
            new Error(
              "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
            ),
            "__NEXT_ERROR_CODE",
            { value: "E163", enumerable: !1, configurable: !0 },
          );
        let loader = rest.loader || defaultLoader;
        (delete rest.loader, delete rest.srcSet);
        const isDefaultLoader = "__next_img_default" in loader;
        if (isDefaultLoader) {
          if ("custom" === config.loader)
            throw Object.defineProperty(
              new Error(
                `Image with src "${src}" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`,
              ),
              "__NEXT_ERROR_CODE",
              { value: "E252", enumerable: !1, configurable: !0 },
            );
        } else {
          const customImageLoader = loader;
          loader = (obj) => {
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
          };
        }
        if (layout) {
          "fill" === layout && (fill = !0);
          const layoutToSizes = { responsive: "100vw", fill: "100vw" },
            layoutStyle = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[layout];
          layoutStyle && (style = { ...style, ...layoutStyle });
          const layoutSizes = layoutToSizes[layout];
          layoutSizes && !sizes && (sizes = layoutSizes);
        }
        let blurWidth,
          blurHeight,
          staticSrc = "",
          widthInt = getInt(width),
          heightInt = getInt(height);
        if (
          (function isStaticImport(src) {
            return (
              !!src &&
              "object" == typeof src &&
              (isStaticRequire(src) ||
                (function isStaticImageData(src) {
                  return void 0 !== src.src;
                })(src))
            );
          })(src)
        ) {
          const staticImageData = isStaticRequire(src) ? src.default : src;
          if (!staticImageData.src)
            throw Object.defineProperty(
              new Error(
                `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`,
              ),
              "__NEXT_ERROR_CODE",
              { value: "E460", enumerable: !1, configurable: !0 },
            );
          if (!staticImageData.height || !staticImageData.width)
            throw Object.defineProperty(
              new Error(
                `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`,
              ),
              "__NEXT_ERROR_CODE",
              { value: "E48", enumerable: !1, configurable: !0 },
            );
          if (
            ((blurWidth = staticImageData.blurWidth),
            (blurHeight = staticImageData.blurHeight),
            (blurDataURL = blurDataURL || staticImageData.blurDataURL),
            (staticSrc = staticImageData.src),
            !fill)
          )
            if (widthInt || heightInt) {
              if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
              } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
              }
            } else
              ((widthInt = staticImageData.width),
                (heightInt = staticImageData.height));
        }
        let isLazy = !(
          priority ||
          preload ||
          ("lazy" !== loading && void 0 !== loading)
        );
        ((!(src = "string" == typeof src ? src : staticSrc) ||
          src.startsWith("data:") ||
          src.startsWith("blob:")) &&
          ((unoptimized = !0), (isLazy = !1)),
          config.unoptimized && (unoptimized = !0),
          isDefaultLoader &&
            !config.dangerouslyAllowSVG &&
            src.split("?", 1)[0].endsWith(".svg") &&
            (unoptimized = !0));
        const qualityInt = getInt(quality);
        const imgStyle = Object.assign(
            fill
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit,
                  objectPosition,
                }
              : {},
            showAltText ? {} : { color: "transparent" },
            style,
          ),
          backgroundImage =
            blurComplete || "empty" === placeholder
              ? null
              : "blur" === placeholder
                ? `url("data:image/svg+xml;charset=utf-8,${(0, _imageblursvg.getImageBlurSvg)({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL: blurDataURL || "", objectFit: imgStyle.objectFit })}")`
                : `url("${placeholder}")`,
          backgroundSize = INVALID_BACKGROUND_SIZE_VALUES.includes(
            imgStyle.objectFit,
          )
            ? "fill" === imgStyle.objectFit
              ? "100% 100%"
              : "cover"
            : imgStyle.objectFit;
        let placeholderStyle = backgroundImage
          ? {
              backgroundSize,
              backgroundPosition: imgStyle.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage,
            }
          : {};
        const imgAttributes = generateImgAttrs({
            config,
            src,
            unoptimized,
            width: widthInt,
            quality: qualityInt,
            sizes,
            loader,
          }),
          loadingFinal = isLazy ? "lazy" : loading;
        return {
          props: {
            ...rest,
            loading: loadingFinal,
            fetchPriority,
            width: widthInt,
            height: heightInt,
            decoding,
            className,
            style: { ...imgStyle, ...placeholderStyle },
            sizes: imgAttributes.sizes,
            srcSet: imgAttributes.srcSet,
            src: overrideSrc || imgAttributes.src,
          },
          meta: {
            unoptimized,
            preload: preload || priority,
            placeholder,
            fill,
          },
        };
      }
    },
    "./node_modules/next/dist/shared/lib/head.js"(
      module,
      exports,
      __webpack_require__,
    ) {
      "use strict";
      (Object.defineProperty(exports, "__esModule", { value: !0 }),
        (function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: !0,
              get: all[name],
            });
        })(exports, {
          default: function () {
            return _default;
          },
          defaultHead: function () {
            return defaultHead;
          },
        }));
      const _interop_require_default = __webpack_require__(
          "./node_modules/@swc/helpers/cjs/_interop_require_default.cjs",
        ),
        _interop_require_wildcard = __webpack_require__(
          "./node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs",
        ),
        _jsxruntime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        ),
        _react = _interop_require_wildcard._(
          __webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
        ),
        _sideeffect = _interop_require_default._(
          __webpack_require__(
            "./node_modules/next/dist/shared/lib/side-effect.js",
          ),
        ),
        _headmanagercontextsharedruntime = __webpack_require__(
          "./node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js",
        );
      __webpack_require__(
        "./node_modules/next/dist/shared/lib/utils/warn-once.js",
      );
      function defaultHead() {
        return [
          (0, _jsxruntime.jsx)("meta", { charSet: "utf-8" }, "charset"),
          (0, _jsxruntime.jsx)(
            "meta",
            { name: "viewport", content: "width=device-width" },
            "viewport",
          ),
        ];
      }
      function onlyReactElement(list, child) {
        return "string" == typeof child || "number" == typeof child
          ? list
          : child.type === _react.default.Fragment
            ? list.concat(
                _react.default.Children.toArray(child.props.children).reduce(
                  (fragmentList, fragmentChild) =>
                    "string" == typeof fragmentChild ||
                    "number" == typeof fragmentChild
                      ? fragmentList
                      : fragmentList.concat(fragmentChild),
                  [],
                ),
              )
            : list.concat(child);
      }
      const METATYPES = ["name", "httpEquiv", "charSet", "itemProp"];
      function reduceComponents(headChildrenElements) {
        return headChildrenElements
          .reduce(onlyReactElement, [])
          .reverse()
          .concat(defaultHead().reverse())
          .filter(
            (function unique() {
              const keys = new Set(),
                tags = new Set(),
                metaTypes = new Set(),
                metaCategories = {};
              return (h) => {
                let isUnique = !0,
                  hasKey = !1;
                if (
                  h.key &&
                  "number" != typeof h.key &&
                  h.key.indexOf("$") > 0
                ) {
                  hasKey = !0;
                  const key = h.key.slice(h.key.indexOf("$") + 1);
                  keys.has(key) ? (isUnique = !1) : keys.add(key);
                }
                switch (h.type) {
                  case "title":
                  case "base":
                    tags.has(h.type) ? (isUnique = !1) : tags.add(h.type);
                    break;
                  case "meta":
                    for (let i = 0, len = METATYPES.length; i < len; i++) {
                      const metatype = METATYPES[i];
                      if (h.props.hasOwnProperty(metatype))
                        if ("charSet" === metatype)
                          metaTypes.has(metatype)
                            ? (isUnique = !1)
                            : metaTypes.add(metatype);
                        else {
                          const category = h.props[metatype],
                            categories = metaCategories[metatype] || new Set();
                          ("name" === metatype && hasKey) ||
                          !categories.has(category)
                            ? (categories.add(category),
                              (metaCategories[metatype] = categories))
                            : (isUnique = !1);
                        }
                    }
                }
                return isUnique;
              };
            })(),
          )
          .reverse()
          .map((c, i) => {
            const key = c.key || i;
            return _react.default.cloneElement(c, { key });
          });
      }
      const _default = function Head({ children }) {
        const headManager = (0, _react.useContext)(
          _headmanagercontextsharedruntime.HeadManagerContext,
        );
        return (0, _jsxruntime.jsx)(_sideeffect.default, {
          reduceComponentsToState: reduceComponents,
          headManager,
          children,
        });
      };
      ("function" == typeof exports.default ||
        ("object" == typeof exports.default && null !== exports.default)) &&
        void 0 === exports.default.__esModule &&
        (Object.defineProperty(exports.default, "__esModule", { value: !0 }),
        Object.assign(exports.default, exports),
        (module.exports = exports.default));
    },
    "./node_modules/next/dist/shared/lib/image-blur-svg.js"(
      __unused_webpack_module,
      exports,
    ) {
      "use strict";
      function getImageBlurSvg({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL,
        objectFit,
      }) {
        const svgWidth = blurWidth ? 40 * blurWidth : widthInt,
          svgHeight = blurHeight ? 40 * blurHeight : heightInt,
          viewBox =
            svgWidth && svgHeight
              ? `viewBox='0 0 ${svgWidth} ${svgHeight}'`
              : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${viewBox}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${viewBox ? "none" : "contain" === objectFit ? "xMidYMid" : "cover" === objectFit ? "xMidYMid slice" : "none"}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
      }
      Object.defineProperty(exports, "getImageBlurSvg", {
        enumerable: !0,
        get: function () {
          return getImageBlurSvg;
        },
      });
    },
    "./node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js"(
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) {
      "use strict";
      Object.defineProperty(exports, "ImageConfigContext", {
        enumerable: !0,
        get: function () {
          return ImageConfigContext;
        },
      });
      const _react = __webpack_require__(
          "./node_modules/@swc/helpers/cjs/_interop_require_default.cjs",
        )._(
          __webpack_require__(
            "./node_modules/next/dist/compiled/react/index.js",
          ),
        ),
        _imageconfig = __webpack_require__(
          "./node_modules/next/dist/shared/lib/image-config.js",
        ),
        ImageConfigContext = _react.default.createContext(
          _imageconfig.imageConfigDefault,
        );
    },
    "./node_modules/next/dist/shared/lib/image-config.js"(
      __unused_webpack_module,
      exports,
    ) {
      "use strict";
      (Object.defineProperty(exports, "__esModule", { value: !0 }),
        (function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: !0,
              get: all[name],
            });
        })(exports, {
          VALID_LOADERS: function () {
            return VALID_LOADERS;
          },
          imageConfigDefault: function () {
            return imageConfigDefault;
          },
        }));
      const VALID_LOADERS = [
          "default",
          "imgix",
          "cloudinary",
          "akamai",
          "custom",
        ],
        imageConfigDefault = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 14400,
          formats: ["image/webp"],
          maximumDiskCacheSize: void 0,
          maximumRedirects: 3,
          maximumResponseBody: 5e7,
          dangerouslyAllowLocalIP: !1,
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          qualities: [75],
          unoptimized: !1,
          customCacheHandler: !1,
        };
    },
    "./node_modules/next/dist/shared/lib/image-external.js"(
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) {
      "use strict";
      (Object.defineProperty(exports, "__esModule", { value: !0 }),
        (function _export(target, all) {
          for (var name in all)
            Object.defineProperty(target, name, {
              enumerable: !0,
              get: all[name],
            });
        })(exports, {
          default: function () {
            return _default;
          },
          getImageProps: function () {
            return getImageProps;
          },
        }));
      const _interop_require_default = __webpack_require__(
          "./node_modules/@swc/helpers/cjs/_interop_require_default.cjs",
        ),
        _getimgprops = __webpack_require__(
          "./node_modules/next/dist/shared/lib/get-img-props.js",
        ),
        _imagecomponent = __webpack_require__(
          "./node_modules/next/dist/client/image-component.js",
        ),
        _imageloader = _interop_require_default._(
          __webpack_require__(
            "./node_modules/next/dist/shared/lib/image-loader.js",
          ),
        );
      function getImageProps(imgProps) {
        const { props } = (0, _getimgprops.getImgProps)(imgProps, {
          defaultLoader: _imageloader.default,
          imgConf: {
            NODE_ENV: "production",
            NODE_PATH: [],
            STORYBOOK: "true",
            PUBLIC_URL: ".",
          }.__NEXT_IMAGE_OPTS,
        });
        for (const [key, value] of Object.entries(props))
          void 0 === value && delete props[key];
        return { props };
      }
      const _default = _imagecomponent.Image;
    },
    "./node_modules/next/dist/shared/lib/image-loader.js"(
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) {
      "use strict";
      (Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "default", {
          enumerable: !0,
          get: function () {
            return _default;
          },
        }));
      const _findclosestquality = __webpack_require__(
          "./node_modules/next/dist/shared/lib/find-closest-quality.js",
        ),
        _deploymentid = __webpack_require__(
          "./node_modules/next/dist/shared/lib/deployment-id.js",
        );
      function defaultLoader({ config, src, width, quality }) {
        let deploymentId = (0, _deploymentid.getDeploymentId)();
        if (src.startsWith("/") && !src.startsWith("//")) {
          const qIndex = src.indexOf("?");
          if (-1 !== qIndex) {
            const params = new URLSearchParams(src.slice(qIndex + 1)),
              srcDpl = params.get("dpl");
            if (srcDpl) {
              ((deploymentId = srcDpl), params.delete("dpl"));
              const remaining = params.toString();
              src = src.slice(0, qIndex) + (remaining ? "?" + remaining : "");
            }
          }
        }
        if (
          src.startsWith("/") &&
          src.includes("?") &&
          1 === config.localPatterns?.length &&
          "**" === config.localPatterns[0].pathname &&
          "" === config.localPatterns[0].search
        )
          throw Object.defineProperty(
            new Error(
              `Image with src "${src}" is using a query string which is not configured in images.localPatterns.\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`,
            ),
            "__NEXT_ERROR_CODE",
            { value: "E871", enumerable: !1, configurable: !0 },
          );
        const q = (0, _findclosestquality.findClosestQuality)(quality, config);
        return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${q}${src.startsWith("/") && deploymentId ? `&dpl=${deploymentId}` : ""}`;
      }
      defaultLoader.__next_img_default = !0;
      const _default = defaultLoader;
    },
    "./node_modules/next/dist/shared/lib/side-effect.js"(
      __unused_webpack_module,
      exports,
      __webpack_require__,
    ) {
      "use strict";
      (Object.defineProperty(exports, "__esModule", { value: !0 }),
        Object.defineProperty(exports, "default", {
          enumerable: !0,
          get: function () {
            return SideEffect;
          },
        }));
      const _react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        isServer = "undefined" == typeof window,
        useClientOnlyLayoutEffect = isServer
          ? () => {}
          : _react.useLayoutEffect,
        useClientOnlyEffect = isServer ? () => {} : _react.useEffect;
      function SideEffect(props) {
        const { headManager, reduceComponentsToState } = props;
        function emitChange() {
          if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(
              Array.from(headManager.mountedInstances).filter(Boolean),
            );
            headManager.updateHead(reduceComponentsToState(headElements));
          }
        }
        return (
          isServer &&
            (headManager?.mountedInstances?.add(props.children), emitChange()),
          useClientOnlyLayoutEffect(
            () => (
              headManager?.mountedInstances?.add(props.children),
              () => {
                headManager?.mountedInstances?.delete(props.children);
              }
            ),
          ),
          useClientOnlyLayoutEffect(
            () => (
              headManager && (headManager._pendingUpdate = emitChange),
              () => {
                headManager && (headManager._pendingUpdate = emitChange);
              }
            ),
          ),
          useClientOnlyEffect(
            () => (
              headManager &&
                headManager._pendingUpdate &&
                (headManager._pendingUpdate(),
                (headManager._pendingUpdate = null)),
              () => {
                headManager &&
                  headManager._pendingUpdate &&
                  (headManager._pendingUpdate(),
                  (headManager._pendingUpdate = null));
              }
            ),
          ),
          null
        );
      }
    },
    "./node_modules/next/image.js"(
      module,
      __unused_webpack_exports,
      __webpack_require__,
    ) {
      module.exports = __webpack_require__(
        "./node_modules/next/dist/shared/lib/image-external.js",
      );
    },
  },
]);
//# sourceMappingURL=562.0bfa40bf.iframe.bundle.js.map
