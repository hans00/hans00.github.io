(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{593:function(t,e,n){"use strict";n.r(e);n(22);var r=n(2),o=n(0).a.extend({name:"Category",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,o=t.error,e.prev=1,e.next=4,n("articles").where({category:r.category}).sortBy("updatedAt","desc").fetch();case 4:return c=e.sent,e.abrupt("return",{articles:c});case 8:e.prev=8,e.t0=e.catch(1),o({statusCode:404,message:"Category not found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:function(){var t,title="Category: ".concat(null===(t=this.$options.filters)||void 0===t?void 0:t.category(this.$route.params.category)," | Hans' Blog");return{title:title,meta:[{hid:"description",name:"description",content:"List of posts"},{hid:"og:title",property:"og:title",content:title},{hid:"og:description",property:"og:description",content:"List of posts"}]}}}),c=n(27),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[t._l(t.articles,(function(article){return[n("section",{key:article.slug,staticClass:"section article"},[n("nuxt-link",{staticClass:"title",attrs:{to:"/blog/"+article.category+"/"+article.slug}},[t._v("\n        "+t._s(article.title)+"\n      ")]),t._v(" "),n("div",[n("nuxt-link",{staticClass:"category",attrs:{to:"/blog/"+article.category+"/",title:"Category"}},[n("font-awesome-icon",{attrs:{icon:["fad","folders"]}}),t._v("\n          "+t._s(t._f("category")(article.category))+"\n        ")],1),t._v(" "),n("span",{staticClass:"time",attrs:{title:"Update date"}},[n("font-awesome-icon",{attrs:{icon:["fad","clock"]}}),t._v("\n          "+t._s(t._f("date")(article.updatedAt))+"\n        ")],1)],1),t._v(" "),n("hr",{staticClass:"my-1"}),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(article.description))]),t._v(" "),n("nuxt-link",{staticClass:"more",attrs:{to:"/blog/"+article.category+"/"+article.slug}},[t._v("\n        Read\n      ")])],1)]}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);