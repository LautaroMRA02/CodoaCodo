// Métodos de búsqueda                   Descripción


// Element .getElementById(id)              Busca el elemento HTML con el id id. Si no, devuelve .


// Array .getElementsByClassName(class)     Busca elementos con la clase class. Si no, devuelve [].


// Array .getElementsByName(name)           Busca elementos con atributo name name. Si no, devuelve [].


// Array .getElementsByTagName(tag)         Busca elementos tag. Si no encuentra ninguno, devuelve [].

function cambiar() {
	var texto = document.getElementsByClassName(".prueba");
	texto[0].innerHTML = 'Hola Codo a Codo';
}
