"use strict";exports.id=2240,exports.ids=[2240],exports.modules={60451:(e,r,o)=>{e.exports=o(7979).vendored["react-rsc"].React},53501:(e,r,o)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=o(60451),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,f=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,o){var t,n={},a=null,l=null;for(t in void 0!==o&&(a=""+o),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)_.call(r,t)&&!p.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===n[t]&&(n[t]=r[t]);return{$$typeof:s,type:e,key:a,ref:l,props:n,_owner:f.current}}r.Fragment=n,r.jsx=q,r.jsxs=q},12240:(e,r,o)=>{e.exports=o(53501)}};