/*
The MIT License (MIT)

Copyright (c) 2014 Phil Hughes

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
(function(){var a;!function(){var a,b,c,d,e,f,g,h;for(e=window,h=["ms","moz","webkit","o"],f=0,g=h.length;g>f&&(d=h[f],!e.requestAnimationFrame);f++)e.requestAnimationFrame=e[""+d+"RequestAnimationFrame"],e.cancelAnimationFrame=e[""+d+"CancelAnimationFrame"]||e[""+d+"CancelRequestAnimationFrame"];if(e.requestAnimationFrame){if(e.cancelAnimationFrame)return;return a=e.requestAnimationFrame,b={},e.requestAnimationFrame=function(c){var d;return d=a(function(a){return d in b?delete b[d]:c(a)})},e.cancelAnimationFrame=function(a){return b[a]=!0}}return c=0,e.requestAnimationFrame=function(a){var b;return c=Math.max(c+16,b=+new Date),e.setTimeout(function(){return a(+new Date)},c-b)},e.cancelAnimationFrame=function(a){return clearTimeout(a)}}(),a=function(){return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0},function(){var b,c,d;return c="wscroll",d=0,(b=function(){return function(){var e,f;return e=a(),d!==e&&(d=e,void 0!==d&&(document.createEvent?(f=document.createEvent("HTMLEvents"),f.initEvent(c,!0,!0)):(f=document.createEventObject(),f.eventType=c),f.eventName=c,f.scrolltop=d,document.createEvent?document.dispatchEvent(f):document.fireEvent("on"+f.eventType,f))),requestAnimationFrame(b)}}(this))()}()}).call(this);
