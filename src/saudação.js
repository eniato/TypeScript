"use strict";
function saudar(nomedapessoa) {
    return "Olá " + nomedapessoa.nomedapessoa;
}
const saudacao = saudar({ nomedapessoa: "Carlos" });
console.log(saudacao);
