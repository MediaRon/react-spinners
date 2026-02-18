"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ReactSpinner1: () => ReactSpinner1,
  ReactSpinner10: () => ReactSpinner10,
  ReactSpinner11: () => ReactSpinner11,
  ReactSpinner12: () => ReactSpinner12,
  ReactSpinner13: () => ReactSpinner13,
  ReactSpinner14: () => ReactSpinner14,
  ReactSpinner15: () => ReactSpinner15,
  ReactSpinner16: () => ReactSpinner16,
  ReactSpinner17: () => ReactSpinner17,
  ReactSpinner18: () => ReactSpinner18,
  ReactSpinner19: () => ReactSpinner19,
  ReactSpinner2: () => ReactSpinner2,
  ReactSpinner20: () => ReactSpinner20,
  ReactSpinner21: () => ReactSpinner21,
  ReactSpinner22: () => ReactSpinner22,
  ReactSpinner23: () => ReactSpinner23,
  ReactSpinner24: () => ReactSpinner24,
  ReactSpinner25: () => ReactSpinner25,
  ReactSpinner26: () => ReactSpinner26,
  ReactSpinner3: () => ReactSpinner3,
  ReactSpinner4: () => ReactSpinner4,
  ReactSpinner5: () => ReactSpinner5,
  ReactSpinner6: () => ReactSpinner6,
  ReactSpinner7: () => ReactSpinner7,
  ReactSpinner8: () => ReactSpinner8,
  ReactSpinner9: () => ReactSpinner9
});
module.exports = __toCommonJS(index_exports);

// src/core/withSpinnerControls.tsx
var React = __toESM(require("react"));
function withSpinnerControls(Comp) {
  return function Spinner({
    size = 24,
    color,
    speedMultiplier = 1,
    className,
    style,
    ...rest
  }) {
    const duration = 1 / Math.max(0.1, speedMultiplier);
    return /* @__PURE__ */ React.createElement(
      Comp,
      {
        width: size,
        height: size,
        className: ["dlx-spinner", className].filter(Boolean).join(" "),
        "aria-label": "Loading...",
        role: "img",
        style: {
          ...color ? { color } : null,
          animationDuration: `${duration}s`,
          ...style
        },
        ...rest
      }
    );
  };
}

// src/react/ReactSpinner1.tsx
var React2 = __toESM(require("react"));
var SvgReactSpinner1 = (props) => /* @__PURE__ */ React2.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 143 148",
    ...props
  },
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      d: "M86.903 13.088c0 7.228-5.859 13.087-13.087 13.087-7.232 0-13.091-5.859-13.091-13.087C60.725 5.859 66.584 0 73.816 0c7.228 0 13.087 5.859 13.087 13.088",
      style: {
        fill: "currentColor",
        opacity: 1
      }
    }
  ),
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      d: "M110.212 21.697a4.577 4.577 0 1 1-9.152-.004 4.577 4.577 0 0 1 9.152.004",
      style: {
        fill: "currentColor",
        opacity: 0.08,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      d: "M133.606 44.316a5.35 5.35 0 1 1-10.7 0 5.35 5.35 0 0 1 10.7 0",
      style: {
        fill: "currentColor",
        opacity: 0.16,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      d: "M142.987 76.138a6.124 6.124 0 1 1-12.246 0 6.124 6.124 0 1 1 12.246 0",
      style: {
        fill: "currentColor",
        opacity: 0.24,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      d: "M135.153 107.959c0 3.81-3.09 6.897-6.897 6.897a6.897 6.897 0 1 1 0-13.794 6.9 6.9 0 0 1 6.897 6.897",
      style: {
        fill: "currentColor",
        opacity: 0.32,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      d: "M113.306 130.578a7.67 7.67 0 1 1-15.34 0 7.67 7.67 0 1 1 15.34 0",
      style: {
        fill: "currentColor",
        opacity: 0.4,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      d: "M82.259 139.184a8.445 8.445 0 1 1-8.443-8.443 8.444 8.444 0 0 1 8.443 8.443",
      style: {
        fill: "currentColor",
        opacity: 0.48,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      d: "M51.212 130.578c0 5.091-4.128 9.219-9.218 9.219-5.094 0-9.222-4.128-9.222-9.219s4.128-9.219 9.222-9.219c5.09 0 9.218 4.129 9.218 9.219",
      style: {
        fill: "currentColor",
        opacity: 0.56,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      d: "M29.366 107.959c0 5.519-4.475 9.994-9.994 9.994s-9.991-4.475-9.991-9.994c0-5.518 4.472-9.993 9.991-9.993s9.994 4.475 9.994 9.993",
      style: {
        fill: "currentColor",
        opacity: 0.64,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      d: "M21.531 76.138c0 5.946-4.819 10.765-10.765 10.765S0 82.084 0 76.138s4.819-10.769 10.766-10.769c5.946 0 10.765 4.822 10.765 10.769",
      style: {
        fill: "currentColor",
        opacity: 0.72,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      d: "M30.916 44.316c0 6.375-5.169 11.54-11.544 11.54-6.372 0-11.538-5.165-11.538-11.54S13 32.775 19.372 32.775c6.375 0 11.544 5.166 11.544 11.541",
      style: {
        fill: "currentColor",
        opacity: 0.8,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React2.createElement(
    "path",
    {
      d: "M54.306 21.697c0 6.8-5.512 12.312-12.312 12.312-6.803 0-12.316-5.512-12.316-12.312S35.191 9.381 41.994 9.381c6.8 0 12.312 5.516 12.312 12.316",
      style: {
        fill: "currentColor",
        opacity: 0.88,
        fillRule: "nonzero"
      }
    }
  )
);
var ReactSpinner1_default = SvgReactSpinner1;

// src/react/ReactSpinner10.tsx
var React3 = __toESM(require("react"));
var SvgReactSpinner10 = (props) => /* @__PURE__ */ React3.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 151 151", ...props }, /* @__PURE__ */ React3.createElement(
  "path",
  {
    d: "M75.216 45.261 69.845 6.155A5.416 5.416 0 0 1 74.476.052a5.417 5.417 0 0 1 6.106 6.103z",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React3.createElement(
  "path",
  {
    d: "M60.241 49.276 36.035 18.092a5.421 5.421 0 0 1 8.563-6.647c.303.394.556.841.737 1.278z",
    style: {
      fill: "currentColor",
      opacity: 0.88,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React3.createElement(
  "path",
  {
    d: "M49.276 60.236 12.723 45.333a5.42 5.42 0 0 1-2.972-7.063 5.42 5.42 0 0 1 8.34-2.237z",
    style: {
      fill: "currentColor",
      opacity: 0.8,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React3.createElement(
  "path",
  {
    d: "M45.266 75.211 6.157 80.58a5.42 5.42 0 0 1-6.106-4.632 5.42 5.42 0 0 1 6.106-6.106z",
    style: {
      fill: "currentColor",
      opacity: 0.72,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React3.createElement(
  "path",
  {
    d: "m49.276 90.186-31.185 24.203a5.415 5.415 0 0 1-7.6-.959 5.418 5.418 0 0 1 2.232-8.341z",
    style: {
      fill: "currentColor",
      opacity: 0.64,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React3.createElement(
  "path",
  {
    d: "m60.241 101.148-14.906 36.553a5.42 5.42 0 0 1-10.037-4.093c.19-.46.45-.9.737-1.278z",
    style: {
      fill: "currentColor",
      opacity: 0.56,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React3.createElement(
  "path",
  {
    d: "m75.216 105.161 5.366 39.106a5.419 5.419 0 1 1-10.737 0z",
    style: {
      fill: "currentColor",
      opacity: 0.48,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React3.createElement(
  "path",
  {
    d: "m90.188 101.148 24.203 31.182a5.414 5.414 0 0 1-.959 7.603 5.416 5.416 0 0 1-7.603-.956 5.9 5.9 0 0 1-.738-1.276z",
    style: {
      fill: "currentColor",
      opacity: 0.4,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React3.createElement(
  "path",
  {
    d: "m101.151 90.186 36.55 14.903a5.424 5.424 0 0 1 2.975 7.066 5.424 5.424 0 0 1-7.066 2.971c-.462-.19-.9-.449-1.275-.737z",
    style: {
      fill: "currentColor",
      opacity: 0.32,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React3.createElement(
  "path",
  {
    d: "m105.163 75.211 39.107-5.369a5.42 5.42 0 1 1 0 10.738z",
    style: {
      fill: "currentColor",
      opacity: 0.24,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React3.createElement(
  "path",
  {
    d: "m101.151 60.236 31.184-24.203a5.417 5.417 0 0 1 7.6.959 5.417 5.417 0 0 1-.956 7.606 5.7 5.7 0 0 1-1.278.735z",
    style: {
      fill: "currentColor",
      opacity: 0.16,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React3.createElement(
  "path",
  {
    d: "m90.188 49.276 14.903-36.553a5.42 5.42 0 0 1 7.066-2.971 5.42 5.42 0 0 1 2.972 7.062c-.191.463-.45.903-.738 1.278z",
    style: {
      fill: "currentColor",
      opacity: 0.92,
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner10_default = SvgReactSpinner10;

// src/react/ReactSpinner11.tsx
var React4 = __toESM(require("react"));
var SvgReactSpinner11 = (props) => /* @__PURE__ */ React4.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 145 141", ...props }, /* @__PURE__ */ React4.createElement(
  "path",
  {
    d: "M85.775 3.905a1.267 1.267 0 0 0 .916 1.538c13.994 3.553 26.153 12.24 33.944 23.525 7.884 11.259 11.284 24.997 9.896 37.959-1.253 12.988-7.312 24.966-16.318 33.41-8.969 8.509-20.7 13.368-32.3 13.862-.582.028-1.244.097-1.832.206-7.15 1.322-11.868 8.185-10.547 15.331 1.316 7.144 8.182 11.869 15.329 10.547l.422-.078c17.546-3.24 33.362-12.919 44.003-26.272 10.746-13.287 16.278-30.256 15.615-46.625-.484-16.378-7.034-32.146-17.697-43.659C116.619 12.055 102.078 4.661 87.15 2.955a1.275 1.275 0 0 0-1.375.95M57.806 137.549c-14.928-1.706-29.468-9.097-40.056-20.694C7.088 105.343.535 89.574.053 73.193c-.662-16.366 4.869-33.335 15.619-46.622C26.309 13.218 42.125 3.54 59.672.299l.422-.078c7.147-1.319 14.009 3.403 15.331 10.547 1.319 7.147-3.403 14.009-10.55 15.331-.587.109-1.25.178-1.831.209-11.6.491-23.331 5.35-32.303 13.863-9.003 8.441-15.06 20.419-16.316 33.406-1.39 12.963 2.013 26.7 9.897 37.96 7.791 11.284 19.953 19.975 33.944 23.525a1.268 1.268 0 0 1-.46 2.487",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner11_default = SvgReactSpinner11;

// src/react/ReactSpinner12.tsx
var React5 = __toESM(require("react"));
var SvgReactSpinner12 = (props) => /* @__PURE__ */ React5.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 149 149", ...props }, /* @__PURE__ */ React5.createElement(
  "path",
  {
    d: "M122.822 78.713a48.83 48.83 0 0 1-10.969 26.509l17.834 17.831c10.56-11.978 17.31-27.384 18.369-44.34zm-10.969-35.882a48.8 48.8 0 0 1 10.969 26.507h25.234c-1.059-16.957-7.809-32.363-18.369-44.341zm-6.628 69.019a48.8 48.8 0 0 1-26.509 10.966v25.237c16.956-1.059 32.362-7.812 44.343-18.369zm-35.884 10.966a48.8 48.8 0 0 1-26.507-10.966L25 129.684c11.978 10.56 27.384 17.31 44.341 18.369zm-33.138-17.594a48.8 48.8 0 0 1-10.969-26.509H0c1.059 16.956 7.809 32.362 18.372 44.34zM42.831 36.2a48.8 48.8 0 0 1 26.51-10.966V0C52.384 1.056 36.978 7.809 25 18.369zM78.716 0v25.234A48.8 48.8 0 0 1 105.225 36.2l17.834-17.831C111.081 7.809 95.675 1.056 78.716 0M0 69.338c1.059-16.957 7.809-32.363 18.372-44.341l17.831 17.834a48.8 48.8 0 0 0-10.969 26.507z",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner12_default = SvgReactSpinner12;

// src/react/ReactSpinner13.tsx
var React6 = __toESM(require("react"));
var SvgReactSpinner13 = (props) => /* @__PURE__ */ React6.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 146 146", ...props }, /* @__PURE__ */ React6.createElement(
  "path",
  {
    d: "M121.391 78.397a47.6 47.6 0 0 1-10.691 25.841l17.384 17.384c10.294-11.675 16.875-26.694 17.907-43.225zM110.7 43.419a47.58 47.58 0 0 1 10.691 25.84h24.6c-1.032-16.531-7.613-31.55-17.907-43.225zm-6.463 67.281a47.6 47.6 0 0 1-25.84 10.694v24.6c16.531-1.035 31.547-7.616 43.225-17.91zm-34.978 10.694A47.6 47.6 0 0 1 43.416 110.7l-17.385 17.384c11.678 10.294 26.697 16.879 43.228 17.91zm-32.306-17.156a47.6 47.6 0 0 1-10.69-25.841H1.662c1.035 16.531 7.616 31.55 17.91 43.225zm-8.625-84.582 15.203 15.203a48.97 48.97 0 0 1 24.163-9.993V3.347C53.097 4.594 39.55 10.206 28.328 19.656m14.988 19.407L23.75 19.5 25 18.4C37.406 7.459 52.678 1.134 69.159.106L70.819 0v27.684l-1.413.135a45.9 45.9 0 0 0-24.994 10.34zm36.643-14.197a49 49 0 0 1 24.166 9.997l15.2-15.207C108.1 10.206 94.556 4.594 79.959 3.347zm24.379 14.2-1.094-.903A45.93 45.93 0 0 0 78.25 27.819l-1.416-.135V0l1.66.106c16.481 1.028 31.75 7.353 44.159 18.294l1.25 1.1zM3.344 67.697h21.519a49 49 0 0 1 9.996-24.166L19.656 28.328C10.203 39.553 4.591 53.1 3.344 67.697m24.34 3.125H0l.103-1.659C1.134 52.681 7.459 37.409 18.397 25l1.103-1.247 19.562 19.563-.903 1.097a45.9 45.9 0 0 0-10.34 24.993z",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner13_default = SvgReactSpinner13;

// src/react/ReactSpinner14.tsx
var React7 = __toESM(require("react"));
var SvgReactSpinner14 = (props) => /* @__PURE__ */ React7.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 148 150", ...props }, /* @__PURE__ */ React7.createElement(
  "path",
  {
    d: "M83.969 29.509h-16.95L63.25 0h24.488z",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React7.createElement(
  "path",
  {
    d: "m57.516 33.159-13.55 8.81-18.35-21.625L45.188 7.616z",
    style: {
      fill: "currentColor",
      opacity: 0.88,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React7.createElement(
  "path",
  {
    d: "m35.069 51.022-6.488 13.937-25.7-8.196 9.372-20.132z",
    style: {
      fill: "currentColor",
      opacity: 0.8,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React7.createElement(
  "path",
  {
    d: "m25.581 75.597 2.138 14.422-24.631 6.925L0 76.113z",
    style: {
      fill: "currentColor",
      opacity: 0.72,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React7.createElement(
  "path",
  {
    d: "m34.003 103.706 9.053 10.403-16.1 18.072-13.075-15.028z",
    style: {
      fill: "currentColor",
      opacity: 0.64,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React7.createElement(
  "path",
  {
    d: "m55.919 123.609 12.45 3.75-3.76 22.503-17.981-5.418z",
    style: {
      fill: "currentColor",
      opacity: 0.56,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React7.createElement(
  "path",
  {
    d: "m83.281 127.928 11.691-3.522 8.728 19.572-16.888 5.084z",
    style: {
      fill: "currentColor",
      opacity: 0.48,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React7.createElement(
  "path",
  {
    d: "m110.441 114.769 7.497-8.616 16.662 11.134-10.828 12.444z",
    style: {
      fill: "currentColor",
      opacity: 0.4,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React7.createElement(
  "path",
  {
    d: "m127.025 89.003 1.556-10.512 18.65.375-2.25 15.184z",
    style: {
      fill: "currentColor",
      opacity: 0.32,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React7.createElement(
  "path",
  {
    d: "m125.863 59.862-4.151-8.921 14.604-9.21 5.996 12.885z",
    style: {
      fill: "currentColor",
      opacity: 0.24,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React7.createElement(
  "path",
  {
    d: "m108.078 34.409-7.584-4.934 6.903-14.3L118.35 22.3z",
    style: {
      fill: "currentColor",
      opacity: 0.92,
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner14_default = SvgReactSpinner14;

// src/react/ReactSpinner15.tsx
var React8 = __toESM(require("react"));
var SvgReactSpinner15 = (props) => /* @__PURE__ */ React8.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 148 149", ...props }, /* @__PURE__ */ React8.createElement(
  "path",
  {
    d: "M73.997 48.309 62.875 0h22.244z",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React8.createElement(
  "path",
  {
    d: "m58.784 53.253-37.39-32.547L39.388 7.634z",
    style: {
      fill: "currentColor",
      opacity: 0.88,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React8.createElement(
  "path",
  {
    d: "M49.384 66.194 0 61.841l6.872-21.153z",
    style: {
      fill: "currentColor",
      opacity: 0.8,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React8.createElement(
  "path",
  {
    d: "M49.384 82.191 6.872 107.694 0 86.541z",
    style: {
      fill: "currentColor",
      opacity: 0.64,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React8.createElement(
  "path",
  {
    d: "M58.784 95.128 39.388 140.75l-17.994-13.075z",
    style: {
      fill: "currentColor",
      opacity: 0.48,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React8.createElement(
  "path",
  {
    d: "m73.997 100.072 11.122 48.309H62.875z",
    style: {
      fill: "currentColor",
      opacity: 0.4,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React8.createElement(
  "path",
  {
    d: "m89.209 95.128 37.394 32.547-17.994 13.075z",
    style: {
      fill: "currentColor",
      opacity: 0.32,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React8.createElement(
  "path",
  {
    d: "m98.612 82.191 49.382 4.35-6.875 21.153z",
    style: {
      fill: "currentColor",
      opacity: 0.24,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React8.createElement(
  "path",
  {
    d: "m98.612 66.194 42.507-25.506 6.875 21.153z",
    style: {
      fill: "currentColor",
      opacity: 0.16,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React8.createElement(
  "path",
  {
    d: "m89.209 53.253 19.4-45.619 17.994 13.072z",
    style: {
      fill: "currentColor",
      opacity: 0.92,
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner15_default = SvgReactSpinner15;

// src/react/ReactSpinner16.tsx
var React9 = __toESM(require("react"));
var SvgReactSpinner16 = (props) => /* @__PURE__ */ React9.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 155 147", ...props }, /* @__PURE__ */ React9.createElement(
  "path",
  {
    d: "M130.091 56.145c4.006 4.822 7.4 10.622 9.884 17.209a67.5 67.5 0 0 0 3.697-21.618c.05-7.735-1.428-15.741-4.2-23.688.181 4.022-.381 8.178-.844 11.881a100 100 0 0 1-1.244 5.61l-.709 2.65-.941 2.621-2.35-1.228-2.487-1.046a80 80 0 0 0-4.816-1.775c-3.422-.885-6.403-1.685-9.709-1.904 4.869 2.729 9.7 6.457 13.719 11.288m-20.263-27.81c3.113.691 6.078 1.857 9.213 3.107 2.934 1.453 6.046 2.994 8.881 5.012-.909-3.415-2.319-6.662-3.831-10.062-1.716-3.194-3.541-6.553-5.86-9.607-4.534-6.181-10.29-12.053-17.278-16.768 4.906 6.665 8.36 13.653 10.347 20.64-7.178.997-13.716 3.363-19.169 6.529 5.582-.747 11.556-.31 17.697 1.149m-32.7-10.684a60.3 60.3 0 0 1 19.413-4.05c-5.538-4.24-12.091-7.75-19.413-10.234A75 75 0 0 0 53.303.017C61.194 2.582 68.084 6.086 73.8 10.676c-5.231 4.919-9.119 10.794-11.675 16.51 4.103-3.772 9.15-7.05 15.003-9.535M40.263 36.492c1.193-2.669 2.453-5.541 4.168-8.157 3.328-5.306 7.731-10.484 13.281-14.734-7.015-.278-14.343.85-21.687 3.184-3.716 1.132-7.247 2.782-10.909 4.557-3.46 1.978-7.057 4.087-10.329 6.706 7.682-2.722 15.641-3.628 22.769-3.491-1.128 7.257-1.15 13.982.328 20.3.469-2.812 1.394-5.49 2.379-8.365M24.166 56.145c-.513-6.297.272-12.95 2.168-19.691-5.74 3.935-11.268 9.013-15.753 15.282C6.109 57.992 2.484 65.295 0 73.354c4.975-6.678 10.303-12.181 16.472-16.209 3.031 6.484 7.547 11.984 12.094 16.209a53 53 0 0 1-4.4-17.209m0 34.419c-4.007-4.822-7.397-10.622-9.882-17.21a67.6 67.6 0 0 0-3.703 21.619c-.043 7.738 1.428 15.741 4.206 23.688-.181-4.019.382-8.175.844-11.885.366-1.931.794-3.803 1.244-5.606l.706-2.65.938-2.622 2.35 1.228 2.487 1.047a82 82 0 0 0 4.816 1.775c3.425.884 6.406 1.688 9.712 1.903-4.868-2.728-9.7-6.453-13.718-11.287m20.265 27.809c-3.118-.687-6.078-1.859-9.215-3.106-2.932-1.453-6.047-2.997-8.882-5.01.91 3.413 2.322 6.66 3.832 10.06 1.715 3.197 3.543 6.55 5.859 9.606 4.534 6.181 10.291 12.053 17.278 16.772-4.903-6.669-8.359-13.656-10.347-20.644 7.182-.994 13.713-3.362 19.169-6.528-5.581.747-11.559.309-17.694-1.15m32.697 10.684a60.2 60.2 0 0 1-19.416 4.05c5.541 4.241 12.094 7.75 19.416 10.232a75 75 0 0 0 23.825 3.356c-7.887-2.569-14.778-6.072-20.497-10.663 5.232-4.918 9.119-10.793 11.675-16.509-4.103 3.772-9.153 7.05-15.003 9.534m36.863-18.84c-1.191 2.668-2.45 5.54-4.163 8.156-3.331 5.303-7.734 10.484-13.287 14.734 7.018.282 14.347-.846 21.69-3.184 3.719-1.131 7.247-2.781 10.91-4.553 3.456-1.981 7.056-4.091 10.331-6.709-7.685 2.721-15.644 3.628-22.775 3.49 1.134-7.256 1.153-13.981-.325-20.3-.469 2.816-1.394 5.494-2.381 8.366m11.697-36.863c4.549 4.225 9.065 9.722 12.1 16.21 6.165-4.029 11.493-9.528 16.468-16.21-2.484 8.057-6.106 15.363-10.584 21.619-4.481 6.269-10.006 11.35-15.75 15.284 1.897-6.743 2.681-13.396 2.169-19.693a53 53 0 0 0-4.403-17.21",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner16_default = SvgReactSpinner16;

// src/react/ReactSpinner17.tsx
var React10 = __toESM(require("react"));
var SvgReactSpinner17 = (props) => /* @__PURE__ */ React10.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 149 149", ...props }, /* @__PURE__ */ React10.createElement(
  "path",
  {
    d: "M111.284 9.941c-3.875-2.238-11.756 4.159-17.603 14.287-5.85 10.131-7.45 20.156-3.575 22.394s11.757-4.163 17.603-14.291c5.85-10.128 7.45-20.153 3.575-22.39m27.157 27.153c-2.238-3.872-12.263-2.272-22.391 3.575-10.131 5.847-16.528 13.728-14.291 17.606 2.238 3.872 12.263 2.272 22.391-3.575s16.528-13.728 14.291-17.606m9.937 37.097c0-4.472-9.481-8.1-21.175-8.1-11.697 0-21.178 3.628-21.178 8.1 0 4.475 9.481 8.1 21.178 8.1 11.694 0 21.175-3.625 21.175-8.1m-9.937 37.096c2.237-3.878-4.163-11.756-14.291-17.606-10.128-5.847-20.153-7.447-22.391-3.575-2.237 3.875 4.16 11.76 14.291 17.607 10.128 5.846 20.153 7.45 22.391 3.574m-27.157 27.154c3.875-2.238 2.275-12.263-3.575-22.391-5.846-10.128-13.728-16.525-17.603-14.287-3.875 2.234-2.275 12.259 3.575 22.39 5.847 10.128 13.728 16.525 17.603 14.288m-37.093 9.94c4.472 0 8.1-9.484 8.1-21.178 0-11.697-3.628-21.178-8.1-21.178-4.475 0-8.104 9.481-8.104 21.178 0 11.694 3.629 21.178 8.104 21.178m-37.097-9.94c3.875 2.237 11.756-4.16 17.603-14.288 5.85-10.131 7.45-20.156 3.575-22.39-3.875-2.238-11.756 4.159-17.603 14.287-5.85 10.128-7.45 20.153-3.575 22.391M9.938 111.287c2.237 3.876 12.262 2.272 22.39-3.574 10.131-5.847 16.528-13.732 14.291-17.607-2.235-3.872-12.26-2.272-22.391 3.575C14.1 99.531 7.7 107.409 9.938 111.287M0 74.191c0 4.475 9.481 8.1 21.175 8.1 11.7 0 21.181-3.625 21.181-8.1 0-4.472-9.481-8.1-21.181-8.1C9.481 66.091 0 69.719 0 74.191m9.938-37.097C7.7 40.972 14.1 48.853 24.228 54.7c10.131 5.847 20.156 7.447 22.391 3.575 2.237-3.878-4.16-11.759-14.291-17.606-10.128-5.847-20.153-7.447-22.39-3.575M37.094 9.941c-3.875 2.237-2.275 12.262 3.575 22.39 5.847 10.128 13.728 16.528 17.603 14.291 3.875-2.238 2.275-12.263-3.575-22.394C48.85 14.1 40.969 7.703 37.094 9.941m45.197 11.237c0 11.697-3.628 21.178-8.1 21.178-4.475 0-8.104-9.481-8.104-21.178S69.716 0 74.191 0c4.472 0 8.1 9.481 8.1 21.178",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner17_default = SvgReactSpinner17;

// src/react/ReactSpinner18.tsx
var React11 = __toESM(require("react"));
var SvgReactSpinner18 = (props) => /* @__PURE__ */ React11.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 149 149", ...props }, /* @__PURE__ */ React11.createElement(
  "path",
  {
    d: "m89.616 135.347 2.421-14.7c-5.546 2.128-11.546 3.347-17.843 3.347-23.657 0-43.416-16.506-48.497-38.619l-12.978-7.778-11.588 9.425c6.081 34.856 36.466 61.359 73.063 61.359a74 74 0 0 0 28.522-5.687zm33.168-117.191-.584 14.069-14.997 4.744c10.281 9.122 16.794 22.397 16.794 37.222 0 16.981-8.513 31.959-21.491 40.95L100 130.35l12.819 7.191c21.328-13.032 35.565-36.528 35.565-63.35 0-22.385-9.925-42.435-25.6-56.035M.041 75.744C.031 75.225 0 74.709 0 74.191 0 33.216 33.219 0 74.194 0a73.83 73.83 0 0 1 39.431 11.356l-.578 13.866-15.609 4.941a49.5 49.5 0 0 0-23.244-5.775c-27.313 0-49.46 21.987-49.775 49.221l-12.522-7.506z",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner18_default = SvgReactSpinner18;

// src/react/ReactSpinner19.tsx
var React12 = __toESM(require("react"));
var SvgReactSpinner19 = (props) => /* @__PURE__ */ React12.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 147 147", ...props }, /* @__PURE__ */ React12.createElement(
  "path",
  {
    d: "M73.422 4.378v19.153c-20.106.006-37.431 11.975-45.335 29.138l-16.471-9.966C22.944 20.016 46.384 4.384 73.422 4.378m.016 23.528c25.106 0 45.531 20.425 45.531 45.532s-20.425 45.531-45.531 45.531c-25.126 0-45.563-20.425-45.563-45.531 0-25.107 20.437-45.532 45.563-45.532m0-27.906C32.944 0 0 32.944 0 73.438c0 40.474 32.944 73.412 73.438 73.412 40.478 0 73.406-32.938 73.406-73.413C146.844 32.944 113.916 0 73.438 0",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner19_default = SvgReactSpinner19;

// src/react/ReactSpinner2.tsx
var React13 = __toESM(require("react"));
var SvgReactSpinner2 = (props) => /* @__PURE__ */ React13.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    color: "currentColor",
    viewBox: "0 0 143 148",
    ...props
  },
  /* @__PURE__ */ React13.createElement(
    "path",
    {
      d: "M105.638 17.119a4.575 4.575 0 0 0-4.575 4.578 4.575 4.575 0 0 0 4.575 4.575 4.58 4.58 0 0 0 4.578-4.575 4.58 4.58 0 0 0-4.578-4.578m22.618 21.847a5.35 5.35 0 1 0 0 10.7 5.35 5.35 0 0 0 0-10.7m8.61 31.046a6.125 6.125 0 0 0-6.125 6.126 6.125 6.125 0 1 0 12.247 0 6.125 6.125 0 0 0-6.122-6.126m-8.61 31.05a6.897 6.897 0 0 0 0 13.794c3.81 0 6.9-3.087 6.9-6.897a6.9 6.9 0 0 0-6.9-6.897m-22.618 21.844a7.67 7.67 0 0 0-7.672 7.672 7.67 7.67 0 0 0 7.672 7.672 7.67 7.67 0 0 0 7.671-7.672 7.67 7.67 0 0 0-7.671-7.672m-31.822 7.835a8.44 8.44 0 0 0-8.444 8.443 8.447 8.447 0 1 0 16.891 0c0-4.662-3.782-8.443-8.447-8.443m-31.822-9.382c-5.094 0-9.222 4.129-9.222 9.219 0 5.091 4.128 9.219 9.222 9.219 5.09 0 9.219-4.128 9.219-9.219s-4.129-9.219-9.219-9.219M19.372 97.966c-5.519 0-9.991 4.475-9.991 9.993s4.472 9.994 9.991 9.994 9.994-4.475 9.994-9.994c0-5.518-4.475-9.993-9.994-9.993m-8.606-32.597C4.819 65.369 0 70.191 0 76.138c0 5.946 4.819 10.765 10.766 10.765 5.946 0 10.765-4.819 10.765-10.765s-4.819-10.769-10.765-10.769m8.606-32.594c-6.372 0-11.541 5.166-11.541 11.541S13 55.856 19.372 55.856c6.375 0 11.544-5.165 11.544-11.54s-5.169-11.541-11.544-11.541M41.994 9.381c-6.803 0-12.316 5.516-12.316 12.316s5.513 12.312 12.316 12.312c6.8 0 12.312-5.512 12.312-12.312S48.794 9.381 41.994 9.381m44.909 3.707c0 7.228-5.859 13.087-13.087 13.087s-13.088-5.859-13.088-13.087C60.728 5.859 66.588 0 73.816 0s13.087 5.859 13.087 13.088",
      style: {
        fill: "currentColor",
        fillRule: "nonzero"
      }
    }
  )
);
var ReactSpinner2_default = SvgReactSpinner2;

// src/react/ReactSpinner20.tsx
var React14 = __toESM(require("react"));
var SvgReactSpinner20 = (props) => /* @__PURE__ */ React14.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 149 149", ...props }, /* @__PURE__ */ React14.createElement(
  "path",
  {
    d: "M103.253 32.788a50.9 50.9 0 0 1 12.019 12.018l20.534-11.856a74.6 74.6 0 0 0-20.7-20.7zm16.703 20.134a50.2 50.2 0 0 1 4.422 16.419h23.678a73.7 73.7 0 0 0-7.562-28.272zm28.1 25.794h-23.681c-.534 5.822-2.078 11.334-4.419 16.415l20.538 11.857a73.7 73.7 0 0 0 7.562-28.272M32.784 44.806a51 51 0 0 1 12.022-12.022L32.95 12.25a74.6 74.6 0 0 0-20.7 20.7zm82.488 58.444a51 51 0 0 1-12.022 12.022l11.856 20.534a74.6 74.6 0 0 0 20.7-20.7zm-70.466 12.022a51 51 0 0 1-12.022-12.019L12.25 115.106a74.5 74.5 0 0 0 20.7 20.7zM28.1 95.131a50.1 50.1 0 0 1-4.419-16.415H0a73.8 73.8 0 0 0 7.562 28.275zM78.719 0v23.681A50.1 50.1 0 0 1 95.131 28.1l11.86-20.538A73.8 73.8 0 0 0 78.719 0M0 69.341h23.681A50.1 50.1 0 0 1 28.1 52.922L7.562 41.069A73.7 73.7 0 0 0 0 69.341M52.925 28.1a50.1 50.1 0 0 1 16.419-4.419V0a73.7 73.7 0 0 0-28.275 7.562zm16.419 119.956v-23.678a50.3 50.3 0 0 1-16.419-4.419l-11.856 20.535a73.7 73.7 0 0 0 28.275 7.562m37.643-7.562a73.7 73.7 0 0 1-28.268 7.562v-23.678a50.2 50.2 0 0 0 16.412-4.422z",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner20_default = SvgReactSpinner20;

// src/react/ReactSpinner21.tsx
var React15 = __toESM(require("react"));
var SvgReactSpinner21 = (props) => /* @__PURE__ */ React15.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 136 147", ...props }, /* @__PURE__ */ React15.createElement(
  "path",
  {
    d: "m97.1 17.766-8.644 15.168c17.581 7.891 29.847 25.516 29.847 46.032 0 27.878-22.6 50.475-50.475 50.475-27.878 0-50.472-22.597-50.472-50.475 0-22.95 15.331-42.291 36.303-48.419l.353 11.675L88.356 20.05 52.734 0l.385 12.759C22.737 19.478 0 46.559 0 78.966c0 37.462 30.369 67.831 67.828 67.831 37.463 0 67.825-30.369 67.825-67.831 0-26.972-15.75-50.269-38.553-61.2",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner21_default = SvgReactSpinner21;

// src/react/ReactSpinner22.tsx
var React16 = __toESM(require("react"));
var SvgReactSpinner22 = (props) => /* @__PURE__ */ React16.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 149 149", ...props }, /* @__PURE__ */ React16.createElement(
  "path",
  {
    d: "M22.212 100.512A58 58 0 0 1 17.4 87.3L1.737 90.059a73.4 73.4 0 0 0 6.701 18.407zm16.966-72.987c3.738-2.816 7.788-5.234 12.147-7.094L45.9 5.522a74 74 0 0 0-16.953 9.809zM17.4 60.928a57.8 57.8 0 0 1 4.812-13.216L8.438 39.759a73.6 73.6 0 0 0-6.704 18.407zm33.925 66.869c-4.359-1.863-8.409-4.285-12.147-7.097l-10.231 12.194a74.2 74.2 0 0 0 16.953 9.812zm39.853 2.125c-4.419 1.344-9.072 2.119-13.862 2.375v15.928a74 74 0 0 0 19.297-3.378zm39.8-42.622a57.9 57.9 0 0 1-4.809 13.212l13.775 7.954a73.7 73.7 0 0 0 6.7-18.407zM57.2 18.3c4.419-1.341 9.072-2.116 13.866-2.369V0a74 74 0 0 0-19.297 3.378zm13.866 113.997c-4.794-.256-9.447-1.031-13.866-2.375l-5.431 14.925a74 74 0 0 0 19.297 3.378zM109.2 120.7c-3.737 2.812-7.788 5.234-12.147 7.097l5.425 14.906a74 74 0 0 0 16.953-9.812zM97.053 20.431c4.359 1.86 8.413 4.278 12.15 7.097l10.231-12.197a74 74 0 0 0-16.956-9.809zm-19.737-4.5c4.79.253 9.443 1.028 13.862 2.369l5.431-14.922A74.1 74.1 0 0 0 77.316 0zM15.847 74.112c0-2.384.187-4.721.465-7.031L.662 64.322A75 75 0 0 0 0 74.112c0 3.322.238 6.588.662 9.794l15.65-2.759c-.278-2.309-.465-4.647-.465-7.035m116.684 0c0 2.388-.187 4.726-.465 7.035l15.65 2.759c.425-3.206.662-6.472.662-9.794a74 74 0 0 0-.662-9.79l-15.65 2.759c.278 2.31.465 4.647.465 7.031m-9.478 31.819a58.5 58.5 0 0 1-9.062 10.753l10.234 12.2a74.6 74.6 0 0 0 12.584-15.009zm-97.725 0-13.759 7.944a74.5 74.5 0 0 0 12.584 15.009l10.234-12.197a58.4 58.4 0 0 1-9.059-10.756m114.616-66.172-13.775 7.953a58 58 0 0 1 4.809 13.216l15.666-2.762a73.7 73.7 0 0 0-6.7-18.407M25.328 42.291a58.4 58.4 0 0 1 9.059-10.75l-10.234-12.2a74.7 74.7 0 0 0-12.584 15.006zm88.663-10.75 10.237-12.2a74.8 74.8 0 0 1 12.581 15.006l-13.756 7.944a58.5 58.5 0 0 0-9.062-10.75",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner22_default = SvgReactSpinner22;

// src/react/ReactSpinner23.tsx
var React17 = __toESM(require("react"));
var SvgReactSpinner23 = (props) => /* @__PURE__ */ React17.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 149 149", ...props }, /* @__PURE__ */ React17.createElement(
  "path",
  {
    d: "M30.897 74.112c0-6.771 1.597-13.156 4.372-18.862L8.437 39.759A73.85 73.85 0 0 0 0 74.112a73.8 73.8 0 0 0 8.441 34.354l26.828-15.488c-2.775-5.709-4.372-12.094-4.372-18.866",
    style: {
      fill: "currentColor",
      opacity: 0.8,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React17.createElement(
  "path",
  {
    d: "M77.319 30.975a43.23 43.23 0 0 1 32.709 18.841l26.788-15.466C124.175 14.484 102.356 1.041 77.319 0z",
    style: {
      fill: "currentColor",
      opacity: 0.16,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React17.createElement(
  "path",
  {
    d: "M117.491 74.112c0 6.772-1.6 13.157-4.372 18.866l26.828 15.488a73.84 73.84 0 0 0 8.437-34.354c0-12.4-3.059-24.078-8.437-34.353L113.119 55.25c2.772 5.706 4.372 12.091 4.372 18.862",
    style: {
      fill: "currentColor",
      opacity: 0.32,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React17.createElement(
  "path",
  {
    d: "M110.028 98.409a43.24 43.24 0 0 1-32.709 18.844v30.972c25.037-1.038 46.853-14.484 59.497-34.35z",
    style: {
      fill: "currentColor",
      opacity: 0.48,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React17.createElement(
  "path",
  {
    d: "M71.069 117.253a43.25 43.25 0 0 1-32.71-18.844l-26.787 15.466c12.64 19.869 34.459 33.312 59.497 34.35z",
    style: {
      fill: "currentColor",
      opacity: 0.64,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React17.createElement(
  "path",
  {
    d: "M38.356 49.812a43.26 43.26 0 0 1 32.713-18.837V0C46.031 1.041 24.212 14.484 11.572 34.35z",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner23_default = SvgReactSpinner23;

// src/react/ReactSpinner24.tsx
var React18 = __toESM(require("react"));
var SvgReactSpinner24 = (props) => /* @__PURE__ */ React18.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 142 145", ...props }, /* @__PURE__ */ React18.createElement(
  "path",
  {
    d: "M56.719 20.088a55.5 55.5 0 0 1 7.878-1.566L61.847 0a74 74 0 0 0-10.406 2.513zm-16.116 7.343a56 56 0 0 1 7.056-3.981L39.634 7.444a74 74 0 0 0-9.05 5.597zM27.441 39.509a57 57 0 0 1 5.528-6.015l-12.01-12.157a74 74 0 0 0-6.834 8.072zm-8.832 15.657a57 57 0 0 1 3.407-7.475L7.563 40.222a72 72 0 0 0-3.975 9.75zm-3.534 17.762c.113-2.772.416-5.525.913-8.237L.734 62.234A73 73 0 0 0 0 72.672zm2.134 18.119a57.5 57.5 0 0 1-1.678-8.156L1.069 85.128a72 72 0 0 0 2.509 10.1zm7.725 16.65a58.4 58.4 0 0 1-4.175-7.285l-12.312 6.266a73 73 0 0 0 5.5 8.766zm12.6 13.547a59 59 0 0 1-6.268-5.678l-9.191 9.184a72 72 0 0 0 7.891 6.6zm16.263 9.037a59 59 0 0 1-7.75-3.475l-5.528 10.853a71 71 0 0 0 9.487 3.8zm18.422 3.541a60.5 60.5 0 0 1-8.538-.891l-1.74 11.222c3.372.463 6.765.678 10.15.653zm18.737-2.331a60 60 0 0 1-8.437 1.797l1.675 10.406a70 70 0 0 0 9.8-2.5zm17.185-8.103a60.6 60.6 0 0 1-7.513 4.365l4.46 8.641a70 70 0 0 0 8.481-5.397zm13.931-13.129a61 61 0 0 1-5.838 6.522l6.332 6.263a70 70 0 0 0 6.362-7.706zm9.241-16.89a61.5 61.5 0 0 1-3.541 8.05l7.225 3.628a69 69 0 0 0 3.631-9.241zm3.537-19.072a63 63 0 0 1-.862 8.828l7.187 1.075c.425-3.275.613-6.575.572-9.866zm-2.537-19.359a61 61 0 0 1 1.912 8.709l6.363-1.056a68 68 0 0 0-2.482-9.5zm-8.491-17.713a63 63 0 0 1 4.566 7.734l4.987-2.612a68 68 0 0 0-5.294-8.2zm-13.656-14.312a63 63 0 0 1 6.778 5.987l3.362-3.438a68 68 0 0 0-7.518-6.131zm-17.519-9.435c2.869 1 5.656 2.206 8.344 3.606l1.772-3.578a67 67 0 0 0-8.994-3.472zM72.913 7.144c3.196-.06 6.396.103 9.578.497l-.45 3.14a64.5 64.5 0 0 0-9.128-.834z",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner24_default = SvgReactSpinner24;

// src/react/ReactSpinner25.tsx
var React19 = __toESM(require("react"));
var SvgReactSpinner25 = (props) => /* @__PURE__ */ React19.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 147 146", ...props }, /* @__PURE__ */ React19.createElement(
  "path",
  {
    d: "M115.469 12.241 94.531 2.159c1.238 1.182 14.319 37.338 14.319 37.338s7.731-25.916 6.619-27.256m22.072 24.215L123.05 18.288c1.038 1.399-2.662 39.84-2.662 39.84s17.968-20.144 17.153-21.672m9.378 31.394-5.172-22.659c.7 1.568-19.081 34.746-19.081 34.746s24.659-10.481 24.253-12.087m-5.172 32.353 5.172-22.659c.278 1.594-31.681 23.059-31.681 23.059s26.496 1.097 26.509-.4m-18.697 26.906 14.491-18.171c-.119 1.431-37.953 7.075-37.953 7.075s23.15 12.306 23.462 11.096m-28.519 16.125 20.938-10.081c-.357 1.1-36.635-10.028-36.635-10.028s15.313 20.931 15.697 20.109m-32.693 2.16h23.243c-.359.703-27.99-24.85-27.99-24.85s4.543 25.297 4.747 24.85M31.45 133.153l20.938 10.081c-.11.363-13.735-34.434-13.735-34.434s-7.04 24.559-7.203 24.353M9.378 108.938l14.491 18.171c.294.169 3.294-36.9 3.294-36.9S9.981 109.087 9.378 108.938M0 77.544l5.172 22.659c.725.169 19.706-31.753 19.706-31.753S.984 77.816 0 77.544m5.172-32.353L0 67.85c1.069.328 32.253-20.031 32.253-20.031S6.397 45.672 5.172 45.191m18.697-26.903L9.378 36.456c1.269.55 38.466-4.069 38.466-4.069S25.2 18.991 23.869 18.288M52.388 2.159 31.45 12.241c1.338.768 37.125 12.981 37.125 12.981S53.725 3.072 52.388 2.159m37.965 25.594S63.166.975 61.838 0h23.243c1.272 1.122 5.272 27.753 5.272 27.753",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner25_default = SvgReactSpinner25;

// src/react/ReactSpinner26.tsx
var React20 = __toESM(require("react"));
var SvgReactSpinner26 = (props) => /* @__PURE__ */ React20.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 146 146", ...props }, /* @__PURE__ */ React20.createElement(
  "path",
  {
    d: "m80.874 34.229 27.978-16.403a4.689 4.689 0 0 0-4.744-8.088L76.133 26.141a4.689 4.689 0 0 0 4.741 8.088m18.047 9.3 32.428-.219a4.68 4.68 0 0 0 4.656-4.715 4.69 4.69 0 0 0-4.687-4.66l-32.46.219a4.685 4.685 0 0 0-4.656 4.719 4.69 4.69 0 0 0 4.687 4.656zm45.565 31.341a4.68 4.68 0 0 0-1.759-6.391l-28.194-16.028a4.68 4.68 0 0 0-6.39 1.759 4.684 4.684 0 0 0 1.759 6.391l28.194 16.028a4.683 4.683 0 0 0 6.39-1.759m-10.796 35.659a4.687 4.687 0 0 0 1.671-6.416l-16.403-27.978a4.685 4.685 0 0 0-6.415-1.672 4.687 4.687 0 0 0-1.672 6.416l16.403 27.978a4.68 4.68 0 0 0 4.047 2.316c.806 0 1.625-.207 2.369-.644m-27.179 25.481a4.683 4.683 0 0 0 4.657-4.715l-.219-32.432a4.685 4.685 0 0 0-4.688-4.656c-2.618.016-4.703 2.128-4.687 4.716l.219 32.431a4.69 4.69 0 0 0 4.687 4.656zm-29.887 6.722 16.025-28.197a4.69 4.69 0 0 0-1.756-6.39 4.674 4.674 0 0 0-6.391 1.759l-16.025 28.194a4.683 4.683 0 0 0 1.756 6.39 4.684 4.684 0 0 0 6.391-1.756m-35.634-7.366 27.978-16.403a4.686 4.686 0 1 0-4.744-8.084l-27.978 16.403a4.68 4.68 0 0 0-1.672 6.413 4.68 4.68 0 0 0 4.047 2.315c.806 0 1.622-.206 2.369-.644m-27.182-24.193 32.432-.219a4.688 4.688 0 0 0-.029-9.375l-32.462.219a4.688 4.688 0 0 0 .031 9.375zm23.147-20.275a4.683 4.683 0 0 0-1.759-6.391L7.005 68.479a4.68 4.68 0 0 0-6.391 1.759 4.687 4.687 0 0 0 1.757 6.391l28.194 16.025a4.63 4.63 0 0 0 2.312.616 4.69 4.69 0 0 0 4.078-2.372m-4.4-20.253a4.69 4.69 0 0 0 1.672-6.416L17.824 36.254a4.688 4.688 0 1 0-8.088 4.741L26.139 68.97a4.68 4.68 0 0 0 4.047 2.318c.807 0 1.622-.209 2.369-.643m6.31-19.744a4.687 4.687 0 0 0 4.656-4.719l-.216-32.431c-.019-2.588-2.034-4.556-4.719-4.656a4.687 4.687 0 0 0-4.656 4.718l.216 32.432a4.69 4.69 0 0 0 4.687 4.656zm17.653-13.328a4.684 4.684 0 0 1-4.069-7.003L68.477 2.376a4.68 4.68 0 0 1 6.391-1.76 4.686 4.686 0 0 1 1.756 6.391L60.596 35.204a4.68 4.68 0 0 1-4.078 2.369",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner26_default = SvgReactSpinner26;

// src/react/ReactSpinner3.tsx
var React21 = __toESM(require("react"));
var SvgReactSpinner3 = (props) => /* @__PURE__ */ React21.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 149 149", ...props }, /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M85.366 11.359c0 6.275-5.088 11.363-11.363 11.363s-11.362-5.088-11.362-11.363C62.641 5.087 67.728 0 74.003 0s11.363 5.087 11.363 11.359",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M116.981 19.912c0 6.276-5.087 11.363-11.362 11.363s-11.36-5.087-11.36-11.363 5.085-11.359 11.36-11.359 11.362 5.084 11.362 11.359",
    style: {
      fill: "currentColor",
      opacity: 0.92,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M139.453 42.387c0 6.272-5.087 11.36-11.362 11.36s-11.363-5.088-11.363-11.36c0-6.278 5.088-11.362 11.363-11.362s11.362 5.084 11.362 11.362",
    style: {
      fill: "currentColor",
      opacity: 0.16,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M148.006 74c0 6.278-5.087 11.362-11.362 11.362S125.281 80.278 125.281 74c0-6.272 5.088-11.359 11.363-11.359S148.006 67.728 148.006 74",
    style: {
      fill: "currentColor",
      opacity: 0.24,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M139.453 105.619c0 6.272-5.087 11.359-11.362 11.359s-11.363-5.087-11.363-11.359c0-6.275 5.088-11.363 11.363-11.363s11.362 5.088 11.362 11.363",
    style: {
      fill: "currentColor",
      opacity: 0.32,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M116.981 128.091c0 6.275-5.087 11.359-11.362 11.359s-11.36-5.084-11.36-11.359 5.085-11.363 11.36-11.363 11.362 5.088 11.362 11.363",
    style: {
      fill: "currentColor",
      opacity: 0.4,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M85.366 136.641c0 6.278-5.088 11.362-11.363 11.362s-11.362-5.084-11.362-11.362c0-6.275 5.087-11.36 11.362-11.36s11.363 5.085 11.363 11.36",
    style: {
      fill: "currentColor",
      opacity: 0.48,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M53.75 128.091c0 6.275-5.088 11.359-11.363 11.359s-11.362-5.084-11.362-11.359 5.087-11.363 11.362-11.363 11.363 5.088 11.363 11.363",
    style: {
      fill: "currentColor",
      opacity: 0.56,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M31.275 105.619c0 6.272-5.084 11.359-11.359 11.359s-11.363-5.087-11.363-11.359c0-6.275 5.088-11.363 11.363-11.363s11.359 5.088 11.359 11.363",
    style: {
      fill: "currentColor",
      opacity: 0.64,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M22.725 74c0 6.278-5.088 11.362-11.362 11.362C5.087 85.362 0 80.278 0 74c0-6.272 5.087-11.359 11.363-11.359 6.274 0 11.362 5.087 11.362 11.359",
    style: {
      fill: "currentColor",
      opacity: 0.72,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M31.275 42.387c0 6.272-5.084 11.36-11.359 11.36S8.553 48.659 8.553 42.387c0-6.278 5.088-11.362 11.363-11.362s11.359 5.084 11.359 11.362",
    style: {
      fill: "currentColor",
      opacity: 0.8,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M53.75 19.912c0 6.276-5.088 11.363-11.363 11.363s-11.362-5.087-11.362-11.363S36.112 8.553 42.387 8.553 53.75 13.637 53.75 19.912",
    style: {
      fill: "currentColor",
      opacity: 0.88,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React21.createElement(
  "path",
  {
    d: "M85.366 11.359c0 6.275-5.088 11.363-11.363 11.363s-11.362-5.088-11.362-11.363C62.641 5.087 67.728 0 74.003 0s11.363 5.087 11.363 11.359",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner3_default = SvgReactSpinner3;

// src/react/ReactSpinner4.tsx
var React22 = __toESM(require("react"));
var SvgReactSpinner4 = (props) => /* @__PURE__ */ React22.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 148 148", ...props }, /* @__PURE__ */ React22.createElement(
  "path",
  {
    d: "m98.397 40.834 14.219-24.628a4.616 4.616 0 0 0-1.688-6.3 4.62 4.62 0 0 0-6.303 1.688L90.406 36.222a4.615 4.615 0 0 0 3.991 6.919 4.62 4.62 0 0 0 4-2.307m13.281 16.657 24.625-14.219a4.61 4.61 0 1 0-4.612-7.988l-24.628 14.222a4.612 4.612 0 1 0 4.615 7.985M147.9 73.95a4.613 4.613 0 0 0-4.612-4.612H114.85a4.61 4.61 0 0 0-4.609 4.612 4.61 4.61 0 0 0 4.609 4.609h28.438a4.61 4.61 0 0 0 4.612-4.609m-9.906 36.972a4.615 4.615 0 0 0-1.691-6.3l-24.625-14.216a4.62 4.62 0 0 0-6.303 1.688 4.61 4.61 0 0 0 1.688 6.297l24.628 14.218a4.611 4.611 0 0 0 6.303-1.687m-27.066 27.069a4.616 4.616 0 0 0 1.688-6.3l-14.219-24.628a4.617 4.617 0 0 0-6.303-1.688 4.615 4.615 0 0 0-1.688 6.3l14.219 24.628a4.61 4.61 0 0 0 3.997 2.306c.784 0 1.578-.2 2.306-.618m-32.366 5.297v-28.441a4.607 4.607 0 0 0-4.609-4.609 4.61 4.61 0 0 0-4.612 4.609v28.441a4.61 4.61 0 0 0 9.221 0m-35.287-6.985 14.222-24.628a4.614 4.614 0 0 0-1.688-6.3 4.62 4.62 0 0 0-6.303 1.688l-14.222 24.628a4.617 4.617 0 0 0 1.688 6.3 4.6 4.6 0 0 0 2.306.618 4.61 4.61 0 0 0 3.997-2.306m-27.066-23.694 24.629-14.218a4.612 4.612 0 0 0-4.616-7.985l-24.625 14.216a4.612 4.612 0 1 0 4.612 7.987M37.663 73.95a4.61 4.61 0 0 0-4.61-4.612H4.612A4.615 4.615 0 0 0 0 73.95a4.614 4.614 0 0 0 4.612 4.609h28.441a4.61 4.61 0 0 0 4.61-4.609m4.862-18.147a4.61 4.61 0 0 0-1.687-6.297L16.209 35.284a4.613 4.613 0 1 0-4.612 7.988l24.625 14.219a4.6 4.6 0 0 0 2.306.622 4.61 4.61 0 0 0 3.997-2.31m13.284-13.281a4.614 4.614 0 0 0 1.688-6.3L43.275 11.594a4.614 4.614 0 0 0-7.991 4.612l14.222 24.628a4.617 4.617 0 0 0 6.303 1.688m18.144-4.863a4.61 4.61 0 0 1-4.612-4.609V4.613a4.611 4.611 0 1 1 9.221 0V33.05a4.607 4.607 0 0 1-4.609 4.609",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner4_default = SvgReactSpinner4;

// src/react/ReactSpinner5.tsx
var React23 = __toESM(require("react"));
var SvgReactSpinner5 = (props) => /* @__PURE__ */ React23.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2
    },
    viewBox: "0 0 148 148",
    ...props
  },
  /* @__PURE__ */ React23.createElement(
    "path",
    {
      d: "M73.947 37.659a4.61 4.61 0 0 1-4.613-4.609V4.613a4.613 4.613 0 0 1 9.225 0V33.05a4.61 4.61 0 0 1-4.612 4.609",
      style: {
        fill: "currentColor",
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React23.createElement(
    "path",
    {
      d: "M53.5 43.141a4.61 4.61 0 0 1-3.997-2.307L35.284 16.206a4.617 4.617 0 0 1 1.688-6.3 4.616 4.616 0 0 1 6.303 1.688l14.216 24.628a4.613 4.613 0 0 1-3.991 6.919",
      style: {
        fill: "currentColor",
        opacity: 0.88,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React23.createElement(
    "path",
    {
      d: "M38.525 58.113c-.784 0-1.578-.2-2.303-.622L11.594 43.272a4.613 4.613 0 0 1-1.688-6.297 4.617 4.617 0 0 1 6.3-1.691l24.628 14.222a4.61 4.61 0 0 1 1.688 6.297 4.61 4.61 0 0 1-3.997 2.31",
      style: {
        fill: "currentColor",
        opacity: 0.8,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React23.createElement(
    "path",
    {
      d: "M33.047 78.559H4.609A4.61 4.61 0 0 1 0 73.95a4.61 4.61 0 0 1 4.609-4.612h28.438a4.612 4.612 0 1 1 0 9.221",
      style: {
        fill: "currentColor",
        opacity: 0.72,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React23.createElement(
    "path",
    {
      d: "M13.903 113.228a4.6 4.6 0 0 1-3.997-2.306 4.617 4.617 0 0 1 1.688-6.3l24.628-14.216a4.611 4.611 0 0 1 4.612 7.985l-24.628 14.218a4.6 4.6 0 0 1-2.303.619",
      style: {
        fill: "currentColor",
        opacity: 0.64,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React23.createElement(
    "path",
    {
      d: "M39.275 138.609a4.6 4.6 0 0 1-2.303-.618 4.617 4.617 0 0 1-1.688-6.3l14.219-24.628a4.613 4.613 0 0 1 7.988 4.612l-14.216 24.628a4.62 4.62 0 0 1-4 2.306",
      style: {
        fill: "currentColor",
        opacity: 0.56,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React23.createElement(
    "path",
    {
      d: "M73.947 147.897a4.613 4.613 0 0 1-4.613-4.609v-28.441a4.61 4.61 0 0 1 4.613-4.609 4.61 4.61 0 0 1 4.612 4.609v28.441a4.61 4.61 0 0 1-4.612 4.609",
      style: {
        fill: "currentColor",
        opacity: 0.48,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React23.createElement(
    "path",
    {
      d: "M108.619 138.609a4.62 4.62 0 0 1-4-2.306l-14.216-24.628a4.612 4.612 0 1 1 7.988-4.612l14.218 24.628a4.616 4.616 0 0 1-1.687 6.3 4.6 4.6 0 0 1-2.303.618",
      style: {
        fill: "currentColor",
        opacity: 0.4,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React23.createElement(
    "path",
    {
      d: "M133.994 113.228c-.785 0-1.578-.2-2.307-.619l-24.625-14.218a4.61 4.61 0 1 1 4.613-7.985l24.628 14.216a4.62 4.62 0 0 1 1.688 6.3 4.6 4.6 0 0 1-3.997 2.306",
      style: {
        fill: "currentColor",
        opacity: 0.32,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React23.createElement(
    "path",
    {
      d: "M143.284 78.559h-28.437a4.61 4.61 0 1 1 0-9.221h28.437a4.611 4.611 0 1 1 0 9.221",
      style: {
        fill: "currentColor",
        opacity: 0.24,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React23.createElement(
    "path",
    {
      d: "M109.372 58.113a4.61 4.61 0 0 1-3.997-2.31 4.61 4.61 0 0 1 1.687-6.297l24.625-14.222a4.62 4.62 0 0 1 6.304 1.691 4.613 4.613 0 0 1-1.688 6.297l-24.628 14.219a4.57 4.57 0 0 1-2.303.622",
      style: {
        fill: "currentColor",
        opacity: 0.16,
        fillRule: "nonzero"
      }
    }
  ),
  /* @__PURE__ */ React23.createElement(
    "path",
    {
      d: "M94.394 43.141a4.612 4.612 0 0 1-3.991-6.919l14.216-24.628a4.62 4.62 0 0 1 6.303-1.688 4.616 4.616 0 0 1 1.687 6.3L98.391 40.834a4.61 4.61 0 0 1-3.997 2.307",
      style: {
        fill: "currentColor",
        opacity: 0.92,
        fillRule: "nonzero"
      }
    }
  )
);
var ReactSpinner5_default = SvgReactSpinner5;

// src/react/ReactSpinner6.tsx
var React24 = __toESM(require("react"));
var SvgReactSpinner6 = (props) => /* @__PURE__ */ React24.createElement(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2
    },
    viewBox: "0 0 148 148",
    ...props
  },
  /* @__PURE__ */ React24.createElement(
    "path",
    {
      d: "M69.341 0h9.222v34.534h-9.222zM54.606 39.3 41.391 7.394l8.522-3.531 13.215 31.909zM42.819 49.341 18.4 24.919l6.522-6.522 24.419 24.422zM35.775 63.125 3.869 49.909l3.528-8.521L39.3 54.603zM0 69.338h34.538v9.222H0zM7.397 106.506l-3.528-8.522 31.906-13.215 3.525 8.522zM24.922 129.497l-6.522-6.519 24.419-24.422 6.522 6.522zM49.913 144.034l-8.522-3.531 13.215-31.909 8.522 3.531zM69.341 113.359h9.222v34.538h-9.222zM97.987 144.034l-13.215-31.909 8.522-3.531 13.212 31.909zM122.978 129.497l-24.422-24.419 6.522-6.522 24.422 24.422zM140.506 106.506l-31.909-13.215 3.528-8.522 31.909 13.215zM113.366 69.338h34.531v9.222h-34.531zM112.125 63.125l-3.528-8.522 31.909-13.215 3.528 8.521zM105.078 49.341l-6.522-6.522 24.422-24.422 6.522 6.522zM93.294 39.3l-8.522-3.528L97.987 3.863l8.519 3.531z",
      style: {
        fill: "currentColor",
        fillRule: "nonzero"
      }
    }
  )
);
var ReactSpinner6_default = SvgReactSpinner6;

// src/react/ReactSpinner7.tsx
var React25 = __toESM(require("react"));
var SvgReactSpinner7 = (props) => /* @__PURE__ */ React25.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 149 149", ...props }, /* @__PURE__ */ React25.createElement(
  "path",
  {
    d: "M69.503 40.825V0a73.7 73.7 0 0 0-35.034 11.378l23.981 33.01c3.378-1.8 7.109-3.01 11.053-3.563",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React25.createElement(
  "path",
  {
    d: "m104.319 59.309 38.837-12.621A74.34 74.34 0 0 0 121.5 16.881L97.506 49.909a33.6 33.6 0 0 1 6.813 9.4",
    style: {
      fill: "currentColor",
      opacity: 0.2,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React25.createElement(
  "path",
  {
    d: "M50.875 49.909 26.878 16.881A74.34 74.34 0 0 0 5.222 46.688l38.837 12.621a33.6 33.6 0 0 1 6.816-9.4",
    style: {
      fill: "currentColor",
      opacity: 0.9,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React25.createElement(
  "path",
  {
    d: "m89.928 44.388 23.984-33.01A73.76 73.76 0 0 0 78.878 0v40.825c3.941.553 7.672 1.763 11.05 3.563",
    style: {
      fill: "currentColor",
      opacity: 0.1,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React25.createElement(
  "path",
  {
    d: "M40.625 74.025c0-1.984.203-3.912.534-5.803L2.306 55.6A74.3 74.3 0 0 0 0 74.025c0 6.363.8 12.534 2.306 18.428l38.853-12.625c-.331-1.887-.534-3.819-.534-5.803",
    style: {
      fill: "currentColor",
      opacity: 0.8,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React25.createElement(
  "path",
  {
    d: "m97.506 98.141 23.994 33.028a74.35 74.35 0 0 0 21.656-29.806l-38.837-12.619a33.6 33.6 0 0 1-6.813 9.397",
    style: {
      fill: "currentColor",
      opacity: 0.4,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React25.createElement(
  "path",
  {
    d: "M78.878 107.225v40.828a73.7 73.7 0 0 0 35.034-11.381l-23.984-33.009c-3.378 1.8-7.109 3.009-11.05 3.562",
    style: {
      fill: "currentColor",
      opacity: 0.5,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React25.createElement(
  "path",
  {
    d: "m146.072 55.6-38.85 12.622c.328 1.891.531 3.822.531 5.803 0 1.984-.203 3.913-.534 5.803l38.853 12.625a74.3 74.3 0 0 0 2.306-18.428c0-6.362-.8-12.534-2.306-18.425",
    style: {
      fill: "currentColor",
      opacity: 0.3,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React25.createElement(
  "path",
  {
    d: "m58.45 103.663-23.984 33.009a73.73 73.73 0 0 0 35.037 11.381v-40.828c-3.944-.553-7.672-1.762-11.053-3.562",
    style: {
      fill: "currentColor",
      opacity: 0.6,
      fillRule: "nonzero"
    }
  }
), /* @__PURE__ */ React25.createElement(
  "path",
  {
    d: "M44.059 88.744 5.222 101.363a74.4 74.4 0 0 0 21.656 29.809l23.997-33.031a33.6 33.6 0 0 1-6.816-9.397",
    style: {
      fill: "currentColor",
      opacity: 0.7,
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner7_default = SvgReactSpinner7;

// src/react/ReactSpinner8.tsx
var React26 = __toESM(require("react"));
var SvgReactSpinner8 = (props) => /* @__PURE__ */ React26.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 149 148", ...props }, /* @__PURE__ */ React26.createElement(
  "path",
  {
    d: "m123.684 17.306-17.046-10.45-10.454 17.047 17.05 10.45zm13.797 17.663-18.403 7.819 7.819 18.403 18.406-7.819zm10.9 42.5-19.687-3.503-3.5 19.69 19.687 3.5zm-12.893 39.35-14.525-13.744-13.744 14.525 14.525 13.744zm-36.894 5.962-19.438 4.688 4.685 19.44 19.44-4.687zm-29.931 4.875-19.369-4.987-4.985 19.365 19.366 4.988zm-26.716-9.631-13.3-14.931-14.934 13.3 13.299 14.931zm-22.35-44.253L0 77.756l3.984 19.597 19.594-3.984zm9.384-30.763-18.268-8.131L2.581 53.15l18.272 8.128zm23.088-19.018L41.178 7.219l-16.772 10.89L35.3 34.878zm32.015-3.994H64.088V0h19.996z",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner8_default = SvgReactSpinner8;

// src/react/ReactSpinner9.tsx
var React27 = __toESM(require("react"));
var SvgReactSpinner9 = (props) => /* @__PURE__ */ React27.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 146 146", ...props }, /* @__PURE__ */ React27.createElement(
  "path",
  {
    d: "M135.567 72.885c3.225-3.044 6.743-6.61 9.472-10.613-3.238-24.125-19.694-45.775-41.819-55.706.884 2.341 1.675 4.594 2.303 6.875a88 88 0 0 1 1.431 6.9 80 80 0 0 0-6.4 2.141c-2.065.856-4.062 1.853-5.919 2.85 7.869 3.621 14.925 9.156 20.075 16.171 2.722 3.404 4.697 7.307 6.51 11.238 1.503 4.056 2.925 8.187 3.4 12.516 3.934 2.006 7.294 4.587 10.947 7.628M84.082 19.122a73 73 0 0 1 2.557-1.997c1.753-1.287 3.675-2.69 5.637-3.8-.9-2.159-2-4.109-3.184-6.222a90 90 0 0 0-1.882-3.14 79 79 0 0 0-2.109-2.95C73.179-.912 60.745-.172 49.289 3.91 37.839 7.866 27.335 14.6 19.229 23.6c4.841-.384 9.785.032 14.225.672-.1 4.697.072 8.985.975 13.285 11.656-13.01 30.056-19.235 47.244-16.194a62 62 0 0 1 2.409-2.241m-59.956 23.5a83 83 0 0 1-1.053-3.237 71 71 0 0 1-.775-3.282c-1.147.11-2.331.232-3.503.4a83 83 0 0 0-3.431.675c-2.285.522-4.779 1.072-7.057 1.888C2.782 49.822-.277 61.963.02 74.05c.272 12.057 3.375 24.188 9.409 34.7.525-2.337 1.438-4.75 2.238-6.953.812-2.212 1.722-4.331 2.856-6.406 2.075.837 4.284 1.481 6.469 1.997 2.206.506 4.178.99 6.397 1.2-4.338-7.535-6.507-16.178-6.735-24.866-.231-8.728 2.01-17.353 5.928-25.075-1.003-1.962-1.684-3.9-2.456-6.025m4.909 67.335c-2.256.075-4.406-.1-6.737-.291-.45 2.216-.934 4.616-1.141 6.953a95 95 0 0 0-.356 7.275c8.469 8.638 19.134 15.097 30.694 18.734 11.634 3.472 24.012 4.063 35.912 1.766-4.197-2.844-7.881-5.622-11.125-9.037 2.882-3.454 5.2-7.494 7.047-11.191-8.525 1.622-17.478 1.194-25.778-1.263-8.253-2.625-15.906-7.237-22-13.443a75 75 0 0 1-6.516.497m67.107 9.756c7.847-3.747 14.515-9.75 19.572-16.788 5.075-7.072 8.078-15.475 9.165-24.065 3.028 2.906 6.075 6.328 8.516 10.143 4.206-2.046 8.069-4.681 11.987-7.818-1.465 12.003-5.75 23.759-12.79 33.615-7.025 9.832-16.338 18.116-27.266 23.391-2.381-.794-4.594-1.522-6.797-2.544a87 87 0 0 1-6.253-3.203 79 79 0 0 0 2.353-6.35c.666-2.066 1.116-4.322 1.513-6.381",
    style: {
      fill: "currentColor",
      fillRule: "nonzero"
    }
  }
));
var ReactSpinner9_default = SvgReactSpinner9;

// src/index.ts
var ReactSpinner1 = withSpinnerControls(ReactSpinner1_default);
var ReactSpinner10 = withSpinnerControls(ReactSpinner10_default);
var ReactSpinner11 = withSpinnerControls(ReactSpinner11_default);
var ReactSpinner12 = withSpinnerControls(ReactSpinner12_default);
var ReactSpinner13 = withSpinnerControls(ReactSpinner13_default);
var ReactSpinner14 = withSpinnerControls(ReactSpinner14_default);
var ReactSpinner15 = withSpinnerControls(ReactSpinner15_default);
var ReactSpinner16 = withSpinnerControls(ReactSpinner16_default);
var ReactSpinner17 = withSpinnerControls(ReactSpinner17_default);
var ReactSpinner18 = withSpinnerControls(ReactSpinner18_default);
var ReactSpinner19 = withSpinnerControls(ReactSpinner19_default);
var ReactSpinner2 = withSpinnerControls(ReactSpinner2_default);
var ReactSpinner20 = withSpinnerControls(ReactSpinner20_default);
var ReactSpinner21 = withSpinnerControls(ReactSpinner21_default);
var ReactSpinner22 = withSpinnerControls(ReactSpinner22_default);
var ReactSpinner23 = withSpinnerControls(ReactSpinner23_default);
var ReactSpinner24 = withSpinnerControls(ReactSpinner24_default);
var ReactSpinner25 = withSpinnerControls(ReactSpinner25_default);
var ReactSpinner26 = withSpinnerControls(ReactSpinner26_default);
var ReactSpinner3 = withSpinnerControls(ReactSpinner3_default);
var ReactSpinner4 = withSpinnerControls(ReactSpinner4_default);
var ReactSpinner5 = withSpinnerControls(ReactSpinner5_default);
var ReactSpinner6 = withSpinnerControls(ReactSpinner6_default);
var ReactSpinner7 = withSpinnerControls(ReactSpinner7_default);
var ReactSpinner8 = withSpinnerControls(ReactSpinner8_default);
var ReactSpinner9 = withSpinnerControls(ReactSpinner9_default);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReactSpinner1,
  ReactSpinner10,
  ReactSpinner11,
  ReactSpinner12,
  ReactSpinner13,
  ReactSpinner14,
  ReactSpinner15,
  ReactSpinner16,
  ReactSpinner17,
  ReactSpinner18,
  ReactSpinner19,
  ReactSpinner2,
  ReactSpinner20,
  ReactSpinner21,
  ReactSpinner22,
  ReactSpinner23,
  ReactSpinner24,
  ReactSpinner25,
  ReactSpinner26,
  ReactSpinner3,
  ReactSpinner4,
  ReactSpinner5,
  ReactSpinner6,
  ReactSpinner7,
  ReactSpinner8,
  ReactSpinner9
});
