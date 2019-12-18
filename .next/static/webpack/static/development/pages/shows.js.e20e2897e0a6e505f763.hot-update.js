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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_PageLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PageLayout */ "./components/PageLayout.tsx");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/ahrengot/Documents/work/experiments/nextjs/tutorial/pages/shows/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





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
    className: "card-img-top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, show.name), __jsx("div", {
    className: "card-text",
    dangerouslySetInnerHTML: {
      __html: show.summary
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })));
};

var ShowSearchPage = function ShowSearchPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      didSearch = _useState[0],
      setDidSearch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      results = _useState2[0],
      setResults = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
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
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("https://api.tvmaze.com/search/shows?q=".concat(encodeURIComponent(query))));

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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (didSearch) {
      setDidSearch(false);
    }
  }, [query]);
  return __jsx(_components_PageLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2472709666",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Search for movies"), __jsx("form", {
    onSubmit: search,
    className: "jsx-2472709666" + " " + "mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("fieldset", {
    disabled: isLoading,
    className: "jsx-2472709666",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("input", {
    type: "search",
    value: query,
    placeholder: "Enter search phrase...",
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    autoFocus: true,
    required: true,
    className: "jsx-2472709666" + " " + "form-control rounded-pill",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), results.length === 0 && didSearch && __jsx("p", {
    className: "jsx-2472709666" + " " + "mt-3 text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "No results :("), results && __jsx("div", {
    className: "jsx-2472709666" + " " + "card-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, results.map(function (movie) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/shows/[id]",
      as: "/shows/".concat(movie.show.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-2472709666" + " " + "card text-reset text-decoration-none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx(ShowItem, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, movie, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }))));
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2472709666",
    __self: this
  }, ".card-grid.jsx-2472709666{display:grid;grid-template-columns:repeat(1,1fr);gap:0.4rem;}@media (min-width:550px){.card-grid.jsx-2472709666{grid-template-columns:repeat(2,1fr);}}@media (min-width:720px){.card-grid.jsx-2472709666{grid-template-columns:repeat(3,1fr);}}@media (min-width:1150px){.card-grid.jsx-2472709666{grid-template-columns:repeat(4,1fr);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9haHJlbmdvdC9Eb2N1bWVudHMvd29yay9leHBlcmltZW50cy9uZXh0anMvdHV0b3JpYWwvcGFnZXMvc2hvd3MvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRFa0IsQUFHd0IsQUFPMEIsQUFNQSxBQU1BLGFBbEJGLHVCQU9yQyxBQU1BLEFBTUEsYUFsQlcsV0FDYiIsImZpbGUiOiIvVXNlcnMvYWhyZW5nb3QvRG9jdW1lbnRzL3dvcmsvZXhwZXJpbWVudHMvbmV4dGpzL3R1dG9yaWFsL3BhZ2VzL3Nob3dzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBQYWdlTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BhZ2VMYXlvdXRcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgeyBTaG93IH0gZnJvbSBcIi4uLy4uL3R5cGVzL3Nob3dcIjtcblxuY29uc3QgU2hvd0l0ZW0gPSAoeyBzaG93IH06IFNob3cpID0+IChcbiAgPGFydGljbGU+XG4gICAge3Nob3cuaW1hZ2UgJiYgPGltZyBzcmM9e3Nob3cuaW1hZ2UubWVkaXVtfSBhbHQ9e3Nob3cubmFtZX0gY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgLz59XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3Nob3cubmFtZX08L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNob3cuc3VtbWFyeSB9fSAvPlxuICAgIDwvZGl2PlxuICA8L2FydGljbGU+XG4pO1xuXG5jb25zdCBTaG93U2VhcmNoUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2RpZFNlYXJjaCwgc2V0RGlkU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdHMsIHNldFJlc3VsdHNdID0gdXNlU3RhdGU8U2hvd1tdPihbXSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHNlYXJjaCA9IGFzeW5jIChlOlJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChpc0xvYWRpbmcgfHwgIXF1ZXJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHNldFJlc3VsdHMoW10pO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgc2V0RGlkU2VhcmNoKGZhbHNlKTtcbiAgICBcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgXG5cbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICBzZXRSZXN1bHRzKGRhdGEpO1xuICAgIHNldERpZFNlYXJjaCh0cnVlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGRpZFNlYXJjaCkge1xuICAgICAgc2V0RGlkU2VhcmNoKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtxdWVyeV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFBhZ2VMYXlvdXQ+XG4gICAgICA8aDE+U2VhcmNoIGZvciBtb3ZpZXM8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlYXJjaH0gY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICA8ZmllbGRzZXQgZGlzYWJsZWQ9e2lzTG9hZGluZ30+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCByb3VuZGVkLXBpbGxcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBzZWFyY2ggcGhyYXNlLi4uXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPC9mb3JtPlxuICAgICAge3Jlc3VsdHMubGVuZ3RoID09PSAwICYmIGRpZFNlYXJjaCAmJiA8cCBjbGFzc05hbWU9XCJtdC0zIHRleHQtZGFuZ2VyXCI+Tm8gcmVzdWx0cyA6KDwvcD59XG4gICAgICB7cmVzdWx0cyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ncmlkXCI+XG4gICAgICAgICAge3Jlc3VsdHMubWFwKG1vdmllID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvd3MvW2lkXVwiIGFzPXtgL3Nob3dzLyR7bW92aWUuc2hvdy5pZH1gfT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXJlc2V0IHRleHQtZGVjb3JhdGlvbi1ub25lXCI+XG4gICAgICAgICAgICAgICAgPFNob3dJdGVtIHsuLi5tb3ZpZX0gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jYXJkLWdyaWQge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcbiAgICAgICAgICBnYXA6IDAuNHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xuICAgICAgICAgIC5jYXJkLWdyaWQge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAuY2FyZC1ncmlkIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDExNTBweCkge1xuICAgICAgICAgIC5jYXJkLWdyaWQge1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L1BhZ2VMYXlvdXQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dTZWFyY2hQYWdlOyJdfQ== */\n/*@ sourceURL=/Users/ahrengot/Documents/work/experiments/nextjs/tutorial/pages/shows/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ShowSearchPage);

/***/ })

})
//# sourceMappingURL=shows.js.e20e2897e0a6e505f763.hot-update.js.map