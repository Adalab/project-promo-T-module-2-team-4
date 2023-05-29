'use strict';

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn'); //linea 28 formfill
const fileField2 = document.querySelector('.js__profile-upload-btn2'); //linea35 formfill
//const profileImage = document.querySelector('.js__profile-image'); no he encontrado imagen en profile
const profilePreview = document.querySelector('.js__profile-preview'); //linea 12 preview

/**
 * Recoge el archivo añadido al campo de tipo "file"
 * y lo carga en nuestro objeto FileReader para que
 * lo convierta a algo con lo que podamos trabajar.
 * Añade un listener al FR para que ejecute una función
 * al tener los datos listos
 * @param {evento} e
 */
function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  /* En la propiedad `result` de nuestro FR se almacena
   * el resultado. Ese resultado de procesar el fichero que hemos cargado
   * podemos pasarlo como background a la imagen de perfil y a la vista previa (******NO ENCONTRADA IMAGEN DE PERFIL, VERIFICAR DESPUES)
   * de nuestro componente.
   */
  // profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 *
 */
fileField.addEventListener('change', getImage); //ya existia
fileField2.addEventListener('click', () => {
  fileField.click();
});
//clase para el evento click en el button naranja
