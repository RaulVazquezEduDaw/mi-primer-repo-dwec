/**
 * Ejercicio 3: Servicio
 * En gasto.service.js tendrás que programar las siguientes funciones:
 * almacenarGastos()
 * procesarGasto(jsonNuevoGasto)
 * 
 * Exporta las funciones del servicio a través de un objeto llamado GastoService.
 */

// Importo GASTOS_DB desde el módulo de datos
import { GASTOS_DB } from '../data/gasto.data.js';
import { GastoCombustible } from '../models/gasto.model.js';

var gastoAnual = {
  2020 : 0,
  2019 : 0,
  2018 : 0,
  2017 : 0,
  2016 : 0,
  2015 : 0
};

/**
 * Función almacenarGastos():
 * 1. Recorre GASTOS_DB y almacena cada registro en el localStorage.
 * 2. Guarda como clave el ID del gasto y, como valor, el objeto completo en formato JSON.
 * 2. Calcula el gasto total para cada año utilizando la variable gastoAnual y guárdalo en el sessionStorage,
 * teniendo en cuenta que la clave debe ser el año y el valor, el gasto total correspondiente a ese año.
 * 3. Guarda los totales anuales en el sesionStorage
 */
function almacenarGastos(){
	for (const gasto of GASTOS_DB) {
	    // 1. Guardo cada registro en el localStorage usando el ID como clave y el objeto en JSON como valor
	    localStorage.setItem(gasto.id, JSON.stringify(gasto));
		console.log("Registro guardado en el localStorage: ", JSON.parse(localStorage.getItem(gasto.id)));
		
	    // 2. Calcular el gasto total acumulado para cada año
	    const year = gasto.date.getFullYear(); // Se extrae el año del gasto
	    gastoAnual[year] += gasto.precioViaje; // Acumula el gasto anual en el año correspondiente 
	}

	// 3. Almaceno el gasto total acumulado de cada año en el sessionStorage
	for (const year in gastoAnual)
		sessionStorage.setItem(year, gastoAnual[year]);
}

/**
 * Función procesarGasto(jsonNuevoGasto)
 * Recibe: el gasto actual en formato JSON como parámetro.
 * Para cada gasto actual, crea un objeto GastoCombustible y, en función del año en el que se realizó ese gasto, recupera del sessionStorage
 * el gasto total de ese año, súmale el importe del gasto actual y actualiza el valor almacenado en sessionStorage.
 */
function procesarGasto(jsonNuevoGasto){
	// 1. Convierto el JSON recibido a un objeto plano de JavaScript
	const receivedGasto = JSON.parse(jsonNuevoGasto);
	
	const nuevoGasto = new GastoCombustible(
	    receivedGasto.id,
	    receivedGasto.vehicleType,
	    receivedGasto.date,
	    receivedGasto.kilometers,
	    receivedGasto.precioViaje
	);
	
	// en función del año en el que se realizó ese gasto, recupera del sessionStorage
	// el gasto total de ese año, súmale el importe del gasto actual y actualiza el valor almacenado en sessionStorage.
	
	// Obtengo el año del nuevo gasto
	const year = nuevoGasto.date.getFullYear();
	
	// Recupero el gasto de ese año desde el sessionStorage (me aseguro de que no es NaN)
	let gastoAnual = sessionStorage.getItem(year);
	if(gastoAnual != null) {
		gastoAnual = parseFloat(gastoAnual);
	} else {
		gastoAnual = 0;
	}
	
	// Agrego el importe del nuevo viaje al total anual
	gastoAnual += nuevoGasto.precioViaje;
	
	// Actualizo el valor en el sessionStorage con el nuevo total
	sessionStorage.setItem(year, gastoAnual);
	
	console.log(`Gasto para el año ${year} actualizado en el sessionStorage. Nuevo gasto almacenado:`, parseFloat(sessionStorage.getItem(year)));
}

/**
 * Exporta las funciones del servicio a través de un objeto llamado GastoService.
 */
export const GastoService = {
	almacenarGastos,
	procesarGasto
}
