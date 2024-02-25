import{r as L,a,c as P,R as U,b as A,j as t,_ as d,u as B,T as I,d as $,e as y,f as z,g as u,h as l,i as p,C as G,B as S,k as h,L as x,l as H,m as N,n as v,A as W}from"./Resume-D_V0ynZs.js";var g={},w=L;g.createRoot=w.createRoot,g.hydrateRoot=w.hydrateRoot;/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const O="startTransition",E=A[O];function V(e){let{basename:r,children:n,future:s,window:c}=e,o=a.useRef();o.current==null&&(o.current=P({window:c,v5Compat:!0}));let i=o.current,[m,f]=a.useState({action:i.action,location:i.location}),{v7_startTransition:j}=s||{},T=a.useCallback(b=>{j&&E?E(()=>f(b)):f(b)},[f,j]);return a.useLayoutEffect(()=>i.listen(T),[i,T]),a.createElement(U,{basename:r,children:n,location:m.location,navigationType:m.action,navigator:i,future:s})}var R;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(R||(R={}));var k;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(k||(k={}));const Y=a.createContext(null),F=Y;function M(){return a.useContext(F)}const q=typeof Symbol=="function"&&Symbol.for,J=q?Symbol.for("mui.nested"):"__THEME_NESTED__";function K(e,r){return typeof r=="function"?r(e):d({},e,r)}function Q(e){const{children:r,theme:n}=e,s=M(),c=a.useMemo(()=>{const o=s===null?n:K(s,n);return o!=null&&(o[J]=s!==null),o},[n,s]);return t.jsx(F.Provider,{value:c,children:r})}const _={};function C(e,r,n,s=!1){return a.useMemo(()=>{const c=e&&r[e]||r;if(typeof n=="function"){const o=n(c),i=e?d({},r,{[e]:o}):o;return s?()=>i:i}return e?d({},r,{[e]:n}):d({},r,n)},[e,r,n,s])}function X(e){const{children:r,theme:n,themeId:s}=e,c=B(_),o=M()||_,i=C(s,c,n),m=C(s,o,n,!0);return t.jsx(Q,{theme:m,children:t.jsx(I.Provider,{value:i,children:r})})}const Z=["theme"];function D(e){let{theme:r}=e,n=$(e,Z);const s=r[y];return t.jsx(X,d({},n,{themeId:s?y:void 0,theme:s||r}))}const ee=z({palette:{primary:{main:u[300],light:u[200],dark:u[400]},text:{primary:u[600],secondary:u[500]},secondary:{main:l[300],light:l[200],dark:l[400]},error:{main:l[300],light:l[200],dark:l[400]},success:{main:p[300],light:p[200],dark:p[400]},background:{default:u[300]}}}),te=()=>t.jsx(G,{maxWidth:!1,children:t.jsxs(S,{textAlign:"center",alignContent:"center",sx:{display:"grid",rowGap:2},children:[t.jsx(h,{variant:"h3",children:"Rephael Berkooz"}),t.jsx(h,{variant:"h5",children:"Full-Stack Software Engineer"}),t.jsxs(S,{textAlign:"center",maxWidth:720,sx:{display:"grid",rowGap:0},children:[t.jsxs(h,{paragraph:!0,children:["I write software at ",t.jsx(x,{href:"https://tulip.co",children:t.jsx("b",{children:"Tulip Interfaces"})}),"."]}),t.jsx(h,{paragraph:!0,children:"My work centers on creating technology for data insights in manufacturing and operations."}),t.jsxs(h,{paragraph:!0,children:["Learn ",t.jsx(x,{href:"/about-me",children:t.jsx("b",{children:"a bit about me"})}),", check out my ",t.jsx(x,{href:"https://github.com/rephaelberkooz",children:t.jsx("b",{children:"GitHub"})})," contributions, or connect with me on ",t.jsx(x,{href:"https://www.linkedin.com/in/rephael-berkooz/",children:t.jsx("b",{children:"LinkedIn"})}),"!"]})]})]})});g.createRoot(document.getElementById("root")).render(t.jsx(H.StrictMode,{children:t.jsx(D,{theme:ee,children:t.jsx(V,{children:t.jsxs(N,{children:[t.jsx(v,{path:"/",element:t.jsx(te,{})}),t.jsx(v,{path:"/about-me",element:t.jsx(W,{})})]})})})}));
