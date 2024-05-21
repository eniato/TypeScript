type Nome = {
    nomedapessoa: string;
}

function saudar(nomedapessoa: Nome): string {
    return "Olá " + nomedapessoa.nomedapessoa;
}

const saudacao = saudar({ nomedapessoa: "Carlos" });
console.log(saudacao);