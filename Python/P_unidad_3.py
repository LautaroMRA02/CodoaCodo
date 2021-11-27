# class Alumnos(self,nombre,nota):
#     """docstring for persona"""
#     def inicializar(self,nombre,nota):
#         self.nombre = nombre
#         self.nota   = nota

#     def mostrar_estado(self):
#         if self.nota >= 4:
#             print("Regular"):
#         else:
#             print("Libre")
       
#         


class empleado():
    """docstring for empleado"""
    def __init__(self, nombre ,sueldo):
        self.nombre = nombre
        self.sueldo = sueldo

    def imprimir(self):
        print("Nombre:",self.nombre)
        print("Sueldo:",self.sueldo)

    def paga_impuestos(self):
        if self.sueldo>30000:
            print("Paga impuestos.")
        else:
            print("No paga impuestos.")


# empleado1 = empleado("asdas",12)
# empleado1.imprimir()
# empleado1.paga_impuestos()


class punto_plano():
    def __init__(self,x,y):
        self.x = x
        self.y = y 
    # def cuadrante(self):
        if x>0 and y>0:
            print("Cuadrante I")
        elif x<0 and y>0:
            print("Cuadrante II")
        elif x<0 and y<0:    
            print("Cuadrante III")
        elif x>0 and y<0:    
            print("Cuadrante IV")

# print("...")

# dato=punto_plano(10,-2)


class Operaciones (object):
    """docstring for Operaciones """
    def __init__(self):
        self.valor1 = int(input("ingrese primer valor: "))
        self.valor2 = int(input("ingrese segundo valor: "))
        self.sumar()
        self.restar()
        self.multiplicar()
        self.dividir()

    def sumar(self):
        suma = self.valor1 + self.valor2
        print("La suma es", suma)

    def restar(self):
        resta = self.valor1 - self.valor2
        print("La resta es", resta)

    def multiplicar(self):
        multi = self.valor1 * self.valor2
        print("La multiplicacion es", multi)

    def dividir(self):
        divi = self.valor1 / self.valor2
        print("La divicion es", divi)

# datos = Operaciones()



# class Alumnos:
#     """docstring for Alumno"""
#     def __init__(self):
#         self.nombres = []
#         self.notas   = []
#     def menu(self):
#         opcion = 0
#         while opcion!=4:
#             print("1- Cargar alumnos")
#             print("2- Listar alumnos")
#             print("3- Listado de alumnos con notas mayores o iguales a 7")
#             print("4- Finalizar programa")
#             opcion   = int(input("Ingresa su opcion:"))
#             if   opcion == 1:
#                 self.cargar()
#             elif opcion == 2:
#                 self.listar()
#             elif opcion == 3:
#                 self.nota_altas()
#     def cargar(self):
#         for x in range(5):
#             nom =  input("Ingrese nombre del alumnos: ")
#             self.nombres.append(nom)
#             no  = int(input("Ingrese la nota del Alumnos: "))
#             self.notas.append(no)
#     def listar(self):
#         print("listado de alumnos completos: ")
#         for x in range(5):
#             print(self.nombres[x], self.notas[x])
#         print("_________________________")
#     def nota_altas(self):
#         print("Alumnos con notas superiores o iguales a 7")
#         for x in range(5):
#             if self.notas[x]>=7:
#                 print(self.nombres[x], self.notas[x])
#         print("_________________________")



# Alumnos = Alumnos()
# Alumnos.menu()

class Banco:
    def __init__(self):
        self.cliente1= Cliente("Ivan")
        self.cliente2= Cliente("Marcos")
        self.cliente3= Cliente("Juan")

    def operacion(self):
        self.cliente1.depositar(1000)
        self.cliente2.depositar(300)
        self.cliente3.depositar(100)
        self.cliente1.extraer(100)

    def depositos(self):
        total = self.cliente1.devolver_cantidad() + self.cliente2.devolver_cantidad() + self.cliente3.devolver_cantidad()
        print("el total del dinero del bando es: ",total)
        self.cliente1.imprimir()
        self.cliente2.imprimir()
        self.cliente3.imprimir()


class Cliente:
    def __init__(self,nombre):
        self.nombre = nombre 
        self.cantidad  = 0

    def depositar(self,cantidad):
        self.cantidad+=cantidad

    def extraer(self,cantidad):
         self.cantidad-=cantidad

    def devolver_cantidad(self):
        return self.cantidad

    def imprimir(self):
        print(self.nombre," tienen depositado", self.cantidad)

# banco1=Banco()
# banco1.operacion()
# banco1.operacion()

# banco1.depositos()


class JuegoDeDados:
    def __init__(self):
        self.dado1=Dados() 
        self.dado2=Dados()  
        self.dado3=Dados() 

    def jugar(self):
        self.dado1.imprimir()
        self.dado2.imprimir() 
        self.dado3.imprimir()
        if self.dado1.valor == self.dado2.valor  and self.dado1.valor  == self.dado3.valor:
            print("ganaste.")
        else:
            print("perdiste")
import random 
class Dados():
    
    def __init__(self):
        self.valor = random.randint(1,2)    

    def imprimir(self):
        print(self.valor)  
        return self.valor



# prueba = JuegoDeDados()
# prueba.jugar()


class Personas:
    def __init__(self, nombre):
        self.nombre = nombre

    variable = 20

persona1 = Personas('juan')
persona2 = Personas('mati')
persona3 = Personas('esteban')

# print(persona2.variable)
# Personas.variable = 5
# print(persona1.variable)
# print(persona3.variable)


class CLIENTE:
    suspendidas = []
    def __init__(self,nombre,codigo):
        self.nombre = nombre
        self.codigo = codigo
    def imprimir(self):
        if self.codigo in self.suspendidas:
            print(f"Nombre del cliente:{self.nombre}")
            print(f"Codigo del cliente:{self.codigo}")
            print(f"Sustenedida?: SI")
        else:
            print(f"nombre del cliente:{self.nombre}")
            print(f"Codigo del cliente:{self.codigo}")
            print(f"sustenedida?: NO")
    def suspender(self):
        self.suspendidas.append(self.codigo)
    def analiza(self):
        if self.codigo in self.suspendidas:
            print(f'{self.codigo} si esta')
 

# cliente11 = CLIENTE('Lautaro', 1234)
# cliente11.suspender()
# cliente11.imprimir()
# cliente11.analiza()


class Punto:
    def __init__(self,x,y):
        self.x = x
        self.y = y
    def __str__(self):
        cadena = str(self.x) + "--" + str(self.y)
        return cadena

punto11 = Punto(20,30)

# print(punto11)

class Ejemplo1:
    __atibuto_privado = "soy un danto inalcanzable."

    def __metodo_privado(self):
        print("soy un metodo inalcanzable desde fuera")

    def atibuto_publico(self):
        return self.__atibuto_privado

    def metodo_publico(self):
        return self.__metodo_privado()
# e =  Ejemplo1()

# print(e.atibuto_publico())
# e.metodo_publico()





# ACT 1 (2,3,4,5)

class PPersona:
    def __init__(self,nombre,edad):
        self.nombre = nombre
        self.edad = edad
        self.es_mayor()
    def __str__(self):
        return f"{self.nombre} de edad de {self.edad}, {self.es_mayor()} es mayor de edad."
    def set_nombre(self,nombre):
        self.nombre = nombre

    def set_edad(self,edad):
        self.edad = edad

    def get_nombre(self): 
        print(self.nombre)

    def get_edad(self): 
        print(self.edad)

    # def print_persona(self):
    #     print(f"{self.nombre} de edad de {self.edad}, es mayo {self.es_mayor()}")

    def es_mayor(self):
        if self.edad > 18:
            return "si"
        else:
            return "no"


persona10 = PPersona("Lautaro",20)
persona10.get_edad()
# persona10.print_persona()
print(persona10)


persona22 = PPersona("Martina", 17)
print(persona22)