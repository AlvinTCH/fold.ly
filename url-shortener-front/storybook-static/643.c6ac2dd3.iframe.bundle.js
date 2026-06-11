/*! For license information please see 643.c6ac2dd3.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkmantine_next_template =
  self.webpackChunkmantine_next_template || []).push([
  [643],
  {
    "./node_modules/@mantine/core/esm/components/CopyButton/CopyButton.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { i: () => CopyButton });
      var use_props = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        );
      function useClipboard(options = {}) {
        const timeout = options.timeout ?? 2e3,
          [error, setError] = (0, react.useState)(null),
          [copied, setCopied] = (0, react.useState)(!1),
          timeoutRef = (0, react.useRef)(null);
        (0, react.useEffect)(
          () => () => {
            window.clearTimeout(timeoutRef.current);
          },
          [],
        );
        return {
          copy: (value) => {
            "clipboard" in navigator
              ? navigator.clipboard
                  .writeText(value)
                  .then(() => {
                    (setError(null),
                      ((value) => {
                        (window.clearTimeout(timeoutRef.current),
                          (timeoutRef.current = window.setTimeout(
                            () => setCopied(!1),
                            timeout,
                          )),
                          setCopied(value));
                      })(!0));
                  })
                  .catch((err) => setError(err))
              : setError(
                  new Error(
                    "useClipboard: navigator.clipboard is not supported",
                  ),
                );
          },
          reset: () => {
            (setCopied(!1),
              setError(null),
              window.clearTimeout(timeoutRef.current));
          },
          error,
          copied,
        };
      }
      var jsx_runtime = __webpack_require__(
        "./node_modules/next/dist/compiled/react/jsx-runtime.js",
      );
      const defaultProps = { timeout: 1e3 };
      function CopyButton(props) {
        const { children, timeout, value, ...others } = (0, use_props.Y)(
            "CopyButton",
            defaultProps,
            props,
          ),
          clipboard = useClipboard({ timeout });
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
          children: children({
            copy: () => clipboard.copy(value),
            copied: clipboard.copied,
            ...others,
          }),
        });
      }
      CopyButton.displayName = "@mantine/core/CopyButton";
    },
    "./node_modules/@mantine/core/esm/components/Tooltip/Tooltip.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { m: () => Tooltip });
      var get_default_z_index = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs",
        ),
        get_size = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs",
        ),
        get_ref_prop = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs",
        ),
        get_single_element_child = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-single-element-child/get-single-element-child.mjs",
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
        DirectionProvider = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs",
        ),
        get_arrow_position_styles = __webpack_require__(
          "./node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/get-arrow-position-styles.mjs",
        ),
        FloatingArrow = __webpack_require__(
          "./node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/FloatingArrow.mjs",
        ),
        get_floating_position = __webpack_require__(
          "./node_modules/@mantine/core/esm/utils/Floating/get-floating-position/get-floating-position.mjs",
        ),
        OptionalPortal = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs",
        ),
        Transition = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Transition/Transition.mjs",
        );
      const defaultTransition = { duration: 100, transition: "fade" };
      function getTransitionProps(transitionProps, componentTransition) {
        return {
          ...defaultTransition,
          ...componentTransition,
          ...transitionProps,
        };
      }
      var Tooltip_module_default = {
          tooltip: "m_1b3c8819",
          arrow: "m_f898399f",
        },
        get_theme_color = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs",
        ),
        MantineThemeProvider = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs",
        );
      function getStyleObject(style, theme) {
        return Array.isArray(style)
          ? [...style].reduce(
              (acc, item) => ({ ...acc, ...getStyleObject(item, theme) }),
              {},
            )
          : "function" == typeof style
            ? style(theme)
            : (style ?? {});
      }
      var react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        ),
        floating_ui_react = __webpack_require__(
          "./node_modules/@floating-ui/react/dist/floating-ui.react.mjs",
        ),
        floating_ui_react_dom = __webpack_require__(
          "./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs",
        ),
        floating_ui_utils_dom = __webpack_require__(
          "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs",
        );
      var use_merged_ref = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs",
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const defaultProps = {
          refProp: "ref",
          withinPortal: !0,
          offset: 10,
          position: "right",
          zIndex: (0, get_default_z_index.I)("popover"),
        },
        varsResolver = (0, create_vars_resolver.V)(
          (theme, { radius, color }) => ({
            tooltip: {
              "--tooltip-radius":
                void 0 === radius ? void 0 : (0, get_size.nJ)(radius),
              "--tooltip-bg": color
                ? (0, get_theme_color.r)(color, theme)
                : void 0,
              "--tooltip-color": color ? "var(--mantine-color-white)" : void 0,
            },
          }),
        ),
        TooltipFloating = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)(
              "TooltipFloating",
              defaultProps,
              _props,
            ),
            {
              children,
              refProp,
              withinPortal,
              style,
              className,
              classNames,
              styles,
              unstyled,
              radius,
              color,
              label,
              offset,
              position,
              multiline,
              zIndex,
              disabled,
              defaultOpened,
              variant,
              vars,
              portalProps,
              attributes,
              ref,
              ...others
            } = props,
            theme = (0, MantineThemeProvider.xd)(),
            getStyles = (0, use_styles.I)({
              name: "TooltipFloating",
              props,
              classes: Tooltip_module_default,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              rootSelector: "tooltip",
              vars,
              varsResolver,
            }),
            {
              handleMouseMove,
              x,
              y,
              opened,
              boundaryRef,
              floating,
              setOpened,
            } = (function useFloatingTooltip({
              offset,
              position,
              defaultOpened,
            }) {
              const [opened, setOpened] = (0, react.useState)(defaultOpened),
                boundaryRef = (0, react.useRef)(null),
                { x, y, elements, refs, update, placement } = (0,
                floating_ui_react.we)({
                  placement: position,
                  middleware: [
                    (0, floating_ui_react_dom.BN)({
                      crossAxis: !0,
                      padding: 5,
                      rootBoundary: "document",
                    }),
                  ],
                }),
                horizontalOffset = placement.includes("right")
                  ? offset
                  : position.includes("left")
                    ? -1 * offset
                    : 0,
                verticalOffset = placement.includes("bottom")
                  ? offset
                  : position.includes("top")
                    ? -1 * offset
                    : 0,
                handleMouseMove = (0, react.useCallback)(
                  ({ clientX, clientY }) => {
                    refs.setPositionReference({
                      getBoundingClientRect: () => ({
                        width: 0,
                        height: 0,
                        x: clientX,
                        y: clientY,
                        left: clientX + horizontalOffset,
                        top: clientY + verticalOffset,
                        right: clientX,
                        bottom: clientY,
                      }),
                    });
                  },
                  [elements.reference],
                );
              return (
                (0, react.useEffect)(() => {
                  if (refs.floating.current) {
                    const boundary = boundaryRef.current;
                    boundary.addEventListener("mousemove", handleMouseMove);
                    const parents = (0, floating_ui_utils_dom.v9)(
                      refs.floating.current,
                    );
                    return (
                      parents.forEach((parent) => {
                        parent.addEventListener("scroll", update);
                      }),
                      () => {
                        (boundary.removeEventListener(
                          "mousemove",
                          handleMouseMove,
                        ),
                          parents.forEach((parent) => {
                            parent.removeEventListener("scroll", update);
                          }));
                      }
                    );
                  }
                }, [
                  elements.reference,
                  refs.floating.current,
                  update,
                  handleMouseMove,
                  opened,
                ]),
                {
                  handleMouseMove,
                  x,
                  y,
                  opened,
                  setOpened,
                  boundaryRef,
                  floating: refs.setFloating,
                }
              );
            })({ offset, position, defaultOpened }),
            child = (0, get_single_element_child.D)(children);
          if (!child)
            throw new Error(
              "[@mantine/core] Tooltip.Floating component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
            );
          const targetRef = (0, use_merged_ref.pc)(
              boundaryRef,
              (0, get_ref_prop.x)(child),
              ref,
            ),
            childProps = child.props;
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(OptionalPortal.r, {
                ...portalProps,
                withinPortal,
                children: (0, jsx_runtime.jsx)(Box.a, {
                  ...others,
                  ...getStyles("tooltip", {
                    style: {
                      ...getStyleObject(style, theme),
                      zIndex,
                      display: !disabled && opened ? "block" : "none",
                      top: (y && Math.round(y)) ?? "",
                      left: (x && Math.round(x)) ?? "",
                    },
                  }),
                  variant,
                  ref: floating,
                  mod: { multiline },
                  children: label,
                }),
              }),
              (0, react.cloneElement)(child, {
                ...childProps,
                [refProp]: targetRef,
                onMouseEnter: (event) => {
                  (childProps.onMouseEnter?.(event),
                    handleMouseMove(event),
                    setOpened(!0));
                },
                onMouseLeave: (event) => {
                  (childProps.onMouseLeave?.(event), setOpened(!1));
                },
              }),
            ],
          });
        });
      ((TooltipFloating.classes = Tooltip_module_default),
        (TooltipFloating.varsResolver = varsResolver),
        (TooltipFloating.displayName = "@mantine/core/TooltipFloating"));
      const TooltipGroupContext = (0, react.createContext)({ withinGroup: !1 }),
        TooltipGroup_defaultProps = { openDelay: 0, closeDelay: 0 };
      function TooltipGroup(props) {
        const { openDelay, closeDelay, children } = (0, use_props.Y)(
          "TooltipGroup",
          TooltipGroup_defaultProps,
          props,
        );
        return (0, jsx_runtime.jsx)(TooltipGroupContext, {
          value: { withinGroup: !0 },
          children: (0, jsx_runtime.jsx)(floating_ui_react.T3, {
            delay: { open: openDelay, close: closeDelay },
            children,
          }),
        });
      }
      ((TooltipGroup.displayName = "@mantine/core/TooltipGroup"),
        (TooltipGroup.extend = (c) => c));
      var use_id = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-id/use-id.mjs",
        ),
        use_isomorphic_effect = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs",
        ),
        floating_ui_dom = __webpack_require__(
          "./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs",
        );
      function getTooltipMiddlewares(settings) {
        const middlewaresOptions = (function getDefaultMiddlewares(
            middlewares,
          ) {
            if (void 0 === middlewares) return { shift: !0, flip: !0 };
            const result = { ...middlewares };
            return (
              void 0 === middlewares.shift && (result.shift = !0),
              void 0 === middlewares.flip && (result.flip = !0),
              result
            );
          })(settings.middlewares),
          middlewares = [(0, floating_ui_react_dom.cY)(settings.offset)];
        return (
          middlewaresOptions.shift &&
            middlewares.push(
              (0, floating_ui_react_dom.BN)(
                "boolean" == typeof middlewaresOptions.shift
                  ? { padding: 8 }
                  : { padding: 8, ...middlewaresOptions.shift },
              ),
            ),
          middlewaresOptions.flip &&
            middlewares.push(
              "boolean" == typeof middlewaresOptions.flip
                ? (0, floating_ui_react_dom.UU)()
                : (0, floating_ui_react_dom.UU)(middlewaresOptions.flip),
            ),
          middlewares.push(
            (0, floating_ui_react_dom.UE)({
              element: settings.arrowRef,
              padding: settings.arrowOffset,
            }),
          ),
          middlewaresOptions.inline
            ? middlewares.push(
                "boolean" == typeof middlewaresOptions.inline
                  ? (0, floating_ui_react_dom.mG)()
                  : (0, floating_ui_react_dom.mG)(middlewaresOptions.inline),
              )
            : settings.inline &&
              middlewares.push((0, floating_ui_react_dom.mG)()),
          middlewares
        );
      }
      var clsx = __webpack_require__("./node_modules/clsx/dist/clsx.mjs");
      const Tooltip_defaultProps = {
          position: "top",
          refProp: "ref",
          withinPortal: !0,
          arrowSize: 4,
          arrowOffset: 5,
          arrowRadius: 0,
          arrowPosition: "side",
          offset: 5,
          transitionProps: { duration: 100, transition: "fade" },
          events: { hover: !0, focus: !1, touch: !1 },
          zIndex: (0, get_default_z_index.I)("popover"),
          middlewares: { flip: !0, shift: !0, inline: !1 },
        },
        Tooltip_varsResolver = (0, create_vars_resolver.V)(
          (theme, { radius, color, variant, autoContrast }) => {
            const colors = theme.variantColorResolver({
              theme,
              color: color || theme.primaryColor,
              autoContrast,
              variant: variant || "filled",
            });
            return {
              tooltip: {
                "--tooltip-radius":
                  void 0 === radius ? void 0 : (0, get_size.nJ)(radius),
                "--tooltip-bg": color ? colors.background : void 0,
                "--tooltip-color": color ? colors.color : void 0,
              },
            };
          },
        ),
        Tooltip = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)(
              "Tooltip",
              Tooltip_defaultProps,
              _props,
            ),
            {
              children,
              position,
              refProp,
              label,
              openDelay,
              closeDelay,
              onPositionChange,
              opened,
              defaultOpened,
              withinPortal,
              radius,
              color,
              classNames,
              styles,
              unstyled,
              style,
              className,
              withArrow,
              arrowSize,
              arrowOffset,
              arrowRadius,
              arrowPosition,
              offset,
              transitionProps,
              multiline,
              events,
              zIndex,
              disabled,
              onClick,
              onMouseEnter,
              onMouseLeave,
              inline,
              variant,
              keepMounted,
              vars,
              portalProps,
              mod,
              floatingStrategy,
              middlewares,
              autoContrast,
              attributes,
              target,
              ref,
              ...others
            } = props,
            { dir } = (0, DirectionProvider.jH)(),
            arrowRef = (0, react.useRef)(null),
            tooltip = (function useTooltip(settings) {
              const [uncontrolledOpened, setUncontrolledOpened] = (0,
                react.useState)(settings.defaultOpened),
                opened =
                  "boolean" == typeof settings.opened
                    ? settings.opened
                    : uncontrolledOpened,
                withinGroup = (0, react.use)(TooltipGroupContext).withinGroup,
                uid = (0, use_id.B)(),
                onChange = (0, react.useCallback)(
                  (_opened) => {
                    (setUncontrolledOpened(_opened),
                      _opened && setCurrentId(uid));
                  },
                  [uid],
                ),
                {
                  x,
                  y,
                  context,
                  refs,
                  placement,
                  middlewareData: { arrow: { x: arrowX, y: arrowY } = {} },
                } = (0, floating_ui_react.we)({
                  strategy: settings.strategy,
                  placement: settings.position,
                  open: opened,
                  onOpenChange: onChange,
                  middleware: getTooltipMiddlewares(settings),
                  whileElementsMounted: floating_ui_dom.ll,
                }),
                {
                  delay: groupDelay,
                  currentId,
                  setCurrentId,
                } = (0, floating_ui_react.ck)(context, { id: uid }),
                { getReferenceProps, getFloatingProps } = (0,
                floating_ui_react.bv)([
                  (0, floating_ui_react.Mk)(context, {
                    enabled: settings.events?.hover,
                    delay: withinGroup
                      ? groupDelay
                      : {
                          open: settings.openDelay,
                          close: settings.closeDelay,
                        },
                    mouseOnly: !settings.events?.touch,
                  }),
                  (0, floating_ui_react.iQ)(context, {
                    enabled: settings.events?.focus,
                    visibleOnly: !0,
                  }),
                  (0, floating_ui_react.It)(context, { role: "tooltip" }),
                  (0, floating_ui_react.s9)(context, {
                    enabled: void 0 === settings.opened,
                  }),
                ]),
                previousPlacementRef = (0, react.useRef)(placement);
              (0, use_isomorphic_effect.o)(() => {
                previousPlacementRef.current !== placement &&
                  ((previousPlacementRef.current = placement),
                  settings.onPositionChange?.(placement));
              }, [placement]);
              const isGroupPhase = opened && currentId && currentId !== uid;
              return {
                x,
                y,
                arrowX,
                arrowY,
                reference: refs.setReference,
                floating: refs.setFloating,
                getFloatingProps,
                getReferenceProps,
                isGroupPhase,
                opened,
                placement,
              };
            })({
              position: (0, get_floating_position.Q)(dir, position),
              closeDelay,
              openDelay,
              onPositionChange,
              opened,
              defaultOpened,
              events,
              arrowRef,
              arrowOffset,
              offset:
                "number" == typeof offset
                  ? offset + (withArrow ? arrowSize / 2 : 0)
                  : offset,
              inline,
              strategy: floatingStrategy,
              middlewares,
            });
          (0, react.useEffect)(() => {
            const targetNode =
              target instanceof HTMLElement
                ? target
                : "string" == typeof target
                  ? document.querySelector(target)
                  : target?.current || null;
            targetNode && tooltip.reference(targetNode);
          }, [target, tooltip]);
          const getStyles = (0, use_styles.I)({
              name: "Tooltip",
              props,
              classes: Tooltip_module_default,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              rootSelector: "tooltip",
              vars,
              varsResolver: Tooltip_varsResolver,
            }),
            child = (0, get_single_element_child.D)(children);
          if (!target && !child)
            throw new Error(
              "[@mantine/core] Tooltip component children should be an element or a component that accepts ref, fragments, strings, numbers and other primitive values are not supported",
            );
          const tooltipStyles = getStyles("tooltip"),
            mergeStyles =
              "merge" === arrowPosition && withArrow
                ? (0, get_arrow_position_styles.f)({
                    position: tooltip.placement,
                    dir,
                  })
                : void 0;
          if (target) {
            const transition = getTransitionProps(transitionProps, {
              duration: 100,
              transition: "fade",
            });
            return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, {
              children: (0, jsx_runtime.jsx)(OptionalPortal.r, {
                ...portalProps,
                withinPortal,
                children: (0, jsx_runtime.jsx)(Transition.e, {
                  ...transition,
                  keepMounted,
                  mounted: !disabled && !!tooltip.opened,
                  duration: tooltip.isGroupPhase ? 10 : transition.duration,
                  children: (transitionStyles) =>
                    (0, jsx_runtime.jsxs)(Box.a, {
                      ...others,
                      "data-fixed": "fixed" === floatingStrategy || void 0,
                      variant,
                      mod: [{ multiline }, mod],
                      ...tooltipStyles,
                      ...tooltip.getFloatingProps({
                        ref: tooltip.floating,
                        className: tooltipStyles.className,
                        style: {
                          ...tooltipStyles.style,
                          ...transitionStyles,
                          ...mergeStyles,
                          zIndex,
                          top: tooltip.y ?? 0,
                          left: tooltip.x ?? 0,
                        },
                      }),
                      children: [
                        label,
                        (0, jsx_runtime.jsx)(FloatingArrow.i, {
                          ref: arrowRef,
                          arrowX: tooltip.arrowX,
                          arrowY: tooltip.arrowY,
                          visible: withArrow,
                          position: tooltip.placement,
                          arrowSize,
                          arrowOffset,
                          arrowRadius,
                          arrowPosition,
                          ...getStyles("arrow"),
                        }),
                      ],
                    }),
                }),
              }),
            });
          }
          const childProps = child.props,
            targetRef = (0, use_merged_ref.pc)(
              tooltip.reference,
              (0, get_ref_prop.x)(child),
              ref,
            ),
            transition = getTransitionProps(transitionProps, {
              duration: 100,
              transition: "fade",
            });
          return (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
              (0, jsx_runtime.jsx)(OptionalPortal.r, {
                ...portalProps,
                withinPortal,
                children: (0, jsx_runtime.jsx)(Transition.e, {
                  ...transition,
                  keepMounted,
                  mounted: !disabled && !!tooltip.opened,
                  duration: tooltip.isGroupPhase ? 10 : transition.duration,
                  children: (transitionStyles) =>
                    (0, jsx_runtime.jsxs)(Box.a, {
                      ...others,
                      "data-fixed": "fixed" === floatingStrategy || void 0,
                      variant,
                      mod: [{ multiline }, mod],
                      ...tooltip.getFloatingProps({
                        ref: tooltip.floating,
                        className: getStyles("tooltip").className,
                        style: {
                          ...getStyles("tooltip").style,
                          ...transitionStyles,
                          ...mergeStyles,
                          zIndex,
                          top: tooltip.y ?? 0,
                          left: tooltip.x ?? 0,
                        },
                      }),
                      children: [
                        label,
                        (0, jsx_runtime.jsx)(FloatingArrow.i, {
                          ref: arrowRef,
                          arrowX: tooltip.arrowX,
                          arrowY: tooltip.arrowY,
                          visible: withArrow,
                          position: tooltip.placement,
                          arrowSize,
                          arrowOffset,
                          arrowRadius,
                          arrowPosition,
                          ...getStyles("arrow"),
                        }),
                      ],
                    }),
                }),
              }),
              (0, react.cloneElement)(
                child,
                tooltip.getReferenceProps({
                  onClick,
                  onMouseEnter,
                  onMouseLeave,
                  onMouseMove: props.onMouseMove,
                  onPointerDown: props.onPointerDown,
                  onPointerEnter: props.onPointerEnter,
                  ...childProps,
                  className: (0, clsx.A)(className, childProps.className),
                  [refProp]: targetRef,
                }),
              ),
            ],
          });
        });
      ((Tooltip.classes = Tooltip_module_default),
        (Tooltip.varsResolver = Tooltip_varsResolver),
        (Tooltip.displayName = "@mantine/core/Tooltip"),
        (Tooltip.Floating = TooltipFloating),
        (Tooltip.Group = TooltipGroup));
    },
    "./node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { x: () => getRefProp });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js",
      );
      function getRefProp(element) {
        const version = react__WEBPACK_IMPORTED_MODULE_0__.version;
        return "string" != typeof react__WEBPACK_IMPORTED_MODULE_0__.version ||
          version.startsWith("18.")
          ? element?.ref
          : element?.props?.ref;
      }
    },
    "./node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/FloatingArrow.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { i: () => FloatingArrow });
      var _core_DirectionProvider_DirectionProvider_mjs__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            "./node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs",
          ),
        _get_arrow_position_styles_mjs__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            "./node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/get-arrow-position-styles.mjs",
          ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      function FloatingArrow({
        position,
        arrowSize,
        arrowOffset,
        arrowRadius,
        arrowPosition,
        visible,
        arrowX,
        arrowY,
        style,
        ...others
      }) {
        const { dir } = (0,
        _core_DirectionProvider_DirectionProvider_mjs__WEBPACK_IMPORTED_MODULE_0__.jH)();
        return visible
          ? (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              ...others,
              style: {
                ...style,
                ...(0,
                _get_arrow_position_styles_mjs__WEBPACK_IMPORTED_MODULE_1__.L)({
                  position,
                  arrowSize,
                  arrowOffset,
                  arrowRadius,
                  arrowPosition,
                  dir,
                  arrowX,
                  arrowY,
                }),
              },
            })
          : null;
      }
      FloatingArrow.displayName = "@mantine/core/FloatingArrow";
    },
    "./node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/get-arrow-position-styles.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      function horizontalSide(placement, arrowY, arrowOffset, arrowPosition) {
        return "center" === placement || "center" === arrowPosition
          ? { top: arrowY }
          : "end" === placement
            ? { bottom: arrowOffset }
            : "start" === placement
              ? { top: arrowOffset }
              : {};
      }
      function verticalSide(
        placement,
        arrowX,
        arrowOffset,
        arrowPosition,
        dir,
      ) {
        return "center" === placement || "center" === arrowPosition
          ? { left: arrowX }
          : "end" === placement
            ? { ["ltr" === dir ? "right" : "left"]: arrowOffset }
            : "start" === placement
              ? { ["ltr" === dir ? "left" : "right"]: arrowOffset }
              : {};
      }
      __webpack_require__.d(__webpack_exports__, {
        L: () => getArrowPositionStyles,
        f: () => getArrowMergeDropdownStyles,
      });
      const radiusByFloatingSide = {
        bottom: "borderTopLeftRadius",
        left: "borderTopRightRadius",
        right: "borderBottomLeftRadius",
        top: "borderBottomRightRadius",
      };
      function getArrowPositionStyles({
        position,
        arrowSize,
        arrowOffset,
        arrowRadius,
        arrowPosition,
        arrowX,
        arrowY,
        dir,
      }) {
        if ("merge" === arrowPosition) {
          const mergeStyles = (function getMergeArrowStyles({
            position,
            arrowSize,
            dir,
          }) {
            const [side, placement] = position.split("-");
            if (!placement) return;
            const baseStyles = {
              width: arrowSize,
              height: arrowSize,
              position: "absolute",
            };
            if ("bottom" === side) {
              const isStart = "start" === placement,
                physicalSide = isStart
                  ? "ltr" === dir
                    ? "left"
                    : "right"
                  : "ltr" === dir
                    ? "right"
                    : "left";
              return {
                ...baseStyles,
                top: -arrowSize,
                [physicalSide]: 0,
                clipPath:
                  isStart !== ("rtl" === dir)
                    ? "polygon(0% 0%, 0% 100%, 100% 100%)"
                    : "polygon(100% 0%, 0% 100%, 100% 100%)",
              };
            }
            if ("top" === side) {
              const isStart = "start" === placement,
                physicalSide = isStart
                  ? "ltr" === dir
                    ? "left"
                    : "right"
                  : "ltr" === dir
                    ? "right"
                    : "left";
              return {
                ...baseStyles,
                bottom: -arrowSize,
                [physicalSide]: 0,
                clipPath:
                  isStart !== ("rtl" === dir)
                    ? "polygon(0% 0%, 100% 0%, 0% 100%)"
                    : "polygon(0% 0%, 100% 0%, 100% 100%)",
              };
            }
            return "left" === side
              ? {
                  ...baseStyles,
                  right: -arrowSize,
                  ["start" === placement ? "top" : "bottom"]: 0,
                  clipPath:
                    "start" === placement
                      ? "polygon(0% 0%, 100% 0%, 0% 100%)"
                      : "polygon(0% 0%, 0% 100%, 100% 100%)",
                }
              : "right" === side
                ? {
                    ...baseStyles,
                    left: -arrowSize,
                    ["start" === placement ? "top" : "bottom"]: 0,
                    clipPath:
                      "start" === placement
                        ? "polygon(0% 0%, 100% 0%, 100% 100%)"
                        : "polygon(100% 0%, 0% 100%, 100% 100%)",
                  }
                : void 0;
          })({ position, arrowSize, dir });
          if (mergeStyles) return mergeStyles;
        }
        const [side, placement = "center"] = position.split("-"),
          baseStyles = {
            width: arrowSize,
            height: arrowSize,
            transform: "rotate(45deg)",
            position: "absolute",
            [radiusByFloatingSide[side]]: arrowRadius,
          },
          arrowPlacement = -arrowSize / 2;
        return "left" === side
          ? {
              ...baseStyles,
              ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
              right: arrowPlacement,
              borderLeftColor: "transparent",
              borderBottomColor: "transparent",
              clipPath: "polygon(100% 0, 0 0, 100% 100%)",
            }
          : "right" === side
            ? {
                ...baseStyles,
                ...horizontalSide(
                  placement,
                  arrowY,
                  arrowOffset,
                  arrowPosition,
                ),
                left: arrowPlacement,
                borderRightColor: "transparent",
                borderTopColor: "transparent",
                clipPath: "polygon(0 100%, 0 0, 100% 100%)",
              }
            : "top" === side
              ? {
                  ...baseStyles,
                  ...verticalSide(
                    placement,
                    arrowX,
                    arrowOffset,
                    arrowPosition,
                    dir,
                  ),
                  bottom: arrowPlacement,
                  borderTopColor: "transparent",
                  borderLeftColor: "transparent",
                  clipPath: "polygon(0 100%, 100% 100%, 100% 0)",
                }
              : "bottom" === side
                ? {
                    ...baseStyles,
                    ...verticalSide(
                      placement,
                      arrowX,
                      arrowOffset,
                      arrowPosition,
                      dir,
                    ),
                    top: arrowPlacement,
                    borderBottomColor: "transparent",
                    borderRightColor: "transparent",
                    clipPath: "polygon(0 100%, 0 0, 100% 0)",
                  }
                : {};
      }
      function getArrowMergeDropdownStyles({ position, dir }) {
        const [side, placement] = position.split("-");
        if (!placement) return;
        const isPhysicallyLeft =
          ("start" === placement && "ltr" === dir) ||
          ("end" === placement && "rtl" === dir);
        return "bottom" === side
          ? isPhysicallyLeft
            ? { borderTopLeftRadius: 0 }
            : { borderTopRightRadius: 0 }
          : "top" === side
            ? isPhysicallyLeft
              ? { borderBottomLeftRadius: 0 }
              : { borderBottomRightRadius: 0 }
            : "left" === side
              ? "start" === placement
                ? { borderTopRightRadius: 0 }
                : { borderBottomRightRadius: 0 }
              : "right" === side
                ? "start" === placement
                  ? { borderTopLeftRadius: 0 }
                  : { borderBottomLeftRadius: 0 }
                : void 0;
      }
    },
    "./node_modules/@mantine/core/esm/utils/Floating/get-floating-position/get-floating-position.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      function getFloatingPosition(dir, position) {
        if (
          "rtl" === dir &&
          (position.includes("right") || position.includes("left"))
        ) {
          const [side, placement] = position.split("-"),
            flippedPosition = "right" === side ? "left" : "right";
          return void 0 === placement
            ? flippedPosition
            : `${flippedPosition}-${placement}`;
        }
        return position;
      }
      __webpack_require__.d(__webpack_exports__, {
        Q: () => getFloatingPosition,
      });
    },
    "./node_modules/@mantine/hooks/esm/use-disclosure/use-disclosure.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { j: () => useDisclosure });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js",
      );
      function useDisclosure(initialState = !1, options = {}) {
        const [opened, setOpened] = (0,
          react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),
          open = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
            setOpened((isOpened) => isOpened || (options.onOpen?.(), !0));
          }, [options.onOpen]),
          close = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
            setOpened((isOpened) =>
              isOpened ? (options.onClose?.(), !1) : isOpened,
            );
          }, [options.onClose]);
        return [
          opened,
          {
            open,
            close,
            toggle: (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
              opened ? close() : open();
            }, [close, open, opened]),
            set: setOpened,
          },
        ];
      }
    },
    "./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowRight.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { A: () => IconArrowRight });
      const IconArrowRight = (0,
      __webpack_require__(
        "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs",
      ).A)("outline", "arrow-right", "ArrowRight", [
        ["path", { d: "M5 12l14 0", key: "svg-0" }],
        ["path", { d: "M13 18l6 -6", key: "svg-1" }],
        ["path", { d: "M13 6l6 6", key: "svg-2" }],
      ]);
    },
    "./node_modules/@tabler/icons-react/dist/esm/icons/IconCheck.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { A: () => IconCheck });
      const IconCheck = (0,
      __webpack_require__(
        "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs",
      ).A)("outline", "check", "Check", [
        ["path", { d: "M5 12l5 5l10 -10", key: "svg-0" }],
      ]);
    },
    "./node_modules/@tabler/icons-react/dist/esm/icons/IconCopy.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { A: () => IconCopy });
      const IconCopy = (0,
      __webpack_require__(
        "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs",
      ).A)("outline", "copy", "Copy", [
        [
          "path",
          {
            d: "M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666",
            key: "svg-0",
          },
        ],
        [
          "path",
          {
            d: "M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",
            key: "svg-1",
          },
        ],
      ]);
    },
  },
]);
//# sourceMappingURL=643.c6ac2dd3.iframe.bundle.js.map
