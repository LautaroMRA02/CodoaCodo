def mayor(n1,n2,n3):
    if n2 < n1 > n3:
        print(f"es mayor n1:{n1}")
        return n1
    elif n1 < n2 > n3:
        print(f"es mayor n2:{n2}")
        return n2
    elif n1 < n3 > n2:
        print(f"es mayor n3:{n3}")
        return n3
    else:
        print("no se encontro un numero mayor(hay coincidencias)")
        return -1



def mayor(n1,n2,n3):
    if n2 < n1 > n3:
        print(f"es mayor n1:{n1}")
        return n1
    elif n1 < n2 > n3:
        print(f"es mayor n2:{n2}")
        return n2
    elif n1 < n3 > n2:
        print(f"es mayor n3:{n3}")
        return n3
    else:
        print("no se encontro un numero mayor(hay coincidencias)")
        return -1
print(mayor(22,222,222))



 int(input("Ingese el dia: "  ))
#     mes  = int(input("Ingrese el mes: " ))
#     anio = int(input("Ingrese el anio: "))
    if mes >= 1 and mes <= 12:
        if mes == 12 or mes == 10 or mes == 8 or mes == 7 or mes == 5 or mes == 3 or mes == 1:
            
def fecha_correcta(dia, mes ,anio):
    """los datos a ingresar son dia, mes, anio en ese orden. """
    diaMaximo     = int(0)
    fechaCorrecta = 0
#     dia  = int(input("Ingese el dia: "  ))
#     mes  = int(input("Ingrese el mes: " ))
#     anio = int(input("Ingrese el anio: "))
    if mes >= 1 and mes <= 12:
        if mes == 12 or mes == 10 or mes == 8 or mes == 7 or mes == 5 or mes == 3 or mes == 1:
            diaMaximo = 31
        elif mes == 11 or mes == 4 or mes == 6 or mes == 9:
            diaMaximo = 30
        elif mes == 2:
            if anio % 4 == 0 and anio % 100 != 0:
                diaMaximo = 29
            else:
                diaMaximo = 28
    if dia >= 1 and dia <= diaMaximo:
        return f"FECHA CORRECTA: {dia}/{mes}/{anio}" 
    else:
        return f"FECHA INCORRECTA: {dia}/{mes}/{anio}" 
print(fecha_correcta(2,212,92222))


def cajero(totalCompra,recibido):
    vuelto =   recibido - totalCompra
    print(f"El vuelto es de : {vuelto}")
    billete500=0
    billete100=0
    billete50=0
    billete20=0
    billete10=0
    billete5=0
    key = True
    while key:
        if vuelto >= 500:
            vuelto -= 500
            billete500+=1
        elif vuelto >= 100:
            vuelto -= 100
            billete100+=1
        elif vuelto >=  50:
            vuelto -= 50
            billete50+=1
        elif vuelto >=  20:
            vuelto -= 20
            billete20+=1
        elif vuelto >=  10:
            vuelto -= 10
            billete10+=1
        elif vuelto >=   5:
            vuelto -=  5
            billete5+=1
        elif vuelto >=   1:
            vuelto -=  1
        if vuelto == 0:
            key= False
            print(f"billetes de $500: {billete500}")
            print(f"billetes de $100: {billete100}")
            print(f"billetes de $ 50: {billete50}")
            print(f"billetes de $ 20: {billete20}")
            print(f"billetes de $ 10: {billete10}")
            print(f"billetes de $  5: {billete5}")
            
            
cajero(1033,2000)


def patron1(numero):
    for n in range(numero):
        print("**********")
        
def patron2(numero):
    for n in range(numero+1):
        print("*" * n)

patron1(5)

patron2(4)

cuadra = lambda x: x ** 2
print(cuadra(4))
16
par = lambda x: x % 2 == 0
print(par(3))
False
def cuadrados(numero):
    lista = []
    for n in range(1,numero):
        lista.append(n**2)
    if len(lista) >= 10:
        for n in range(-10,0):
            print(lista[n])
    else:
        for n in lista:
            print(n)
cuadrados(4)
1
4
9
palabras = ["animal","carro","avion","autobus"]
eliminar = ["animal","autobus"]
print(f"lista de palabras: {palabras}")
for n in palabras:
    if n in eliminar:
        palabras.remove(n)
print(f"lista de palabras a eliminar: {eliminar}")        
print(f"lista de palabras resultantes: {palabras}")
def ordenada(lista):
    if sorted(lista) == lista:
        return True
    else:
        return False
pruebaLista = ["d","v","a","j"]
print(ordenada(pruebaLista))
False
def capicua(numero):
    numero = str(numero)
    if ''.join(reversed(numero)) ==  numero:
        print(f"el dato es capicua: {numero}")
        return True
    else:
        return False
print(capicua(232))
el dato es capicua: 232
True
texto = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo\n ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,"
texto = str(texto)
def textoCentrado(text):
      
    print('{:>10}'.format(text))
textoCentrado(texto)
texto2= "hola python ajja hola pythonajja hola python ajja vvhola python ajjav"
print(texto2.rjust(30))
print(texto2.rjust(30))
data_fecha = (12,10,17)



def fechaTupla(tupla): 
    def mes(data):
        data = int(data)
        if data == 1:
            return 'Enero'
        elif data == 2:
            return 'Febrero'
        elif data == 3:
            return 'Marzo'
        elif data == 4:
            return 'Abril'
        elif data == 5:
            return 'Mayo'
        elif data == 6:
            return 'Junio'
        elif data == 7:
            return 'Julio'
        elif data == 8:
            return 'Agosto'
        elif data == 9:
            return 'Septiembre'
        elif data == 10:
            return 'Octubre'
        elif data == 11:
            return 'Noviembre'
        elif data == 12:
            return 'Diciembre'
        else: 
            return '"DATO FUERA DE RANGO"'
    print(f"{tupla[0]} de {mes(tupla[1])} de 20{tupla[2]}")
fechaTupla(data_fecha)




frase = str(input("ingrese frase: "))
setFrase = set(frase)
print(setFrase)
