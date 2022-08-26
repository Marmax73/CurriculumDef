//Autor: Marcelo Martínez
//Santa Fe, Santa Fe; Argentina.
//2021
//---------------------------------------


//caption sobre mi
const contenedorCaptionSobreMI = document.querySelector('.contenedorCaptionSobreMI');
const p1 = document.createElement('p');
p1.innerHTML = "<p>Me considero una persona con una alta capacidad de análisis y una gran capacidad para el trabajo en equipo y la investigación. El desarrollo y alcance de los lenguajes de programación, no han hecho más que asombrarme. Mi compromiso es poner al servicio de quien lo requiera, todos mis conocimientos y voluntad de crecimiento constante en este fascinante campo. </p>"
const p2 = document.createElement('p')
p2.innerHTML = "<p>Con respecto a mis competencias académicas; las licenciaturas están sin concluir. Mi título secundario es de Técnico en mecánica.<br> Mi introducción a la programación la hice hace tres años y medio, aproximadamente; con un curso online de Java; lenguaje que estudié por alrededor de un año. Luego pasé a javaScript. Ya llevo más de dos años estudiando y, más allá del campo mismo del frontend(html, css y javascript), me he interiorizado en documentación, en testing, en repositorios. También me interioricé en bases de datos, como MongoDB y MySql; en fetching (AJAX-axios), json; como así, también, en librerías como bootstrap y scss. </p>"




//creación del salto de linea
//Nota. El punto y aparte, se realiza solamente colocando <br> dentro del párrafo. Ejemplo, línea de arriba.

//PASAJE DE ELEMENTOS A LOS PADRES
//sobre mi
contenedorCaptionSobreMI.appendChild(p1)
contenedorCaptionSobreMI.appendChild(p2)