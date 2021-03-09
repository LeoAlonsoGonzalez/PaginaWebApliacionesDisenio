 var correctas = 0;

    function incisos(numeritoAleatorio) {
      var posibilidades = "";
      for( var i = 0; i < arregloDeRespuestas[numeritoAleatorio].length; i ++){
        posibilidades += '<input type="radio" name = "preguntitas'+numeritoAleatorio+'" value= "'+i+'"><label>'+ arregloDeRespuestas[numeritoAleatorio][i] + '</label><br>';
      }
      return posibilidades;
    }

    var arregloDePreguntas = [
    'Indique que compuerta es AND',
    '¿Cuál es el símbolo algebraico del OR?',
    '¿Cuándo fue creada la sistematización de circuitos?',
    '¿Qué es una intersección lógica?',
    'Selecciona la tabla de verdad que corresponda a un OR',
    '¿Cuál es la salida del siguiente circuito?<div class="column column--50-25"><img src="img/ejem1.png" alt=""></div>',
    'Selecciona la compuerta que representa a un inversor',
    '¿Quién escribió la teoría booleana?',
    '¿Qué es una compuerta?',
    'Conector lógico AND'];

    var arregloDeRespuestas = [
    ['<div class="column column--50-25"><img src="img/AND.png" alt=""></div>', '<div class="column column--50-25"><img src="img/OR.png" alt=""></div>', '<div class="column column--50-25"><img src="img/NOT.png" alt=""></div>', '<div class="column column--50-25"><img src="img/XOR.png" alt=""></div>'],
    ['7', '+', '●','U'],
    ['1810', '1520', '1710','1930'],
    ['U', 'ᴧ', '●','+'],
    ['<div class="column column--50-25"><img src="img/TAND.png" alt=""></div>', '<div class="column column--50-25"><img src="img/TOR.png" alt=""></div>','<div class="column column--50-25"><img src="img/TXOR.png" alt=""></div>','<div class="column column--50-25"><img src="img/TNOT.png" alt=""></div>'],
    ['7A+BC', 'A+B7C','C+AB','7C+BA'],
    ['<div class="column column--50-25"><img src="img/AND.png" alt=""></div>', '<div class="column column--50-25"><img src="img/OR.png" alt=""></div>', '<div class="column column--50-25"><img src="img/NOT.png" alt=""></div>', '<div class="column column--50-25"><img src="img/XOR.png" alt=""></div>'],
    ['Claude Shannon', 'George Boole','Steve Jobs','Carlos V'],
    ['Componente que implanta operación lógica', 'Circuito','Operación','Símbolo'],
    ['U', 'ᴧ','7','●']];

    var arregloDeIncisosRespuestasCorrectas= ['0', '1', '3', '1', '0','1', '2', '1', '0', '1'];

    /*Validación de preguntas aleatorias no repetidas*/
    var cantidadNumeros = arregloDePreguntas.length;
    var arregloDeAleatorios = []
    while(arregloDeAleatorios.length < cantidadNumeros ){
      var numeroAleatorio = Math.floor(Math.random()*cantidadNumeros);
      var existe = false;
      for(var i=0;i<arregloDeAleatorios.length;i++){
        if(arregloDeAleatorios [i] == numeroAleatorio){
          existe = true;
          break;
        }
      }
      if(!existe){
        arregloDeAleatorios[arregloDeAleatorios.length] = numeroAleatorio;
      }

    }

  /*document.write("números aleatorios : " + arregloDeAleatorios);*/

    var aleatorio1 = arregloDeAleatorios[0];
    var aleatorio2 = arregloDeAleatorios[1];
    var aleatorio3 = arregloDeAleatorios[2];
    var aleatorio4 = arregloDeAleatorios[3];
    var aleatorio5 = arregloDeAleatorios[4];
    var aleatorio6 = arregloDeAleatorios[5];
    var aleatorio7 = arregloDeAleatorios[6];
    var aleatorio8 = arregloDeAleatorios[7];
    var aleatorio9 = arregloDeAleatorios[8];
    var aleatorio10 = arregloDeAleatorios[9];

    document.getElementById('pregunta1').innerHTML = arregloDePreguntas[aleatorio1];
    document.getElementById('respuestas1').innerHTML = incisos(aleatorio1);

    document.getElementById('pregunta2').innerHTML = arregloDePreguntas[aleatorio2];
    document.getElementById('respuestas2').innerHTML = incisos(aleatorio2);

    document.getElementById('pregunta3').innerHTML = arregloDePreguntas[aleatorio3];
    document.getElementById('respuestas3').innerHTML = incisos(aleatorio3);

    document.getElementById('pregunta4').innerHTML = arregloDePreguntas[aleatorio4];
    document.getElementById('respuestas4').innerHTML = incisos(aleatorio4);

    document.getElementById('pregunta5').innerHTML = arregloDePreguntas[aleatorio5];
    document.getElementById('respuestas5').innerHTML = incisos(aleatorio5);

    document.getElementById('pregunta6').innerHTML = arregloDePreguntas[aleatorio6];
    document.getElementById('respuestas6').innerHTML = incisos(aleatorio6);

    document.getElementById('pregunta7').innerHTML = arregloDePreguntas[aleatorio7];
    document.getElementById('respuestas7').innerHTML = incisos(aleatorio7);

    document.getElementById('pregunta8').innerHTML = arregloDePreguntas[aleatorio8];
    document.getElementById('respuestas8').innerHTML = incisos(aleatorio8);

    document.getElementById('pregunta9').innerHTML = arregloDePreguntas[aleatorio9];
    document.getElementById('respuestas9').innerHTML = incisos(aleatorio9);

    document.getElementById('pregunta10').innerHTML = arregloDePreguntas[aleatorio10];
    document.getElementById('respuestas10').innerHTML = incisos(aleatorio10);

    var correctas = 0;

    function calificacion(arregloAleatorios){
      for (var i = 0; i < arregloAleatorios.length; i++) {
        var respuesta = $("input[name=preguntitas"+arregloAleatorios[i]+"]:checked").val();
        if (respuesta == arregloDeIncisosRespuestasCorrectas[arregloAleatorios[i]]){
          correctas++;
        }
      }
      alert('tu calificación es:'+correctas);
      correctas =0 ;
    }

    function comprobar(){
      calificacion(arregloDeAleatorios);

    }