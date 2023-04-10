"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{83298:function(a,b,c){c.d(b,{Z:function(){return r}});var d=c(85893),e=c(67294),f=c(41664),g=c(5152),h=c(73723),i=c(71893),j=c.n(i);function k(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function l(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function n(a){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function o(a,b){return(o=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}var p=(0,g.default)(function(){return Promise.all([c.e(4317),c.e(4116),c.e(5732),c.e(8174)]).then(c.bind(c,12819)).then(function(a){return a.Dialog})},{loadableGenerated:{webpack:function(){return[12819]},modules:["../dialogs/LanguageDialog.js -> @blueprintjs/core"]},ssr:!1}),q=function(a){"use strict";!function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&o(a,b)}(g,a);var b,c,e,f=function(a){var b=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}();return function(){var c,d,e,f,g=n(a);if(b){var h=n(this).constructor;f=Reflect.construct(g,arguments,h)}else f=g.apply(this,arguments);return d=this,(e=f)&&("object"==((c=e)&&"undefined"!=typeof Symbol&&c.constructor===Symbol?"symbol":typeof c)||"function"==typeof e)?e:k(d)}}(g);function g(a){var b;return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,g),m(k(b=f.call(this,a)),"toggleDialog",function(){return b.setState({isOpen:!b.state.isOpen})}),m(k(b),"show",function(){b.setState({isOpen:!b.state.isOpen,isSaySorry:!1,language:""})}),m(k(b),"handleChangeLanguage",function(a,c){var d=b.props.router;b.props.handleUserActions.collectLanguageStatistic({language:c}),h.l.available[a]?(d.push(d.asPath,d.asPath,{locale:a}),b.toggleDialog()):b.setState({isSaySorry:!0,language:c})}),m(k(b),"renderInterface",function(){var a=h.l.activeList.map(function(a,c){var e={backgroundImage:"url(/assets/i/flags/".concat(a.f,".svg)")};return(0,d.jsxs)("button",{className:"bp3-button bp3-fill bp3-minimal text-left-between"+(a.key===b.props.router.locale?" language__active":""),onClick:function(){return b.handleChangeLanguage(a.key,a.value)},children:[a.value,(0,d.jsx)("span",{className:"footer_flag-list",style:e})]},c)});return(0,d.jsx)("div",{children:a})}),m(k(b),"renderSaySorry",function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)("div",{className:"language__icon"}),(0,d.jsx)("h3",{className:"language__h3 text-center",children:j().get("language_sorry").d("…")}),(0,d.jsx)("p",{className:"text-center",children:j().get("language_not_ready").d("…")}),(0,d.jsx)("p",{className:"text-center",children:j().get("language_on_the_way",{language:b.state.language}).d("…")})]})}),b.state={isOpen:!1,isSaySorry:!1},b}return b=g,c=[{key:"render",value:function(){return this.state.isOpen?(0,d.jsxs)(p,{isOpen:this.state.isOpen,onClose:this.toggleDialog,className:"language__dialog-language",children:[(0,d.jsxs)("div",{className:"bp3-dialog-header",children:[(0,d.jsx)("h4",{className:"bp3-heading",children:j().get("language_select_title").d("…")}),(0,d.jsx)("button",{onClick:this.toggleDialog,className:"bp3-button bp3-minimal bp3-icon-cross"})]}),(0,d.jsx)("div",{className:"bp3-dialog-body bootstrap-wrapper",children:this.state.isSaySorry?this.renderSaySorry():this.renderInterface()})]}):null}}],l(b.prototype,c),e&&l(b,e),g}(e.Component),r=(0,e.memo)(function(a){var b=a.router,c=a.extraClass,g=a.style,i=a.handleUserActions,k=(0,e.useRef)(),l=h.l.list.find(function(a){return a.key===b.locale}),m=l?l.f:"us",n={backgroundImage:"url(/assets/i/flags/".concat(m,".svg)")};return l=l?l.value:"English",(0,d.jsxs)("footer",{className:"container-flued footer"+(c?" ".concat(c):""),style:g||{},children:[(0,d.jsxs)("div",{className:"footer__container",children:[(0,d.jsx)("nav",{className:"footer__links-1",children:(0,d.jsxs)("ul",{className:"footer__ul",children:[(0,d.jsx)("li",{className:"footer__li",children:(0,d.jsx)(f.default,{href:"/",children:(0,d.jsx)("a",{className:"footer__a",children:j().get("footer.main_link").d("…")})})}),(0,d.jsx)("li",{className:"footer__li",children:(0,d.jsx)(f.default,{href:"/projects",children:(0,d.jsx)("a",{className:"footer__a",rel:"nofollow",children:j().get("footer.my_projects").d("…")})})}),(0,d.jsx)("li",{className:"footer__li",children:(0,d.jsx)(f.default,{href:"/project/create",children:(0,d.jsx)("a",{className:"footer__a",children:j().get("footer.new_project").d("…")})})}),(0,d.jsx)("li",{className:"footer__li",children:(0,d.jsx)(f.default,{href:"/wedding-photo-of-the-day",prefetch:!1,children:(0,d.jsx)("a",{className:"footer__a",children:j().get("footer.wedding_photo_link").d("…")})})})]})}),(0,d.jsx)("nav",{className:"footer__links-2",children:(0,d.jsxs)("ul",{className:"footer__ul",children:[(0,d.jsx)("li",{className:"footer__li",children:(0,d.jsx)(f.default,{href:"/articles",prefetch:!1,children:(0,d.jsx)("a",{className:"footer__a",children:j().get("footer.articles_link").d("…")})})}),(0,d.jsx)("li",{className:"footer__li",children:(0,d.jsx)(f.default,{href:"/business",prefetch:!1,children:(0,d.jsx)("a",{className:"footer__a",children:j().get("footer.business_link").d("…")})})}),(0,d.jsx)("li",{className:"footer__li",children:(0,d.jsx)(f.default,{href:"/white-label",prefetch:!1,children:(0,d.jsx)("a",{className:"footer__a",children:j().get("footer.white_link").d("…")})})}),(0,d.jsx)("li",{className:"footer__li",children:(0,d.jsx)(f.default,{href:"/pricing",prefetch:!1,children:(0,d.jsx)("a",{className:"footer__a",children:j().get("footer.pricing_link").d("…")})})})]})}),(0,d.jsx)("nav",{className:"footer__links-3",children:(0,d.jsxs)("ul",{className:"footer__ul",children:[(0,d.jsx)("li",{className:"footer__li",children:(0,d.jsx)(f.default,{href:"/faq",prefetch:!1,children:(0,d.jsx)("a",{className:"footer__a",children:j().get("footer.faq_link").d("…")})})}),(0,d.jsx)("li",{className:"footer__li",children:(0,d.jsx)(f.default,{href:"/about",prefetch:!1,children:(0,d.jsx)("a",{className:"footer__a",children:j().get("footer.about_link").d("…")})})}),(0,d.jsx)("li",{className:"footer__li",children:(0,d.jsx)(f.default,{href:"/media",prefetch:!1,children:(0,d.jsx)("a",{className:"footer__a",children:j().get("footer.media_link").d("…")})})}),(0,d.jsx)("li",{className:"footer__li",children:(0,d.jsx)(f.default,{href:"/contacts",prefetch:!1,children:(0,d.jsx)("a",{className:"footer__a",children:j().get("footer.contact_link").d("…")})})})]})}),(0,d.jsxs)("div",{className:"footer__additional",children:[(0,d.jsx)("div",{children:(0,d.jsxs)("div",{className:"footer__language-btn noselect",onClick:function(){k&&k.current&&k.current.show()},children:[(0,d.jsx)("span",{className:"footer_flag",style:n})," ",l]})}),(0,d.jsxs)("div",{className:"footer__social-feed",children:[(0,d.jsx)("div",{className:"footer__social-label",children:j().get("footer.social").d("…")}),(0,d.jsxs)("nav",{children:[(0,d.jsx)("a",{className:"footer__social-ico-in",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram social link",href:"https://instagram.com/wedding.assistant",children:" "}),(0,d.jsx)("a",{className:"footer__social-ico-fb",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook social link",href:"https://www.facebook.com/MyWedAssistant",children:" "}),(0,d.jsx)("a",{className:"footer__social-ico-tw",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter social link",href:"https://twitter.com/MyWedAssistant",children:" "}),(0,d.jsx)("a",{className:"footer__social-ico-pi",target:"_blank",rel:"noopener noreferrer","aria-label":"Pinterest social link",href:"https://pinterest.com/MyWedAssistant",children:" "})]})]})]})]}),(0,d.jsxs)("div",{className:"footer__copy",children:["Copyright \xa9 2019-2023 Wedding Planning Assistant LLC, All rights reserved. ",(0,d.jsx)(f.default,{className:"footer__privacy-a",href:"/privacy",prefetch:!1,children:j().get("footer.privacy_link").d("…")})]}),(0,d.jsx)(q,{router:b,handleUserActions:i,ref:k})]})},function(a,b){return a.router.locale===b.router.locale&&a.extraClass===b.extraClass&&a.router.pathname===b.router.pathname})},77866:function(a,b,c){c.d(b,{Z:function(){return k}});var d=c(85893),e=c(67294),f=c(41664),g=c(71893),h=c.n(g),i=c(40826),j=c(34155);function k(a){var b,c,g,k,l,m=function(){return i.e.isAllowCreateWeddingProject(q)?(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/project/create",onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.create").d("…")})})}):null},n=a.router,o=a.connections,p=a.profile,q=a.user,r=a.isShowName,s=a.isExistProjects,t=n.pathname,u=p||{},v=u.userpic,w=u.is_business,x=(0,e.useState)(!1),y=x[0],z=x[1],A=function(){return z(!y)};return(0,d.jsxs)(e.Fragment,{children:[(0,d.jsxs)("div",{className:"app__profile",children:[(c={},(b=v)&&b.thumb&&(c={backgroundImage:"url(".concat("string"==typeof b.thumb?b.thumb:b.thumb.f,"), url(").concat(b.nano,")"),backgroundPosition:"center center",backgroundSize:"cover",borderWidth:"1px"}),(0,d.jsx)("div",{className:"app__profile-box"+(o&&o.wedding_project_connections>1&&!b?" app__profile-you":""),onClick:A,style:c,children:"\xa0"})),function(){if(!r)return null;var a,b=p||{},c=b.first_name,e=b.last_name;return r&&(a=c||e?c||e:h().get("anonymous").d("…")),p?(0,d.jsx)("span",{className:"app__profile-name",onClick:A,children:a}):(0,d.jsxs)("div",{className:"app__profile-anonymous",children:[(0,d.jsx)("span",{className:"app__profile-anonymous-name",onClick:A,children:a}),(0,d.jsxs)("div",{className:"app__profile-anonymous-links",children:[(0,d.jsx)(f.default,{href:"/signin",children:(0,d.jsx)("a",{className:"app__profile-anonymous-a",children:h().get("login").d("…")})})," ","\xa0","|","\xa0"," ",(0,d.jsx)(f.default,{href:"/signup",children:(0,d.jsx)("a",{className:"app__profile-anonymous-a",children:h().get("register").d("…")})})]})]})}(),y?(0,d.jsx)("div",{className:"app__profile-menu",children:p?(g=s,k=w,(0,d.jsxs)("ul",{className:"app__profile-menu-ul",children:[!j.env.NEXT_PUBLIC_INTEGRATION&&"/"!==t&&"/:language/"!==t&&(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/",onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.home").d("…")})})}),g?null:m(),(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/projects",onClick:A,children:(0,d.jsx)("a",{rel:"nofollow",children:h().get("profile_menu.projects").d("…")})})}),k?(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/profile/business",onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.business").d("…")})})}):null,(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/search",prefetch:!1,onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.search").d("…")})})}),j.env.NEXT_PUBLIC_INTEGRATION?null:(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/articles",onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.articles").d("…")})})}),(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/profile",onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.profile").d("…")})})}),(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/signout",onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.logout").d("…")})})})]})):(l=s,(0,d.jsxs)("ul",{className:"app__profile-menu-ul",children:[!j.env.NEXT_PUBLIC_INTEGRATION&&"/"!==t&&"/:language/"!==t&&(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/",onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.home").d("…")})})}),l?null:m(),(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/projects",rel:"nofollow",onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.projects").d("…")})})}),(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/search",prefetch:!1,onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.search").d("…")})})}),j.env.NEXT_PUBLIC_INTEGRATION?null:(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/articles",onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.articles").d("…")})})}),(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/signin",onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.signin").d("…")})})}),(0,d.jsx)("li",{className:"app__profile-menu-li",children:(0,d.jsx)(f.default,{href:"/signup",onClick:A,children:(0,d.jsx)("a",{children:h().get("profile_menu.signup").d("…")})})})]}))}):null]}),y?(0,d.jsx)("div",{className:"app__profile-menu-portal",onClick:A}):null]})}},15288:function(a,b,c){var d=c(67294),e=c(66338),f=c(40407),g=c(34155);b.Z=function(){var a=function(){var a=c.g.location.hostname.toLowerCase();return"wa.local"!==a&&"planning.wedding"!==a},b=(0,e.v9)(function(a){return a.user}),h=(0,e.I0)(),i=b.profile;return(0,d.useEffect)(function(){g.env.NEXT_PUBLIC_INTEGRATION&&(b.wli||h(f.getWhiteLabel()))},[b.wli]),(0,d.useEffect)(function(){if(g.env.NEXT_PUBLIC_INTEGRATION&&b.wli&&b.wli.integrations&&b.wli.integrations.tawk&&a()&&!c.g.is_tawk_init){c.g.is_tawk_init=!0;var d=d||{};if(i){var e=i.first_name+" "+i.last_name;d.visitor={name:e},c.g.tawk_name=e}var f=document.createElement("script"),h=document.getElementsByTagName("script")[0];f.async=!0,f.src="https://embed.tawk.to/"+b.wli.integrations.tawk,f.charset="UTF-8",f.setAttribute("crossorigin","*"),h.parentNode.insertBefore(f,h)}},[b.wli,b.profile]),(0,d.useEffect)(function(){if(g.env.NEXT_PUBLIC_INTEGRATION&&b.wli&&b.wli.integrations&&b.wli.integrations.tawk&&b.profile&&a()){var d=i.first_name+" "+i.last_name;window.Tawk_API&&d&&c.g.tawk_name!==d&&(c.g.tawk_name=d,window.Tawk_API.setAttributes({name:d},function(a){}))}},[b.profile]),null}},38610:function(a,b,c){c.d(b,{p:function(){return g}});var d=c(58971),e=c.n(d);function f(a){return(function(a){if(Array.isArray(a)){for(var b=0,c=new Array(a.length);b<a.length;b++)c[b]=a[b];return c}})(a)||(function(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)})(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance")})()}var g={get:function(a,b){if(!a)return e().get("projects")||[];var c=a.projects,d={};c&&c.forEach(function(a){d[a]=!0});var h=e().get("projects")||[];if(0===h.length)return c||[];var i=[],j=[];return h.forEach(function(a){d[a]?j.push(a):i.push(a)}),i.length>0&&b({projects:i},function(){e().set("projects",[])}),j.length>0&&g.removeProjectsFromLocalStorage(j),c?f(c).concat(f(i)):i},add:function(a,b,c){if(!a){var d=e().get("projects")||[];d.push(c);var g={};return d.forEach(function(a){g[a]=!0}),e().set("projects",Object.keys(g)),Object.keys(g)}return a&&a.projects&& -1===a.projects.indexOf(c)&&b({projects:[c]}),a.projects?f(a.projects).concat([c]):[c]},removeProjectsFromLocalStorage:function(a){var b={};(void 0===a?[]:a).forEach(function(a){b[a]=!0});var c=e().get("projects")||[];c=c.filter(function(a){return!b[a]}),e().set("projects",c)},remove:function(a,b,c,d){if(!a){var f=e().get("projects")||[],g={};return f.forEach(function(a){g[a]=!0}),g[c]&&delete g[c],e().set("projects",Object.keys(g)),d&&d(),Object.keys(g)}return b({projects:[c]},d),a.projects?a.projects.filter(function(a){return a!==c}):[]},sync:function(a,b,c){var d=function(d){var e=g.get(d&&a,b.synchronizeProjects);c.getProjects({projects:e},!0)};a?b.getUserProfile(function(a){d(a)}):d()},syncFollowedVendors:function(a,b,c,d){c.resetFollowedWeddingProjects();var e=function(){var e=g.get(a,b.synchronizeProjects);c.getFollowedWeddingProjects(d,{projects:e})};a?b.getUserProfile(function(){e()}):e()}}},40826:function(a,b,c){c.d(b,{e:function(){return e}});var d=c(34155),e={isAllowCreateWeddingProject:function(a){var b=a.wli,c=a.profile;if(d.env.NEXT_PUBLIC_INTEGRATION){if(!b)return!1;if(b.who_can_create&&b.who_can_create.length>0)return!!c&&!!c._id&& -1!==b.who_can_create.indexOf(c._id)}return!0}}}}])