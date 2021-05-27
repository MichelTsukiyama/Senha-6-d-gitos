var senha, repete, s;

//Entrada de uma nova senha e validação
do{
  senha=prompt('Insira sua senha numérica de 6 dígitos');
}while (senha.length!=6);
repete = prompt('Redigite sua senha para validação. Ela deve ser a mesma.');

//Verifica a senha está igual a 1ª
while (repete!=senha){
  repete=prompt('A senha não é a mesma. Insira novamente a senha para validação.');
}

s=prompt('Para acessar sua conta, entre com sua senha:');

//Conta se, e quantas vezes errou a senha
for (var cont=1; senha!= s && cont<3; cont++){
  alert('A senha informada não confere. Insira novamente. Você tem mais '+ (3-cont)+' tentativa(s).');
  s=prompt('Para acessar sua conta, entre com sua senha');
}

//senha correta = login
//3 erros igual bloqueio
if(cont<3){
  alert(' Sua senha está correta! Bem vindo, Playboyzinho!.');
}else{
  senha=99
  alert('Sua senha está bloqueada. Procure seu gerente');
}

