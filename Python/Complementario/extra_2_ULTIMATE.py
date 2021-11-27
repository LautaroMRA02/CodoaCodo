def conteoChar(empresa):
	empresa = str(empresa).lower()
	e = empresa.replace(" ", "")
	lista = e
	diccionario = {}
	lista = set(lista)
	for char in lista:
		conteo = e.count(char)
		diccionario[char]=conteo
	sortedDiccionario = sorted(diccionario.items(), key=lambda x: x[1], reverse=True)
	sortedDiccionario = dict(sortedDiccionario)
	num = 0
	for key, value in sortedDiccionario.items(): 
		if num < 3:
			num += 1
			print(key,value)
		else:
			break


