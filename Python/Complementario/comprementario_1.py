

metrosE 			= int(input("ingrese los metros cuadrados del estadio (en m2):		"))
escenarioG 			= int(input("porcentaje que ocupa el escenario:				"))
gradas 				= int(input("ingrese capacidad de gradas:					"))
espacioGradas 		= 0.2
porcentaje 			= ( 100 - escenarioG ) / 100
porcentaje 			= porcentaje - espacioGradas
metrosRestantes 	= metrosE * porcentaje
personas 			= metrosRestantes * 4
entradasComunes 	= personas * 0.7
entradasEspeciales 	= personas * 0.3
precioComunes  		= int(input("ingrese precio de entradas comunes: "))
precioEspeciales  	= int(input("ingrese precio de entradas espaciales: "))
gananciasComunes    = entradasComunes * precioComunes
gananciasEspaciales = entradasEspeciales * precioEspeciales
gananciasTotales 	= gananciasComunes + gananciasEspaciales


print(
f"""
Caben {personas} personas.

Entradas comunes:	{int(entradasComunes)} c/u ${precioComunes} | ganancias: ${int(gananciasComunes)}
Entradas especiales:	{int(entradasEspeciales)} c/u ${precioEspeciales} | ganancias: ${int(gananciasEspaciales)} 

ganancias totales: ${int(gananciasTotales)}
""")


