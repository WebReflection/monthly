/*! (c) Andrea Giammarchi (ISC) */var monthly=function(){"use strict";var b=2;try{var t=require("os");(/\bMicrosoft\b/.test(t.release())||"win32"===t.platform())&&(b=90)}catch(t){}return function(t){var e,a,n=t.date,r=[].concat(null==t.highlight?(e=n,a=new Date,a.getMonth()===e.getMonth()&&a.getFullYear()===e.getFullYear()?[e.getDate()]:[]):t.highlight).concat(t.invert||[]).map(w,n),o=[].concat(t.dim||[],t._holidays||[]).map(w,n),s=[].concat(t.blink||[]).map(w,n),i=[].concat(t.bold||[]).map(w,n),l=[].concat(t.underline||[]).map(w,n),h=t.locale||"en",u=[].concat(null==t.freeDay?[0,6]:t.freeDay),g=null==t.startDay?1:t.startDay,c=!!t.table,D=c?16:10,f=n.toLocaleDateString(h,{month:"long"})+(t.year?" "+n.getFullYear():""),p=[" ".repeat(D-Math.ceil(f.length/2))," ".repeat(D-Math.floor(f.length/2))].join(f),m=[];c&&m.push(Y(b,"┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓")),m.push((c?Y(b,"┃ "):"")+Y(7,p)+(c?Y(b," ┃"):"")),c&&m.push(Y(b,"┣━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┳━━━━┫"));var y=new Date("1978-05-17");F(y,0),y.setDate(y.getDate()+g);for(var v,M=[],d=0;d<7;d++)M.push(Y(b,(v=h,y.toLocaleDateString(v,{weekday:"short"}).slice(0,2)))),y.setDate(y.getDate()+1);m.push((c?Y(b,"┃ "):"")+M.join(c?Y(b," ┃ "):" ")+(c?Y(b," ┃"):"")),c&&m.push(Y(b,"┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫")),y.setTime(n.getTime()),y.setDate(1),F(y,g);for(d=0;d<6;d++)m.push((c?Y(b,"┃ "):"")+j(y,n,u,r,s,i,o,l).join(c?Y(b," ┃ "):" ")+(c?Y(b," ┃"):"")),5!==d&&c&&m.push(Y(b,"┣━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━╋━━━━┫"));return c&&m.push(Y(b,"┗━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┻━━━━┛")),m};function w(t){if("number"!=typeof t)return"string"==typeof t?new Date(t):t;var e=new Date(this.getTime());return e.setDate(t),e}function F(t,e){for(;t.getDay()!==e;)t.setDate(t.getDate()-1)}function u(t){return this.getDate()===t.getDate()&&this.getMonth()===t.getMonth()&&this.getFullYear()===t.getFullYear()}function Y(t,e){return"["+t+"m"+e+"[0m"}function j(t,e,a,n,r,o,s,i){for(var l=[];l.length<7;){if(e.getMonth()===t.getMonth()){var h=(" "+t.getDate()).slice(-2);o.some(u,t)&&(h=Y(1,h)),(-1<a.indexOf(t.getDay())||s.some(u,t))&&(h=Y(b,h)),i.some(u,t)&&(h=Y(4,h)),r.some(u,t)&&(h=Y(5,h)),n.some(u,t)&&(h=Y(7,h)),l.push(h)}else l.push("  ");t.setDate(t.getDate()+1)}return l}}();
