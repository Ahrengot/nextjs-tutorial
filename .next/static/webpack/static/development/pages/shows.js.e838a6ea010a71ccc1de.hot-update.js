webpackHotUpdate("static/development/pages/shows.js",{

/***/ "./pages/shows/index.tsx":
/*!*******************************!*\
  !*** ./pages/shows/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/PageLayout */ "./components/PageLayout.tsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/ahrengot/Documents/work/experiments/nextjs/tutorial/pages/shows/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var ShowItem = function ShowItem(_ref) {
  var show = _ref.show;
  return __jsx("article", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, show.image && __jsx("img", {
    src: show.image.medium,
    alt: show.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, show.name), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, show.summary));
};

var ShowSearchPage = function ShowSearchPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      didSearch = _useState[0],
      setDidSearch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      results = _useState2[0],
      setResults = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isLoading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      query = _useState4[0],
      setQuery = _useState4[1];

  var search = function search(e) {
    var res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function search$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();

            if (!(isLoading || !query)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            setResults([]);
            setLoading(true);
            setDidSearch(false);
            _context.next = 8;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://api.tvmaze.com/search/shows?q=".concat(encodeURIComponent(query))));

          case 8:
            res = _context.sent;
            _context.next = 11;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(res.json());

          case 11:
            data = _context.sent;
            setLoading(false);
            setResults(data);
            setDidSearch(true);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (didSearch) {
      setDidSearch(false);
    }
  }, [query]);
  return __jsx(_components_PageLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Search for movies"), __jsx("form", {
    onSubmit: search,
    className: "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("fieldset", {
    disabled: isLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("input", {
    type: "search",
    className: "form-control rounded-pill",
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), results.length === 0 && didSearch && __jsx("p", {
    className: "mt-3 text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "No results :("), results && __jsx("ul", {
    className: "list-unstyled",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, results.map(function (movie) {
    return __jsx("li", {
      key: movie.show.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/shows/[id]",
      as: "/shows/".concat(movie.show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx(ShowItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, movie, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowSearchPage);

/***/ })

})
//# sourceMappingURL=shows.js.e838a6ea010a71ccc1de.hot-update.js.map