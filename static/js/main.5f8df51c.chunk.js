(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{14:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),s=n.n(a),i=(n(14),n(2)),o=n.n(i),j=n(9),u=n(6),d=n(3),l=n(0),b=function(e){var t=e.pokemons,n=e.loading,c=e.infoPokemon;return Object(l.jsx)(l.Fragment,{children:n?Object(l.jsx)("h1",{children:"Loading..."}):t.map((function(e){return Object(l.jsxs)("div",{role:"button",tabIndex:0,className:"card",onClick:function(){return c(e)},children:[Object(l.jsx)("div",{className:"photo-conteiner",children:Object(l.jsx)("img",{className:"photo-pok",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(e.id,".svg"),alt:"".concat(e.name)})}),Object(l.jsx)("h3",{className:"poke-name",children:e.name}),Object(l.jsx)("div",{className:"poke-type-conteiner",children:e.types.map((function(t){return Object(l.jsx)("div",{className:"poke-type",children:t.type.name},e.id)}))})]},e.id)}))})},p=function(e){var t=e.data;return Object(l.jsx)(l.Fragment,{children:t&&Object(l.jsxs)("div",{className:"poke-info",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsx)("img",{className:"poke-info-photo",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(t.id,".svg"),alt:"".concat(t.name)}),Object(l.jsx)("div",{className:"abilities",children:t.abilities.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"group",children:Object(l.jsx)("h2",{children:e.ability.name})})})}))}),Object(l.jsx)("div",{className:"base-stat",children:t.stats.map((function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("h3",{children:[e.stat.name,":",e.base_stat]})})}))})]})})},h=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!0),s=Object(d.a)(a,2),i=s[0],h=s[1],m=Object(c.useState)("https://pokeapi.co/api/v2/pokemon/"),O=Object(d.a)(m,2),f=O[0],x=O[1],v=Object(c.useState)(),k=Object(d.a)(v,2),g=k[0],N=k[1],w=Object(c.useState)(),y=Object(d.a)(w,2),P=y[0],F=y[1],S=function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.map(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url).then((function(e){return e.json()}));case 2:n=e.sent,r((function(e){var t=[].concat(Object(j.a)(e),[n]);return t.sort((function(e,t){return e.id-t.id})),t}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,fetch(f).then((function(e){return e.json()}));case 3:t=e.sent,N(t.next),S(t.results.slice(0,12)),h(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){I()}),[f]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h1",{children:"Pokedex"})}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"left_content-container",children:[Object(l.jsx)("div",{className:"left_content",children:Object(l.jsx)(b,{pokemons:n,loading:i,infoPokemon:function(e){return F(e)}})}),Object(l.jsx)("div",{className:"btn-group",children:g&&Object(l.jsx)("button",{type:"button",className:"loadBt",onClick:function(){x(g||"")},children:"Load More"})})]}),Object(l.jsx)("div",{className:"right_content",children:Object(l.jsx)(p,{data:P})})]})]})},m=(n(17),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(h,{})})});s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5f8df51c.chunk.js.map