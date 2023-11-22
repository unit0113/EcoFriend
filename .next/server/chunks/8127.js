"use strict";exports.id=8127,exports.ids=[8127],exports.modules={68845:(e,s,t)=>{t.d(s,{V:()=>Blockquote});var l=t(29525),a=t(28508),r=t.n(a),i=t(28965),n=t.n(i),o=t(35930);function BlockquoteWithImage({author:e,children:s,className:t,image:a}){return(0,l.jsxs)("figure",{className:n()("grid grid-cols-[auto,1fr] items-center gap-x-4 gap-y-8 sm:grid-cols-12 sm:grid-rows-[1fr,auto,auto,1fr] sm:gap-x-10 lg:gap-x-16",t),children:[l.jsx("blockquote",{className:"col-span-2 text-xl/7 text-neutral-600 sm:col-span-7 sm:col-start-6 sm:row-start-2",children:"string"==typeof s?l.jsx("p",{children:s}):s}),l.jsx("div",{className:"col-start-1 row-start-2 overflow-hidden rounded-xl bg-neutral-100 sm:col-span-5 sm:row-span-full sm:rounded-3xl",children:l.jsx(r(),{alt:"",...a,sizes:"(min-width: 1024px) 17.625rem, (min-width: 768px) 16rem, (min-width: 640px) 40vw, 3rem",className:"h-12 w-12 object-cover grayscale sm:aspect-[7/9] sm:h-auto sm:w-full"})}),(0,l.jsxs)("figcaption",{className:"text-sm text-neutral-950 sm:col-span-7 sm:row-start-3 sm:text-base",children:[l.jsx("span",{className:"font-semibold",children:e.name}),l.jsx("span",{className:"hidden font-semibold sm:inline",children:", "}),l.jsx("br",{className:"sm:hidden"}),l.jsx("span",{className:"sm:font-semibold",children:e.role})]})]})}function BlockquoteWithoutImage({author:e,children:s,className:t}){return l.jsx(o.O,{position:"left",className:n()("pl-8",t),children:(0,l.jsxs)("figure",{className:"text-sm",children:[l.jsx("blockquote",{className:"text-neutral-600 [&>*]:relative [&>:first-child]:before:absolute [&>:first-child]:before:right-full [&>:first-child]:before:content-['“'] [&>:last-child]:after:content-['”']",children:"string"==typeof s?l.jsx("p",{children:s}):s}),(0,l.jsxs)("figcaption",{className:"mt-6 font-semibold text-neutral-950",children:[e.name,", ",e.role]})]})})}function Blockquote(e){return e.image?l.jsx(BlockquoteWithImage,{...e}):l.jsx(BlockquoteWithoutImage,{...e})}},73780:(e,s,t)=>{t.d(s,{N:()=>TagListItem,P:()=>TagList});var l=t(29525),a=t(28965),r=t.n(a);function TagList({children:e,className:s}){return l.jsx("ul",{role:"list",className:r()(s,"flex flex-wrap gap-4"),children:e})}function TagListItem({children:e,className:s}){return l.jsx("li",{className:r()("rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600",s),children:e})}}};