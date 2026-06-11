/*! For license information please see 601.bd0ef6c6.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkmantine_next_template =
  self.webpackChunkmantine_next_template || []).push([
  [601],
  {
    "./node_modules/@mantine/core/esm/components/Badge/Badge.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { E: () => Badge });
      var get_size = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs",
        ),
        create_vars_resolver = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs",
        ),
        get_theme_color = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs",
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
        Badge_module_default = {
          root: "m_347db0ec",
          "root--dot": "m_fbd81e3d",
          label: "m_5add502a",
          section: "m_91fdda9b",
        },
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const varsResolver = (0, create_vars_resolver.V)(
          (
            theme,
            { radius, color, gradient, variant, size, autoContrast, circle },
          ) => {
            const colors = theme.variantColorResolver({
              color: color || theme.primaryColor,
              theme,
              gradient,
              variant: variant || "filled",
              autoContrast,
            });
            return {
              root: {
                "--badge-height": (0, get_size.YC)(size, "badge-height"),
                "--badge-padding-x": (0, get_size.YC)(size, "badge-padding-x"),
                "--badge-fz": (0, get_size.YC)(size, "badge-fz"),
                "--badge-radius":
                  circle || void 0 === radius
                    ? void 0
                    : (0, get_size.nJ)(radius),
                "--badge-bg": color || variant ? colors.background : void 0,
                "--badge-color": color || variant ? colors.color : void 0,
                "--badge-bd": color || variant ? colors.border : void 0,
                "--badge-dot-color":
                  "dot" === variant
                    ? (0, get_theme_color.r)(color, theme)
                    : void 0,
              },
            };
          },
        ),
        Badge = (0, polymorphic_factory.v)((_props) => {
          const props = (0, use_props.Y)("Badge", null, _props),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              vars,
              radius,
              color,
              gradient,
              leftSection,
              rightSection,
              children,
              variant,
              fullWidth,
              autoContrast,
              circle,
              mod,
              attributes,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: "Badge",
              props,
              classes: Badge_module_default,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver,
            });
          return (0, jsx_runtime.jsxs)(Box.a, {
            variant,
            mod: [
              {
                block: fullWidth,
                circle,
                "with-right-section": !!rightSection,
                "with-left-section": !!leftSection,
              },
              mod,
            ],
            ...getStyles("root", { variant }),
            ...others,
            children: [
              leftSection &&
                (0, jsx_runtime.jsx)("span", {
                  ...getStyles("section"),
                  "data-position": "left",
                  children: leftSection,
                }),
              (0, jsx_runtime.jsx)("span", { ...getStyles("label"), children }),
              rightSection &&
                (0, jsx_runtime.jsx)("span", {
                  ...getStyles("section"),
                  "data-position": "right",
                  children: rightSection,
                }),
            ],
          });
        });
      ((Badge.classes = Badge_module_default),
        (Badge.varsResolver = varsResolver),
        (Badge.displayName = "@mantine/core/Badge"));
    },
    "./node_modules/@mantine/core/esm/components/Container/Container.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { m: () => Container });
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
        Container_module_default = { root: "m_7485cace" },
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const defaultProps = { strategy: "block" },
        varsResolver = (0, create_vars_resolver.V)((_, { size, fluid }) => ({
          root: {
            "--container-size": fluid
              ? void 0
              : (0, get_size.YC)(size, "container-size"),
          },
        })),
        Container = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)("Container", defaultProps, _props),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              vars,
              fluid,
              mod,
              attributes,
              strategy,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: "Container",
              classes: Container_module_default,
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
          return (0, jsx_runtime.jsx)(Box.a, {
            mod: [{ fluid, strategy }, mod],
            ...getStyles("root"),
            ...others,
          });
        });
      ((Container.classes = Container_module_default),
        (Container.varsResolver = varsResolver),
        (Container.displayName = "@mantine/core/Container"));
    },
    "./node_modules/@mantine/core/esm/components/Grid/Grid.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { x: () => Grid });
      var create_vars_resolver = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs",
        ),
        use_props = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs",
        ),
        use_styles = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs",
        ),
        use_random_classname = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs",
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
      const [GridProvider, useGridContext] = (0, create_safe_context.F)(
        "Grid component was not found in tree",
      );
      var Grid_module_default = {
          container: "m_8478a6da",
          root: "m_410352e9",
          inner: "m_dee7bd2f",
          col: "m_96bdd299",
        },
        keys = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/keys/keys.mjs",
        ),
        filter_props = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs",
        ),
        get_sorted_breakpoints = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-sorted-breakpoints/get-sorted-breakpoints.mjs",
        ),
        get_base_value = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-base-value/get-base-value.mjs",
        ),
        MantineThemeProvider = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs",
        ),
        InlineStyles = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs",
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const getColumnFlexBasis = (colSpan, columns) =>
          "content" === colSpan
            ? "auto"
            : "auto" === colSpan
              ? "0rem"
              : colSpan
                ? colSpan === columns
                  ? "100%"
                  : `calc(${(100 * colSpan) / columns}% - ${(columns - colSpan) / columns} * var(--grid-column-gap))`
                : void 0,
        getColumnMaxWidth = (colSpan, columns, grow) =>
          grow || "auto" === colSpan
            ? "100%"
            : "content" === colSpan
              ? "unset"
              : getColumnFlexBasis(colSpan, columns),
        getColumnFlexGrow = (colSpan, grow) => {
          if (colSpan) return "auto" === colSpan || grow ? "1" : "auto";
        },
        getColumnOffset = (offset, columns) =>
          0 === offset
            ? "0"
            : offset
              ? `calc(${(100 * offset) / columns}% + ${offset / columns} * var(--grid-column-gap))`
              : void 0;
      function GridColVariables({ span, order, offset, align, selector }) {
        const theme = (0, MantineThemeProvider.xd)(),
          ctx = useGridContext(),
          _breakpoints = ctx.breakpoints || theme.breakpoints,
          baseValue = (0, get_base_value.D)(span),
          baseSpan = void 0 === baseValue ? 12 : baseValue,
          baseStyles = (0, filter_props.J)({
            "--col-order": (0, get_base_value.D)(order)?.toString(),
            "--col-flex-grow": getColumnFlexGrow(baseSpan, ctx.grow),
            "--col-flex-basis": getColumnFlexBasis(baseSpan, ctx.columns),
            "--col-width": "content" === baseSpan ? "auto" : void 0,
            "--col-max-width": getColumnMaxWidth(
              baseSpan,
              ctx.columns,
              ctx.grow,
            ),
            "--col-offset": getColumnOffset(
              (0, get_base_value.D)(offset),
              ctx.columns,
            ),
            "--col-align-self": (0, get_base_value.D)(align),
          }),
          queries = (0, keys.H)(_breakpoints).reduce(
            (acc, breakpoint) => (
              acc[breakpoint] || (acc[breakpoint] = {}),
              "object" == typeof order &&
                void 0 !== order[breakpoint] &&
                (acc[breakpoint]["--col-order"] =
                  order[breakpoint]?.toString()),
              "object" == typeof span &&
                void 0 !== span[breakpoint] &&
                ((acc[breakpoint]["--col-flex-grow"] = getColumnFlexGrow(
                  span[breakpoint],
                  ctx.grow,
                )),
                (acc[breakpoint]["--col-flex-basis"] = getColumnFlexBasis(
                  span[breakpoint],
                  ctx.columns,
                )),
                (acc[breakpoint]["--col-width"] =
                  "content" === span[breakpoint] ? "auto" : void 0),
                (acc[breakpoint]["--col-max-width"] = getColumnMaxWidth(
                  span[breakpoint],
                  ctx.columns,
                  ctx.grow,
                ))),
              "object" == typeof offset &&
                void 0 !== offset[breakpoint] &&
                (acc[breakpoint]["--col-offset"] = getColumnOffset(
                  offset[breakpoint],
                  ctx.columns,
                )),
              "object" == typeof align &&
                void 0 !== align[breakpoint] &&
                (acc[breakpoint]["--col-align-self"] = align[breakpoint]),
              acc
            ),
            {},
          ),
          values = (0, get_sorted_breakpoints.q)(
            (0, keys.H)(queries),
            _breakpoints,
          )
            .filter(
              (breakpoint) => (0, keys.H)(queries[breakpoint.value]).length > 0,
            )
            .map((breakpoint) => ({
              query:
                "container" === ctx.type
                  ? `mantine-grid (min-width: ${_breakpoints[breakpoint.value]})`
                  : `(min-width: ${_breakpoints[breakpoint.value]})`,
              styles: queries[breakpoint.value],
            }));
        return (0, jsx_runtime.jsx)(InlineStyles.K, {
          styles: baseStyles,
          media: "container" === ctx.type ? void 0 : values,
          container: "container" === ctx.type ? values : void 0,
          selector,
        });
      }
      var clsx = __webpack_require__("./node_modules/clsx/dist/clsx.mjs");
      const defaultProps = { span: 12 },
        GridCol = (0, factory.P9)((_props) => {
          const {
              classNames,
              className,
              style,
              styles,
              vars,
              span,
              order,
              offset,
              align,
              ...others
            } = (0, use_props.Y)("GridCol", defaultProps, _props),
            ctx = useGridContext(),
            responsiveClassName = (0, use_random_classname.C)();
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(GridColVariables, {
                selector: `.${responsiveClassName}`,
                span,
                order,
                offset,
                align,
              }),
              (0, jsx_runtime.jsx)(Box.a, {
                ...ctx.getStyles("col", {
                  className: (0, clsx.A)(className, responsiveClassName),
                  style,
                  classNames,
                  styles,
                }),
                ...others,
              }),
            ],
          });
        });
      ((GridCol.classes = Grid_module_default),
        (GridCol.displayName = "@mantine/core/GridCol"));
      var get_size = __webpack_require__(
        "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs",
      );
      function GridVariables({
        gap,
        rowGap,
        columnGap,
        selector,
        breakpoints,
        type,
      }) {
        const theme = (0, MantineThemeProvider.xd)(),
          _breakpoints = breakpoints || theme.breakpoints,
          baseStyles = (0, filter_props.J)({
            "--grid-gap": (0, get_size.GY)((0, get_base_value.D)(gap)),
            "--grid-row-gap": (0, get_size.GY)((0, get_base_value.D)(rowGap)),
            "--grid-column-gap": (0, get_size.GY)(
              (0, get_base_value.D)(columnGap),
            ),
          }),
          queries = (0, keys.H)(_breakpoints).reduce(
            (acc, breakpoint) => (
              acc[breakpoint] || (acc[breakpoint] = {}),
              "object" == typeof gap &&
                void 0 !== gap[breakpoint] &&
                (acc[breakpoint]["--grid-gap"] = (0, get_size.GY)(
                  gap[breakpoint],
                )),
              "object" == typeof rowGap &&
                void 0 !== rowGap[breakpoint] &&
                (acc[breakpoint]["--grid-row-gap"] = (0, get_size.GY)(
                  rowGap[breakpoint],
                )),
              "object" == typeof columnGap &&
                void 0 !== columnGap[breakpoint] &&
                (acc[breakpoint]["--grid-column-gap"] = (0, get_size.GY)(
                  columnGap[breakpoint],
                )),
              acc
            ),
            {},
          ),
          values = (0, get_sorted_breakpoints.q)(
            (0, keys.H)(queries),
            _breakpoints,
          )
            .filter(
              (breakpoint) => (0, keys.H)(queries[breakpoint.value]).length > 0,
            )
            .map((breakpoint) => ({
              query:
                "container" === type
                  ? `mantine-grid (min-width: ${_breakpoints[breakpoint.value]})`
                  : `(min-width: ${_breakpoints[breakpoint.value]})`,
              styles: queries[breakpoint.value],
            }));
        return (0, jsx_runtime.jsx)(InlineStyles.K, {
          styles: baseStyles,
          media: "container" === type ? void 0 : values,
          container: "container" === type ? values : void 0,
          selector,
        });
      }
      const Grid_defaultProps = { gap: "md", columns: 12 },
        varsResolver = (0, create_vars_resolver.V)(
          (_, { justify, align, overflow }) => ({
            root: {
              "--grid-justify": justify,
              "--grid-align": align,
              "--grid-overflow": overflow,
            },
          }),
        ),
        Grid = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)("Grid", Grid_defaultProps, _props),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              vars,
              grow,
              gap,
              rowGap,
              columnGap,
              columns,
              align,
              justify,
              children,
              breakpoints,
              type,
              attributes,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: "Grid",
              classes: Grid_module_default,
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
            responsiveClassName = (0, use_random_classname.C)();
          return "container" === type && breakpoints
            ? (0, jsx_runtime.jsxs)(GridProvider, {
                value: { getStyles, grow, columns, breakpoints, type },
                children: [
                  (0, jsx_runtime.jsx)(GridVariables, {
                    selector: `.${responsiveClassName}`,
                    ...props,
                  }),
                  (0, jsx_runtime.jsx)("div", {
                    ...getStyles("container"),
                    children: (0, jsx_runtime.jsx)(Box.a, {
                      ...getStyles("root", { className: responsiveClassName }),
                      ...others,
                      children: (0, jsx_runtime.jsx)("div", {
                        ...getStyles("inner"),
                        children,
                      }),
                    }),
                  }),
                ],
              })
            : (0, jsx_runtime.jsxs)(GridProvider, {
                value: { getStyles, grow, columns, breakpoints, type },
                children: [
                  (0, jsx_runtime.jsx)(GridVariables, {
                    selector: `.${responsiveClassName}`,
                    ...props,
                  }),
                  (0, jsx_runtime.jsx)(Box.a, {
                    ...getStyles("root", { className: responsiveClassName }),
                    ...others,
                    children: (0, jsx_runtime.jsx)("div", {
                      ...getStyles("inner"),
                      children,
                    }),
                  }),
                ],
              });
        });
      ((Grid.classes = Grid_module_default),
        (Grid.varsResolver = varsResolver),
        (Grid.displayName = "@mantine/core/Grid"),
        (Grid.Col = GridCol));
    },
    "./node_modules/@mantine/core/esm/components/Group/Group.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { Y: () => Group });
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
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        );
      var Group_module_default = { root: "m_4081bf90" },
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const defaultProps = {
          preventGrowOverflow: !0,
          gap: "md",
          align: "center",
          justify: "flex-start",
          wrap: "wrap",
        },
        varsResolver = (0, create_vars_resolver.V)(
          (
            _,
            { grow, preventGrowOverflow, gap, align, justify, wrap },
            { childWidth },
          ) => ({
            root: {
              "--group-child-width":
                grow && preventGrowOverflow ? childWidth : void 0,
              "--group-gap": (0, get_size.GY)(gap),
              "--group-align": align,
              "--group-justify": justify,
              "--group-wrap": wrap,
            },
          }),
        ),
        Group = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)("Group", defaultProps, _props),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              children,
              gap,
              align,
              justify,
              wrap,
              grow,
              preventGrowOverflow,
              vars,
              variant,
              __size,
              mod,
              attributes,
              ...others
            } = props,
            filteredChildren = (function filterFalsyChildren(children) {
              return react.Children.toArray(children).filter(Boolean);
            })(children),
            childrenCount = filteredChildren.length,
            resolvedGap = (0, get_size.GY)(gap ?? "md");
          return (0, jsx_runtime.jsx)(Box.a, {
            ...(0, use_styles.I)({
              name: "Group",
              props,
              stylesCtx: {
                childWidth: `calc(${100 / childrenCount}% - (${resolvedGap} - ${resolvedGap} / ${childrenCount}))`,
              },
              className,
              style,
              classes: Group_module_default,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver,
            })("root"),
            variant,
            mod: [{ grow }, mod],
            size: __size,
            ...others,
            children: filteredChildren,
          });
        });
      ((Group.classes = Group_module_default),
        (Group.varsResolver = varsResolver),
        (Group.displayName = "@mantine/core/Group"));
    },
    "./node_modules/@mantine/core/esm/components/Progress/Progress.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { k: () => Progress });
      var use_props = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs",
        ),
        use_resolved_styles_api = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs",
        ),
        factory = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/factory/factory.mjs",
        ),
        Progress_module_default = {
          root: "m_db6d6462",
          section: "m_2242eb65",
          "stripes-animation": "m_81a374bd",
          "stripes-animation-vertical": "m_e0fb7a86",
          label: "m_91e40b74",
        },
        Box = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/Box/Box.mjs",
        ),
        create_safe_context = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs",
        );
      const [ProgressProvider, useProgressContext] = (0, create_safe_context.F)(
        "Progress.Root component was not found in tree",
      );
      var jsx_runtime = __webpack_require__(
        "./node_modules/next/dist/compiled/react/jsx-runtime.js",
      );
      const ProgressLabel = (0, factory.P9)((props) => {
        const { classNames, className, style, styles, vars, ...others } = (0,
        use_props.Y)("ProgressLabel", null, props);
        return (0, jsx_runtime.jsx)(Box.a, {
          ...useProgressContext().getStyles("label", {
            className,
            style,
            classNames,
            styles,
          }),
          ...others,
        });
      });
      ((ProgressLabel.classes = Progress_module_default),
        (ProgressLabel.displayName = "@mantine/core/ProgressLabel"));
      var get_size = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs",
        ),
        create_vars_resolver = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs",
        ),
        use_styles = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs",
        );
      const varsResolver = (0, create_vars_resolver.V)(
          (_, { size, radius, transitionDuration }) => ({
            root: {
              "--progress-size": (0, get_size.YC)(size, "progress-size"),
              "--progress-radius":
                void 0 === radius ? void 0 : (0, get_size.nJ)(radius),
              "--progress-transition-duration":
                "number" == typeof transitionDuration
                  ? `${transitionDuration}ms`
                  : void 0,
            },
          }),
        ),
        ProgressRoot = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)("ProgressRoot", null, _props),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              vars,
              autoContrast,
              transitionDuration,
              orientation,
              attributes,
              mod,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: "Progress",
              classes: Progress_module_default,
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
          return (0, jsx_runtime.jsx)(ProgressProvider, {
            value: { getStyles, autoContrast },
            children: (0, jsx_runtime.jsx)(Box.a, {
              mod: [{ orientation }, mod],
              ...getStyles("root"),
              ...others,
            }),
          });
        });
      ((ProgressRoot.classes = Progress_module_default),
        (ProgressRoot.varsResolver = varsResolver),
        (ProgressRoot.displayName = "@mantine/core/ProgressRoot"));
      var get_theme_color = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs",
        ),
        get_contrast_color = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs",
        ),
        get_auto_contrast_value = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-auto-contrast-value/get-auto-contrast-value.mjs",
        ),
        MantineThemeProvider = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs",
        );
      const defaultProps = { withAria: !0 },
        ProgressSection = (0, factory.P9)((props) => {
          const {
              classNames,
              className,
              style,
              styles,
              vars,
              value,
              withAria,
              color,
              striped,
              animated,
              mod,
              ...others
            } = (0, use_props.Y)("ProgressSection", defaultProps, props),
            ctx = useProgressContext(),
            theme = (0, MantineThemeProvider.xd)(),
            ariaAttributes = withAria
              ? {
                  role: "progressbar",
                  "aria-valuemax": 100,
                  "aria-valuemin": 0,
                  "aria-valuenow": value,
                  "aria-valuetext": `${value}%`,
                }
              : {};
          return (0, jsx_runtime.jsx)(Box.a, {
            ...ctx.getStyles("section", {
              className,
              classNames,
              styles,
              style,
            }),
            ...others,
            ...ariaAttributes,
            mod: [{ striped: striped || animated, animated }, mod],
            __vars: {
              "--progress-section-size": `${value}%`,
              "--progress-section-color": (0, get_theme_color.r)(color, theme),
              "--progress-label-color": (0, get_auto_contrast_value.v)(
                ctx.autoContrast,
                theme,
              )
                ? (0, get_contrast_color.w)({
                    color,
                    theme,
                    autoContrast: ctx.autoContrast,
                  })
                : void 0,
            },
          });
        });
      ((ProgressSection.classes = Progress_module_default),
        (ProgressSection.displayName = "@mantine/core/ProgressSection"));
      const Progress = (0, factory.P9)((_props) => {
        const props = (0, use_props.Y)("Progress", null, _props),
          {
            value,
            classNames,
            styles,
            vars,
            color,
            striped,
            animated,
            "aria-label": label,
            ...others
          } = props,
          { resolvedClassNames, resolvedStyles } = (0,
          use_resolved_styles_api.Y)({ classNames, styles, props });
        return (0, jsx_runtime.jsx)(ProgressRoot, {
          classNames: resolvedClassNames,
          styles: resolvedStyles,
          vars,
          ...others,
          children: (0, jsx_runtime.jsx)(ProgressSection, {
            value,
            color,
            striped,
            animated,
            "aria-label": label,
          }),
        });
      });
      ((Progress.classes = Progress_module_default),
        (Progress.displayName = "@mantine/core/Progress"),
        (Progress.Section = ProgressSection),
        (Progress.Root = ProgressRoot),
        (Progress.Label = ProgressLabel));
    },
    "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, {
        A: () => createReactComponent,
      });
      var react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        defaultAttributes = {
          outline: {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          filled: {
            xmlns: "http://www.w3.org/2000/svg",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            stroke: "none",
          },
        };
      const createReactComponent = (
        type,
        iconName,
        iconNamePascal,
        iconNode,
      ) => {
        const Component = (0, react.forwardRef)(
          (
            {
              color = "currentColor",
              size = 24,
              stroke = 2,
              title,
              className,
              children,
              ...rest
            },
            ref,
          ) =>
            (0, react.createElement)(
              "svg",
              {
                ref,
                ...defaultAttributes[type],
                width: size,
                height: size,
                className: [
                  "tabler-icon",
                  `tabler-icon-${iconName}`,
                  className,
                ].join(" "),
                ...("filled" === type
                  ? { fill: color }
                  : { strokeWidth: stroke, stroke: color }),
                ...rest,
              },
              [
                title &&
                  (0, react.createElement)(
                    "title",
                    { key: "svg-title" },
                    title,
                  ),
                ...iconNode.map(([tag, attrs]) =>
                  (0, react.createElement)(tag, attrs),
                ),
                ...(Array.isArray(children) ? children : [children]),
              ],
            ),
        );
        return ((Component.displayName = `${iconNamePascal}`), Component);
      };
    },
    "./node_modules/@tabler/icons-react/dist/esm/icons/IconAlertTriangle.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, {
        A: () => IconAlertTriangle,
      });
      const IconAlertTriangle = (0,
      __webpack_require__(
        "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs",
      ).A)("outline", "alert-triangle", "AlertTriangle", [
        ["path", { d: "M12 9v4", key: "svg-0" }],
        [
          "path",
          {
            d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0",
            key: "svg-1",
          },
        ],
        ["path", { d: "M12 16h.01", key: "svg-2" }],
      ]);
    },
    "./node_modules/swr/dist/mutation/index.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { A: () => useSWRMutation });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        _index_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          "./node_modules/swr/dist/index/index.mjs",
        ),
        _index_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/swr/dist/_internal/index.mjs",
        ),
        _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/swr/dist/_internal/config-context-12s-CCVTDPOP.mjs",
        );
      const startTransition = _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.r
          ? (cb) => {
              cb();
            }
          : react__WEBPACK_IMPORTED_MODULE_0__.startTransition,
        useSWRMutation = (0,
        _index_index_mjs__WEBPACK_IMPORTED_MODULE_2__.withMiddleware)(
          _index_index_mjs__WEBPACK_IMPORTED_MODULE_1__.Ay,
          () =>
            (key, fetcher, config = {}) => {
              const { mutate } = (0,
                _index_index_mjs__WEBPACK_IMPORTED_MODULE_2__.useSWRConfig)(),
                keyRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(key),
                fetcherRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
                  fetcher,
                ),
                configRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
                  config,
                ),
                ditchMutationsUntilRef = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),
                [stateRef, stateDependencies, setState] = ((initialState) => {
                  const [, rerender] = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
                    unmountedRef = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),
                    stateRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(
                      initialState,
                    ),
                    stateDependenciesRef = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
                      data: !1,
                      error: !1,
                      isValidating: !1,
                    }),
                    setState = (0,
                    react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                      (payload) => {
                        let shouldRerender = !1;
                        const currentState = stateRef.current;
                        for (const key in payload)
                          if (
                            Object.prototype.hasOwnProperty.call(payload, key)
                          ) {
                            const k = key;
                            currentState[k] !== payload[k] &&
                              ((currentState[k] = payload[k]),
                              stateDependenciesRef.current[k] &&
                                (shouldRerender = !0));
                          }
                        shouldRerender && !unmountedRef.current && rerender({});
                      },
                      [],
                    );
                  return (
                    (0, _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.u)(
                      () => (
                        (unmountedRef.current = !1),
                        () => {
                          unmountedRef.current = !0;
                        }
                      ),
                    ),
                    [stateRef, stateDependenciesRef.current, setState]
                  );
                })({
                  data: _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.U,
                  error: _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.U,
                  isMutating: !1,
                }),
                currentState = stateRef.current,
                trigger = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(
                  async (arg, opts) => {
                    const [serializedKey, resolvedKey] = (0,
                    _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.s)(
                      keyRef.current,
                    );
                    if (!fetcherRef.current)
                      throw new Error(
                        "Can’t trigger the mutation: missing fetcher.",
                      );
                    if (!serializedKey)
                      throw new Error(
                        "Can’t trigger the mutation: missing key.",
                      );
                    const options = (0,
                      _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.m)(
                        (0, _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.m)(
                          { populateCache: !1, throwOnError: !0 },
                          configRef.current,
                        ),
                        opts,
                      ),
                      mutationStartedAt = (0,
                      _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.o)();
                    ((ditchMutationsUntilRef.current = mutationStartedAt),
                      setState({ isMutating: !0 }));
                    try {
                      const data = await mutate(
                        serializedKey,
                        fetcherRef.current(resolvedKey, { arg }),
                        (0, _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.m)(
                          options,
                          { throwOnError: !0 },
                        ),
                      );
                      return (
                        ditchMutationsUntilRef.current <= mutationStartedAt &&
                          (startTransition(() =>
                            setState({ data, isMutating: !1, error: void 0 }),
                          ),
                          null == options.onSuccess ||
                            options.onSuccess.call(
                              options,
                              data,
                              serializedKey,
                              options,
                            )),
                        data
                      );
                    } catch (error) {
                      if (
                        ditchMutationsUntilRef.current <= mutationStartedAt &&
                        (startTransition(() =>
                          setState({ error, isMutating: !1 }),
                        ),
                        null == options.onError ||
                          options.onError.call(
                            options,
                            error,
                            serializedKey,
                            options,
                          ),
                        options.throwOnError)
                      )
                        throw error;
                    }
                  },
                  [],
                ),
                reset = (0,
                react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
                  ((ditchMutationsUntilRef.current = (0,
                  _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.o)()),
                    setState({
                      data: _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.U,
                      error: _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.U,
                      isMutating: !1,
                    }));
                }, []);
              return (
                (0, _internal_index_mjs__WEBPACK_IMPORTED_MODULE_3__.u)(() => {
                  ((keyRef.current = key),
                    (fetcherRef.current = fetcher),
                    (configRef.current = config));
                }),
                {
                  trigger,
                  reset,
                  get data() {
                    return ((stateDependencies.data = !0), currentState.data);
                  },
                  get error() {
                    return ((stateDependencies.error = !0), currentState.error);
                  },
                  get isMutating() {
                    return (
                      (stateDependencies.isMutating = !0),
                      currentState.isMutating
                    );
                  },
                }
              );
            },
        );
    },
  },
]);
//# sourceMappingURL=601.bd0ef6c6.iframe.bundle.js.map
