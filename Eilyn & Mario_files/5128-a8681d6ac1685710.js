(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5128],{48418:function(a,b,c){"use strict";function d(a,b){return(function(a){if(Array.isArray(a))return a})(a)||(function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c})(a,b)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})()}b.default=void 0;var e,f=(e=c(67294))&&e.__esModule?e:{default:e},g=c(76273),h=c(90387),i=c(57190),j={};function k(a,b,c,d){if(a&&g.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;j[b+"%"+c+(e?"%"+e:"")]=!0}}b.default=function(a){var b,c=!1!==a.prefetch,e=h.useRouter(),l=f.default.useMemo(function(){var b=d(g.resolveHref(e,a.href,!0),2),c=b[0],f=b[1];return{href:c,as:a.as?g.resolveHref(e,a.as):f||c}},[e,a.href,a.as]),m=l.href,n=l.as,o=a.children,p=a.replace,q=a.shallow,r=a.scroll,s=a.locale;"string"==typeof o&&(o=f.default.createElement("a",null,o));var t=(b=f.default.Children.only(o))&&"object"==typeof b&&b.ref,u=d(i.useIntersection({rootMargin:"200px"}),2),v=u[0],w=u[1],x=f.default.useCallback(function(a){v(a),t&&("function"==typeof t?t(a):"object"==typeof t&&(t.current=a))},[t,v]);f.default.useEffect(function(){var a=w&&c&&g.isLocalURL(m),b=void 0!==s?s:e&&e.locale,d=j[m+"%"+n+(b?"%"+b:"")];a&&!d&&k(e,m,n,{locale:b})},[n,m,w,s,c,e]);var y={ref:x,onClick:function(a){var c,d,f,h,i,j,k,l,o,t;b.props&&"function"==typeof b.props.onClick&&b.props.onClick(a),a.defaultPrevented||(c=a,d=e,f=m,h=n,i=p,j=q,k=r,l=s,"A"===c.currentTarget.nodeName&&((t=(o=c).currentTarget.target)&&"_self"!==t||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.nativeEvent&&2===o.nativeEvent.which||!g.isLocalURL(f))||(c.preventDefault(),null==k&&h.indexOf("#")>=0&&(k=!1),d[i?"replace":"push"](f,h,{shallow:j,locale:l,scroll:k})))}};if(y.onMouseEnter=function(a){b.props&&"function"==typeof b.props.onMouseEnter&&b.props.onMouseEnter(a),g.isLocalURL(m)&&k(e,m,n,{priority:!0})},a.passHref||"a"===b.type&&!("href"in b.props)){var z=void 0!==s?s:e&&e.locale,A=e&&e.isLocaleDomain&&g.getDomainLocale(n,z,e&&e.locales,e&&e.domainLocales);y.href=A||g.addBasePath(g.addLocale(n,z,e&&e.defaultLocale))}return f.default.cloneElement(b,y)}},57190:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b,c=a.rootMargin,h=a.disabled||!f,i=d.useRef(),j=function(a){if(Array.isArray(a))return a}(b=d.useState(!1))||function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c}(b,2)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}(),k=j[0],l=j[1],m=d.useCallback(function(a){i.current&&(i.current(),i.current=void 0),!h&&!k&&a&&a.tagName&&(i.current=g(a,function(a){return a&&l(a)},{rootMargin:c}))},[h,c,k]);return d.useEffect(function(){if(!f&&!k){var a=e.requestIdleCallback(function(){return l(!0)});return function(){return e.cancelIdleCallback(a)}}},[k]),[m,k]};var d=c(67294),e=c(9311),f="undefined"!=typeof IntersectionObserver;function g(a,b,c){var d=i(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){g.delete(a),f.unobserve(a),0===g.size&&(f.disconnect(),h.delete(e))}}var h=new Map();function i(a){var b=a.rootMargin||"",c=h.get(b);if(c)return c;var d=new Map(),e=new IntersectionObserver(function(a){a.forEach(function(a){var b=d.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return h.set(b,c={id:b,observer:e,elements:d}),c}},19898:function(a,b,c){"use strict";var d=c(85893);c(67294);var e=c(41664);b.Z=function(a){var b=a.data,c=b.alias,f=b.title,g=b.cover,h={};return g&&g.thumb&&(h={backgroundImage:"url(".concat(g.thumb,")"),backgroundSize:"cover",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}),(0,d.jsx)(e.default,{href:"/articles/"+c,prefetch:!1,children:(0,d.jsxs)("a",{className:"articles__item",children:[(0,d.jsx)("div",{className:"articles__item-head",children:(0,d.jsx)("div",{className:"acticles__item-image",style:h})}),(0,d.jsx)("h3",{className:"articles__item-h3",children:f})]})})}},99459:function(a,b,c){"use strict";c.d(b,{Z:function(){return C}});var d=c(85893),e=c(67294),f=c(5152),g=c(11163),h=c(66338),i=c(14890),j=c(40407),k=c(41664),l=c(38610),m=c(77866),n=c(71893),o=c.n(n),p=c(34155),q=function(a){var b,c,e,f,g=a.wli;return p.env.NEXT_PUBLIC_INTEGRATION?(e=(c=(b=g)||{}).home_url,f=c.logo_basic_styles,(0,d.jsx)("div",{children:(0,d.jsx)(k.default,{href:e||"/projects",rel:"nofollow",children:(0,d.jsx)("a",{className:"basic__center-link",children:f?(0,d.jsx)("span",{style:f}):b?(0,d.jsx)("span",{className:"basic__logo-integration"}):null})})})):(0,d.jsx)(k.default,{href:"/",children:(0,d.jsx)("a",{"aria-label":o().get("profile_menu.home").d("…"),children:(0,d.jsx)("span",{className:"basic__logo"})})})},r=c(40826),s=function(a){var b,c=a.topBarMenu,e=a.user,f=a.router,g=e.profile,h=g&&g.projects?g.projects.length>0:l.p.get().length>0;return(0,d.jsx)("header",{className:"container",children:(0,d.jsxs)("div",{className:"basic__top-bar",children:[(0,d.jsx)(q,{wli:e.wli}),c||(b=h,(0,d.jsxs)("div",{className:"basic__center",children:[(0,d.jsx)(k.default,{href:"/search",prefetch:!1,children:(0,d.jsx)("a",{className:"basic__center-link",children:o().get("top_bar.find_link").d("…")})}),b?(0,d.jsx)(k.default,{href:"/projects",children:(0,d.jsx)("a",{className:"basic__center-link",rel:"nofollow",children:o().get("top_bar.projects_link").d("…")})}):r.e.isAllowCreateWeddingProject(e)?(0,d.jsx)(k.default,{href:"/project/create",children:(0,d.jsx)("a",{className:"basic__center-link",children:o().get("profile_menu.create").d("…")})}):null]})),(0,d.jsx)("div",{className:"basic__profile"+(g?"":" basic__profile_anonymous"),children:(0,d.jsx)(m.Z,{router:f,profile:g,user:e,isExistProjects:h,isShowName:!0})})]})})},t=c(83298),u=c(31624),v=c(20641),w=c(47609),x=c(47504),y=c(15288),z=c(34155),A=(0,f.default)(function(){return Promise.all([c.e(4317),c.e(4116),c.e(5732),c.e(1628)]).then(c.bind(c,17408))},{loadableGenerated:{webpack:function(){return[17408]},modules:["../components/template/BasicTemplate.js -> ./ToasterCenter"]},ssr:!1}),B=(0,f.default)(function(){return c.e(8422).then(c.bind(c,58422))},{loadableGenerated:{webpack:function(){return[58422]},modules:["../components/template/BasicTemplate.js -> ./Gdpr"]},ssr:!1}),C=(0,h.$j)(function(a){return{user:a.user}},function(a){return{userActions:(0,i.DE)(j,a)}})(function(a){var b=(0,g.useRouter)(),c=b.asPath,f=a.children,h=a.topBarMenu,i=a.user,j=a.userActions;return(0,e.useEffect)(function(){var a=u.V.getUrlParams(c);w.a.setup(a);var b=a.ref;b?j.setReferrer(v.O.set(b)):i.referrer||j.setReferrer(v.O.get());var d=a.source;d&&x.H.set(d)},[]),(0,d.jsxs)("div",{className:z.env.NEXT_PUBLIC_INTEGRATION?"basic":"basic basic__with-footer",children:[(0,d.jsx)(s,{router:b,user:i,topBarMenu:h}),(0,d.jsx)("div",{className:"basic__content",children:f}),z.env.NEXT_PUBLIC_INTEGRATION?null:(0,d.jsx)(t.Z,{router:b,extraClass:"footer__fixed",handleUserActions:j}),(0,d.jsx)(B,{isShow:!!i&&i.gdpr,handleUserActions:j}),(0,d.jsx)(A,{}),(0,d.jsx)(y.Z,{})]})})},47609:function(a,b,c){"use strict";c.d(b,{a:function(){return f}});var d=c(58971),e=c.n(d),f={get:function(){var a=e().get("origin");return a&&a.value&&a.date&&new Date().getTime()-a.date<8640e4?a.value:null},set:function(a){return a&&a.email&&delete a.email,e().set("origin",{value:a,date:new Date().getTime()}),a},setup:function(a){"object"==typeof a&&Object.keys(a).length>0&&(f.get()||f.set(a))}}},20641:function(a,b,c){"use strict";c.d(b,{O:function(){return f}});var d=c(58971),e=c.n(d),f={get:function(){var a=e().get("referrer");return a&&a.value&&a.date&&new Date().getTime()-a.date<8640e4?a.value:null},set:function(a){return e().set("referrer",{value:a,date:new Date().getTime()}),a}}},47504:function(a,b,c){"use strict";c.d(b,{H:function(){return f}});var d=c(58971),e=c.n(d),f={get:function(){var a=e().get("source");return a&&a.value&&a.date&&new Date().getTime()-a.date<8640e4?a.value:null},set:function(a){return e().set("source",{value:a,date:new Date().getTime()}),a}}},9008:function(a,b,c){a.exports=c(5443)},41664:function(a,b,c){a.exports=c(48418)}}])