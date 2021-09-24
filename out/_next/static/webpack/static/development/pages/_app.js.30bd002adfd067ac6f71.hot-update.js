webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/components/SiteNavigationItem/SiteNavigationItem.js":
/*!*****************************************************************!*\
  !*** ./src/components/SiteNavigationItem/SiteNavigationItem.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteNavigationItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _navData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navData */ "./src/components/SiteNavigationItem/navData.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/theme */ "./src/styles/theme.js");

var _jsxFileName = "/Users/kpemberton/Documents/Projects/portfolio-react/src/components/SiteNavigationItem/SiteNavigationItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    ", "\n    left: 0;\n    width: 100%;\n    height: 6%;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    ", "\n    height: 100%;\n    width: 4%;\n  \n    ", ";\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var navSlideDesktop = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(["from{left:0%;}to{left:", ";transform:translateX(0%);}"], function (props) {
  return props.position;
});
var NavListItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "SiteNavigationItem__NavListItem",
  componentId: "g5gqhv-0"
})(["position:absolute;display:flex;justify-content:center;align-items:center;z-index:11;background:", ";", " ", ""], function (props) {
  return props.backgroundColor;
}, Object(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["desktop"])(_templateObject(), function (props) {
  return props.position && "left: ".concat(props.position, ";");
}, function (props) {
  return props.isActive && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["animation:", " 0.4s linear;"], navSlideDesktop);
}), Object(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["mobile"])(_templateObject2(), function (props) {
  return props.position && "top: ".concat(props.position, ";");
}));
var NavLink = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].a.withConfig({
  displayName: "SiteNavigationItem__NavLink",
  componentId: "g5gqhv-1"
})(["display:flex;justify-content:center;align-items:center;width:100%;height:100%;color:white;cursor:pointer;"]);

var getPosition = function getPosition(linkRoute, activeRoute, mobile) {
  var linkRouteName = linkRoute === "_error" ? "error" : linkRoute;
  var activeRouteName = activeRoute === "_error" ? "error" : activeRoute;
  var screenSize = mobile ? "mobile" : "desktop";

  if (linkRouteName === "error" && activeRouteName === "error") {
    return mobile ? "0" : "96%";
  }

  if (linkRouteName === "error" && activeRouteName !== "error") {
    return null;
  }

  if (linkRouteName === activeRouteName) {
    return mobile ? "0" : "96%";
  }

  return _navData__WEBPACK_IMPORTED_MODULE_5__["NavData"][linkRouteName].activeRoute[activeRouteName].position[screenSize];
};

function SiteNavigationItem(_ref) {
  var activeRoute = _ref.activeRoute,
      isActive = _ref.isActive,
      route = _ref.route;

  var _useBreakpoint = Object(_styles_theme__WEBPACK_IMPORTED_MODULE_7__["useBreakpoint"])(),
      desktop = _useBreakpoint.desktop,
      mobile = _useBreakpoint.mobile;

  var linkRoute = route === "/" ? "home" : route.substring(1);
  var currentRoute = activeRoute === "/" ? "home" : activeRoute.substring(1);
  var isErrorPage = linkRoute === "_error" && currentRoute === "_error";

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeContext"]),
      colors = _useContext.colors;

  var position = getPosition(linkRoute, currentRoute, mobile);
  var iconSize = desktop ? 28 : 22;

  if (linkRoute === "_error" && !isErrorPage) {
    return null;
  }

  var getIcon = function getIcon(route) {
    switch (route) {
      case "/":
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaHome"], {
          size: iconSize,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        });

      case "/about":
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaUser"], {
          size: iconSize - 3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        });

      case "/contact":
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaEnvelope"], {
          size: iconSize,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        });

      case "/_error":
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaExclamationCircle"], {
          size: iconSize,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        });

      case "/portfolio":
        return __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaBriefcase"], {
          size: iconSize,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        });

      default:
        return null;
    }
  };

  return __jsx(NavListItem, {
    backgroundColor: isErrorPage ? colors.error : colors[linkRoute],
    isActive: isActive,
    position: position,
    "data-desktop": desktop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    key: route,
    href: route,
    as: route,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(NavLink, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, getIcon(route))));
}
SiteNavigationItem.propTypes = {
  activeRoute: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  route: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

/***/ })

})
//# sourceMappingURL=_app.js.30bd002adfd067ac6f71.hot-update.js.map