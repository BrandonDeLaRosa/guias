//! POO  PAradigma de programacion que modula el codigo volviendolo mas entendible y reutilizable.

// ?  Se basa en crear tipos nuevos de datos a los que se llaman "Objetos".


// ? Trataremos el codigo como un modulo dividido en dos Propiedades y Funciones.
// ? Estas a su vez se llaman parametros y metodos.
// ? Atributos: PRopiedades del objeto
// ? MEtodo: Acciones que el objeto puede realizar.


// TODO     Al tener propiedades y Metodos === CLase
// TODO   UNa taza (propiedades: volumen, liquido, cantidad de liquido).
// TODO            (Medoto: Beber(), Llenar( y vaciar () ).

// Con la clase Taza  --->  Podemos crear infinitos onjetos taza con mismos metodos y pero diferentes atributos.
// Ejemplo : Taza1 1: 150ml, cafe, 75ml.      <---- Instanciar          <----- Esto se realiza mediante el metodo constructor(150,cafe,75) <--- Recine los valores y crea un nuevo objeto.
// Ejemplo: Taza 2 :  300ml, jugo, 200ml.     <----   Instanciar        <----- El nombre del metodo depende del lenguaje (init (python), mismo nombre de clase (java) ).


// TODO se accede a los objetos mediante notacion de punto para CRUD.


// ! Pilares de POO (Abstraccion)

// ? Abstrraccion: Dependiendo el objetivo de mis objetos son las propiedades y los metodos que tienen. Cancion para una biblioteca, cancion para pagina de venta.

// ? Modularidad: Un programa se crea a partir de la modularidad (Creacion de diferentes clases que componen el programa). Es util ya que se maneja como componentes individuales
// ? De este modo si uno falla se puede reparar sin afectar el resto de clases, ademas de saber mas facil cual es el error.

// ! Pilares de POO (Encapsulacion)
// ? Considerando la modularidad esto significa que podemos acceder a las clases u objetos mediante notacion de punto, esto nos da acceso a sus propiedades y metodos.
// ? Lo reelevante es que aqui podemos editar solo los que estasn disponibles, los que estan bloqueados o encapsulados, permiten el buyen funcionamiento del programa.

// Ejemplo imaginndo un persnaje de un videojuego: solo estan disponibles los metodos constructor(crea un nuevo objeto) y turno() <--- Este permite un cierto nuemor de ataques y movimientos
// PEro no permite ataques y movimientos infintos debido a la encapsulacion de los mismos.

// ! Pilares de POO (Herencia)

// ? Con la herencia se permite usar un objeto o clase (Padre), crear objetos que tengan las mismas propiedades y metodos, pero en este caso se permiten modificaciones especificas de este subobjeto.
// ? es decir mismas propiedades y metodos, mas los nuevos correspondientes a su personaje.
// TODO clase padre y super clase // Clase hijo o subclase.
//  Ejemplo: Un perosnaje de juego (PAdre). Se divide en dos (guerrero y mago). Ambos son personajes pero permiten diferentes tipos de ataque, diferentes movimientos, etc.

// ! Pilares de POO (Polimorfismo).

// ? Un metodo puede ser diferente segun la clase que lo use.
// Con los personajes mago y guerrero, ambos tienen la opcion atacar pero el guerrero ataca con las manos y el mago ataca copn encantamientos (Cada uno infirnge menor o mas daño )
// Dependiendo el perosnaje, las armas, etc.
// TODO sin el polimorfismo deberiamos hacer una funcion difernete para cada clase (Innecesario y dificil de mntener).
