(this["webpackJsonpomdbapi-test"]=this["webpackJsonpomdbapi-test"]||[]).push([[0],[,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var c=s(1),a=s.n(c),n=s(4),i=s.n(n),l=(s(11),s(2)),r=(s(12),s(5)),u=s(6),j=new(function(){function e(t){var s=t.baseUrl,c=t.apiKey;Object(r.a)(this,e),this._baseUrl=s,this._apiKey=c}return Object(u.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getFilmsByTitle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("".concat(this._baseUrl,"?apikey=").concat(this._apiKey,"&s=").concat(e,"&page=").concat(t)).then(this._checkResponse)}},{key:"getInfoAboutFilm",value:function(e){return fetch("".concat(this._baseUrl,"?apikey=").concat(this._apiKey,"&i=").concat(e)).then(this._checkResponse)}}]),e}())({baseUrl:"https://www.omdbapi.com/",apiKey:"850772fe"}),m=(s(13),s(0));var o=function(e){var t=e.handleSearchSubmit,s=e.setRequest,c=a.a.useState(""),n=Object(l.a)(c,2),i=n[0],r=n[1];return Object(m.jsxs)("form",{name:"SearchForm",className:"search-form",onSubmit:function(e){e.preventDefault(),t(i),s(i)},children:[Object(m.jsx)("input",{type:"text",value:i,onChange:function(e){return r(e.currentTarget.value)},name:"searchInput",id:"searchInput",className:"search-form__input",required:!0,minLength:"2",maxLength:"40",placeholder:"\u0414\u043e\u0431\u0430\u0432\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430"}),Object(m.jsx)("button",{type:"submit",className:"search-form__button",children:"Search"})]})};s(15);var b=function(e){var t=e.about;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("p",{className:"film__desc",children:[Object(m.jsx)("span",{className:"film__subtitle",children:"Actors: "}),t.Actors]}),Object(m.jsxs)("p",{className:"film__desc",children:[Object(m.jsx)("span",{className:"film__subtitle",children:"Plot: "}),t.Plot]}),Object(m.jsxs)("p",{className:"film__desc",children:[Object(m.jsx)("span",{className:"film__subtitle",children:"Awards: "}),t.Awards]}),Object(m.jsxs)("p",{className:"film__desc",children:[Object(m.jsx)("span",{className:"film__subtitle",children:"BoxOffice: "}),t.BoxOffice]}),Object(m.jsxs)("p",{className:"film__desc",children:[Object(m.jsx)("span",{className:"film__subtitle",children:"Country: "}),t.Country]}),Object(m.jsxs)("p",{className:"film__desc",children:[Object(m.jsx)("span",{className:"film__subtitle",children:"Director: "}),t.Director]}),Object(m.jsxs)("p",{className:"film__desc",children:[Object(m.jsx)("span",{className:"film__subtitle",children:"Genre: "}),t.Genre]}),Object(m.jsxs)("p",{className:"film__desc",children:[Object(m.jsx)("span",{className:"film__subtitle",children:"Language: "}),t.Language]}),Object(m.jsxs)("p",{className:"film__desc",children:[Object(m.jsx)("span",{className:"film__subtitle",children:"Writer: "}),t.Writer]})]})};s(16);var h=function(e){var t=e.film,s=e.handleClick,c=a.a.useState(!1),n=Object(l.a)(c,2),i=n[0],r=n[1],u=a.a.useState(null),j=Object(l.a)(u,2),o=j[0],h=j[1];return a.a.useEffect((function(){i?s(t.imdbID).then((function(e){h(e)})).catch((function(e){return console.log("Err: "+e)})):h(null)}),[i,t.imdbID,s]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{className:"film_image",src:t.Poster,alt:"Poster ".concat(t.Title)}),Object(m.jsx)("h2",{className:"film__title",children:t.Title}),Object(m.jsxs)("p",{className:"film__desc",children:[Object(m.jsx)("span",{className:"film__subtitle",children:"Year: "}),t.Year]}),Object(m.jsxs)("p",{className:"film__desc",children:[Object(m.jsx)("span",{className:"film__subtitle",children:"Type: "}),t.Type]}),Object(m.jsxs)("p",{className:"film__desc",children:[Object(m.jsx)("span",{className:"film__subtitle",children:"imdbID: "}),t.imdbID]}),Object(m.jsx)("button",{className:"film__button",onClick:function(e){e.preventDefault(),r(!i)},children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"}),function(){if(o)return Object(m.jsx)(b,{handleClick:s,about:o})}()]})};s(17);var d=function(e){var t=e.setPage,s=e.page,c=e.handleSearchSubmit,a=e.request,n=e.lastPage;function i(e){var s=parseInt(e.target.innerHTML);t(s),c(a,s)}return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("ul",{className:"page-list",children:[s>1&&Object(m.jsx)("li",{onClick:i,className:"page-item",children:1}),s-10>1&&Object(m.jsx)("li",{onClick:i,className:"page-item",children:s-10}),s-1>1&&Object(m.jsx)("li",{onClick:i,className:"page-item",children:s-1}),Object(m.jsx)("li",{className:"page-item",children:s}),s+1<n-1&&Object(m.jsx)("li",{onClick:i,className:"page-item",children:s+1}),s+10<n-1&&Object(m.jsx)("li",{onClick:i,className:"page-item",children:s+10}),s<n&&Object(m.jsx)("li",{onClick:i,className:"page-item",children:n})]})})};s(18);var f=function(e){var t=e.results,s=e.handleClick,c=e.setPage,a=e.page,n=e.handleSearchSubmit,i=e.request,l=e.lastPage;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"result-container",children:[a>1&&Object(m.jsx)("button",{className:"result-container__button",onClick:function(){a>1&&(n(i,a-1),c(a-1))},children:"\u2190"}),Object(m.jsx)("ul",{className:"results",children:t.map((function(e,t){return Object(m.jsx)("li",{className:"film-container",children:Object(m.jsx)(h,{film:e,handleClick:s})},t)}))}),l>a&&""!==i&&Object(m.jsx)("button",{className:"result-container__button",onClick:function(){l>a&&(n(i,a+1),c(a+1))},children:"\u2192"})]}),Object(m.jsx)(d,{setPage:c,page:a,handleSearchSubmit:n,request:i,lastPage:l})]})};var p=function(){var e=a.a.useState([]),t=Object(l.a)(e,2),s=t[0],n=t[1],i=a.a.useState(""),r=Object(l.a)(i,2),u=r[0],b=r[1],h=a.a.useState(1),d=Object(l.a)(h,2),p=d[0],_=d[1],O=a.a.useState(0),x=Object(l.a)(O,2),g=x[0],N=x[1],v=a.a.useState(!1),k=Object(l.a)(v,2),S=k[0],y=k[1],C=function(e,t){j.getFilmsByTitle(e,t).then((function(e){e.Response&&(n(e.Search),N(Math.ceil(e.totalResults/10)),y(!0))})).catch((function(e){return console.log("Error: "+e)}))};return Object(c.useEffect)((function(){S&&y(!1)}),[S]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(o,{handleSearchSubmit:C,setRequest:b}),!S&&s&&s.length>0&&Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(f,{results:s,setPage:_,page:p,lastPage:g,request:u,handleClick:function(e){return j.getInfoAboutFilm(e)},handleSearchSubmit:C})})]})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.187a9152.chunk.js.map