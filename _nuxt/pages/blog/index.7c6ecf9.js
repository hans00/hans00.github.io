(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{223:function(t,e,n){"use strict";n.r(e);n(21);var r=n(2),c=n(0).a.extend({name:"Blog",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles").sortBy("updatedAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},head:{title:"Hans' Blog"}}),o=n(25),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[t._l(t.articles,(function(article){return[n("section",{staticClass:"section article"},[n("nuxt-link",{staticClass:"title",attrs:{to:"/blog/"+article["category-slug"]+"/"+article.slug}},[t._v("\n        "+t._s(article.title)+"\n      ")]),t._v(" "),n("div",[n("nuxt-link",{staticClass:"category",attrs:{to:"/blog/"+article["category-slug"]+"/",title:"Category"}},[n("font-awesome-icon",{attrs:{icon:["fad","folders"]}}),t._v("\n          "+t._s(article.category)+"\n        ")],1),t._v(" "),n("span",{staticClass:"time",attrs:{title:"Update date"}},[n("font-awesome-icon",{attrs:{icon:["fad","clock"]}}),t._v("\n          "+t._s(t._f("date")(article.updatedAt))+"\n        ")],1)],1),t._v(" "),n("hr",{staticClass:"my-1"}),t._v(" "),n("div",{staticClass:"content"},[t._v(t._s(article.description))]),t._v(" "),n("nuxt-link",{staticClass:"more",attrs:{to:"/blog/"+article["category-slug"]+"/"+article.slug}},[t._v("\n        Read\n      ")])],1)]}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);