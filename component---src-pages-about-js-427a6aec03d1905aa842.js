(self.webpackChunkgatsby_ecommerce_theme=self.webpackChunkgatsby_ecommerce_theme||[]).push([[682],{4944:function(e,t,n){"use strict";var a=n(2109),r=n(6790),l=n(7908),o=n(6244),i=n(9303),s=n(5417);a({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=l(this),n=o(t),a=s(t,0);return a.length=r(a,t,t,n,0,void 0===e?1:i(e)),a}})},3792:function(e,t,n){n(1223)("flat")},1405:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var a={};n.r(a),n.d(a,{alternate:function(){return o},button:function(){return i},disabled:function(){return s},flat:function(){return u},fullWidth:function(){return c},large:function(){return d},link:function(){return m},primary:function(){return h},secondary:function(){return f},small:function(){return p},smallest:function(){return b},tertiary:function(){return E}});n(4944),n(3792);var r=n(7294),l=n(1082),o="Button-module--alternate--a8208",i="Button-module--button--c17ef",s="Button-module--disabled--9c987",u="Button-module--flat--2c247",c="Button-module--fullWidth--737a0",d="Button-module--large--e508c",m="Button-module--link--c7764",h="Button-module--primary--2e17d",f="Button-module--secondary--e788d",p="Button-module--small--c0339",b="Button-module--smallest--fe15c",E="Button-module--tertiary--c503d",v=function(e){var t=e.children,n=e.href,o=e.target,d=e.level,h=e.type,f=e.size,p=e.disabled,b=e.onClick,E=e.className,v=e.flat,y=e.link,g=e.fullWidth,k=e.theme,w=d?[i]:[m];d in a&&w.push(a[d]),f in a&&w.push(a[f]),k in a&&w.push(a[k]),p&&w.push(s),v&&w.push(u),y&&w.push(m),g&&w.push(c),E&&w.push(E);var B=w.join(" ");return r.createElement(r.Fragment,null,n&&o&&r.createElement("a",{href:n,target:"_blank",rel:"noreferrer noopener",className:B,onClick:b},t),n&&!o&&r.createElement(l.rU,{to:n,className:B,onClick:b},t),!n&&r.createElement("button",{className:B,onClick:b,type:h,disabled:p},t))}},9071:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var a=n(7294),r=n(1405),l=n(1082),o=function(e){var t=e.title,n=e.subtitle,o=e.ctaText,i=e.ctaAction,s=e.image,u=e.maxWidth,c=e.ctaStyle,d=e.ctaLink,m=e.ctaTo,h=e.header;return a.createElement("div",{className:"Hero-module--root--39580",style:{backgroundImage:"url("+s+")"}},a.createElement("div",{className:"Hero-module--content--96d22",style:{maxWidth:u}},h&&a.createElement("span",{className:"Hero-module--header--70b1a"},h),t&&a.createElement("h2",{className:"Hero-module--title--b7d95"},t),n&&a.createElement("span",{className:"Hero-module--subtitle--b24ab"},n),o&&a.createElement(r.Z,{className:"Hero-module--ctaButton--06285 "+c,level:"primary",onClick:i},o),d&&a.createElement(l.rU,{className:"Hero-module--ctaLink--76de6",to:m},d)))}},1802:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(7294),r=n(1082),l=function(e){var t=e.children,n=e.to,l=e.onClick,o=e.isActive,i=e.themeRef;return a.createElement("div",{onClick:l,role:"presentation",className:"ThemeLink-module--root--8f6ae "+(!0===o?"ThemeLink-module--active--52970":""),ref:i},a.createElement(r.rU,{className:"ThemeLink-module--link--f3867",to:n},t))}},4633:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(4954),l=n(9071),o=n(1802),i=n(2441),s=n(8490);t.default=function(e){var t=(0,a.useRef)(),n=(0,a.useRef)(),u=(0,a.useRef)(),c=function(e){e&&window.scrollTo({behavior:"smooth",top:e.current.offsetTop-280})};return a.createElement(i.Z,{disablePaddingBottom:!0},a.createElement("div",{className:s.Jz},a.createElement(l.Z,{maxWidth:"900px",image:"/about.png",title:"Ella \n Established 2001"}),a.createElement("div",{className:s.DZ},a.createElement(o.Z,{onClick:function(){return c(t)},to:"#history"},"History"),a.createElement(o.Z,{onClick:function(){return c(n)},to:"#values"},"Values"),a.createElement(o.Z,{onClick:function(){return c(u)},to:"#sustainability"},"Sustainability")),a.createElement(r.Z,{size:"large",spacing:"min"},a.createElement("div",{className:s.t,ref:t},a.createElement("p",null,"Founded in 1860, Sydney is an innovative British brand with a contemporary edge. We make timeless everyday luxury clothing."),a.createElement("br",null),a.createElement("br",null),a.createElement("p",null,"We created some of the world's first T-shirts and spent decades perfecting the feel of the cotton. Today we are the only brand that makes T-shirts in its own factory in the UK. And we do this in the same factory we have occupied since 1937."))),a.createElement("div",{className:s.Bj},a.createElement("img",{alt:"shirt brand",src:"/about1.png"})),a.createElement(r.Z,{size:"large",spacing:"min"},a.createElement("div",{className:s.kQ},a.createElement("h3",null,"Our Values"),a.createElement("div",{ref:n},a.createElement("p",null,"Sunspel produced some of the world's earliest T-shirts. In the late 1800s the business made luxury tunics and undershirts from lightweight Sea Island cotton for export to the Far East and other warm climates. While these garments initially had silk buttoned plackets, these were removed in the early 1900s and replaced with simple bound necks to reduce manufacturing costs - creating the T-shirt. We've supplied the world as the T-shirt has evolved from underwear to outerwear, from symbol of youthful rebellion to everyday wardrobe staple, and we've spent decades refining its every last aspect."),a.createElement("ol",null,a.createElement("li",null,"Be an ecowear"),a.createElement("li",null,"Sophisticated and not mass-produced"),a.createElement("li",null,"Only natural materials")),a.createElement("img",{alt:"founder",src:"/about2.png"})),a.createElement("h3",null,"Sustainability"),a.createElement("div",{id:"#sustainability",ref:u},a.createElement("p",null,"Our founder, Thomas Hill, had both an eye for quality and a desire to innovate. As well as using the finest fibres such as Sea Island cotton, cashmere and silk, he invented his own fabrics. Sunspel continues this commitment to innovation today and our unique fabrics include: Q100 Sea Island cotton, Q82 Supima cotton, Q75 warp knit mesh cotton and Q14 warp knit cellular cotton. The technology behind these fabrics remains unchanged today and all Sunspel products use the finest cottons, wools and fibres."),a.createElement("p",null,"Made in Long Eaton, England and crafted from our luxurious long staple Supima cotton for unparalleled softness, comfort and durability, the Sunspel T-shirt has a classic fit and only the most essential details."," "),a.createElement("p",null,"With over 100 years spent perfecting fabric, fit and style, the Sunspel Classic T-shirt is recognised as the finest in the world.")))),a.createElement("div",{className:s.Bj},a.createElement("img",{alt:"shirt backwards",src:"/about3.png"}))))}},8490:function(e,t,n){"use strict";n.d(t,{Bj:function(){return l},DZ:function(){return o},Jz:function(){return s},VC:function(){return i},kQ:function(){return a},t:function(){return r}});var a="about-module--content--a26cb",r="about-module--detailContainer--9fd3e",l="about-module--imageContainer--42d10",o="about-module--navContainer--d8791",i="about-module--newArrivalsContainer--b77c9",s="about-module--root--6061d"}}]);
//# sourceMappingURL=component---src-pages-about-js-427a6aec03d1905aa842.js.map