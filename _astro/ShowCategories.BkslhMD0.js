import"./preact.module.6dRqbbys.js";import{h as n}from"./hooks.module.DVVLZC0r.js";import{u as o}from"./jsxRuntime.module.DdfZPbq5.js";const i={ą:"a",ć:"c",ę:"e",ł:"l",ń:"n",ó:"o",ś:"s",ź:"z",ż:"z"},h=({categories:e})=>{const[a,s]=n(10),t=()=>{s(r=>r+5)};return o("div",{className:"flex flex-wrap gap-2",children:[e.slice(0,a).map((r,g)=>o("a",{href:`/blog/category/${r.toLowerCase().replace(/[ąćęłńóśźż]/g,l=>i[l]||l).replace(/\s+/g,"-")}/`,className:"px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",children:r},g)),a<e.length&&o("button",{onClick:t,className:"px-3 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors",children:"Pokaż więcej"})]})};export{h as default};
