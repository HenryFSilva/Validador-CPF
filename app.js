const  validador  = require('./validadorCpfCnpj');

const cpf1 = '42509973088';

if (validador.validadorCpf(cpf1)) {
  console.log(`${cpf1} é um CPF válido.`);
} else {
  console.log(`${cpf1} não é um CPF válido.`);
}



