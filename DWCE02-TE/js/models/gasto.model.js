/**
 * Ejercicio 2: Creación del modelo de datos GastoCombustible
 * Se ha tenido en cuenta que las fechas almacenadas en el JSON son cadenas de texto.
 * Al crear cada objeto GastoCombustible, el atributo date debe contener un objeto de tipo Date.
 */
export class GastoCombustible {
    constructor(id, vehicleType, date, kilometers, precioViaje) {
        this.id = id;
        this.vehicleType = vehicleType;
        this.date = new Date(date);
        this.kilometers = parseFloat(kilometers);
        this.precioViaje = parseFloat(precioViaje);
    }
}