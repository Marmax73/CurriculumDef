//Autor: Marcelo Martínez
//Santa Fe, Santa Fe; Argentina.
//2021
//---------------------------------------


//caption sobre mi
const contenedorCaptionSobreMI = document.querySelector('.contenedorCaptionSobreMI');
const p1 = document.createElement('p');
p1.innerHTML = "<p>El desarrollo y alcance de los lenguajes deprogramación, no han hecho más que asombrarme. Mi compromiso es poner al servicio de quien lo requiera, todos mis conocimientos y voluntad de crecimiento constante en este fascinante campo.</p>"
const p2 = document.createElement('p')
p2.innerHTML = "<p>Con respecto a mis competencias académicas; las licenciaturas están sin concluir. Mi título secundario es de Técnico en mecánica.<br> Mi introducción a la programación la hice hace tres años y medio, aproximadamente; con un curso online de Java; lenguaje que estudié por alrededor de un año. Luego pasé a javaScript. Ya llevo más de dos años estudiando y, más allá del campo mismo del frontend(html, css y javascript), me he interiorizado en documentación, en testing, en repositorios. También me interioricé en bases de datos, como MongoDB y MySql; también en librerías como bootstrap y scss. Ha sido una curva de aprendizaje larga, de la cual tengo dos certificados de FreeCodeCamp; una plataforma de estudio bastante completa que acredita 300 horas por cada módulo realizado.<br> Mi experiencia laboral no tiene conexión con el campo de la informática.</p>"




//creación del salto de linea
//Nota. El punto y aparte, se realiza solamente colocando <br> dentro del párrafo. Ejemplo, línea de arriba.

//PASAJE DE ELEMENTOS A LOS PADRES
//sobre mi
contenedorCaptionSobreMI.appendChild(p1)
contenedorCaptionSobreMI.appendChild(p2)