(this["webpackJsonpwineshop-challenge"]=this["webpackJsonpwineshop-challenge"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(5),i=c.n(a),r=(c(29),c(30),c(0)),o=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"navbar",children:Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{className:"hd2",children:"Wine Shop"}),Object(r.jsx)("p",{className:"hd6",children:"wineshop.com"})]})})})},l=c(6),d=c(7),j=c(9),b=c(8),h=c(3),u=c(22),O=c.n(u).a.create({baseURL:" https://storage.googleapis.com/wineshop-assets"}),p=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"details",children:[Object(r.jsx)("div",{className:"details_a",children:"in development"}),Object(r.jsxs)("div",{className:"details_b",children:[Object(r.jsx)("div",{className:"size_one center_text",children:Object(r.jsx)("p",{children:"Delivery info"})}),Object(r.jsx)("div",{className:"size_one center_text",children:Object(r.jsx)("p",{className:"bold_a",children:"36 Bottles"})}),Object(r.jsxs)("div",{className:"size_two",children:[Object(r.jsxs)("div",{className:"item_button_border",children:[Object(r.jsx)("p",{children:Object(r.jsx)("b",{children:"36 X 2013 Breidecker"})}),Object(r.jsx)("button",{children:"Empty Cat"})]}),Object(r.jsxs)("div",{className:"item_button",children:[Object(r.jsx)("p",{className:"bold_b",children:"Ksh 432.56"}),Object(r.jsx)("button",{children:"Check Out"})]})]})]})]})})})}}]),c}(n.Component),m=Object(h.b)((function(e){return{cart:e.cart}}),{remove_from_cart:function(e){return{type:"REMOVE_PRODUCT_FROM_CART",id:e}}})(p),x=c(13),v=function(e){var t=Object(n.useState)(0),c=Object(x.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(0),o=Object(x.a)(i,2),l=o[0],d=o[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("img",{className:"bottle",src:e.image,alt:"reisling"}),Object(r.jsxs)("div",{className:"data",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("p",{className:"p_hd1",children:e.no}),Object(r.jsx)("p",{className:"p_hd2",children:e.name})]}),Object(r.jsxs)("div",{className:"price",children:[Object(r.jsxs)("div",{className:"left_prices",children:[Object(r.jsx)("p",{children:"Bottle"}),Object(r.jsxs)("p",{children:["$",e.bottle]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("input",{type:"number",name:"bqty",onChange:function(e){a(e.target.value)},width:"20px"})," QTY"]})]}),Object(r.jsxs)("div",{className:"right_prices",children:[Object(r.jsx)("p",{children:"Case"}),Object(r.jsxs)("p",{children:["$",e.case]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("input",{type:"number",name:"cqty",onChange:function(e){d(e.target.value)}})," QTY"]})]})]}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{className:"button_l",onClick:function(){return e.getdetails(e.details)},children:"details"}),Object(r.jsx)("button",{className:"button_r",onClick:function(){return t=e.no,c=l,n=s,void e.additemstocart(t,c,n);var t,c,n},children:"add to cart"})]})]})]})})},f=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(l.a)(this,c);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).showDetails=function(e){alert(e)},e.additems=function(t,c,n){e.props.add_to_cart(t,c,n)},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){this.props.fetchProducts()}},{key:"render",value:function(){var e=this,t=this.props.products.map((function(t){return Object(r.jsx)(v,{no:t.no,name:t.name,bottle:t.cost.bottle,case:t.cost.case,image:"https://storage.googleapis.com/wineshop-assets/wine-bottles/"+t.image,details:t.details,getdetails:e.showDetails,additemstocart:e.additems},t.no)}));return Object(r.jsx)("div",{className:"flex_container",children:t})}}]),c}(n.Component),_=Object(h.b)((function(e){return console.log(e.products),{products:e.products}}),{fetchProducts:function(){return function(e){O.get("/wine-shop.json").then((function(t){e({type:"FETCH_PRODUCTS",payload:t.data})}))}},add_to_cart:function(e,t,c){return{type:"ADD_PRODUCT_TO_CART",payload:[e,t,c]}}})(f);var g=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{}),Object(r.jsx)(m,{}),Object(r.jsx)(_,{})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))},C=c(4),y=c(23),T=Object(C.combineReducers)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return t.payload;default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PRODUCT_TO_CART":case"REMOVE_PRODUCT_FROM_CART":return{};default:return e}}}),w=c(24),D=Object(C.createStore)(T,Object(w.composeWithDevTools)(Object(C.applyMiddleware)(y.a)));i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(h.a,{store:D,children:Object(r.jsx)(g,{})})}),document.getElementById("root")),N()}},[[54,1,2]]]);
//# sourceMappingURL=main.fcf62313.chunk.js.map