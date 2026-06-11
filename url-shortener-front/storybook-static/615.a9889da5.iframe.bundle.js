"use strict";
(self.webpackChunkmantine_next_template =
  self.webpackChunkmantine_next_template || []).push([
  [615],
  {
    "./node_modules/@mantine/core/esm/components/Popover/Popover.context.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, {
        C: () => usePopoverContext,
        w: () => PopoverContextProvider,
      });
      var _core_utils_create_safe_context_create_safe_context_mjs__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs",
        );
      const [PopoverContextProvider, usePopoverContext] = (0,
      _core_utils_create_safe_context_create_safe_context_mjs__WEBPACK_IMPORTED_MODULE_0__.F)(
        "Popover component was not found in the tree",
      );
    },
    "./node_modules/@mantine/core/esm/components/Popover/Popover.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { A: () => Popover });
      var get_default_z_index = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs",
        ),
        get_size = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs",
        ),
        create_vars_resolver = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs",
        ),
        Mantine_context = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs",
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
        DirectionProvider = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs",
        ),
        get_floating_position = __webpack_require__(
          "./node_modules/@mantine/core/esm/utils/Floating/get-floating-position/get-floating-position.mjs",
        ),
        Overlay = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Overlay/Overlay.mjs",
        ),
        OptionalPortal = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs",
        ),
        Transition = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Transition/Transition.mjs",
        ),
        Popover_context = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Popover/Popover.context.mjs",
        ),
        get_single_element_child = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-single-element-child/get-single-element-child.mjs",
        ),
        create_context_menu_handlers = __webpack_require__(
          "./node_modules/@mantine/core/esm/utils/Floating/create-context-menu-handlers.mjs",
        ),
        react = __webpack_require__(
          "./node_modules/next/dist/compiled/react/index.js",
        );
      function PopoverContextMenu(props) {
        const { children, disabled } = (0, use_props.Y)(
            "PopoverContextMenu",
            null,
            props,
          ),
          child = (0, get_single_element_child.D)(children);
        if (!child)
          throw new Error(
            "Popover.ContextMenu component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
          );
        const ctx = (0, Popover_context.C)();
        return (0, react.cloneElement)(
          child,
          (0, create_context_menu_handlers.E)({
            childProps: child.props,
            disabled: disabled || ctx.disabled,
            opened: ctx.opened,
            setReference: ctx.reference,
            open: () => {
              ctx.opened || ctx.onToggle();
            },
          }),
        );
      }
      PopoverContextMenu.displayName = "@mantine/core/PopoverContextMenu";
      var Popover_module_default = {
          dropdown: "m_38a85659",
          arrow: "m_a31dc6c1",
          overlay: "m_3d7bc908",
        },
        rem = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs",
        );
      const noop = () => {};
      function closeOnEscape(callback, options = { active: !0 }) {
        return "function" == typeof callback && options.active
          ? (event) => {
              "Escape" === event.key &&
                (callback(event), options.onTrigger?.());
            }
          : options.onKeyDown || noop;
      }
      var factory = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/factory/factory.mjs",
        ),
        Box = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/Box/Box.mjs",
        ),
        get_arrow_position_styles = __webpack_require__(
          "./node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/get-arrow-position-styles.mjs",
        ),
        FloatingArrow = __webpack_require__(
          "./node_modules/@mantine/core/esm/utils/Floating/FloatingArrow/FloatingArrow.mjs",
        ),
        FocusTrap = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/FocusTrap/FocusTrap.mjs",
        ),
        use_focus_return = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.mjs",
        ),
        use_merged_ref = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs",
        ),
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const PopoverDropdown = (0, factory.P9)((_props) => {
        const props = (0, use_props.Y)("PopoverDropdown", null, _props),
          {
            className,
            style,
            vars,
            children,
            onKeyDownCapture,
            variant,
            classNames,
            styles,
            ref,
            ...others
          } = props,
          ctx = (0, Popover_context.C)(),
          { dir } = (0, DirectionProvider.jH)(),
          mergeStyles =
            "merge" === ctx.arrowPosition && ctx.withArrow
              ? (0, get_arrow_position_styles.f)({
                  position: ctx.placement,
                  dir,
                })
              : void 0,
          returnFocus = (0, use_focus_return.E)({
            opened: ctx.opened,
            shouldReturnFocus: ctx.returnFocus,
          }),
          accessibleProps = ctx.withRoles
            ? {
                "aria-labelledby": ctx.getTargetId(),
                id: ctx.getDropdownId(),
                role: "dialog",
                tabIndex: -1,
              }
            : {},
          mergedRef = (0, use_merged_ref.pc)(ref, ctx.floating);
        return ctx.disabled
          ? null
          : (0, jsx_runtime.jsx)(OptionalPortal.r, {
              ...ctx.portalProps,
              withinPortal: ctx.withinPortal,
              children: (0, jsx_runtime.jsx)(Transition.e, {
                mounted: ctx.opened,
                ...ctx.transitionProps,
                transition: ctx.transitionProps?.transition || "fade",
                duration: ctx.transitionProps?.duration ?? 150,
                keepMounted: ctx.keepMounted,
                exitDuration:
                  "number" == typeof ctx.transitionProps?.exitDuration
                    ? ctx.transitionProps.exitDuration
                    : ctx.transitionProps?.duration,
                children: (transitionStyles) =>
                  (0, jsx_runtime.jsx)(FocusTrap.s, {
                    active: ctx.trapFocus && ctx.opened,
                    innerRef: mergedRef,
                    children: (0, jsx_runtime.jsxs)(Box.a, {
                      ...accessibleProps,
                      ...others,
                      variant,
                      onKeyDownCapture: closeOnEscape(
                        () => {
                          (ctx.onClose?.(), ctx.onDismiss?.());
                        },
                        {
                          active: ctx.closeOnEscape,
                          onTrigger: returnFocus,
                          onKeyDown: onKeyDownCapture,
                        },
                      ),
                      "data-position": ctx.placement,
                      "data-fixed": "fixed" === ctx.floatingStrategy || void 0,
                      ...ctx.getStyles("dropdown", {
                        className,
                        props,
                        classNames,
                        styles,
                        style: [
                          {
                            ...transitionStyles,
                            ...mergeStyles,
                            zIndex: ctx.zIndex,
                            top: ctx.y ?? 0,
                            left: ctx.x ?? 0,
                            width:
                              "target" === ctx.width
                                ? void 0
                                : (0, rem.D)(ctx.width),
                            ...(ctx.referenceHidden
                              ? { display: "none" }
                              : null),
                          },
                          ctx.resolvedStyles?.dropdown,
                          styles?.dropdown,
                          style,
                        ],
                      }),
                      children: [
                        children,
                        (0, jsx_runtime.jsx)(FloatingArrow.i, {
                          ref: ctx.arrowRef,
                          arrowX: ctx.arrowX,
                          arrowY: ctx.arrowY,
                          visible: ctx.withArrow,
                          position: ctx.placement,
                          arrowSize: ctx.arrowSize,
                          arrowRadius: ctx.arrowRadius,
                          arrowOffset: ctx.arrowOffset,
                          arrowPosition: ctx.arrowPosition,
                          ...ctx.getStyles("arrow", {
                            props,
                            classNames,
                            styles,
                          }),
                        }),
                      ],
                    }),
                  }),
              }),
            });
      });
      ((PopoverDropdown.classes = Popover_module_default),
        (PopoverDropdown.displayName = "@mantine/core/PopoverDropdown"));
      var get_ref_prop = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-ref-prop/get-ref-prop.mjs",
        ),
        clsx = __webpack_require__("./node_modules/clsx/dist/clsx.mjs");
      const defaultProps = { refProp: "ref", popupType: "dialog" },
        PopoverTarget = (0, factory.P9)((props) => {
          const { children, refProp, popupType, ref, ...others } = (0,
            use_props.Y)("PopoverTarget", defaultProps, props),
            child = (0, get_single_element_child.D)(children);
          if (!child)
            throw new Error(
              "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported",
            );
          const forwardedProps = others,
            ctx = (0, Popover_context.C)(),
            targetRef = (0, use_merged_ref.pc)(
              ctx.reference,
              (0, get_ref_prop.x)(child),
              ref,
            ),
            accessibleProps = ctx.withRoles
              ? {
                  "aria-haspopup": popupType,
                  "aria-expanded": ctx.opened,
                  "aria-controls": ctx.opened ? ctx.getDropdownId() : void 0,
                  id: ctx.getTargetId(),
                }
              : {},
            childProps = child.props;
          return (0, react.cloneElement)(child, {
            ...forwardedProps,
            ...accessibleProps,
            ...ctx.targetProps,
            className: (0, clsx.A)(
              ctx.targetProps.className,
              forwardedProps.className,
              childProps.className,
            ),
            [refProp]: targetRef,
            ...(ctx.controlled
              ? null
              : {
                  onClick: (event) => {
                    (ctx.onToggle(), childProps.onClick?.(event));
                  },
                }),
          });
        });
      PopoverTarget.displayName = "@mantine/core/PopoverTarget";
      var use_uncontrolled = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs",
        ),
        use_isomorphic_effect = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs",
        ),
        use_did_update = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs",
        ),
        floating_ui_react_dom = __webpack_require__(
          "./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs",
        ),
        floating_ui_react = __webpack_require__(
          "./node_modules/@floating-ui/react/dist/floating-ui.react.mjs",
        ),
        floating_ui_dom = __webpack_require__(
          "./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs",
        );
      function getPopoverMiddlewares(
        options,
        getFloating,
        disableFlip,
        lockEnabled,
      ) {
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
          })(options.middlewares),
          middlewares = [
            (0, floating_ui_react_dom.cY)(options.offset),
            (0, floating_ui_react_dom.jD)(),
          ];
        if (middlewaresOptions.flip && !disableFlip) {
          const userFlip =
              "boolean" == typeof middlewaresOptions.flip
                ? {}
                : middlewaresOptions.flip,
            flipOptions = lockEnabled
              ? { fallbackStrategy: "initialPlacement", ...userFlip }
              : userFlip;
          middlewares.push((0, floating_ui_react_dom.UU)(flipOptions));
        }
        return (
          middlewaresOptions.shift &&
            middlewares.push(
              (0, floating_ui_react_dom.BN)(
                "boolean" == typeof middlewaresOptions.shift
                  ? { limiter: (0, floating_ui_react_dom.ER)(), padding: 5 }
                  : {
                      limiter: (0, floating_ui_react_dom.ER)(),
                      padding: 5,
                      ...middlewaresOptions.shift,
                    },
              ),
            ),
          middlewaresOptions.inline &&
            middlewares.push(
              "boolean" == typeof middlewaresOptions.inline
                ? (0, floating_ui_react_dom.mG)()
                : (0, floating_ui_react_dom.mG)(middlewaresOptions.inline),
            ),
          middlewares.push(
            (0, floating_ui_react_dom.UE)({
              element: options.arrowRef,
              padding: options.arrowOffset,
            }),
          ),
          (middlewaresOptions.size || "target" === options.width) &&
            middlewares.push(
              (0, floating_ui_react_dom.Ej)({
                ...("boolean" == typeof middlewaresOptions.size
                  ? {}
                  : middlewaresOptions.size),
                apply({ rects, availableWidth, availableHeight, ...rest }) {
                  const styles =
                    getFloating().refs.floating.current?.style ?? {};
                  (middlewaresOptions.size &&
                    ("object" == typeof middlewaresOptions.size &&
                    middlewaresOptions.size.apply
                      ? middlewaresOptions.size.apply({
                          rects,
                          availableWidth,
                          availableHeight,
                          ...rest,
                        })
                      : Object.assign(styles, {
                          maxWidth: `${availableWidth}px`,
                          maxHeight: `${availableHeight}px`,
                        })),
                    "target" === options.width &&
                      Object.assign(styles, {
                        width: `${rects.reference.width}px`,
                      }));
                },
              }),
            ),
          middlewares
        );
      }
      var use_id = __webpack_require__(
        "./node_modules/@mantine/hooks/esm/use-id/use-id.mjs",
      );
      const DEFAULT_EVENTS = ["mousedown", "touchstart"];
      const Popover_defaultProps = {
          position: "bottom",
          offset: 8,
          transitionProps: { transition: "fade", duration: 150 },
          middlewares: { flip: !0, shift: !0, inline: !1 },
          arrowSize: 7,
          arrowOffset: 5,
          arrowRadius: 0,
          arrowPosition: "side",
          closeOnClickOutside: !0,
          withinPortal: !0,
          closeOnEscape: !0,
          trapFocus: !1,
          withRoles: !0,
          returnFocus: !1,
          withOverlay: !1,
          hideDetached: !0,
          preventPositionChangeWhenVisible: !0,
          clickOutsideEvents: ["mousedown", "touchstart"],
          zIndex: (0, get_default_z_index.I)("popover"),
          __staticSelector: "Popover",
          width: "max-content",
        },
        varsResolver = (0, create_vars_resolver.V)((_, { radius, shadow }) => ({
          dropdown: {
            "--popover-radius":
              void 0 === radius ? void 0 : (0, get_size.nJ)(radius),
            "--popover-shadow": (0, get_size.dh)(shadow),
          },
        }));
      function Popover(_props) {
        const props = (0, use_props.Y)("Popover", Popover_defaultProps, _props),
          {
            children,
            position,
            offset,
            onPositionChange,
            opened,
            transitionProps,
            onExitTransitionEnd,
            onEnterTransitionEnd,
            width,
            middlewares,
            withArrow,
            arrowSize,
            arrowOffset,
            arrowRadius,
            arrowPosition,
            unstyled,
            classNames,
            styles,
            closeOnClickOutside,
            withinPortal,
            portalProps,
            closeOnEscape,
            clickOutsideEvents,
            trapFocus,
            onClose,
            onDismiss,
            onOpen,
            onChange,
            zIndex,
            radius,
            shadow,
            id,
            defaultOpened,
            __staticSelector,
            withRoles,
            disabled,
            returnFocus,
            variant,
            keepMounted,
            vars,
            floatingStrategy,
            withOverlay,
            overlayProps,
            hideDetached,
            attributes,
            preventPositionChangeWhenVisible,
            ...others
          } = props,
          getStyles = (0, use_styles.I)({
            name: __staticSelector,
            props,
            classes: Popover_module_default,
            classNames,
            styles,
            unstyled,
            attributes,
            rootSelector: "dropdown",
            vars,
            varsResolver,
          }),
          { resolvedStyles } = (0, use_resolved_styles_api.Y)({
            classNames,
            styles,
            props,
          }),
          arrowRef = (0, react.useRef)(null),
          [targetNode, setTargetNode] = (0, react.useState)(null),
          [dropdownNode, setDropdownNode] = (0, react.useState)(null),
          { dir } = (0, DirectionProvider.jH)(),
          env = (0, Mantine_context.bv)(),
          uid = (0, use_id.B)(id),
          popover = (function usePopover(options) {
            const [_opened, setOpened] = (0, use_uncontrolled.Z)({
                value: options.opened,
                defaultValue: options.defaultOpened,
                finalValue: !1,
                onChange: options.onChange,
              }),
              previouslyOpened = (0, react.useRef)(_opened),
              [lockedPlacement, setLockedPlacement] = (0, react.useState)(null),
              lockEnabled = !1 !== options.preventPositionChangeWhenVisible,
              wasOpenedRef = (0, react.useRef)(_opened);
            _opened !== wasOpenedRef.current &&
              ((wasOpenedRef.current = _opened),
              _opened && null !== lockedPlacement && setLockedPlacement(null));
            const resetLockedPlacement = (0, react.useCallback)(
                () => setLockedPlacement(null),
                [],
              ),
              floating = (0, floating_ui_react.we)({
                open: _opened,
                strategy: options.strategy,
                placement: lockEnabled
                  ? (lockedPlacement ?? options.position)
                  : options.position,
                middleware: getPopoverMiddlewares(
                  options,
                  () => floating,
                  lockEnabled && null !== lockedPlacement,
                  lockEnabled,
                ),
                whileElementsMounted: options.keepMounted
                  ? void 0
                  : floating_ui_dom.ll,
              });
            (0, react.useEffect)(() => {
              if (
                floating.refs.reference.current &&
                floating.refs.floating.current
              )
                return _opened
                  ? (0, floating_ui_dom.ll)(
                      floating.refs.reference.current,
                      floating.refs.floating.current,
                      floating.update,
                    )
                  : void 0;
            }, [_opened, floating.update]);
            const measuredAfterShowRef = (0, react.useRef)(!1);
            (0, use_isomorphic_effect.o)(() => {
              if (!_opened) return void (measuredAfterShowRef.current = !1);
              if (!lockEnabled || null !== lockedPlacement) return;
              const flEl = floating.refs.floating.current;
              return flEl && 0 !== flEl.offsetHeight && 0 !== flEl.offsetWidth
                ? measuredAfterShowRef.current
                  ? void (
                      floating.isPositioned &&
                      setLockedPlacement(floating.placement)
                    )
                  : ((measuredAfterShowRef.current = !0),
                    void floating.update())
                : void 0;
            }, [
              lockEnabled,
              _opened,
              floating.isPositioned,
              floating.placement,
              lockedPlacement,
              floating.update,
            ]);
            const previousPlacementRef = (0, react.useRef)(floating.placement);
            return (
              (0, use_isomorphic_effect.o)(() => {
                previousPlacementRef.current !== floating.placement &&
                  ((previousPlacementRef.current = floating.placement),
                  options.onPositionChange?.(floating.placement));
              }, [floating.placement]),
              (0, use_did_update.C)(() => {
                (_opened !== previouslyOpened.current &&
                  (_opened ? options.onOpen?.() : options.onClose?.()),
                  (previouslyOpened.current = _opened));
              }, [_opened, options.onClose, options.onOpen]),
              {
                floating,
                controlled: "boolean" == typeof options.opened,
                opened: _opened,
                onClose: () => {
                  _opened && !options.disabled && setOpened(!1);
                },
                onToggle: () => {
                  options.disabled || setOpened(!_opened);
                },
                resetLockedPlacement,
              }
            );
          })({
            middlewares,
            width,
            position: (0, get_floating_position.Q)(dir, position),
            offset:
              "number" == typeof offset
                ? offset + (withArrow ? arrowSize / 2 : 0)
                : offset,
            arrowRef,
            arrowOffset,
            onPositionChange,
            opened,
            defaultOpened,
            onChange,
            onOpen,
            onClose,
            onDismiss,
            strategy: floatingStrategy,
            disabled,
            preventPositionChangeWhenVisible,
            keepMounted,
          });
        !(function useClickOutside(callback, events, nodes, enabled = !0) {
          const ref = (0, react.useRef)(null),
            eventsList = events || DEFAULT_EVENTS,
            listener = (0, react.useEffectEvent)((event) => {
              const { target } = event ?? {};
              if (!document.body.contains(target) && "HTML" !== target?.tagName)
                return;
              const path = event.composedPath();
              Array.isArray(nodes)
                ? nodes.every((node) => !!node && !path.includes(node)) &&
                  callback(event)
                : ref.current && !path.includes(ref.current) && callback(event);
            }),
            eventsKey = eventsList.join(",");
          return (
            (0, react.useEffect)(() => {
              if (!enabled) return;
              const events = eventsKey.split(",");
              return (
                events.forEach((fn) => document.addEventListener(fn, listener)),
                () => {
                  events.forEach((fn) =>
                    document.removeEventListener(fn, listener),
                  );
                }
              );
            }, [eventsKey, enabled]),
            ref
          );
        })(
          () => {
            closeOnClickOutside && (popover.onClose(), onDismiss?.());
          },
          clickOutsideEvents,
          [targetNode, dropdownNode],
        );
        const reference = (0, react.useCallback)(
            (node) => {
              (setTargetNode(node), popover.floating.refs.setReference(node));
            },
            [popover.floating.refs.setReference],
          ),
          floating = (0, react.useCallback)(
            (node) => {
              (setDropdownNode(node), popover.floating.refs.setFloating(node));
            },
            [popover.floating.refs.setFloating],
          ),
          onExited = (0, react.useCallback)(() => {
            (transitionProps?.onExited?.(),
              onExitTransitionEnd?.(),
              popover.resetLockedPlacement());
          }, [
            transitionProps?.onExited,
            onExitTransitionEnd,
            popover.resetLockedPlacement,
          ]),
          onEntered = (0, react.useCallback)(() => {
            (transitionProps?.onEntered?.(), onEnterTransitionEnd?.());
          }, [transitionProps?.onEntered, onEnterTransitionEnd]);
        return (0, jsx_runtime.jsxs)(Popover_context.w, {
          value: {
            returnFocus,
            disabled,
            controlled: popover.controlled,
            reference,
            floating,
            x: popover.floating.x,
            y: popover.floating.y,
            arrowX: popover.floating?.middlewareData?.arrow?.x,
            arrowY: popover.floating?.middlewareData?.arrow?.y,
            opened: popover.opened,
            arrowRef,
            transitionProps: { ...transitionProps, onExited, onEntered },
            width,
            withArrow,
            arrowSize,
            arrowOffset,
            arrowRadius,
            arrowPosition,
            placement: popover.floating.placement,
            trapFocus,
            withinPortal,
            portalProps,
            zIndex,
            radius,
            shadow,
            closeOnEscape,
            onDismiss,
            onClose: popover.onClose,
            onToggle: popover.onToggle,
            getTargetId: () => uid,
            getDropdownId: () => `${uid}-dropdown`,
            withRoles,
            targetProps: others,
            __staticSelector,
            classNames,
            styles,
            unstyled,
            variant,
            keepMounted,
            getStyles,
            resolvedStyles,
            floatingStrategy,
            referenceHidden:
              !(!hideDetached || "test" === env) &&
              popover.floating.middlewareData.hide?.referenceHidden,
          },
          children: [
            children,
            withOverlay &&
              (0, jsx_runtime.jsx)(Transition.e, {
                transition: "fade",
                mounted: popover.opened,
                duration: transitionProps?.duration || 250,
                exitDuration: transitionProps?.exitDuration || 250,
                children: (transitionStyles) =>
                  (0, jsx_runtime.jsx)(OptionalPortal.r, {
                    withinPortal,
                    children: (0, jsx_runtime.jsx)(Overlay.h, {
                      ...overlayProps,
                      ...getStyles("overlay", {
                        className: overlayProps?.className,
                        style: [transitionStyles, overlayProps?.style],
                      }),
                    }),
                  }),
              }),
          ],
        });
      }
      ((Popover.Target = PopoverTarget),
        (Popover.Dropdown = PopoverDropdown),
        (Popover.ContextMenu = PopoverContextMenu),
        (Popover.varsResolver = varsResolver),
        (Popover.displayName = "@mantine/core/Popover"),
        (Popover.extend = (input) => input),
        (Popover.withProps = (fixedProps) => {
          const Extended = (props) =>
            (0, jsx_runtime.jsx)(Popover, { ...fixedProps, ...props });
          return (
            (Extended.extend = Popover.extend),
            (Extended.displayName = `WithProps(${Popover.displayName})`),
            Extended
          );
        }));
    },
    "./node_modules/@mantine/core/esm/core/utils/create-event-handler/create-event-handler.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      function createEventHandler(parentEventHandler, eventHandler) {
        return (event) => {
          (parentEventHandler?.(event), eventHandler?.(event));
        };
      }
      __webpack_require__.d(__webpack_exports__, {
        T: () => createEventHandler,
      });
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
    "./node_modules/@mantine/core/esm/utils/Floating/create-context-menu-handlers.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, {
        E: () => createContextMenuHandlers,
      });
      var _core_utils_create_event_handler_create_event_handler_mjs__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/create-event-handler/create-event-handler.mjs",
        );
      function createContextMenuHandlers({
        childProps,
        disabled,
        opened,
        setReference,
        open,
      }) {
        const onMouseDown = (0,
        _core_utils_create_event_handler_create_event_handler_mjs__WEBPACK_IMPORTED_MODULE_0__.T)(
          childProps.onMouseDown,
          (event) => {
            disabled || (2 === event.button && event.stopPropagation());
          },
        );
        return {
          onContextMenu: (0,
          _core_utils_create_event_handler_create_event_handler_mjs__WEBPACK_IMPORTED_MODULE_0__.T)(
            childProps.onContextMenu,
            (event) => {
              if (disabled || event.defaultPrevented) return;
              event.preventDefault();
              const { clientX, clientY } = event,
                contextElement = event.currentTarget;
              (setReference({
                getBoundingClientRect: () => ({
                  x: clientX,
                  y: clientY,
                  width: 0,
                  height: 0,
                  top: clientY,
                  left: clientX,
                  right: clientX,
                  bottom: clientY,
                  toJSON: () => {},
                }),
                contextElement,
              }),
                open());
            },
          ),
          onMouseDown,
          "data-expanded": !!opened || void 0,
        };
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
    "./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
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
  },
]);
//# sourceMappingURL=615.a9889da5.iframe.bundle.js.map
