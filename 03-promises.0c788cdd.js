!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON");function a(e,n){var t=Math.random()>.3;return new Promise((function(o,r){setTimeout((function(){t?o({position:e,delay:n}):r({position:e,delay:n})}),n)}))}var u=document.querySelector("form");u.addEventListener("submit",(function(n){n.preventDefault();var t=n.target.elements,o=t.delay,r=t.step,l=t.amount;if(o=Number(o.value),r=Number(r.value),(l=Number(l.value))<=0||o<0||r<0)e(i).Notify.failure(" Please input correct values (>=0)");else{for(var f=1;f<=l;f+=1)a(f,o).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("Rejected promise ".concat(t," in ").concat(o,"ms"))})),o+=r;u.reset()}}))}();
//# sourceMappingURL=03-promises.0c788cdd.js.map
