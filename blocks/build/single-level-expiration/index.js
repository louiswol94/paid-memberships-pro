(()=>{"use strict";var e,t={952:()=>{const e=window.wp.blocks,t=window.wp.element,r=(window.wp.i18n,window.wp.blockEditor),l=JSON.parse('{"u2":"pmpro/single-level-expiration"}');(0,e.registerBlockType)(l.u2,{edit:function(e){const l=e=>pmpro.all_levels_formatted_text[e]?pmpro.all_levels_formatted_text[e].formatted_expiration:null;return[(0,t.createElement)("div",(0,r.useBlockProps)(),l(e.attributes.selected_level)?(0,t.createElement)("p",null,l(e.attributes.selected_level)):(0,t.createElement)("p",{style:{color:"grey"}},"[Level Expiration Placeholder]"))]},save:function(e){const l=r.useBlockProps.save();return(0,t.createElement)("div",l,(o=e.attributes.selected_level,pmpro.all_levels_formatted_text[o]?pmpro.all_levels_formatted_text[o].formatted_expiration:""));var o}})}},r={};function l(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,l),a.exports}l.m=t,e=[],l.O=(t,r,o,a)=>{if(!r){var n=1/0;for(v=0;v<e.length;v++){r=e[v][0],o=e[v][1],a=e[v][2];for(var i=!0,p=0;p<r.length;p++)(!1&a||n>=a)&&Object.keys(l.O).every((e=>l.O[e](r[p])))?r.splice(p--,1):(i=!1,a<n&&(n=a));if(i){e.splice(v--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var v=e.length;v>0&&e[v-1][2]>a;v--)e[v]=e[v-1];e[v]=[r,o,a]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={885:0,795:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,n=r[0],i=r[1],p=r[2],s=0;if(n.some((t=>0!==e[t]))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(p)var v=p(l)}for(t&&t(r);s<n.length;s++)a=n[s],l.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return l.O(v)},r=self.webpackChunkpaid_memberships_pro=self.webpackChunkpaid_memberships_pro||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=l.O(void 0,[795],(()=>l(952)));o=l.O(o)})();