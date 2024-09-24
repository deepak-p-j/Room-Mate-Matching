"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CDEEPAK%5CDownloads%5Croommate-details%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDEEPAK%5CDownloads%5Croommate-details&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CDEEPAK%5CDownloads%5Croommate-details%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDEEPAK%5CDownloads%5Croommate-details&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_DEEPAK_Downloads_roommate_details_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\DEEPAK\\\\Downloads\\\\roommate-details\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_DEEPAK_Downloads_roommate_details_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNERUVQQUslNUNEb3dubG9hZHMlNUNyb29tbWF0ZS1kZXRhaWxzJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNERUVQQUslNUNEb3dubG9hZHMlNUNyb29tbWF0ZS1kZXRhaWxzJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM0QztBQUN6SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jvb21tYXRlLWRldGFpbHMvPzIyNjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcREVFUEFLXFxcXERvd25sb2Fkc1xcXFxyb29tbWF0ZS1kZXRhaWxzXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxERUVQQUtcXFxcRG93bmxvYWRzXFxcXHJvb21tYXRlLWRldGFpbHNcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CDEEPAK%5CDownloads%5Croommate-details%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDEEPAK%5CDownloads%5Croommate-details&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/actions/createUser.ts":
/*!***************************************!*\
  !*** ./src/app/actions/createUser.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(rsc)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/lib/dbConnect */ \"(rsc)/./src/app/lib/dbConnect.ts\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n// src/app/actions/createUser.ts\n/* __next_internal_action_entry_do_not_use__ {\"5660492bf3774a8032888d51adf4e14625ea29bd\":\"default\"} */ \n\n // Ensure this path is correct\nasync function createUser(userData) {\n    try {\n        console.log(\"Attempting to create or update user:\", userData);\n        const userInfo = await _app_lib_dbConnect__WEBPACK_IMPORTED_MODULE_2__[\"default\"].user.upsert({\n            where: {\n                email: userData.email\n            },\n            update: {\n                image: userData.image,\n                name: userData.name,\n                provider: userData.provider,\n                providerAccountId: userData.providerAccountId\n            },\n            create: {\n                email: userData.email,\n                image: userData.image,\n                name: userData.name,\n                provider: userData.provider,\n                providerAccountId: userData.providerAccountId\n            }\n        });\n        console.info(\"User successfully saved:\", userInfo.email);\n        return {\n            message: \"Successfully saved\",\n            userInfo\n        };\n    } catch (err) {\n        console.error(\"Failed to create user:\", err);\n        return {\n            message: \"Failed to create user\",\n            err\n        };\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createUser);\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_3__.ensureServerEntryExports)([\n    createUser\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(\"5660492bf3774a8032888d51adf4e14625ea29bd\", createUser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FjdGlvbnMvY3JlYXRlVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxnQ0FBZ0M7OztBQUdTLENBQUMsOEJBQThCO0FBVXhFLGVBQWVDLFdBQVdDLFFBQWtCO0lBQzFDLElBQUk7UUFDRkMsUUFBUUMsR0FBRyxDQUFDLHdDQUF3Q0Y7UUFDcEQsTUFBTUcsV0FBVyxNQUFNTCwwREFBTUEsQ0FBQ00sSUFBSSxDQUFDQyxNQUFNLENBQUM7WUFDeENDLE9BQU87Z0JBQUVDLE9BQU9QLFNBQVNPLEtBQUs7WUFBQztZQUMvQkMsUUFBUTtnQkFDTkMsT0FBT1QsU0FBU1MsS0FBSztnQkFDckJDLE1BQU1WLFNBQVNVLElBQUk7Z0JBQ25CQyxVQUFVWCxTQUFTVyxRQUFRO2dCQUMzQkMsbUJBQW1CWixTQUFTWSxpQkFBaUI7WUFDL0M7WUFDQUMsUUFBUTtnQkFDTk4sT0FBT1AsU0FBU08sS0FBSztnQkFDckJFLE9BQU9ULFNBQVNTLEtBQUs7Z0JBQ3JCQyxNQUFNVixTQUFTVSxJQUFJO2dCQUNuQkMsVUFBVVgsU0FBU1csUUFBUTtnQkFDM0JDLG1CQUFtQlosU0FBU1ksaUJBQWlCO1lBQy9DO1FBQ0Y7UUFDQVgsUUFBUWEsSUFBSSxDQUFDLDRCQUE0QlgsU0FBU0ksS0FBSztRQUN2RCxPQUFPO1lBQ0xRLFNBQVM7WUFDVFo7UUFDRjtJQUNGLEVBQUUsT0FBT2EsS0FBVTtRQUNqQmYsUUFBUWdCLEtBQUssQ0FBQywwQkFBMEJEO1FBQ3hDLE9BQU87WUFDTEQsU0FBUztZQUNUQztRQUNGO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlakIsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jvb21tYXRlLWRldGFpbHMvLi9zcmMvYXBwL2FjdGlvbnMvY3JlYXRlVXNlci50cz84NTQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYWN0aW9ucy9jcmVhdGVVc2VyLnRzXHJcblxyXG4ndXNlIHNlcnZlcic7XHJcbmltcG9ydCBwcmlzbWEgZnJvbSAnQC9hcHAvbGliL2RiQ29ubmVjdCc7IC8vIEVuc3VyZSB0aGlzIHBhdGggaXMgY29ycmVjdFxyXG5cclxuaW50ZXJmYWNlIFVzZXJEYXRhIHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIGltYWdlPzogc3RyaW5nO1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgcHJvdmlkZXI/OiBzdHJpbmc7XHJcbiAgcHJvdmlkZXJBY2NvdW50SWQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVVzZXIodXNlckRhdGE6IFVzZXJEYXRhKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKCdBdHRlbXB0aW5nIHRvIGNyZWF0ZSBvciB1cGRhdGUgdXNlcjonLCB1c2VyRGF0YSk7XHJcbiAgICBjb25zdCB1c2VySW5mbyA9IGF3YWl0IHByaXNtYS51c2VyLnVwc2VydCh7XHJcbiAgICAgIHdoZXJlOiB7IGVtYWlsOiB1c2VyRGF0YS5lbWFpbCB9LFxyXG4gICAgICB1cGRhdGU6IHtcclxuICAgICAgICBpbWFnZTogdXNlckRhdGEuaW1hZ2UsXHJcbiAgICAgICAgbmFtZTogdXNlckRhdGEubmFtZSxcclxuICAgICAgICBwcm92aWRlcjogdXNlckRhdGEucHJvdmlkZXIsXHJcbiAgICAgICAgcHJvdmlkZXJBY2NvdW50SWQ6IHVzZXJEYXRhLnByb3ZpZGVyQWNjb3VudElkLFxyXG4gICAgICB9LFxyXG4gICAgICBjcmVhdGU6IHtcclxuICAgICAgICBlbWFpbDogdXNlckRhdGEuZW1haWwsXHJcbiAgICAgICAgaW1hZ2U6IHVzZXJEYXRhLmltYWdlLFxyXG4gICAgICAgIG5hbWU6IHVzZXJEYXRhLm5hbWUsXHJcbiAgICAgICAgcHJvdmlkZXI6IHVzZXJEYXRhLnByb3ZpZGVyLFxyXG4gICAgICAgIHByb3ZpZGVyQWNjb3VudElkOiB1c2VyRGF0YS5wcm92aWRlckFjY291bnRJZCxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5pbmZvKCdVc2VyIHN1Y2Nlc3NmdWxseSBzYXZlZDonLCB1c2VySW5mby5lbWFpbCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IHNhdmVkJyxcclxuICAgICAgdXNlckluZm8sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHVzZXI6JywgZXJyKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1lc3NhZ2U6ICdGYWlsZWQgdG8gY3JlYXRlIHVzZXInLFxyXG4gICAgICBlcnIsXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVXNlcjtcclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImNyZWF0ZVVzZXIiLCJ1c2VyRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySW5mbyIsInVzZXIiLCJ1cHNlcnQiLCJ3aGVyZSIsImVtYWlsIiwidXBkYXRlIiwiaW1hZ2UiLCJuYW1lIiwicHJvdmlkZXIiLCJwcm92aWRlckFjY291bnRJZCIsImNyZWF0ZSIsImluZm8iLCJtZXNzYWdlIiwiZXJyIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/actions/createUser.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _app_actions_createUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/actions/createUser */ \"(rsc)/./src/app/actions/createUser.ts\");\n// app/api/auth/[...nextauth]/route.ts\n\n\n // Ensure this path is correct\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        /**\r\n     * `signIn` callback is called whenever a user tries to sign in.\r\n     * We use it to create or update the user in our database.\r\n     */ async signIn ({ user, account }) {\n            try {\n                const { email, image, name } = user;\n                const { provider, providerAccountId } = account;\n                const userData = {\n                    email: email,\n                    image: image || \"\",\n                    name: name || \"\",\n                    provider: provider || \"\",\n                    providerAccountId: providerAccountId || \"\"\n                };\n                if (email) {\n                    const result = await (0,_app_actions_createUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(userData);\n                    if (result.message !== \"Successfully saved\") {\n                        console.error(\"User creation failed:\", result.err);\n                        return false; // Prevent sign-in if user creation fails\n                    }\n                }\n                return true;\n            } catch (error) {\n                console.error(\"Error in signIn callback:\", error);\n                return false; // Prevent sign-in if there's an error\n            }\n        },\n        /**\r\n     * `session` callback is called whenever a session is checked.\r\n     * We use it to pass additional session information.\r\n     */ async session ({ session, token }) {\n            try {\n                if (token && session.user) {\n                    session.user.email = token.email;\n                }\n                return session;\n            } catch (error) {\n                console.error(\"Error in session callback:\", error);\n                return session;\n            }\n        },\n        /**\r\n     * `jwt` callback is called whenever a JWT token is created or updated.\r\n     * We use it to store the user's email in the token.\r\n     */ async jwt ({ token, user }) {\n            try {\n                if (user) {\n                    token.email = user.email;\n                }\n                return token;\n            } catch (error) {\n                console.error(\"Error in jwt callback:\", error);\n                return token;\n            }\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\"\n    },\n    debug: \"development\" === \"development\"\n};\n// Initialize NextAuth with the defined options\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n// Export GET and POST handlers\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUVMO0FBQ3VCO0FBQ04sQ0FBQyw4QkFBOEI7QUFHMUUsTUFBTUcsY0FBK0I7SUFDMUNDLFdBQVc7UUFDVEgsc0VBQWNBLENBQUM7WUFDYkksVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2hEO0tBQ0Q7SUFDREMsV0FBVztRQUNUOzs7S0FHQyxHQUNELE1BQU1DLFFBQU8sRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUU7WUFDNUIsSUFBSTtnQkFDRixNQUFNLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUUsR0FBR0o7Z0JBQy9CLE1BQU0sRUFBRUssUUFBUSxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHTDtnQkFDeEMsTUFBTU0sV0FBVztvQkFDZkwsT0FBT0E7b0JBQ1BDLE9BQU9BLFNBQVM7b0JBQ2hCQyxNQUFNQSxRQUFRO29CQUNkQyxVQUFVQSxZQUFZO29CQUN0QkMsbUJBQW1CQSxxQkFBcUI7Z0JBQzFDO2dCQUVBLElBQUlKLE9BQU87b0JBQ1QsTUFBTU0sU0FBUyxNQUFNbkIsbUVBQVVBLENBQUNrQjtvQkFDaEMsSUFBSUMsT0FBT0MsT0FBTyxLQUFLLHNCQUFzQjt3QkFDM0NDLFFBQVFDLEtBQUssQ0FBQyx5QkFBeUJILE9BQU9JLEdBQUc7d0JBQ2pELE9BQU8sT0FBTyx5Q0FBeUM7b0JBQ3pEO2dCQUNGO2dCQUNBLE9BQU87WUFDVCxFQUFFLE9BQU9ELE9BQU87Z0JBQ2RELFFBQVFDLEtBQUssQ0FBQyw2QkFBNkJBO2dCQUMzQyxPQUFPLE9BQU8sc0NBQXNDO1lBQ3REO1FBQ0Y7UUFFQTs7O0tBR0MsR0FDRCxNQUFNRSxTQUFRLEVBQUVBLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1lBQzlCLElBQUk7Z0JBQ0YsSUFBSUEsU0FBU0QsUUFBUWIsSUFBSSxFQUFFO29CQUN6QmEsUUFBUWIsSUFBSSxDQUFDRSxLQUFLLEdBQUdZLE1BQU1aLEtBQUs7Z0JBQ2xDO2dCQUNBLE9BQU9XO1lBQ1QsRUFBRSxPQUFPRixPQUFPO2dCQUNkRCxRQUFRQyxLQUFLLENBQUMsOEJBQThCQTtnQkFDNUMsT0FBT0U7WUFDVDtRQUNGO1FBRUE7OztLQUdDLEdBQ0QsTUFBTUUsS0FBSSxFQUFFRCxLQUFLLEVBQUVkLElBQUksRUFBRTtZQUN2QixJQUFJO2dCQUNGLElBQUlBLE1BQU07b0JBQ1JjLE1BQU1aLEtBQUssR0FBR0YsS0FBS0UsS0FBSztnQkFDMUI7Z0JBQ0EsT0FBT1k7WUFDVCxFQUFFLE9BQU9ILE9BQU87Z0JBQ2RELFFBQVFDLEtBQUssQ0FBQywwQkFBMEJBO2dCQUN4QyxPQUFPRztZQUNUO1FBQ0Y7SUFDRjtJQUNBRSxRQUFRdkIsUUFBUUMsR0FBRyxDQUFDdUIsZUFBZTtJQUNuQ0osU0FBUztRQUNQSyxVQUFVO0lBQ1o7SUFDQUMsT0FBTzFCLGtCQUF5QjtBQUNsQyxFQUFFO0FBRUYsK0NBQStDO0FBQy9DLE1BQU0yQixVQUFVakMsZ0RBQVFBLENBQUNHO0FBRXpCLCtCQUErQjtBQUNZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9vbW1hdGUtZGV0YWlscy8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cz8wMDk4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXHJcblxyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcclxuaW1wb3J0IGNyZWF0ZVVzZXIgZnJvbSAnQC9hcHAvYWN0aW9ucy9jcmVhdGVVc2VyJzsgLy8gRW5zdXJlIHRoaXMgcGF0aCBpcyBjb3JyZWN0XHJcbmltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gJ25leHQtYXV0aCc7XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQhLFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgY2FsbGJhY2tzOiB7XHJcbiAgICAvKipcclxuICAgICAqIGBzaWduSW5gIGNhbGxiYWNrIGlzIGNhbGxlZCB3aGVuZXZlciBhIHVzZXIgdHJpZXMgdG8gc2lnbiBpbi5cclxuICAgICAqIFdlIHVzZSBpdCB0byBjcmVhdGUgb3IgdXBkYXRlIHRoZSB1c2VyIGluIG91ciBkYXRhYmFzZS5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCB9KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbCwgaW1hZ2UsIG5hbWUgfSA9IHVzZXI7XHJcbiAgICAgICAgY29uc3QgeyBwcm92aWRlciwgcHJvdmlkZXJBY2NvdW50SWQgfSA9IGFjY291bnQ7XHJcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICAgICAgICBlbWFpbDogZW1haWwhLFxyXG4gICAgICAgICAgaW1hZ2U6IGltYWdlIHx8ICcnLFxyXG4gICAgICAgICAgbmFtZTogbmFtZSB8fCAnJyxcclxuICAgICAgICAgIHByb3ZpZGVyOiBwcm92aWRlciB8fCAnJyxcclxuICAgICAgICAgIHByb3ZpZGVyQWNjb3VudElkOiBwcm92aWRlckFjY291bnRJZCB8fCAnJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoZW1haWwpIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNyZWF0ZVVzZXIodXNlckRhdGEpO1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5tZXNzYWdlICE9PSAnU3VjY2Vzc2Z1bGx5IHNhdmVkJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVc2VyIGNyZWF0aW9uIGZhaWxlZDonLCByZXN1bHQuZXJyKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBQcmV2ZW50IHNpZ24taW4gaWYgdXNlciBjcmVhdGlvbiBmYWlsc1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzaWduSW4gY2FsbGJhY2s6JywgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gUHJldmVudCBzaWduLWluIGlmIHRoZXJlJ3MgYW4gZXJyb3JcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGBzZXNzaW9uYCBjYWxsYmFjayBpcyBjYWxsZWQgd2hlbmV2ZXIgYSBzZXNzaW9uIGlzIGNoZWNrZWQuXHJcbiAgICAgKiBXZSB1c2UgaXQgdG8gcGFzcyBhZGRpdGlvbmFsIHNlc3Npb24gaW5mb3JtYXRpb24uXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKHRva2VuICYmIHNlc3Npb24udXNlcikge1xyXG4gICAgICAgICAgc2Vzc2lvbi51c2VyLmVtYWlsID0gdG9rZW4uZW1haWwgYXMgc3RyaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzZXNzaW9uIGNhbGxiYWNrOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIGBqd3RgIGNhbGxiYWNrIGlzIGNhbGxlZCB3aGVuZXZlciBhIEpXVCB0b2tlbiBpcyBjcmVhdGVkIG9yIHVwZGF0ZWQuXHJcbiAgICAgKiBXZSB1c2UgaXQgdG8gc3RvcmUgdGhlIHVzZXIncyBlbWFpbCBpbiB0aGUgdG9rZW4uXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgdG9rZW4uZW1haWwgPSB1c2VyLmVtYWlsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gand0IGNhbGxiYWNrOicsIGVycm9yKTtcclxuICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCwgLy8gRW5zdXJlIHRoaXMgaXMgc2V0IGNvcnJlY3RseVxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiAnand0JyxcclxuICB9LFxyXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JywgLy8gRW5hYmxlIGRlYnVnIG1lc3NhZ2VzIGluIGRldmVsb3BtZW50XHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXplIE5leHRBdXRoIHdpdGggdGhlIGRlZmluZWQgb3B0aW9uc1xyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5cclxuLy8gRXhwb3J0IEdFVCBhbmQgUE9TVCBoYW5kbGVyc1xyXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiY3JlYXRlVXNlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiY2FsbGJhY2tzIiwic2lnbkluIiwidXNlciIsImFjY291bnQiLCJlbWFpbCIsImltYWdlIiwibmFtZSIsInByb3ZpZGVyIiwicHJvdmlkZXJBY2NvdW50SWQiLCJ1c2VyRGF0YSIsInJlc3VsdCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJlcnIiLCJzZXNzaW9uIiwidG9rZW4iLCJqd3QiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJzdHJhdGVneSIsImRlYnVnIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/lib/dbConnect.ts":
/*!**********************************!*\
  !*** ./src/app/lib/dbConnect.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    const globalWithPrisma = global;\n    if (!globalWithPrisma.prisma) {\n        globalWithPrisma.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = globalWithPrisma.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYi9kYkNvbm5lY3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLElBQUlDO0FBQ0osSUFBSUMsS0FBeUIsRUFBYyxFQUUxQyxNQUFNO0lBQ0gsTUFBTUMsbUJBQW1CQztJQUd6QixJQUFJLENBQUNELGlCQUFpQkYsTUFBTSxFQUFFO1FBQzFCRSxpQkFBaUJGLE1BQU0sR0FBRyxJQUFJRCx3REFBWUE7SUFDOUM7SUFDQUMsU0FBU0UsaUJBQWlCRixNQUFNO0FBQ3BDO0FBRUEsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb29tbWF0ZS1kZXRhaWxzLy4vc3JjL2FwcC9saWIvZGJDb25uZWN0LnRzPzdlYTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcmlzbWFDbGllbnR9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmxldCBwcmlzbWE6IFByaXNtYUNsaWVudDtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxufSBlbHNlIHtcclxuICAgIGNvbnN0IGdsb2JhbFdpdGhQcmlzbWEgPSBnbG9iYWwgYXMgdHlwZW9mIGdsb2JhbFRoaXMgJiB7XHJcbiAgICBwcmlzbWE6IFByaXNtYUNsaWVudFxyXG4gICAgfSAgXHJcbiAgICBpZiAoIWdsb2JhbFdpdGhQcmlzbWEucHJpc21hKSB7XHJcbiAgICAgICAgZ2xvYmFsV2l0aFByaXNtYS5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcbiAgICB9XHJcbiAgICBwcmlzbWEgPSBnbG9iYWxXaXRoUHJpc21hLnByaXNtYTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsV2l0aFByaXNtYSIsImdsb2JhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/lib/dbConnect.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=C%3A%5CUsers%5CDEEPAK%5CDownloads%5Croommate-details%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CDEEPAK%5CDownloads%5Croommate-details&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();