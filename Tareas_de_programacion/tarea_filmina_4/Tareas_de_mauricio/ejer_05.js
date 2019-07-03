function fib(n) {

    const resultado = [0, 1];
    for (var i = 2; i <= n; i++) {
      const a = resultado[i - 1];
      const b = resultado[i - 2];
      resultado.push(a + b);
    }
    console.log(resultado);
    return resultado[n -1];
  
  }
  
  console.log(fib(100));
  // a esto lo copie de internet ya que no tengo la mas palida idea ques es fibonacci jajajaja