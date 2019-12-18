webpackHotUpdate("static/development/pages/shows/[id].js",{

/***/ "./pages/shows/[id].tsx":
/*!******************************!*\
  !*** ./pages/shows/[id].tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PageLayout */ "./components/PageLayout.tsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/ahrengot/Documents/work/experiments/nextjs/tutorial/pages/shows/[id].tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var SingleShowPage = function SingleShowPage(_ref) {
  var show = _ref.show,
      showId = _ref.showId;

  if (!show) {
    return __jsx(_components_PageLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Nothing found for ID \"", showId, "\""), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/shows",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, "\u2190 back to search")));
  }

  console.log("Show", show);
  return __jsx(_components_PageLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, show.name), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3125661393" + " " + "col-6 col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, show.image && show.image.original && __jsx("img", {
    src: show.image.original,
    alt: show.name,
    className: "jsx-3125661393",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3125661393",
    __self: this
  }, "img.jsx-3125661393{max-width:100%;height:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haHJlbmdvdC9Eb2N1bWVudHMvd29yay9leHBlcmltZW50cy9uZXh0anMvdHV0b3JpYWwvcGFnZXMvc2hvd3MvW2lkXS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJzQixBQUc4QixlQUNILFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2FocmVuZ290L0RvY3VtZW50cy93b3JrL2V4cGVyaW1lbnRzL25leHRqcy90dXRvcmlhbC9wYWdlcy9zaG93cy9baWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhZ2VMYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmltcG9ydCB7IFNob3dEYXRhIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3Nob3dcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgc2hvdz8gOiBTaG93RGF0YTtcbiAgc2hvd0lkOiBzdHJpbmcsXG59XG5cbmNvbnN0IFNpbmdsZVNob3dQYWdlID0gKHtzaG93LCBzaG93SWR9OlByb3BzKSA9PiB7XG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZUxheW91dD5cbiAgICAgICAgPGgxPk5vdGhpbmcgZm91bmQgZm9yIElEIFwie3Nob3dJZH1cIjwvaDE+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvd3NcIj48YT4mbGFycjsgYmFjayB0byBzZWFyY2g8L2E+PC9MaW5rPlxuICAgICAgPC9QYWdlTGF5b3V0PlxuICAgIClcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiU2hvd1wiLCBzaG93KTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlTGF5b3V0PlxuICAgICAgPGgxPntzaG93Lm5hbWV9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLWxnLTRcIj5cbiAgICAgICAgICB7c2hvdy5pbWFnZSAmJiBzaG93LmltYWdlLm9yaWdpbmFsICYmIDxpbWcgc3JjPXtzaG93LmltYWdlLm9yaWdpbmFsfSBhbHQ9e3Nob3cubmFtZX0gLz59XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbGctOFwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTMgYmctbGlnaHQgcm91bmRlZCBweS0zIHB4LTRcIj5cbiAgICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgICAgPGR0PkRhdGU8L2R0PlxuICAgICAgICAgICAgICA8ZGQ+e3Nob3cucHJlbWllcmVkfTwvZGQ+XG4gICAgICAgICAgICAgIDxkdD5TdW1tYXJ5PC9kdD5cbiAgICAgICAgICAgICAgPGRkIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2hvdy5zdW1tYXJ5IH19IC8+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBkZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3ZtaW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93c1wiPlxuICAgICAgICAgICAgPGE+JmxhcnI7IGJhY2sgdG8gc2VhcmNoPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2VMYXlvdXQ+XG4gICk7XG59O1xuXG5TaW5nbGVTaG93UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3F1ZXJ5fSk6UHJvbWlzZTxQcm9wcz4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke3F1ZXJ5LmlkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHNob3c6IGRhdGEsXG4gICAgc2hvd0lkOiBxdWVyeS5pZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVNob3dQYWdlO1xuIl19 */\n/*@ sourceURL=/Users/ahrengot/Documents/work/experiments/nextjs/tutorial/pages/shows/[id].tsx */")), __jsx("div", {
    className: "col-6 col-lg-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("section", {
    className: "jsx-2570670793" + " " + "mb-3 bg-light rounded py-3 px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("dl", {
    className: "jsx-2570670793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("dt", {
    className: "jsx-2570670793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Date"), __jsx("dd", {
    className: "jsx-2570670793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, show.premiered), __jsx("dt", {
    className: "jsx-2570670793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Summary"), __jsx("dd", {
    dangerouslySetInnerHTML: {
      __html: show.summary
    },
    className: "jsx-2570670793",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2570670793",
    __self: this
  }, "dd.jsx-2570670793{margin-bottom:3vmin;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haHJlbmdvdC9Eb2N1bWVudHMvd29yay9leHBlcmltZW50cy9uZXh0anMvdHV0b3JpYWwvcGFnZXMvc2hvd3MvW2lkXS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEN3QixBQUdxQyxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2FocmVuZ290L0RvY3VtZW50cy93b3JrL2V4cGVyaW1lbnRzL25leHRqcy90dXRvcmlhbC9wYWdlcy9zaG93cy9baWRdLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhZ2VMYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmltcG9ydCB7IFNob3dEYXRhIH0gZnJvbSBcIi4uLy4uL3R5cGVzL3Nob3dcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgc2hvdz8gOiBTaG93RGF0YTtcbiAgc2hvd0lkOiBzdHJpbmcsXG59XG5cbmNvbnN0IFNpbmdsZVNob3dQYWdlID0gKHtzaG93LCBzaG93SWR9OlByb3BzKSA9PiB7XG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiAoXG4gICAgICA8UGFnZUxheW91dD5cbiAgICAgICAgPGgxPk5vdGhpbmcgZm91bmQgZm9yIElEIFwie3Nob3dJZH1cIjwvaDE+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvd3NcIj48YT4mbGFycjsgYmFjayB0byBzZWFyY2g8L2E+PC9MaW5rPlxuICAgICAgPC9QYWdlTGF5b3V0PlxuICAgIClcbiAgfVxuXG4gIGNvbnNvbGUubG9nKFwiU2hvd1wiLCBzaG93KTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdlTGF5b3V0PlxuICAgICAgPGgxPntzaG93Lm5hbWV9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTYgY29sLWxnLTRcIj5cbiAgICAgICAgICB7c2hvdy5pbWFnZSAmJiBzaG93LmltYWdlLm9yaWdpbmFsICYmIDxpbWcgc3JjPXtzaG93LmltYWdlLm9yaWdpbmFsfSBhbHQ9e3Nob3cubmFtZX0gLz59XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBjb2wtbGctOFwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLTMgYmctbGlnaHQgcm91bmRlZCBweS0zIHB4LTRcIj5cbiAgICAgICAgICAgIDxkbD5cbiAgICAgICAgICAgICAgPGR0PkRhdGU8L2R0PlxuICAgICAgICAgICAgICA8ZGQ+e3Nob3cucHJlbWllcmVkfTwvZGQ+XG4gICAgICAgICAgICAgIDxkdD5TdW1tYXJ5PC9kdD5cbiAgICAgICAgICAgICAgPGRkIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2hvdy5zdW1tYXJ5IH19IC8+XG4gICAgICAgICAgICA8L2RsPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBkZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3ZtaW47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG93c1wiPlxuICAgICAgICAgICAgPGE+JmxhcnI7IGJhY2sgdG8gc2VhcmNoPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1BhZ2VMYXlvdXQ+XG4gICk7XG59O1xuXG5TaW5nbGVTaG93UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3F1ZXJ5fSk6UHJvbWlzZTxQcm9wcz4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cy8ke3F1ZXJ5LmlkfWApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHNob3c6IGRhdGEsXG4gICAgc2hvd0lkOiBxdWVyeS5pZFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZVNob3dQYWdlO1xuIl19 */\n/*@ sourceURL=/Users/ahrengot/Documents/work/experiments/nextjs/tutorial/pages/shows/[id].tsx */")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/shows",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "\u2190 back to search")))));
};

SingleShowPage.getInitialProps = function _callee(_ref2) {
  var query, res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          query = _ref2.query;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://api.tvmaze.com/shows/".concat(query.id)));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          data = _context.sent;
          return _context.abrupt("return", {
            show: data,
            showId: query.id
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SingleShowPage);

/***/ })

})
//# sourceMappingURL=[id].js.31b69fa020efc2955273.hot-update.js.map