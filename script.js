function validaCPF(cpf) {
  console.log(cpf.length);
  if (cpf.length != 11) {
    return false;
  } else {
    var numeros = cpf.substring(0, 9); //Ira capturar os numeros de 0 a 9
    console.log(numeros);
    var digitos = cpf.substring(9) //Ira capturar os dois últimos numeros  

  console.log("numeros o cpf " + numeros);
  console.log("digito do cpf " + digitos)

  var soma = 0;
  for( var i = 10; i > 1; i--){
  soma += numeros.charAt(10 - i) * i;
  }
 
  var resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11) //Executa uma operacao pergunta se soma é < 2, se for executa o que está após : 11 - (soma % 11)

   //Validação do primeiro digito 
  if(resultado != digitos.charAt(0)){
    return false;
  } 

  soma = 0;
  numeros = cpf.substring(0, 10);

  for(k = 11; k > 1; k-- ){
    soma =+ numeros.charAt(11 - k) * k;
  }

  resultado = soma % 11 > 2 ? 0 : 11 - (soma % 11);

  //Validação do segundo digito 
  if(resultado != digitos.charAt(1)){
    return false
  }
  // console.log(soma)
  return true;
  // console.log(digitos.toString().charAt(0) + ' é a primeira posição da variavel soma');
  }
}

function validacao() {
  console.log('Inicializando validação CPF');
  document.getElementById('success').style.display = 'none';
  document.getElementById('error').style.display = 'none';
  
  var cpf = document.getElementById('cpf_digitado').value;

  var resultadoValidacao = validaCPF(cpf);

  if (resultadoValidacao) {
    document.getElementById('success').style.display = 'block';
  } else {
    document.getElementById('error').style.display = 'block';
  }
}
