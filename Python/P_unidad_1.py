

"""todas la actividades estaran separada en DEF"""


#1
def hola():
    print("hola")
    return

#2
def sume35():
    print(3+5)
    return
 
#3
def usuario():
    name = input("ingrese su nombre.")
    print(f'hola {name}')
    return

#4
def suma():
    n1 = int(input('ingrese numero'))
    n2 = int(input('ingrese numero'))
    print( n1 + n2 )
    return

#5
def mayor():
    n1 = int(input('ingrese numero'))
    n2 = int(input('ingrese numero'))
    if n1 > n2:
        print(f'{n1}:n1 es mayor que {n2}:n2')
    else:
        print(f'{n2}:n2 es mayor que {n1}:n1')

#6
def mayor3():
    n1 = int(input('ingrese numero: '))
    n2 = int(input('ingrese numero: '))
    n3 = int(input('ingrese numero: '))
    if n3 < n1 > n2:
        print(f'{n1}:n1 es mayor que {n2}:n2 y {n3}:n3')
    if n3 < n2 > n1:
        print(f'{n2}:n2 es mayor que {n1}:n1 y {n3}:n3')
    else:
        print(f'{n3}:n3 es mayor que {n1}:n1 y {n2}:n2')


#7
def dividible():
    n1 = int(input('ingrese numero: '))
    if n1 % 2 == 0:
        print("Es divisible por 2. ")
    else:
        print("No es divisible por 2.")


#8
def esDivisible():
    n = int(input("Ingrese un numero: "))
    if n%2==0 or n%3==0 or n%5==0 or n%7==0:
        print("Es un numero divisible por almenos 1 de los siguientes numeros: 1, 3, 5, 7. ")
    else:
        print("Es NO un numero divisible por ninguno de los siguientes numeros: 1, 3, 5, 7. ")

#9
def esDivisiblePor():
    n = int(input("Ingrese un numero: "))
    if n % 2 == 0:
        print(f"{n} es divisible por 2.")
    if n % 3 == 0:
        print(f"{n} es divisible por 3.")
    if n % 5 == 0:
        print(f"{n} es divisible por 5.")
    if n % 7 == 0:
        print(f"{n} es divisible por 7.")


#10
def Divisor():
    numero = int(input("Ingrese un numero: "))
    #Es el mismo que el anterior

#11
def Primo():
    n = int(input("Ingrese un numero: "))
    if n%2==0 or n%3==0 or n%5==0 or n%7==0:
        print("Es un numero divisible por almenos 1 de los siguientes numeros: 2, 3, 5, 7. ")
    else:
        print("Es Primo")


#12
def nota():
    n = int(input("Ingrese la nota: "))
    if 0 > n < 3:
      print("Muy deficiente.")
    elif 3 > n < 5:
        print("Insuficiente.")
    elif 5 > n < 6:
        print("Suficiente.")
    elif 6 > n < 7:
        print("Bien.")
    elif 7 > n < 9:
        print("Notable.")
    elif 9 > n < 10:
        print("Sobresaliente.")
    else:
        Print("hubo un problema con el dato ingresado intente de nuevo...")


#13
def piramide():
    for n in range(30+1):
        print(f"{str(n)*n}")
    
#14
def piramideRevert():
    for n in range(30,0,-1):
        print(f"{str(n)*n}")
    

#15 
def Multiplos():
    for n in range(100):
        if n % 4 == 0:
            print(f"{n} (es mustiplo de 4.)")
        elif n % 5 == 0:
            print(n)
            print("-----------------------------------")
        elif n % 9 == 0:
            print(f"{n} (es multipo de 9)")
        else:
            print(n)







