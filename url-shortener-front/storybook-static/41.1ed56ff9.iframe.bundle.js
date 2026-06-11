/*! For license information please see 41.1ed56ff9.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkmantine_next_template =
  self.webpackChunkmantine_next_template || []).push([
  [41],
  {
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
    "./node_modules/@mantine/core/esm/components/Modal/Modal.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { a: () => Modal });
      var get_default_z_index = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs",
        ),
        use_props = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs",
        ),
        factory = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/factory/factory.mjs",
        ),
        Modal_module_default = {
          root: "m_9df02822",
          content: "m_54c44539",
          inner: "m_1f958f16",
          header: "m_d0e2b9cd",
        },
        Box = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/Box/Box.mjs",
        ),
        create_safe_context = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs",
        );
      const [ModalBaseProvider, useModalBaseContext] = (0,
      create_safe_context.F)("ModalBase component was not found in tree");
      var react = __webpack_require__(
        "./node_modules/next/dist/compiled/react/index.js",
      );
      var ModalBase_module_default_title = "m_615af6c9",
        ModalBase_module_default_header = "m_b5489c3c",
        ModalBase_module_default_inner = "m_60c222c7",
        ModalBase_module_default_content = "m_fd1ab0aa",
        ModalBase_module_default_close = "m_606cb269",
        ModalBase_module_default_body = "m_5df29311",
        clsx = __webpack_require__("./node_modules/clsx/dist/clsx.mjs"),
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      function ModalBaseBody({ className, ...others }) {
        const bodyId = (function useModalBodyId() {
            const ctx = useModalBaseContext();
            return (
              (0, react.useEffect)(
                () => (ctx.setBodyMounted(!0), () => ctx.setBodyMounted(!1)),
                [],
              ),
              ctx.getBodyId()
            );
          })(),
          ctx = useModalBaseContext();
        return (0, jsx_runtime.jsx)(Box.a, {
          id: bodyId,
          className: (0, clsx.A)(
            { [ModalBase_module_default_body]: !ctx.unstyled },
            className,
          ),
          ...others,
        });
      }
      ModalBaseBody.displayName = "@mantine/core/ModalBaseBody";
      const [ModalProvider, useModalContext] = (0, create_safe_context.F)(
          "Modal component was not found in tree",
        ),
        ModalBody = (0, factory.P9)((_props) => {
          const { classNames, className, style, styles, vars, ...others } = (0,
          use_props.Y)("ModalBody", null, _props);
          return (0, jsx_runtime.jsx)(ModalBaseBody, {
            ...useModalContext().getStyles("body", {
              classNames,
              style,
              styles,
              className,
            }),
            ...others,
          });
        });
      ((ModalBody.classes = Modal_module_default),
        (ModalBody.displayName = "@mantine/core/ModalBody"));
      var CloseButton = __webpack_require__(
        "./node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs",
      );
      function ModalBaseCloseButton({ className, onClick, ...others }) {
        const ctx = useModalBaseContext();
        return (0, jsx_runtime.jsx)(CloseButton.J, {
          ...others,
          onClick: (event) => {
            (ctx.onClose(), onClick?.(event));
          },
          className: (0, clsx.A)(
            { [ModalBase_module_default_close]: !ctx.unstyled },
            className,
          ),
          unstyled: ctx.unstyled,
        });
      }
      ModalBaseCloseButton.displayName = "@mantine/core/ModalBaseCloseButton";
      const ModalCloseButton = (0, factory.P9)((_props) => {
        const { classNames, className, style, styles, vars, ...others } = (0,
        use_props.Y)("ModalCloseButton", null, _props);
        return (0, jsx_runtime.jsx)(ModalBaseCloseButton, {
          ...useModalContext().getStyles("close", {
            classNames,
            style,
            styles,
            className,
          }),
          ...others,
        });
      });
      ((ModalCloseButton.classes = Modal_module_default),
        (ModalCloseButton.displayName = "@mantine/core/ModalCloseButton"));
      var rem = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs",
        ),
        Paper = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Paper/Paper.mjs",
        ),
        Transition = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Transition/Transition.mjs",
        ),
        FocusTrap = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/FocusTrap/FocusTrap.mjs",
        );
      function ModalBaseContent({
        transitionProps,
        className,
        innerProps,
        onKeyDown,
        style,
        ref,
        ...others
      }) {
        const ctx = useModalBaseContext();
        return (0, jsx_runtime.jsx)(Transition.e, {
          mounted: ctx.opened,
          transition: "pop",
          ...ctx.transitionProps,
          onExited: () => {
            (ctx.onExitTransitionEnd?.(), ctx.transitionProps?.onExited?.());
          },
          onEntered: () => {
            (ctx.onEnterTransitionEnd?.(), ctx.transitionProps?.onEntered?.());
          },
          ...transitionProps,
          children: (transitionStyles) =>
            (0, jsx_runtime.jsx)("div", {
              ...innerProps,
              className: (0, clsx.A)(
                { [ModalBase_module_default_inner]: !ctx.unstyled },
                innerProps.className,
              ),
              children: (0, jsx_runtime.jsx)(FocusTrap.s, {
                active: ctx.opened && ctx.trapFocus,
                innerRef: ref,
                children: (0, jsx_runtime.jsx)(Paper.t, {
                  ...others,
                  component: "section",
                  role: "dialog",
                  tabIndex: -1,
                  "aria-modal": !0,
                  "aria-describedby": ctx.bodyMounted
                    ? ctx.getBodyId()
                    : void 0,
                  "aria-labelledby": ctx.titleMounted
                    ? ctx.getTitleId()
                    : void 0,
                  style: [style, transitionStyles],
                  className: (0, clsx.A)(
                    { [ModalBase_module_default_content]: !ctx.unstyled },
                    className,
                  ),
                  unstyled: ctx.unstyled,
                  children: others.children,
                }),
              }),
            }),
        });
      }
      function NativeScrollArea({ children }) {
        return (0, jsx_runtime.jsx)(jsx_runtime.Fragment, { children });
      }
      ModalBaseContent.displayName = "@mantine/core/ModalBaseContent";
      const ModalContent = (0, factory.P9)((_props) => {
        const {
            classNames,
            className,
            style,
            styles,
            vars,
            children,
            __hidden,
            ...others
          } = (0, use_props.Y)("ModalContent", null, _props),
          ctx = useModalContext(),
          Scroll = ctx.scrollAreaComponent || NativeScrollArea;
        return (0, jsx_runtime.jsx)(ModalBaseContent, {
          ...ctx.getStyles("content", { className, style, styles, classNames }),
          innerProps: ctx.getStyles("inner", {
            className,
            style,
            styles,
            classNames,
          }),
          "data-full-screen": ctx.fullScreen || void 0,
          "data-modal-content": !0,
          "data-hidden": __hidden || void 0,
          ...others,
          children: (0, jsx_runtime.jsx)(Scroll, {
            style: {
              maxHeight: ctx.fullScreen
                ? "100dvh"
                : `calc(100dvh - (${(0, rem.D)(ctx.yOffset)} * 2))`,
            },
            children,
          }),
        });
      });
      function ModalBaseHeader({ className, ...others }) {
        const ctx = useModalBaseContext();
        return (0, jsx_runtime.jsx)(Box.a, {
          component: "header",
          className: (0, clsx.A)(
            { [ModalBase_module_default_header]: !ctx.unstyled },
            className,
          ),
          ...others,
        });
      }
      ((ModalContent.classes = Modal_module_default),
        (ModalContent.displayName = "@mantine/core/ModalContent"),
        (ModalBaseHeader.displayName = "@mantine/core/ModalBaseHeader"));
      const ModalHeader = (0, factory.P9)((_props) => {
        const { classNames, className, style, styles, vars, ...others } = (0,
        use_props.Y)("ModalHeader", null, _props);
        return (0, jsx_runtime.jsx)(ModalBaseHeader, {
          ...useModalContext().getStyles("header", {
            classNames,
            style,
            styles,
            className,
          }),
          ...others,
        });
      });
      ((ModalHeader.classes = Modal_module_default),
        (ModalHeader.displayName = "@mantine/core/ModalHeader"));
      var Overlay = __webpack_require__(
        "./node_modules/@mantine/core/esm/components/Overlay/Overlay.mjs",
      );
      const DEFAULT_TRANSITION = {
        duration: 200,
        timingFunction: "ease",
        transition: "fade",
      };
      function ModalBaseOverlay({
        onClick,
        transitionProps,
        style,
        visible,
        ...others
      }) {
        const ctx = useModalBaseContext(),
          transition = (function useModalTransition(transitionOverride) {
            const ctx = useModalBaseContext();
            return {
              ...DEFAULT_TRANSITION,
              ...ctx.transitionProps,
              ...transitionOverride,
            };
          })(transitionProps);
        return (0, jsx_runtime.jsx)(Transition.e, {
          mounted: void 0 !== visible ? visible : ctx.opened,
          ...transition,
          transition: "fade",
          children: (transitionStyles) =>
            (0, jsx_runtime.jsx)(Overlay.h, {
              fixed: !0,
              style: [style, transitionStyles],
              zIndex: ctx.zIndex,
              unstyled: ctx.unstyled,
              onClick: (event) => {
                (onClick?.(event), ctx.closeOnClickOutside && ctx.onClose());
              },
              ...others,
            }),
        });
      }
      ModalBaseOverlay.displayName = "@mantine/core/ModalBaseOverlay";
      const ModalOverlay = (0, factory.P9)((_props) => {
        const { classNames, className, style, styles, vars, ...others } = (0,
        use_props.Y)("ModalOverlay", null, _props);
        return (0, jsx_runtime.jsx)(ModalBaseOverlay, {
          ...useModalContext().getStyles("overlay", {
            classNames,
            style,
            styles,
            className,
          }),
          ...others,
        });
      });
      ((ModalOverlay.classes = Modal_module_default),
        (ModalOverlay.displayName = "@mantine/core/ModalOverlay"));
      var get_size = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs",
        ),
        create_vars_resolver = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs",
        ),
        use_styles = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs",
        ),
        use_isomorphic_effect = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs",
        );
      function useResizeObserver(element, onResize) {
        const handleResize = (0, react.useEffectEvent)(onResize);
        (0, use_isomorphic_effect.o)(() => {
          let rAF = 0;
          if (element) {
            const resizeObserver = new ResizeObserver(() => {
              (cancelAnimationFrame(rAF),
                (rAF = window.requestAnimationFrame(handleResize)));
            });
            return (
              resizeObserver.observe(element),
              () => {
                (window.cancelAnimationFrame(rAF),
                  resizeObserver.unobserve(element));
              }
            );
          }
        }, [element]);
      }
      const [ScrollAreaProvider, useScrollAreaContext] = (0,
      create_safe_context.F)("ScrollArea.Root component was not found in tree");
      function Corner(props) {
        const { style, ...others } = props,
          ctx = useScrollAreaContext(),
          [width, setWidth] = (0, react.useState)(0),
          [height, setHeight] = (0, react.useState)(0),
          hasSize = Boolean(width && height);
        return (
          useResizeObserver(ctx.scrollbarX, () => {
            const h = ctx.scrollbarX?.offsetHeight || 0;
            (ctx.onCornerHeightChange(h), setHeight(h));
          }),
          useResizeObserver(ctx.scrollbarY, () => {
            const w = ctx.scrollbarY?.offsetWidth || 0;
            (ctx.onCornerWidthChange(w), setWidth(w));
          }),
          hasSize
            ? (0, jsx_runtime.jsx)("div", {
                ...others,
                style: { ...style, width, height },
              })
            : null
        );
      }
      function ScrollAreaCorner(props) {
        const ctx = useScrollAreaContext(),
          hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
        return "scroll" !== ctx.type && hasBothScrollbarsVisible
          ? (0, jsx_runtime.jsx)(Corner, { ...props })
          : null;
      }
      var use_merged_ref = __webpack_require__(
        "./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs",
      );
      const defaultProps = { scrollHideDelay: 1e3, type: "hover" };
      function ScrollAreaRoot(_props) {
        const { type, scrollHideDelay, scrollbars, getStyles, ref, ...others } =
            (0, use_props.Y)("ScrollAreaRoot", defaultProps, _props),
          [scrollArea, setScrollArea] = (0, react.useState)(null),
          [viewport, setViewport] = (0, react.useState)(null),
          [content, setContent] = (0, react.useState)(null),
          [scrollbarX, setScrollbarX] = (0, react.useState)(null),
          [scrollbarY, setScrollbarY] = (0, react.useState)(null),
          [cornerWidth, setCornerWidth] = (0, react.useState)(0),
          [cornerHeight, setCornerHeight] = (0, react.useState)(0),
          [scrollbarXEnabled, setScrollbarXEnabled] = (0, react.useState)(!1),
          [scrollbarYEnabled, setScrollbarYEnabled] = (0, react.useState)(!1),
          rootRef = (0, use_merged_ref.pc)(ref, setScrollArea);
        return (0, jsx_runtime.jsx)(ScrollAreaProvider, {
          value: {
            type,
            scrollHideDelay,
            scrollArea,
            viewport,
            onViewportChange: setViewport,
            content,
            onContentChange: setContent,
            scrollbarX,
            onScrollbarXChange: setScrollbarX,
            scrollbarXEnabled,
            onScrollbarXEnabledChange: setScrollbarXEnabled,
            scrollbarY,
            onScrollbarYChange: setScrollbarY,
            scrollbarYEnabled,
            onScrollbarYEnabledChange: setScrollbarYEnabled,
            onCornerWidthChange: setCornerWidth,
            onCornerHeightChange: setCornerHeight,
            getStyles,
          },
          children: (0, jsx_runtime.jsx)(Box.a, {
            ...others,
            ref: rootRef,
            __vars: {
              "--sa-corner-width":
                "xy" !== scrollbars ? "0px" : `${cornerWidth}px`,
              "--sa-corner-height":
                "xy" !== scrollbars ? "0px" : `${cornerHeight}px`,
            },
          }),
        });
      }
      ScrollAreaRoot.displayName = "@mantine/core/ScrollAreaRoot";
      var DirectionProvider = __webpack_require__(
        "./node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs",
      );
      function getThumbRatio(viewportSize, contentSize) {
        const ratio = viewportSize / contentSize;
        return Number.isNaN(ratio) ? 0 : ratio;
      }
      function getThumbSize(sizes) {
        const ratio = getThumbRatio(sizes.viewport, sizes.content),
          scrollbarPadding =
            sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd,
          thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
        return Math.max(thumbSize, 18);
      }
      function linearScale(input, output) {
        return (value) => {
          if (input[0] === input[1] || output[0] === output[1])
            return output[0];
          const ratio = (output[1] - output[0]) / (input[1] - input[0]);
          return output[0] + ratio * (value - input[0]);
        };
      }
      function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
        const thumbSizePx = getThumbSize(sizes),
          scrollbarPadding =
            sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd,
          scrollbar = sizes.scrollbar.size - scrollbarPadding,
          maxScrollPos = sizes.content - sizes.viewport,
          maxThumbPos = scrollbar - thumbSizePx,
          scrollWithoutMomentum = (function clamp(value, [min, max]) {
            return Math.min(max, Math.max(min, value));
          })(
            scrollPos,
            "ltr" === dir ? [0, maxScrollPos] : [-1 * maxScrollPos, 0],
          );
        return linearScale(
          [0, maxScrollPos],
          [0, maxThumbPos],
        )(scrollWithoutMomentum);
      }
      function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
        return scrollPos > 0 && scrollPos < maxScrollPos;
      }
      function toInt(value) {
        return value ? parseInt(value, 10) : 0;
      }
      function composeEventHandlers(
        originalEventHandler,
        ourEventHandler,
        { checkForDefaultPrevented = !0 } = {},
      ) {
        return (event) => {
          (originalEventHandler?.(event),
            (!1 !== checkForDefaultPrevented && event.defaultPrevented) ||
              ourEventHandler?.(event));
        };
      }
      const [ScrollbarProvider, useScrollbarContext] = (0,
      create_safe_context.F)("ScrollAreaScrollbar was not found in tree");
      function useCallbackRef(callback) {
        const callbackRef = (0, react.useRef)(callback);
        return (
          (0, react.useEffect)(() => {
            callbackRef.current = callback;
          }),
          (0, react.useMemo)(
            () =>
              (...args) =>
                callbackRef.current?.(...args),
            [],
          )
        );
      }
      function useDebouncedCallback(callback, options) {
        const { delay, flushOnUnmount, leading, maxWait } =
            "number" == typeof options
              ? {
                  delay: options,
                  flushOnUnmount: !1,
                  leading: !1,
                  maxWait: void 0,
                }
              : options,
          handleCallback = useCallbackRef(callback),
          debounceTimerRef = (0, react.useRef)(0),
          maxWaitTimerRef = (0, react.useRef)(0),
          latestArgsRef = (0, react.useRef)(null),
          lastCallback = (0, react.useMemo)(() => {
            const currentCallback = Object.assign(
              (...args) => {
                (window.clearTimeout(debounceTimerRef.current),
                  (latestArgsRef.current = args));
                const isFirstCall = currentCallback._isFirstCall;
                function clearTimeoutAndLeadingRef() {
                  (window.clearTimeout(debounceTimerRef.current),
                    window.clearTimeout(maxWaitTimerRef.current),
                    (debounceTimerRef.current = 0),
                    (maxWaitTimerRef.current = 0),
                    (currentCallback._isFirstCall = !0),
                    (currentCallback._hasPendingCallback = !1));
                }
                function startMaxWaitTimer() {
                  void 0 !== maxWait &&
                    0 === maxWaitTimerRef.current &&
                    (maxWaitTimerRef.current = window.setTimeout(() => {
                      if (0 !== debounceTimerRef.current) {
                        const latestArgs = latestArgsRef.current;
                        (clearTimeoutAndLeadingRef(),
                          handleCallback(...latestArgs));
                      }
                    }, maxWait));
                }
                if (
                  ((currentCallback._isFirstCall = !1), leading && isFirstCall)
                ) {
                  handleCallback(...args);
                  const resetLeadingState = () => {
                      clearTimeoutAndLeadingRef();
                    },
                    flush = () => {
                      0 !== debounceTimerRef.current &&
                        (clearTimeoutAndLeadingRef(), handleCallback(...args));
                    },
                    cancel = () => {
                      clearTimeoutAndLeadingRef();
                    };
                  return (
                    (currentCallback.flush = flush),
                    (currentCallback.cancel = cancel),
                    (debounceTimerRef.current = window.setTimeout(
                      resetLeadingState,
                      delay,
                    )),
                    void startMaxWaitTimer()
                  );
                }
                if (leading && !isFirstCall) {
                  currentCallback._hasPendingCallback = !0;
                  const flush = () => {
                      0 !== debounceTimerRef.current &&
                        (clearTimeoutAndLeadingRef(), handleCallback(...args));
                    },
                    cancel = () => {
                      clearTimeoutAndLeadingRef();
                    };
                  ((currentCallback.flush = flush),
                    (currentCallback.cancel = cancel));
                  const resetLeadingState = () => {
                    clearTimeoutAndLeadingRef();
                  };
                  return (
                    (debounceTimerRef.current = window.setTimeout(
                      resetLeadingState,
                      delay,
                    )),
                    void startMaxWaitTimer()
                  );
                }
                currentCallback._hasPendingCallback = !0;
                const flush = () => {
                  0 !== debounceTimerRef.current &&
                    (clearTimeoutAndLeadingRef(), handleCallback(...args));
                };
                ((currentCallback.flush = flush),
                  (currentCallback.cancel = () => {
                    clearTimeoutAndLeadingRef();
                  }),
                  (debounceTimerRef.current = window.setTimeout(flush, delay)),
                  startMaxWaitTimer());
              },
              {
                flush: () => {},
                cancel: () => {},
                isPending: () => currentCallback._hasPendingCallback,
                _isFirstCall: !0,
                _hasPendingCallback: !1,
              },
            );
            return currentCallback;
          }, [handleCallback, delay, leading, maxWait]);
        return (
          (0, react.useEffect)(
            () => () => {
              flushOnUnmount ? lastCallback.flush() : lastCallback.cancel();
            },
            [lastCallback, flushOnUnmount],
          ),
          lastCallback
        );
      }
      function Scrollbar(props) {
        const {
            sizes,
            hasThumb,
            onThumbChange,
            onThumbPointerUp,
            onThumbPointerDown,
            onThumbPositionChange,
            onDragScroll,
            onWheelScroll,
            onResize,
            ref,
            ...scrollbarProps
          } = props,
          context = useScrollAreaContext(),
          [scrollbar, setScrollbar] = (0, react.useState)(null),
          composeRefs = (0, use_merged_ref.pc)(ref, setScrollbar),
          rectRef = (0, react.useRef)(null),
          prevWebkitUserSelectRef = (0, react.useRef)(""),
          { viewport } = context,
          maxScrollPos = sizes.content - sizes.viewport,
          handleWheelScroll = (0, react.useEffectEvent)(onWheelScroll),
          handleThumbPositionChange = useCallbackRef(onThumbPositionChange),
          handleResize = useDebouncedCallback(onResize, 10),
          handleDragScroll = (event) => {
            rectRef.current &&
              onDragScroll({
                x: event.clientX - rectRef.current.left,
                y: event.clientY - rectRef.current.top,
              });
          };
        return (
          (0, react.useEffect)(() => {
            const handleWheel = (event) => {
              const element = event.target;
              scrollbar?.contains(element) &&
                handleWheelScroll(event, maxScrollPos);
            };
            return (
              document.addEventListener("wheel", handleWheel, { passive: !1 }),
              () =>
                document.removeEventListener("wheel", handleWheel, {
                  passive: !1,
                })
            );
          }, [viewport, scrollbar, maxScrollPos]),
          (0, react.useEffect)(handleThumbPositionChange, [
            sizes,
            handleThumbPositionChange,
          ]),
          useResizeObserver(scrollbar, handleResize),
          useResizeObserver(context.content, handleResize),
          (0, jsx_runtime.jsx)(ScrollbarProvider, {
            value: {
              scrollbar,
              hasThumb,
              onThumbChange: useCallbackRef(onThumbChange),
              onThumbPointerUp: useCallbackRef(onThumbPointerUp),
              onThumbPositionChange: handleThumbPositionChange,
              onThumbPointerDown: useCallbackRef(onThumbPointerDown),
            },
            children: (0, jsx_runtime.jsx)("div", {
              ...scrollbarProps,
              ref: composeRefs,
              "data-mantine-scrollbar": !0,
              style: { position: "absolute", ...scrollbarProps.style },
              onPointerDown: composeEventHandlers(
                props.onPointerDown,
                (event) => {
                  (event.preventDefault(),
                    0 === event.button &&
                      (event.target.setPointerCapture(event.pointerId),
                      (rectRef.current = scrollbar.getBoundingClientRect()),
                      (prevWebkitUserSelectRef.current =
                        document.body.style.webkitUserSelect),
                      (document.body.style.webkitUserSelect = "none"),
                      handleDragScroll(event)));
                },
              ),
              onPointerMove: composeEventHandlers(
                props.onPointerMove,
                handleDragScroll,
              ),
              onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
                const element = event.target;
                element.hasPointerCapture(event.pointerId) &&
                  (event.preventDefault(),
                  element.releasePointerCapture(event.pointerId));
              }),
              onLostPointerCapture: () => {
                ((document.body.style.webkitUserSelect =
                  prevWebkitUserSelectRef.current),
                  (rectRef.current = null));
              },
            }),
          })
        );
      }
      const ScrollAreaScrollbarX = (props) => {
        const {
            sizes,
            onSizesChange,
            style,
            ref: forwardedRef,
            ...others
          } = props,
          ctx = useScrollAreaContext(),
          [computedStyle, setComputedStyle] = (0, react.useState)(),
          ref = (0, react.useRef)(null),
          composeRefs = (0, use_merged_ref.pc)(
            forwardedRef,
            ref,
            ctx.onScrollbarXChange,
          );
        return (
          (0, react.useEffect)(() => {
            ref.current && setComputedStyle(getComputedStyle(ref.current));
          }, [ref]),
          (0, jsx_runtime.jsx)(Scrollbar, {
            "data-orientation": "horizontal",
            ...others,
            ref: composeRefs,
            sizes,
            style: { ...style, "--sa-thumb-width": `${getThumbSize(sizes)}px` },
            onThumbPointerDown: (pointerPos) =>
              props.onThumbPointerDown(pointerPos.x),
            onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
            onWheelScroll: (event, maxScrollPos) => {
              if (ctx.viewport) {
                const scrollPos = ctx.viewport.scrollLeft + event.deltaX;
                (props.onWheelScroll(scrollPos),
                  isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) &&
                    event.preventDefault());
              }
            },
            onResize: () => {
              ref.current &&
                ctx.viewport &&
                computedStyle &&
                onSizesChange({
                  content: ctx.viewport.scrollWidth,
                  viewport: ctx.viewport.offsetWidth,
                  scrollbar: {
                    size: ref.current.clientWidth,
                    paddingStart: toInt(computedStyle.paddingLeft),
                    paddingEnd: toInt(computedStyle.paddingRight),
                  },
                });
            },
          })
        );
      };
      function ScrollAreaScrollbarY(props) {
        const {
            sizes,
            onSizesChange,
            style,
            ref: forwardedRef,
            ...others
          } = props,
          context = useScrollAreaContext(),
          [computedStyle, setComputedStyle] = (0, react.useState)(),
          ref = (0, react.useRef)(null),
          composeRefs = (0, use_merged_ref.pc)(
            forwardedRef,
            ref,
            context.onScrollbarYChange,
          );
        return (
          (0, react.useEffect)(() => {
            ref.current &&
              setComputedStyle(window.getComputedStyle(ref.current));
          }, []),
          (0, jsx_runtime.jsx)(Scrollbar, {
            ...others,
            "data-orientation": "vertical",
            ref: composeRefs,
            sizes,
            style: {
              "--sa-thumb-height": `${getThumbSize(sizes)}px`,
              ...style,
            },
            onThumbPointerDown: (pointerPos) =>
              props.onThumbPointerDown(pointerPos.y),
            onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
            onWheelScroll: (event, maxScrollPos) => {
              if (context.viewport) {
                const scrollPos = context.viewport.scrollTop + event.deltaY;
                (props.onWheelScroll(scrollPos),
                  isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) &&
                    event.preventDefault());
              }
            },
            onResize: () => {
              ref.current &&
                context.viewport &&
                computedStyle &&
                onSizesChange({
                  content: context.viewport.scrollHeight,
                  viewport: context.viewport.offsetHeight,
                  scrollbar: {
                    size: ref.current.clientHeight,
                    paddingStart: toInt(computedStyle.paddingTop),
                    paddingEnd: toInt(computedStyle.paddingBottom),
                  },
                });
            },
          })
        );
      }
      function ScrollAreaScrollbarVisible(props) {
        const { orientation = "vertical", ...scrollbarProps } = props,
          { dir } = (0, DirectionProvider.jH)(),
          context = useScrollAreaContext(),
          thumbRef = (0, react.useRef)(null),
          pointerOffsetRef = (0, react.useRef)(0),
          [sizes, setSizes] = (0, react.useState)({
            content: 0,
            viewport: 0,
            scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 },
          }),
          thumbRatio = getThumbRatio(sizes.viewport, sizes.content),
          commonProps = {
            ...scrollbarProps,
            sizes,
            onSizesChange: setSizes,
            hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
            onThumbChange: (thumb) => {
              thumbRef.current = thumb;
            },
            onThumbPointerUp: () => {
              pointerOffsetRef.current = 0;
            },
            onThumbPointerDown: (pointerPos) => {
              pointerOffsetRef.current = pointerPos;
            },
          },
          getScrollPosition = (pointerPos, direction) =>
            (function getScrollPositionFromPointer(
              pointerPos,
              pointerOffset,
              sizes,
              dir = "ltr",
            ) {
              const thumbSizePx = getThumbSize(sizes),
                offset = pointerOffset || thumbSizePx / 2,
                thumbOffsetFromEnd = thumbSizePx - offset,
                minPointerPos = sizes.scrollbar.paddingStart + offset,
                maxPointerPos =
                  sizes.scrollbar.size -
                  sizes.scrollbar.paddingEnd -
                  thumbOffsetFromEnd,
                maxScrollPos = sizes.content - sizes.viewport;
              return linearScale(
                [minPointerPos, maxPointerPos],
                "ltr" === dir ? [0, maxScrollPos] : [-1 * maxScrollPos, 0],
              )(pointerPos);
            })(pointerPos, pointerOffsetRef.current, sizes, direction);
        return "horizontal" === orientation
          ? (0, jsx_runtime.jsx)(ScrollAreaScrollbarX, {
              ...commonProps,
              onThumbPositionChange: () => {
                if (context.viewport && thumbRef.current) {
                  const offset = getThumbOffsetFromScroll(
                    context.viewport.scrollLeft,
                    sizes,
                    dir,
                  );
                  thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
                }
              },
              onWheelScroll: (scrollPos) => {
                context.viewport && (context.viewport.scrollLeft = scrollPos);
              },
              onDragScroll: (pointerPos) => {
                context.viewport &&
                  (context.viewport.scrollLeft = getScrollPosition(
                    pointerPos,
                    dir,
                  ));
              },
            })
          : "vertical" === orientation
            ? (0, jsx_runtime.jsx)(ScrollAreaScrollbarY, {
                ...commonProps,
                onThumbPositionChange: () => {
                  if (context.viewport && thumbRef.current) {
                    const offset = getThumbOffsetFromScroll(
                      context.viewport.scrollTop,
                      sizes,
                    );
                    (0 === sizes.scrollbar.size
                      ? thumbRef.current.style.setProperty(
                          "--thumb-opacity",
                          "0",
                        )
                      : thumbRef.current.style.setProperty(
                          "--thumb-opacity",
                          "1",
                        ),
                      (thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`));
                  }
                },
                onWheelScroll: (scrollPos) => {
                  context.viewport && (context.viewport.scrollTop = scrollPos);
                },
                onDragScroll: (pointerPos) => {
                  context.viewport &&
                    (context.viewport.scrollTop =
                      getScrollPosition(pointerPos));
                },
              })
            : null;
      }
      function ScrollAreaScrollbarAuto(props) {
        const context = useScrollAreaContext(),
          { forceMount, ...scrollbarProps } = props,
          [visible, setVisible] = (0, react.useState)(!1),
          isHorizontal = "horizontal" === props.orientation,
          handleResize = useDebouncedCallback(() => {
            if (context.viewport) {
              const isOverflowX =
                  context.viewport.offsetWidth < context.viewport.scrollWidth,
                isOverflowY =
                  context.viewport.offsetHeight < context.viewport.scrollHeight;
              setVisible(isHorizontal ? isOverflowX : isOverflowY);
            }
          }, 10);
        return (
          useResizeObserver(context.viewport, handleResize),
          useResizeObserver(context.content, handleResize),
          forceMount || visible
            ? (0, jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
                "data-state": visible ? "visible" : "hidden",
                ...scrollbarProps,
              })
            : null
        );
      }
      function ScrollAreaScrollbarHover(props) {
        const { forceMount, ...scrollbarProps } = props,
          context = useScrollAreaContext(),
          [visible, setVisible] = (0, react.useState)(!1);
        return (
          (0, react.useEffect)(() => {
            const { scrollArea } = context;
            let hideTimer = 0;
            if (scrollArea) {
              const handlePointerEnter = () => {
                  (window.clearTimeout(hideTimer), setVisible(!0));
                },
                handlePointerLeave = () => {
                  hideTimer = window.setTimeout(
                    () => setVisible(!1),
                    context.scrollHideDelay,
                  );
                };
              return (
                scrollArea.addEventListener("pointerenter", handlePointerEnter),
                scrollArea.addEventListener("pointerleave", handlePointerLeave),
                () => {
                  (window.clearTimeout(hideTimer),
                    scrollArea.removeEventListener(
                      "pointerenter",
                      handlePointerEnter,
                    ),
                    scrollArea.removeEventListener(
                      "pointerleave",
                      handlePointerLeave,
                    ));
                }
              );
            }
          }, [context.scrollArea, context.scrollHideDelay]),
          forceMount || visible
            ? (0, jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
                "data-state": visible ? "visible" : "hidden",
                ...scrollbarProps,
              })
            : null
        );
      }
      function ScrollAreaScrollbarScroll(props) {
        const { forceMount, ...scrollbarProps } = props,
          context = useScrollAreaContext(),
          isHorizontal = "horizontal" === props.orientation,
          [state, setState] = (0, react.useState)("hidden"),
          debounceScrollEnd = useDebouncedCallback(() => setState("idle"), 100);
        return (
          (0, react.useEffect)(() => {
            if ("idle" === state) {
              const hideTimer = window.setTimeout(
                () => setState("hidden"),
                context.scrollHideDelay,
              );
              return () => window.clearTimeout(hideTimer);
            }
          }, [state, context.scrollHideDelay]),
          (0, react.useEffect)(() => {
            const { viewport } = context,
              scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
            if (viewport) {
              let prevScrollPos = viewport[scrollDirection];
              const handleScroll = () => {
                const scrollPos = viewport[scrollDirection];
                (prevScrollPos !== scrollPos &&
                  (setState("scrolling"), debounceScrollEnd()),
                  (prevScrollPos = scrollPos));
              };
              return (
                viewport.addEventListener("scroll", handleScroll),
                () => viewport.removeEventListener("scroll", handleScroll)
              );
            }
          }, [context.viewport, isHorizontal, debounceScrollEnd]),
          forceMount || "hidden" !== state
            ? (0, jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
                "data-state": "hidden" === state ? "hidden" : "visible",
                ...scrollbarProps,
                onPointerEnter: composeEventHandlers(props.onPointerEnter, () =>
                  setState("interacting"),
                ),
                onPointerLeave: composeEventHandlers(props.onPointerLeave, () =>
                  setState("idle"),
                ),
              })
            : null
        );
      }
      function ScrollAreaScrollbar(props) {
        const { forceMount, ...scrollbarProps } = props,
          context = useScrollAreaContext(),
          { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context,
          isHorizontal = "horizontal" === props.orientation;
        return (
          (0, react.useEffect)(
            () => (
              isHorizontal
                ? onScrollbarXEnabledChange(!0)
                : onScrollbarYEnabledChange(!0),
              () => {
                isHorizontal
                  ? onScrollbarXEnabledChange(!1)
                  : onScrollbarYEnabledChange(!1);
              }
            ),
            [
              isHorizontal,
              onScrollbarXEnabledChange,
              onScrollbarYEnabledChange,
            ],
          ),
          "hover" === context.type
            ? (0, jsx_runtime.jsx)(ScrollAreaScrollbarHover, {
                ...scrollbarProps,
                forceMount,
              })
            : "scroll" === context.type
              ? (0, jsx_runtime.jsx)(ScrollAreaScrollbarScroll, {
                  ...scrollbarProps,
                  forceMount,
                })
              : "auto" === context.type
                ? (0, jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
                    ...scrollbarProps,
                    forceMount,
                  })
                : "always" === context.type
                  ? (0, jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
                      ...scrollbarProps,
                    })
                  : null
        );
      }
      function Thumb(props) {
        const { style, ref: forwardedRef, ...others } = props,
          scrollAreaContext = useScrollAreaContext(),
          scrollbarContext = useScrollbarContext(),
          { onThumbPositionChange } = scrollbarContext,
          composedRef = (0, use_merged_ref.pc)(
            forwardedRef,
            scrollbarContext.onThumbChange,
          ),
          removeUnlinkedScrollListenerRef = (0, react.useRef)(void 0),
          debounceScrollEnd = useDebouncedCallback(() => {
            removeUnlinkedScrollListenerRef.current &&
              (removeUnlinkedScrollListenerRef.current(),
              (removeUnlinkedScrollListenerRef.current = void 0));
          }, 100);
        return (
          (0, react.useEffect)(() => {
            const { viewport } = scrollAreaContext;
            if (viewport) {
              const handleScroll = () => {
                (debounceScrollEnd(),
                  removeUnlinkedScrollListenerRef.current ||
                    ((removeUnlinkedScrollListenerRef.current =
                      (function addUnlinkedScrollListener(
                        node,
                        handler = () => {},
                      ) {
                        let prevPosition = {
                            left: node.scrollLeft,
                            top: node.scrollTop,
                          },
                          rAF = 0;
                        return (
                          (function loop() {
                            const position = {
                                left: node.scrollLeft,
                                top: node.scrollTop,
                              },
                              isHorizontalScroll =
                                prevPosition.left !== position.left,
                              isVerticalScroll =
                                prevPosition.top !== position.top;
                            ((isHorizontalScroll || isVerticalScroll) &&
                              handler(),
                              (prevPosition = position),
                              (rAF = window.requestAnimationFrame(loop)));
                          })(),
                          () => window.cancelAnimationFrame(rAF)
                        );
                      })(viewport, onThumbPositionChange)),
                    onThumbPositionChange()));
              };
              return (
                onThumbPositionChange(),
                viewport.addEventListener("scroll", handleScroll),
                () => viewport.removeEventListener("scroll", handleScroll)
              );
            }
          }, [
            scrollAreaContext.viewport,
            debounceScrollEnd,
            onThumbPositionChange,
          ]),
          (0, jsx_runtime.jsx)("div", {
            "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
            ...others,
            ref: composedRef,
            style: {
              width: "var(--sa-thumb-width)",
              height: "var(--sa-thumb-height)",
              ...style,
            },
            onPointerDownCapture: composeEventHandlers(
              props.onPointerDownCapture,
              (event) => {
                const thumbRect = event.target.getBoundingClientRect(),
                  x = event.clientX - thumbRect.left,
                  y = event.clientY - thumbRect.top;
                scrollbarContext.onThumbPointerDown({ x, y });
              },
            ),
            onPointerUp: composeEventHandlers(
              props.onPointerUp,
              scrollbarContext.onThumbPointerUp,
            ),
          })
        );
      }
      function ScrollAreaThumb(props) {
        const { forceMount, ...thumbProps } = props,
          scrollbarContext = useScrollbarContext();
        return forceMount || scrollbarContext.hasThumb
          ? (0, jsx_runtime.jsx)(Thumb, { ...thumbProps })
          : null;
      }
      function ScrollAreaViewport({
        children,
        style,
        ref,
        onWheel,
        ...others
      }) {
        const ctx = useScrollAreaContext(),
          rootRef = (0, use_merged_ref.pc)(ref, ctx.onViewportChange);
        return (0, jsx_runtime.jsx)(Box.a, {
          ...others,
          ref: rootRef,
          onWheel: (event) => {
            if (
              (onWheel?.(event),
              ctx.scrollbarXEnabled && ctx.viewport && event.shiftKey)
            ) {
              const {
                scrollTop,
                scrollHeight,
                clientHeight,
                scrollWidth,
                clientWidth,
              } = ctx.viewport;
              scrollWidth > clientWidth &&
                (scrollTop < 1 ||
                  scrollTop >= scrollHeight - clientHeight - 1) &&
                event.stopPropagation();
            }
          },
          style: {
            overflowX: ctx.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: ctx.scrollbarYEnabled ? "scroll" : "hidden",
            ...style,
          },
          children: (0, jsx_runtime.jsx)("div", {
            ...ctx.getStyles("content"),
            ref: ctx.onContentChange,
            children,
          }),
        });
      }
      ((ScrollAreaScrollbarX.displayName =
        "@mantine/core/ScrollAreaScrollbarX"),
        (ScrollAreaScrollbarY.displayName =
          "@mantine/core/ScrollAreaScrollbarY"),
        (ScrollAreaScrollbarVisible.displayName =
          "@mantine/core/ScrollAreaScrollbarVisible"),
        (ScrollAreaScrollbarAuto.displayName =
          "@mantine/core/ScrollAreaScrollbarAuto"),
        (ScrollAreaScrollbarHover.displayName =
          "@mantine/core/ScrollAreaScrollbarHover"),
        (ScrollAreaScrollbar.displayName = "@mantine/core/ScrollAreaScrollbar"),
        (Thumb.displayName = "@mantine/core/ScrollAreaThumb"),
        (ScrollAreaThumb.displayName = "@mantine/core/ScrollAreaThumb"),
        (ScrollAreaViewport.displayName = "@mantine/core/ScrollAreaViewport"));
      var ScrollArea_module_default = {
          root: "m_d57069b5",
          content: "m_b1336c6",
          viewport: "m_c0783ff9",
          viewportInner: "m_f8f631dd",
          scrollbar: "m_c44ba933",
          thumb: "m_d8b5e363",
          corner: "m_21657268",
        },
        floating_ui_react = __webpack_require__(
          "./node_modules/@floating-ui/react/dist/floating-ui.react.mjs",
        );
      const ScrollArea_defaultProps = {
          scrollHideDelay: 1e3,
          type: "hover",
          scrollbars: "xy",
        },
        varsResolver = (0, create_vars_resolver.V)(
          (_, { scrollbarSize, overscrollBehavior, scrollbars }) => {
            let overrideOverscrollBehavior = overscrollBehavior;
            return (
              overscrollBehavior &&
                scrollbars &&
                ("x" === scrollbars
                  ? (overrideOverscrollBehavior = `${overscrollBehavior} auto`)
                  : "y" === scrollbars &&
                    (overrideOverscrollBehavior = `auto ${overscrollBehavior}`)),
              {
                root: {
                  "--scrollarea-scrollbar-size": (0, rem.D)(scrollbarSize),
                  "--scrollarea-over-scroll-behavior":
                    overrideOverscrollBehavior,
                },
              }
            );
          },
        ),
        ScrollArea = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)(
              "ScrollArea",
              ScrollArea_defaultProps,
              _props,
            ),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              scrollbarSize,
              vars,
              type,
              scrollHideDelay,
              viewportProps,
              viewportRef,
              onScrollPositionChange,
              children,
              offsetScrollbars,
              scrollbars,
              onBottomReached,
              onTopReached,
              onLeftReached,
              onRightReached,
              overscrollBehavior,
              startScrollPosition,
              attributes,
              ...others
            } = props,
            [scrollbarHovered, setScrollbarHovered] = (0, react.useState)(!1),
            [verticalThumbVisible, setVerticalThumbVisible] = (0,
            react.useState)(!1),
            [horizontalThumbVisible, setHorizontalThumbVisible] = (0,
            react.useState)(!1),
            prevAtTopRef = (0, react.useRef)(!0),
            prevAtBottomRef = (0, react.useRef)(!1),
            prevAtLeftRef = (0, react.useRef)(!0),
            prevAtRightRef = (0, react.useRef)(!1),
            getStyles = (0, use_styles.I)({
              name: "ScrollArea",
              props,
              classes: ScrollArea_module_default,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver,
            }),
            localViewportRef = (0, react.useRef)(null),
            [viewportElement, setViewportElement] = (0, react.useState)(null),
            combinedViewportRef = (0, floating_ui_react.SV)([
              viewportRef,
              localViewportRef,
              (0, react.useCallback)((node) => {
                setViewportElement((current) =>
                  current === node ? current : node,
                );
              }, []),
            ]);
          return (
            useResizeObserver(
              "present" === offsetScrollbars ? viewportElement : null,
              () => {
                const element = localViewportRef.current;
                element &&
                  (setVerticalThumbVisible(
                    element.scrollHeight > element.clientHeight,
                  ),
                  setHorizontalThumbVisible(
                    element.scrollWidth > element.clientWidth,
                  ));
              },
            ),
            (0, use_isomorphic_effect.o)(() => {
              startScrollPosition &&
                localViewportRef.current &&
                localViewportRef.current.scrollTo({
                  left: startScrollPosition.x ?? 0,
                  top: startScrollPosition.y ?? 0,
                });
            }, []),
            (0, jsx_runtime.jsxs)(ScrollAreaRoot, {
              getStyles,
              type: "never" === type ? "always" : type,
              scrollHideDelay,
              scrollbars,
              ...getStyles("root"),
              ...others,
              children: [
                (0, jsx_runtime.jsx)(ScrollAreaViewport, {
                  ...viewportProps,
                  ...getStyles("viewport", { style: viewportProps?.style }),
                  ref: combinedViewportRef,
                  "data-offset-scrollbars":
                    !0 === offsetScrollbars ? "xy" : offsetScrollbars || void 0,
                  "data-scrollbars": scrollbars || void 0,
                  "data-horizontal-hidden":
                    "present" !== offsetScrollbars || horizontalThumbVisible
                      ? void 0
                      : "true",
                  "data-vertical-hidden":
                    "present" !== offsetScrollbars || verticalThumbVisible
                      ? void 0
                      : "true",
                  onScroll: (e) => {
                    (viewportProps?.onScroll?.(e),
                      onScrollPositionChange?.({
                        x: e.currentTarget.scrollLeft,
                        y: e.currentTarget.scrollTop,
                      }));
                    const {
                        scrollTop,
                        scrollHeight,
                        clientHeight,
                        scrollLeft,
                        scrollWidth,
                        clientWidth,
                      } = e.currentTarget,
                      isAtBottom =
                        scrollTop - (scrollHeight - clientHeight) >= -0.8,
                      isAtTop = 0 === scrollTop;
                    (isAtBottom &&
                      !prevAtBottomRef.current &&
                      onBottomReached?.(),
                      isAtTop && !prevAtTopRef.current && onTopReached?.(),
                      (prevAtBottomRef.current = isAtBottom),
                      (prevAtTopRef.current = isAtTop));
                    const isAtRight =
                        scrollLeft - (scrollWidth - clientWidth) >= -0.8,
                      isAtLeft = 0 === scrollLeft;
                    (isAtRight && !prevAtRightRef.current && onRightReached?.(),
                      isAtLeft && !prevAtLeftRef.current && onLeftReached?.(),
                      (prevAtRightRef.current = isAtRight),
                      (prevAtLeftRef.current = isAtLeft));
                  },
                  children,
                }),
                ("xy" === scrollbars || "x" === scrollbars) &&
                  (0, jsx_runtime.jsx)(ScrollAreaScrollbar, {
                    ...getStyles("scrollbar"),
                    orientation: "horizontal",
                    "data-hidden":
                      "never" === type ||
                      ("present" === offsetScrollbars &&
                        !horizontalThumbVisible) ||
                      void 0,
                    forceMount: !0,
                    onMouseEnter: () => setScrollbarHovered(!0),
                    onMouseLeave: () => setScrollbarHovered(!1),
                    children: (0, jsx_runtime.jsx)(ScrollAreaThumb, {
                      ...getStyles("thumb"),
                    }),
                  }),
                ("xy" === scrollbars || "y" === scrollbars) &&
                  (0, jsx_runtime.jsx)(ScrollAreaScrollbar, {
                    ...getStyles("scrollbar"),
                    orientation: "vertical",
                    "data-hidden":
                      "never" === type ||
                      ("present" === offsetScrollbars &&
                        !verticalThumbVisible) ||
                      void 0,
                    forceMount: !0,
                    onMouseEnter: () => setScrollbarHovered(!0),
                    onMouseLeave: () => setScrollbarHovered(!1),
                    children: (0, jsx_runtime.jsx)(ScrollAreaThumb, {
                      ...getStyles("thumb"),
                    }),
                  }),
                (0, jsx_runtime.jsx)(ScrollAreaCorner, {
                  ...getStyles("corner"),
                  "data-hovered": scrollbarHovered || void 0,
                  "data-hidden": "never" === type || void 0,
                }),
              ],
            })
          );
        });
      ScrollArea.displayName = "@mantine/core/ScrollArea";
      const ScrollAreaAutosize = (0, factory.P9)((props) => {
        const {
            children,
            classNames,
            styles,
            scrollbarSize,
            scrollHideDelay,
            type,
            dir,
            offsetScrollbars,
            overscrollBehavior,
            viewportRef,
            onScrollPositionChange,
            unstyled,
            variant,
            viewportProps,
            scrollbars,
            style,
            vars,
            onBottomReached,
            onTopReached,
            startScrollPosition,
            onOverflowChange,
            ...others
          } = (0, use_props.Y)(
            "ScrollAreaAutosize",
            ScrollArea_defaultProps,
            props,
          ),
          viewportObserverRef = (0, react.useRef)(null),
          [viewportObserverElement, setViewportObserverElement] = (0,
          react.useState)(null),
          combinedViewportRef = (0, floating_ui_react.SV)([
            viewportRef,
            viewportObserverRef,
            (0, react.useCallback)((node) => {
              setViewportObserverElement((current) =>
                current === node ? current : node,
              );
            }, []),
          ]),
          overflowingRef = (0, react.useRef)(!1),
          didMountRef = (0, react.useRef)(!1),
          handleOverflowCheck = (0, react.useEffectEvent)(() => {
            const el = viewportObserverRef.current;
            if (!el || !onOverflowChange) return;
            const isOverflowing = el.scrollHeight > el.clientHeight;
            isOverflowing !== overflowingRef.current &&
              (didMountRef.current
                ? onOverflowChange(isOverflowing)
                : ((didMountRef.current = !0),
                  isOverflowing && onOverflowChange(!0)),
              (overflowingRef.current = isOverflowing));
          });
        return (
          useResizeObserver(
            onOverflowChange ? viewportObserverElement : null,
            handleOverflowCheck,
          ),
          (0, jsx_runtime.jsx)(Box.a, {
            ...others,
            variant,
            style: [{ display: "flex", overflow: "hidden" }, style],
            children: (0, jsx_runtime.jsx)(Box.a, {
              style: {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                overflow: "hidden",
                ...("y" === scrollbars && { minWidth: 0 }),
                ...("x" === scrollbars && { minHeight: 0 }),
                ...("xy" === scrollbars && { minWidth: 0, minHeight: 0 }),
                ...(!1 === scrollbars && { minWidth: 0, minHeight: 0 }),
              },
              children: (0, jsx_runtime.jsx)(ScrollArea, {
                classNames,
                styles,
                scrollHideDelay,
                scrollbarSize,
                type,
                dir,
                offsetScrollbars,
                overscrollBehavior,
                viewportRef: combinedViewportRef,
                onScrollPositionChange,
                unstyled,
                variant,
                viewportProps,
                vars,
                scrollbars,
                onBottomReached,
                onTopReached,
                startScrollPosition,
                "data-autosize": "true",
                children,
              }),
            }),
          })
        );
      });
      ((ScrollArea.classes = ScrollArea_module_default),
        (ScrollArea.varsResolver = varsResolver),
        (ScrollAreaAutosize.displayName = "@mantine/core/ScrollAreaAutosize"),
        (ScrollAreaAutosize.classes = ScrollArea_module_default),
        (ScrollArea.Autosize = ScrollAreaAutosize));
      var OptionalPortal = __webpack_require__(
          "./node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs",
        ),
        use_reduced_motion = __webpack_require__(
          "./node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs",
        );
      var use_id = __webpack_require__(
        "./node_modules/@mantine/hooks/esm/use-id/use-id.mjs",
      );
      var use_focus_return = __webpack_require__(
        "./node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.mjs",
      );
      function useModal({
        id,
        transitionProps,
        opened,
        trapFocus,
        closeOnEscape,
        onClose,
        returnFocus,
      }) {
        const _id = (0, use_id.B)(id),
          [titleMounted, setTitleMounted] = (0, react.useState)(!1),
          [bodyMounted, setBodyMounted] = (0, react.useState)(!1),
          shouldLockScroll = (function useLockScroll({
            opened,
            transitionDuration,
          }) {
            const [shouldLockScroll, setShouldLockScroll] = (0, react.useState)(
                opened,
              ),
              timeout = (0, react.useRef)(-1),
              _transitionDuration = (0, use_reduced_motion.I)()
                ? 0
                : transitionDuration;
            return (
              (0, react.useEffect)(
                () => (
                  opened
                    ? (setShouldLockScroll(!0),
                      window.clearTimeout(timeout.current))
                    : 0 === _transitionDuration
                      ? setShouldLockScroll(!1)
                      : (timeout.current = window.setTimeout(
                          () => setShouldLockScroll(!1),
                          _transitionDuration,
                        )),
                  () => window.clearTimeout(timeout.current)
                ),
                [opened, _transitionDuration],
              ),
              shouldLockScroll
            );
          })({
            opened,
            transitionDuration:
              "number" == typeof transitionProps?.duration
                ? transitionProps?.duration
                : 200,
          });
        return (
          (function useWindowEvent(type, listener, options) {
            const stableListener = (0, react.useEffectEvent)(listener);
            (0, react.useEffect)(
              () => (
                window.addEventListener(type, stableListener, options),
                () => window.removeEventListener(type, stableListener, options)
              ),
              [type],
            );
          })(
            "keydown",
            (event) => {
              "Escape" === event.key &&
                closeOnEscape &&
                !event.isComposing &&
                opened &&
                "true" !==
                  event.target?.getAttribute("data-mantine-stop-propagation") &&
                onClose();
            },
            { capture: !0 },
          ),
          (0, use_focus_return.E)({
            opened,
            shouldReturnFocus: trapFocus && returnFocus,
          }),
          {
            _id,
            titleMounted,
            bodyMounted,
            shouldLockScroll,
            setTitleMounted,
            setBodyMounted,
          }
        );
      }
      var __assign = function () {
        return (
          (__assign =
            Object.assign ||
            function __assign(t) {
              for (var s, i = 1, n = arguments.length; i < n; i++)
                for (var p in (s = arguments[i]))
                  Object.prototype.hasOwnProperty.call(s, p) && (t[p] = s[p]);
              return t;
            }),
          __assign.apply(this, arguments)
        );
      };
      function __rest(s, e) {
        var t = {};
        for (var p in s)
          Object.prototype.hasOwnProperty.call(s, p) &&
            e.indexOf(p) < 0 &&
            (t[p] = s[p]);
        if (null != s && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            e.indexOf(p[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(s, p[i]) &&
              (t[p[i]] = s[p[i]]);
        }
        return t;
      }
      Object.create;
      function __spreadArray(to, from, pack) {
        if (pack || 2 === arguments.length)
          for (var ar, i = 0, l = from.length; i < l; i++)
            (!ar && i in from) ||
              (ar || (ar = Array.prototype.slice.call(from, 0, i)),
              (ar[i] = from[i]));
        return to.concat(ar || Array.prototype.slice.call(from));
      }
      Object.create;
      function assignRef(ref, value) {
        return (
          "function" == typeof ref ? ref(value) : ref && (ref.current = value),
          ref
        );
      }
      var useIsomorphicLayoutEffect =
          "undefined" != typeof window
            ? react.useLayoutEffect
            : react.useEffect,
        currentValues = new WeakMap();
      function useMergeRefs(refs, defaultValue) {
        var callbackRef = (function useRef_useCallbackRef(
          initialValue,
          callback,
        ) {
          var ref = (0, react.useState)(function () {
            return {
              value: initialValue,
              callback,
              facade: {
                get current() {
                  return ref.value;
                },
                set current(value) {
                  var last = ref.value;
                  last !== value &&
                    ((ref.value = value), ref.callback(value, last));
                },
              },
            };
          })[0];
          return ((ref.callback = callback), ref.facade);
        })(defaultValue || null, function (newValue) {
          return refs.forEach(function (ref) {
            return assignRef(ref, newValue);
          });
        });
        return (
          useIsomorphicLayoutEffect(
            function () {
              var oldValue = currentValues.get(callbackRef);
              if (oldValue) {
                var prevRefs_1 = new Set(oldValue),
                  nextRefs_1 = new Set(refs),
                  current_1 = callbackRef.current;
                (prevRefs_1.forEach(function (ref) {
                  nextRefs_1.has(ref) || assignRef(ref, null);
                }),
                  nextRefs_1.forEach(function (ref) {
                    prevRefs_1.has(ref) || assignRef(ref, current_1);
                  }));
              }
              currentValues.set(callbackRef, refs);
            },
            [refs],
          ),
          callbackRef
        );
      }
      function ItoI(a) {
        return a;
      }
      function innerCreateMedium(defaults, middleware) {
        void 0 === middleware && (middleware = ItoI);
        var buffer = [],
          assigned = !1;
        return {
          read: function () {
            if (assigned)
              throw new Error(
                "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.",
              );
            return buffer.length ? buffer[buffer.length - 1] : defaults;
          },
          useMedium: function (data) {
            var item = middleware(data, assigned);
            return (
              buffer.push(item),
              function () {
                buffer = buffer.filter(function (x) {
                  return x !== item;
                });
              }
            );
          },
          assignSyncMedium: function (cb) {
            for (assigned = !0; buffer.length; ) {
              var cbs = buffer;
              ((buffer = []), cbs.forEach(cb));
            }
            buffer = {
              push: function (x) {
                return cb(x);
              },
              filter: function () {
                return buffer;
              },
            };
          },
          assignMedium: function (cb) {
            assigned = !0;
            var pendingQueue = [];
            if (buffer.length) {
              var cbs = buffer;
              ((buffer = []), cbs.forEach(cb), (pendingQueue = buffer));
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                ((pendingQueue = []), cbs.forEach(cb));
              },
              cycle = function () {
                return Promise.resolve().then(executeQueue);
              };
            (cycle(),
              (buffer = {
                push: function (x) {
                  (pendingQueue.push(x), cycle());
                },
                filter: function (filter) {
                  return ((pendingQueue = pendingQueue.filter(filter)), buffer);
                },
              }));
          },
        };
      }
      var effectCar = (function createSidecarMedium(options) {
          void 0 === options && (options = {});
          var medium = innerCreateMedium(null);
          return (
            (medium.options = __assign({ async: !0, ssr: !1 }, options)),
            medium
          );
        })(),
        nothing = function () {},
        RemoveScroll = react.forwardRef(function (props, parentRef) {
          var ref = react.useRef(null),
            _a = react.useState({
              onScrollCapture: nothing,
              onWheelCapture: nothing,
              onTouchMoveCapture: nothing,
            }),
            callbacks = _a[0],
            setCallbacks = _a[1],
            forwardProps = props.forwardProps,
            children = props.children,
            className = props.className,
            removeScrollBar = props.removeScrollBar,
            enabled = props.enabled,
            shards = props.shards,
            sideCar = props.sideCar,
            noRelative = props.noRelative,
            noIsolation = props.noIsolation,
            inert = props.inert,
            allowPinchZoom = props.allowPinchZoom,
            _b = props.as,
            Container = void 0 === _b ? "div" : _b,
            gapMode = props.gapMode,
            rest = __rest(props, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noRelative",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            SideCar = sideCar,
            containerRef = useMergeRefs([ref, parentRef]),
            containerProps = __assign(__assign({}, rest), callbacks);
          return react.createElement(
            react.Fragment,
            null,
            enabled &&
              react.createElement(SideCar, {
                sideCar: effectCar,
                removeScrollBar,
                shards,
                noRelative,
                noIsolation,
                inert,
                setCallbacks,
                allowPinchZoom: !!allowPinchZoom,
                lockRef: ref,
                gapMode,
              }),
            forwardProps
              ? react.cloneElement(
                  react.Children.only(children),
                  __assign(__assign({}, containerProps), { ref: containerRef }),
                )
              : react.createElement(
                  Container,
                  __assign({}, containerProps, {
                    className,
                    ref: containerRef,
                  }),
                  children,
                ),
          );
        });
      ((RemoveScroll.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1,
      }),
        (RemoveScroll.classNames = {
          fullWidth: "width-before-scroll-bar",
          zeroRight: "right-scroll-bar-position",
        }));
      var currentNonce,
        SideCar = function (_a) {
          var sideCar = _a.sideCar,
            rest = __rest(_a, ["sideCar"]);
          if (!sideCar)
            throw new Error(
              "Sidecar: please provide `sideCar` property to import the right car",
            );
          var Target = sideCar.read();
          if (!Target) throw new Error("Sidecar medium not found");
          return react.createElement(Target, __assign({}, rest));
        };
      SideCar.isSideCarExport = !0;
      function makeStyleTag() {
        if (!document) return null;
        var tag = document.createElement("style");
        tag.type = "text/css";
        var nonce = currentNonce || __webpack_require__.nc;
        return (nonce && tag.setAttribute("nonce", nonce), tag);
      }
      var stylesheetSingleton = function () {
          var counter = 0,
            stylesheet = null;
          return {
            add: function (style) {
              (0 == counter &&
                (stylesheet = makeStyleTag()) &&
                (!(function injectStyles(tag, css) {
                  tag.styleSheet
                    ? (tag.styleSheet.cssText = css)
                    : tag.appendChild(document.createTextNode(css));
                })(stylesheet, style),
                (function insertStyleTag(tag) {
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(tag);
                })(stylesheet)),
                counter++);
            },
            remove: function () {
              !--counter &&
                stylesheet &&
                (stylesheet.parentNode &&
                  stylesheet.parentNode.removeChild(stylesheet),
                (stylesheet = null));
            },
          };
        },
        styleSingleton = function () {
          var sheet,
            useStyle =
              ((sheet = stylesheetSingleton()),
              function (styles, isDynamic) {
                react.useEffect(
                  function () {
                    return (
                      sheet.add(styles),
                      function () {
                        sheet.remove();
                      }
                    );
                  },
                  [styles && isDynamic],
                );
              });
          return function (_a) {
            var styles = _a.styles,
              dynamic = _a.dynamic;
            return (useStyle(styles, dynamic), null);
          };
        },
        zeroGap = { left: 0, top: 0, right: 0, gap: 0 },
        parse = function (x) {
          return parseInt(x || "", 10) || 0;
        },
        getGapWidth = function (gapMode) {
          if (
            (void 0 === gapMode && (gapMode = "margin"),
            "undefined" == typeof window)
          )
            return zeroGap;
          var offsets = (function (gapMode) {
              var cs = window.getComputedStyle(document.body),
                left = cs["padding" === gapMode ? "paddingLeft" : "marginLeft"],
                top = cs["padding" === gapMode ? "paddingTop" : "marginTop"],
                right =
                  cs["padding" === gapMode ? "paddingRight" : "marginRight"];
              return [parse(left), parse(top), parse(right)];
            })(gapMode),
            documentWidth = document.documentElement.clientWidth,
            windowWidth = window.innerWidth;
          return {
            left: offsets[0],
            top: offsets[1],
            right: offsets[2],
            gap: Math.max(
              0,
              windowWidth - documentWidth + offsets[2] - offsets[0],
            ),
          };
        },
        Style = styleSingleton(),
        lockAttribute = "data-scroll-locked",
        getStyles = function (_a, allowRelative, gapMode, important) {
          var left = _a.left,
            top = _a.top,
            right = _a.right,
            gap = _a.gap;
          return (
            void 0 === gapMode && (gapMode = "margin"),
            "\n  ."
              .concat("with-scroll-bars-hidden", " {\n   overflow: hidden ")
              .concat(important, ";\n   padding-right: ")
              .concat(gap, "px ")
              .concat(important, ";\n  }\n  body[")
              .concat(lockAttribute, "] {\n    overflow: hidden ")
              .concat(important, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  allowRelative && "position: relative ".concat(important, ";"),
                  "margin" === gapMode &&
                    "\n    padding-left: "
                      .concat(left, "px;\n    padding-top: ")
                      .concat(top, "px;\n    padding-right: ")
                      .concat(
                        right,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ",
                      )
                      .concat(gap, "px ")
                      .concat(important, ";\n    "),
                  "padding" === gapMode &&
                    "padding-right: ".concat(gap, "px ").concat(important, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  .",
              )
              .concat("right-scroll-bar-position", " {\n    right: ")
              .concat(gap, "px ")
              .concat(important, ";\n  }\n  \n  .")
              .concat("width-before-scroll-bar", " {\n    margin-right: ")
              .concat(gap, "px ")
              .concat(important, ";\n  }\n  \n  .")
              .concat("right-scroll-bar-position", " .")
              .concat("right-scroll-bar-position", " {\n    right: 0 ")
              .concat(important, ";\n  }\n  \n  .")
              .concat("width-before-scroll-bar", " .")
              .concat("width-before-scroll-bar", " {\n    margin-right: 0 ")
              .concat(important, ";\n  }\n  \n  body[")
              .concat(lockAttribute, "] {\n    ")
              .concat("--removed-body-scroll-bar-size", ": ")
              .concat(gap, "px;\n  }\n")
          );
        },
        getCurrentUseCounter = function () {
          var counter = parseInt(
            document.body.getAttribute(lockAttribute) || "0",
            10,
          );
          return isFinite(counter) ? counter : 0;
        },
        RemoveScrollBar = function (_a) {
          var noRelative = _a.noRelative,
            noImportant = _a.noImportant,
            _b = _a.gapMode,
            gapMode = void 0 === _b ? "margin" : _b;
          react.useEffect(function () {
            return (
              document.body.setAttribute(
                lockAttribute,
                (getCurrentUseCounter() + 1).toString(),
              ),
              function () {
                var newCounter = getCurrentUseCounter() - 1;
                newCounter <= 0
                  ? document.body.removeAttribute(lockAttribute)
                  : document.body.setAttribute(
                      lockAttribute,
                      newCounter.toString(),
                    );
              }
            );
          }, []);
          var gap = react.useMemo(
            function () {
              return getGapWidth(gapMode);
            },
            [gapMode],
          );
          return react.createElement(Style, {
            styles: getStyles(
              gap,
              !noRelative,
              gapMode,
              noImportant ? "" : "!important",
            ),
          });
        },
        passiveSupported = !1;
      if ("undefined" != typeof window)
        try {
          var options = Object.defineProperty({}, "passive", {
            get: function () {
              return ((passiveSupported = !0), !0);
            },
          });
          (window.addEventListener("test", options, options),
            window.removeEventListener("test", options, options));
        } catch (err) {
          passiveSupported = !1;
        }
      var nonPassive = !!passiveSupported && { passive: !1 },
        elementCanBeScrolled = function (node, overflow) {
          if (!(node instanceof Element)) return !1;
          var styles = window.getComputedStyle(node);
          return (
            "hidden" !== styles[overflow] &&
            !(
              styles.overflowY === styles.overflowX &&
              !(function (node) {
                return "TEXTAREA" === node.tagName;
              })(node) &&
              "visible" === styles[overflow]
            )
          );
        },
        locationCouldBeScrolled = function (axis, node) {
          var ownerDocument = node.ownerDocument,
            current = node;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                current instanceof ShadowRoot &&
                (current = current.host),
              elementCouldBeScrolled(axis, current))
            ) {
              var _a = getScrollVariables(axis, current);
              if (_a[1] > _a[2]) return !0;
            }
            current = current.parentNode;
          } while (current && current !== ownerDocument.body);
          return !1;
        },
        elementCouldBeScrolled = function (axis, node) {
          return "v" === axis
            ? (function (node) {
                return elementCanBeScrolled(node, "overflowY");
              })(node)
            : (function (node) {
                return elementCanBeScrolled(node, "overflowX");
              })(node);
        },
        getScrollVariables = function (axis, node) {
          return "v" === axis
            ? [(_a = node).scrollTop, _a.scrollHeight, _a.clientHeight]
            : (function (_a) {
                return [_a.scrollLeft, _a.scrollWidth, _a.clientWidth];
              })(node);
          var _a;
        },
        getTouchXY = function (event) {
          return "changedTouches" in event
            ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY]
            : [0, 0];
        },
        getDeltaXY = function (event) {
          return [event.deltaX, event.deltaY];
        },
        extractRef = function (ref) {
          return ref && "current" in ref ? ref.current : ref;
        },
        generateStyle = function (id) {
          return "\n  .block-interactivity-"
            .concat(id, " {pointer-events: none;}\n  .allow-interactivity-")
            .concat(id, " {pointer-events: all;}\n");
        },
        idCounter = 0,
        lockStack = [];
      function getOutermostShadowParent(node) {
        for (var shadowParent = null; null !== node; )
          (node instanceof ShadowRoot &&
            ((shadowParent = node.host), (node = node.host)),
            (node = node.parentNode));
        return shadowParent;
      }
      const sidecar = (function exportSidecar(medium, exported) {
        return (medium.useMedium(exported), SideCar);
      })(effectCar, function RemoveScrollSideCar(props) {
        var shouldPreventQueue = react.useRef([]),
          touchStartRef = react.useRef([0, 0]),
          activeAxis = react.useRef(),
          id = react.useState(idCounter++)[0],
          Style = react.useState(styleSingleton)[0],
          lastProps = react.useRef(props);
        (react.useEffect(
          function () {
            lastProps.current = props;
          },
          [props],
        ),
          react.useEffect(
            function () {
              if (props.inert) {
                document.body.classList.add("block-interactivity-".concat(id));
                var allow_1 = __spreadArray(
                  [props.lockRef.current],
                  (props.shards || []).map(extractRef),
                  !0,
                ).filter(Boolean);
                return (
                  allow_1.forEach(function (el) {
                    return el.classList.add("allow-interactivity-".concat(id));
                  }),
                  function () {
                    (document.body.classList.remove(
                      "block-interactivity-".concat(id),
                    ),
                      allow_1.forEach(function (el) {
                        return el.classList.remove(
                          "allow-interactivity-".concat(id),
                        );
                      }));
                  }
                );
              }
            },
            [props.inert, props.lockRef.current, props.shards],
          ));
        var shouldCancelEvent = react.useCallback(function (event, parent) {
            if (
              ("touches" in event && 2 === event.touches.length) ||
              ("wheel" === event.type && event.ctrlKey)
            )
              return !lastProps.current.allowPinchZoom;
            var currentAxis,
              touch = getTouchXY(event),
              touchStart = touchStartRef.current,
              deltaX =
                "deltaX" in event ? event.deltaX : touchStart[0] - touch[0],
              deltaY =
                "deltaY" in event ? event.deltaY : touchStart[1] - touch[1],
              target = event.target,
              moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
            if (
              "touches" in event &&
              "h" === moveDirection &&
              "range" === target.type
            )
              return !1;
            var selection = window.getSelection(),
              anchorNode = selection && selection.anchorNode;
            if (
              !!anchorNode &&
              (anchorNode === target || anchorNode.contains(target))
            )
              return !1;
            var canBeScrolledInMainDirection = locationCouldBeScrolled(
              moveDirection,
              target,
            );
            if (!canBeScrolledInMainDirection) return !0;
            if (
              (canBeScrolledInMainDirection
                ? (currentAxis = moveDirection)
                : ((currentAxis = "v" === moveDirection ? "h" : "v"),
                  (canBeScrolledInMainDirection = locationCouldBeScrolled(
                    moveDirection,
                    target,
                  ))),
              !canBeScrolledInMainDirection)
            )
              return !1;
            if (
              (!activeAxis.current &&
                "changedTouches" in event &&
                (deltaX || deltaY) &&
                (activeAxis.current = currentAxis),
              !currentAxis)
            )
              return !0;
            var cancelingAxis = activeAxis.current || currentAxis;
            return (function (
              axis,
              endTarget,
              event,
              sourceDelta,
              noOverscroll,
            ) {
              var directionFactor = (function (axis, direction) {
                  return "h" === axis && "rtl" === direction ? -1 : 1;
                })(axis, window.getComputedStyle(endTarget).direction),
                delta = directionFactor * sourceDelta,
                target = event.target,
                targetInLock = endTarget.contains(target),
                shouldCancelScroll = !1,
                isDeltaPositive = delta > 0,
                availableScroll = 0,
                availableScrollTop = 0;
              do {
                if (!target) break;
                var _a = getScrollVariables(axis, target),
                  position = _a[0],
                  elementScroll = _a[1] - _a[2] - directionFactor * position;
                (position || elementScroll) &&
                  elementCouldBeScrolled(axis, target) &&
                  ((availableScroll += elementScroll),
                  (availableScrollTop += position));
                var parent_1 = target.parentNode;
                target =
                  parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                    ? parent_1.host
                    : parent_1;
              } while (
                (!targetInLock && target !== document.body) ||
                (targetInLock &&
                  (endTarget.contains(target) || endTarget === target))
              );
              return (
                ((isDeltaPositive &&
                  ((noOverscroll && Math.abs(availableScroll) < 1) ||
                    (!noOverscroll && delta > availableScroll))) ||
                  (!isDeltaPositive &&
                    ((noOverscroll && Math.abs(availableScrollTop) < 1) ||
                      (!noOverscroll && -delta > availableScrollTop)))) &&
                  (shouldCancelScroll = !0),
                shouldCancelScroll
              );
            })(
              cancelingAxis,
              parent,
              event,
              "h" === cancelingAxis ? deltaX : deltaY,
              !0,
            );
          }, []),
          shouldPrevent = react.useCallback(function (_event) {
            var event = _event;
            if (lockStack.length && lockStack[lockStack.length - 1] === Style) {
              var delta =
                  "deltaY" in event ? getDeltaXY(event) : getTouchXY(event),
                sourceEvent = shouldPreventQueue.current.filter(function (e) {
                  return (
                    e.name === event.type &&
                    (e.target === event.target ||
                      event.target === e.shadowParent) &&
                    ((x = e.delta), (y = delta), x[0] === y[0] && x[1] === y[1])
                  );
                  var x, y;
                })[0];
              if (sourceEvent && sourceEvent.should)
                event.cancelable && event.preventDefault();
              else if (!sourceEvent) {
                var shardNodes = (lastProps.current.shards || [])
                  .map(extractRef)
                  .filter(Boolean)
                  .filter(function (node) {
                    return node.contains(event.target);
                  });
                (shardNodes.length > 0
                  ? shouldCancelEvent(event, shardNodes[0])
                  : !lastProps.current.noIsolation) &&
                  event.cancelable &&
                  event.preventDefault();
              }
            }
          }, []),
          shouldCancel = react.useCallback(function (
            name,
            delta,
            target,
            should,
          ) {
            var event = {
              name,
              delta,
              target,
              should,
              shadowParent: getOutermostShadowParent(target),
            };
            (shouldPreventQueue.current.push(event),
              setTimeout(function () {
                shouldPreventQueue.current = shouldPreventQueue.current.filter(
                  function (e) {
                    return e !== event;
                  },
                );
              }, 1));
          }, []),
          scrollTouchStart = react.useCallback(function (event) {
            ((touchStartRef.current = getTouchXY(event)),
              (activeAxis.current = void 0));
          }, []),
          scrollWheel = react.useCallback(function (event) {
            shouldCancel(
              event.type,
              getDeltaXY(event),
              event.target,
              shouldCancelEvent(event, props.lockRef.current),
            );
          }, []),
          scrollTouchMove = react.useCallback(function (event) {
            shouldCancel(
              event.type,
              getTouchXY(event),
              event.target,
              shouldCancelEvent(event, props.lockRef.current),
            );
          }, []);
        react.useEffect(function () {
          return (
            lockStack.push(Style),
            props.setCallbacks({
              onScrollCapture: scrollWheel,
              onWheelCapture: scrollWheel,
              onTouchMoveCapture: scrollTouchMove,
            }),
            document.addEventListener("wheel", shouldPrevent, nonPassive),
            document.addEventListener("touchmove", shouldPrevent, nonPassive),
            document.addEventListener(
              "touchstart",
              scrollTouchStart,
              nonPassive,
            ),
            function () {
              ((lockStack = lockStack.filter(function (inst) {
                return inst !== Style;
              })),
                document.removeEventListener(
                  "wheel",
                  shouldPrevent,
                  nonPassive,
                ),
                document.removeEventListener(
                  "touchmove",
                  shouldPrevent,
                  nonPassive,
                ),
                document.removeEventListener(
                  "touchstart",
                  scrollTouchStart,
                  nonPassive,
                ));
            }
          );
        }, []);
        var removeScrollBar = props.removeScrollBar,
          inert = props.inert;
        return react.createElement(
          react.Fragment,
          null,
          inert
            ? react.createElement(Style, { styles: generateStyle(id) })
            : null,
          removeScrollBar
            ? react.createElement(RemoveScrollBar, {
                noRelative: props.noRelative,
                gapMode: props.gapMode,
              })
            : null,
        );
      });
      var ReactRemoveScroll = react.forwardRef(function (props, ref) {
        return react.createElement(
          RemoveScroll,
          __assign({}, props, { ref, sideCar: sidecar }),
        );
      });
      ReactRemoveScroll.classNames = RemoveScroll.classNames;
      const Combination = ReactRemoveScroll;
      function ModalBase({
        keepMounted,
        opened,
        onClose,
        id,
        transitionProps,
        onExitTransitionEnd,
        onEnterTransitionEnd,
        trapFocus,
        closeOnEscape,
        returnFocus,
        closeOnClickOutside,
        withinPortal,
        portalProps,
        lockScroll,
        children,
        zIndex,
        shadow,
        padding,
        __vars,
        unstyled,
        removeScrollProps,
        ...others
      }) {
        const {
            _id,
            titleMounted,
            bodyMounted,
            shouldLockScroll,
            setTitleMounted,
            setBodyMounted,
          } = useModal({
            id,
            transitionProps,
            opened,
            trapFocus,
            closeOnEscape,
            onClose,
            returnFocus,
          }),
          { key: removeScrollKey, ...otherRemoveScrollProps } =
            removeScrollProps || {};
        return (0, jsx_runtime.jsx)(OptionalPortal.r, {
          ...portalProps,
          withinPortal,
          children: (0, jsx_runtime.jsx)(ModalBaseProvider, {
            value: {
              opened,
              onClose,
              closeOnClickOutside,
              onExitTransitionEnd,
              onEnterTransitionEnd,
              transitionProps: { ...transitionProps, keepMounted },
              getTitleId: () => `${_id}-title`,
              getBodyId: () => `${_id}-body`,
              titleMounted,
              bodyMounted,
              setTitleMounted,
              setBodyMounted,
              trapFocus,
              closeOnEscape,
              zIndex,
              unstyled,
            },
            children: (0, jsx_runtime.jsx)(
              Combination,
              {
                enabled: shouldLockScroll && lockScroll,
                ...otherRemoveScrollProps,
                children: (0, jsx_runtime.jsx)(Box.a, {
                  ...others,
                  id: _id,
                  __vars: {
                    ...__vars,
                    "--mb-z-index": (
                      zIndex || (0, get_default_z_index.I)("modal")
                    ).toString(),
                    "--mb-shadow": (0, get_size.dh)(shadow),
                    "--mb-padding": (0, get_size.GY)(padding),
                  },
                  children,
                }),
              },
              removeScrollKey,
            ),
          }),
        });
      }
      ModalBase.displayName = "@mantine/core/ModalBase";
      const ModalRoot_defaultProps = {
          __staticSelector: "Modal",
          closeOnClickOutside: !0,
          withinPortal: !0,
          lockScroll: !0,
          trapFocus: !0,
          returnFocus: !0,
          closeOnEscape: !0,
          keepMounted: !1,
          zIndex: (0, get_default_z_index.I)("modal"),
          transitionProps: { duration: 200, transition: "fade-down" },
          yOffset: "5dvh",
        },
        ModalRoot_varsResolver = (0, create_vars_resolver.V)(
          (_, { radius, size, yOffset, xOffset }) => ({
            root: {
              "--modal-radius":
                void 0 === radius ? void 0 : (0, get_size.nJ)(radius),
              "--modal-size": (0, get_size.YC)(size, "modal-size"),
              "--modal-y-offset": (0, rem.D)(yOffset),
              "--modal-x-offset": (0, rem.D)(xOffset),
            },
          }),
        ),
        ModalRoot = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)(
              "ModalRoot",
              ModalRoot_defaultProps,
              _props,
            ),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              vars,
              yOffset,
              scrollAreaComponent,
              radius,
              fullScreen,
              centered,
              xOffset,
              __staticSelector,
              attributes,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: __staticSelector,
              classes: Modal_module_default,
              props,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver: ModalRoot_varsResolver,
            });
          return (0, jsx_runtime.jsx)(ModalProvider, {
            value: { yOffset, scrollAreaComponent, getStyles, fullScreen },
            children: (0, jsx_runtime.jsx)(ModalBase, {
              ...getStyles("root"),
              "data-full-screen": fullScreen || void 0,
              "data-centered": centered || void 0,
              "data-offset-scrollbars":
                scrollAreaComponent === ScrollArea.Autosize || void 0,
              unstyled,
              ...others,
            }),
          });
        });
      ((ModalRoot.classes = Modal_module_default),
        (ModalRoot.varsResolver = ModalRoot_varsResolver),
        (ModalRoot.displayName = "@mantine/core/ModalRoot"));
      const ModalStackContext = (0, react.createContext)(null);
      function ModalStack({ children }) {
        const [stack, setStack] = (0, react.useState)([]),
          [maxZIndex, setMaxZIndex] = (0, react.useState)(
            (0, get_default_z_index.I)("modal"),
          );
        return (0, jsx_runtime.jsx)(ModalStackContext, {
          value: {
            stack,
            addModal: (id, zIndex) => {
              (setStack((current) => [...new Set([...current, id])]),
                setMaxZIndex((current) =>
                  "number" == typeof zIndex && "number" == typeof current
                    ? Math.max(current, zIndex)
                    : current,
                ));
            },
            removeModal: (id) =>
              setStack((current) =>
                current.filter((currentId) => currentId !== id),
              ),
            getZIndex: (id) => `calc(${maxZIndex} + ${stack.indexOf(id)} + 1)`,
            currentId: stack[stack.length - 1],
            maxZIndex,
          },
          children,
        });
      }
      function ModalBaseTitle({ className, ...others }) {
        const id = (function useModalTitle() {
            const ctx = useModalBaseContext();
            return (
              (0, react.useEffect)(
                () => (ctx.setTitleMounted(!0), () => ctx.setTitleMounted(!1)),
                [],
              ),
              ctx.getTitleId()
            );
          })(),
          ctx = useModalBaseContext();
        return (0, jsx_runtime.jsx)(Box.a, {
          component: "h2",
          className: (0, clsx.A)(
            { [ModalBase_module_default_title]: !ctx.unstyled },
            className,
          ),
          id,
          ...others,
        });
      }
      ((ModalStack.displayName = "@mantine/core/ModalStack"),
        (ModalBaseTitle.displayName = "@mantine/core/ModalBaseTitle"));
      const ModalTitle = (0, factory.P9)((_props) => {
        const { classNames, className, style, styles, vars, ...others } = (0,
        use_props.Y)("ModalTitle", null, _props);
        return (0, jsx_runtime.jsx)(ModalBaseTitle, {
          ...useModalContext().getStyles("title", {
            classNames,
            style,
            styles,
            className,
          }),
          ...others,
        });
      });
      ((ModalTitle.classes = Modal_module_default),
        (ModalTitle.displayName = "@mantine/core/ModalTitle"));
      const Modal_defaultProps = {
          closeOnClickOutside: !0,
          withinPortal: !0,
          lockScroll: !0,
          trapFocus: !0,
          returnFocus: !0,
          closeOnEscape: !0,
          keepMounted: !1,
          zIndex: (0, get_default_z_index.I)("modal"),
          transitionProps: { duration: 200, transition: "fade-down" },
          withOverlay: !0,
          withCloseButton: !0,
        },
        Modal = (0, factory.P9)((_props) => {
          const {
              title,
              withOverlay,
              overlayProps,
              withCloseButton,
              closeButtonProps,
              children,
              radius,
              opened,
              stackId,
              zIndex,
              ...others
            } = (0, use_props.Y)("Modal", Modal_defaultProps, _props),
            ctx = (0, react.use)(ModalStackContext),
            hasHeader = !!title || withCloseButton,
            stackProps =
              ctx && stackId
                ? {
                    closeOnEscape: ctx.currentId === stackId,
                    trapFocus: ctx.currentId === stackId,
                    zIndex: ctx.getZIndex(stackId),
                  }
                : {},
            overlayVisible =
              !1 !== withOverlay &&
              (stackId && ctx ? ctx.currentId === stackId : opened);
          return (
            (0, react.useEffect)(() => {
              ctx &&
                stackId &&
                (opened
                  ? ctx.addModal(
                      stackId,
                      zIndex || (0, get_default_z_index.I)("modal"),
                    )
                  : ctx.removeModal(stackId));
            }, [opened, stackId, zIndex]),
            (0, jsx_runtime.jsxs)(ModalRoot, {
              radius,
              opened,
              zIndex: ctx && stackId ? ctx.getZIndex(stackId) : zIndex,
              ...others,
              ...stackProps,
              children: [
                withOverlay &&
                  (0, jsx_runtime.jsx)(ModalOverlay, {
                    visible: overlayVisible,
                    transitionProps: ctx && stackId ? { duration: 0 } : void 0,
                    ...overlayProps,
                  }),
                (0, jsx_runtime.jsxs)(ModalContent, {
                  radius,
                  __hidden:
                    !!(ctx && stackId && opened) && stackId !== ctx.currentId,
                  children: [
                    hasHeader &&
                      (0, jsx_runtime.jsxs)(ModalHeader, {
                        children: [
                          title &&
                            (0, jsx_runtime.jsx)(ModalTitle, {
                              children: title,
                            }),
                          withCloseButton &&
                            (0, jsx_runtime.jsx)(ModalCloseButton, {
                              ...closeButtonProps,
                            }),
                        ],
                      }),
                    (0, jsx_runtime.jsx)(ModalBody, { children }),
                  ],
                }),
              ],
            })
          );
        });
      ((Modal.classes = Modal_module_default),
        (Modal.displayName = "@mantine/core/Modal"),
        (Modal.Root = ModalRoot),
        (Modal.Overlay = ModalOverlay),
        (Modal.Content = ModalContent),
        (Modal.Body = ModalBody),
        (Modal.Header = ModalHeader),
        (Modal.Title = ModalTitle),
        (Modal.CloseButton = ModalCloseButton),
        (Modal.Stack = ModalStack));
    },
    "./node_modules/@mantine/core/esm/components/Paper/Paper.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { t: () => Paper });
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
        Paper_module_default = { root: "m_1b7284a3" },
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const varsResolver = (0, create_vars_resolver.V)(
          (_, { radius, shadow }) => ({
            root: {
              "--paper-radius":
                void 0 === radius ? void 0 : (0, get_size.nJ)(radius),
              "--paper-shadow": (0, get_size.dh)(shadow),
            },
          }),
        ),
        Paper = (0, polymorphic_factory.v)((_props) => {
          const props = (0, use_props.Y)("Paper", null, _props),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              withBorder,
              vars,
              radius,
              shadow,
              variant,
              mod,
              attributes,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: "Paper",
              props,
              classes: Paper_module_default,
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
            mod: [{ "data-with-border": withBorder }, mod],
            ...getStyles("root"),
            variant,
            ...others,
          });
        });
      ((Paper.classes = Paper_module_default),
        (Paper.varsResolver = varsResolver),
        (Paper.displayName = "@mantine/core/Paper"));
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
    "./node_modules/@mantine/core/esm/components/Text/Text.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { E: () => Text });
      var get_size = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs",
        ),
        create_vars_resolver = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs",
        ),
        get_gradient = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs",
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
        Text_module_default = { root: "m_b6d8b162" },
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      function getTextTruncate(truncate) {
        return "start" === truncate
          ? "start"
          : "end" === truncate || truncate
            ? "end"
            : void 0;
      }
      const defaultProps = { inherit: !1 },
        varsResolver = (0, create_vars_resolver.V)(
          (theme, { variant, lineClamp, gradient, size, textWrap }) => ({
            root: {
              "--text-fz": (0, get_size.ny)(size),
              "--text-lh": (0, get_size.ks)(size),
              "--text-gradient":
                "gradient" === variant
                  ? (0, get_gradient.v)(gradient, theme)
                  : void 0,
              "--text-line-clamp":
                "number" == typeof lineClamp ? lineClamp.toString() : void 0,
              "--text-text-wrap": textWrap,
            },
          }),
        ),
        Text = (0, polymorphic_factory.v)((_props) => {
          const props = (0, use_props.Y)("Text", defaultProps, _props),
            {
              lineClamp,
              truncate,
              inline,
              inherit,
              gradient,
              span,
              textWrap,
              __staticSelector,
              vars,
              className,
              style,
              classNames,
              styles,
              unstyled,
              variant,
              mod,
              size,
              attributes,
              ...others
            } = props;
          return (0, jsx_runtime.jsx)(Box.a, {
            ...(0, use_styles.I)({
              name: ["Text", __staticSelector],
              props,
              classes: Text_module_default,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver,
            })("root", { focusable: !0 }),
            component: span ? "span" : "p",
            variant,
            mod: [
              {
                "data-truncate": getTextTruncate(truncate),
                "data-line-clamp": "number" == typeof lineClamp,
                "data-inline": inline,
                "data-inherit": inherit,
              },
              mod,
            ],
            size,
            ...others,
          });
        });
      ((Text.classes = Text_module_default),
        (Text.varsResolver = varsResolver),
        (Text.displayName = "@mantine/core/Text"));
    },
    "./node_modules/@mantine/core/esm/components/ThemeIcon/ThemeIcon.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { L: () => ThemeIcon });
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
        ThemeIcon_module_default = { root: "m_7341320d" },
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const varsResolver = (0, create_vars_resolver.V)(
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
                "--ti-size": (0, get_size.YC)(size, "ti-size"),
                "--ti-radius":
                  void 0 === radius ? void 0 : (0, get_size.nJ)(radius),
                "--ti-bg": color || variant ? colors.background : void 0,
                "--ti-color": color || variant ? colors.color : void 0,
                "--ti-bd": color || variant ? colors.border : void 0,
              },
            };
          },
        ),
        ThemeIcon = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)("ThemeIcon", null, _props),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              vars,
              autoContrast,
              attributes,
              ...others
            } = props;
          return (0, jsx_runtime.jsx)(Box.a, {
            ...(0, use_styles.I)({
              name: "ThemeIcon",
              classes: ThemeIcon_module_default,
              props,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver,
            })("root"),
            ...others,
          });
        });
      ((ThemeIcon.classes = ThemeIcon_module_default),
        (ThemeIcon.varsResolver = varsResolver),
        (ThemeIcon.displayName = "@mantine/core/ThemeIcon"));
    },
    "./node_modules/@mantine/core/esm/components/Title/Title.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { h: () => Title });
      var create_vars_resolver = __webpack_require__(
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
        rem = __webpack_require__(
          "./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs",
        );
      const headings = ["h1", "h2", "h3", "h4", "h5", "h6"],
        sizes = ["xs", "sm", "md", "lg", "xl"];
      var Title_module_default = { root: "m_8a5d1357" },
        jsx_runtime = __webpack_require__(
          "./node_modules/next/dist/compiled/react/jsx-runtime.js",
        );
      const defaultProps = { order: 1 },
        varsResolver = (0, create_vars_resolver.V)(
          (_, { order, size, lineClamp, textWrap }) => {
            const sizeVariables = (function getTitleSize(order, size) {
              const titleSize = void 0 !== size ? size : `h${order}`;
              return headings.includes(titleSize)
                ? {
                    fontSize: `var(--mantine-${titleSize}-font-size)`,
                    fontWeight: `var(--mantine-${titleSize}-font-weight)`,
                    lineHeight: `var(--mantine-${titleSize}-line-height)`,
                  }
                : sizes.includes(titleSize)
                  ? {
                      fontSize: `var(--mantine-font-size-${titleSize})`,
                      fontWeight: `var(--mantine-h${order}-font-weight)`,
                      lineHeight: `var(--mantine-h${order}-line-height)`,
                    }
                  : {
                      fontSize: (0, rem.D)(titleSize),
                      fontWeight: `var(--mantine-h${order}-font-weight)`,
                      lineHeight: `var(--mantine-h${order}-line-height)`,
                    };
            })(order || 1, size);
            return {
              root: {
                "--title-fw": sizeVariables.fontWeight,
                "--title-lh": sizeVariables.lineHeight,
                "--title-fz": sizeVariables.fontSize,
                "--title-line-clamp":
                  "number" == typeof lineClamp ? lineClamp.toString() : void 0,
                "--title-text-wrap": textWrap,
              },
            };
          },
        ),
        Title = (0, factory.P9)((_props) => {
          const props = (0, use_props.Y)("Title", defaultProps, _props),
            {
              classNames,
              className,
              style,
              styles,
              unstyled,
              order,
              vars,
              size,
              variant,
              lineClamp,
              textWrap,
              mod,
              attributes,
              ...others
            } = props,
            getStyles = (0, use_styles.I)({
              name: "Title",
              props,
              classes: Title_module_default,
              className,
              style,
              classNames,
              styles,
              unstyled,
              attributes,
              vars,
              varsResolver,
            });
          return [1, 2, 3, 4, 5, 6].includes(order)
            ? (0, jsx_runtime.jsx)(Box.a, {
                ...getStyles("root"),
                component: `h${order}`,
                variant,
                mod: [
                  { order, "data-line-clamp": "number" == typeof lineClamp },
                  mod,
                ],
                size,
                ...others,
              })
            : null;
        });
      ((Title.classes = Title_module_default),
        (Title.varsResolver = varsResolver),
        (Title.displayName = "@mantine/core/Title"));
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
    "./node_modules/@tabler/icons-react/dist/esm/icons/IconLink.mjs"(
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) {
      __webpack_require__.d(__webpack_exports__, { A: () => IconLink });
      const IconLink = (0,
      __webpack_require__(
        "./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs",
      ).A)("outline", "link", "Link", [
        ["path", { d: "M9 15l6 -6", key: "svg-0" }],
        [
          "path",
          {
            d: "M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464",
            key: "svg-1",
          },
        ],
        [
          "path",
          {
            d: "M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463",
            key: "svg-2",
          },
        ],
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
//# sourceMappingURL=41.1ed56ff9.iframe.bundle.js.map
