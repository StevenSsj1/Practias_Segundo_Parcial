let ingresos= prompt("Ingresos:");
let gastos = prompt("Gastos:");
let baseImponible = ingresos - gastos;
let porcentaje = 0;
let impuestoFraccionBasicaX = 0;
let excedente = 0; 

const tabla = {
    FraccionBasica: [0, 11212, 14285, 17854, 21442, 42874, 64297, 85729, 114288],
    ExcesoHasta: [11212, 14285, 17854, 21442, 42874, 64297, 85729, 114288, "enadelante"],
    impuestoFraccionBasica: [0, 0, 154, 511, 941, 4156, 8440, 13798, 22366],
    impuestosFraccionExcedente: [0, 0.05, 0.10, 0.12, 0.15, 0.20, 0.25, 0.30, 0.35]
};
  
  function ObtenerElValor(baseImponible) {
    let diferenciaMinima = Infinity;
    let valorEnTabla = 0;
  
    tabla.FraccionBasica.forEach((valor, indice) => {
      const diferencia = Math.abs(baseImponible - valor);
      if (diferencia < diferenciaMinima) {
        diferenciaMinima = diferencia;
        valorMasCercano = valor;
        valorEnTabla = indice
      }
    
    });
    return valorEnTabla;
  }


  function calcularImpuestoDeTabla(baseImponible, tabla) {
    const indiceTabla = ObtenerElValor(baseImponible);
    if (indiceTabla < 0 || indiceTabla >= tabla.FraccionBasica.length) {
        return null;
    }
    const ultimoFraccion = tabla.FraccionBasica[indiceTabla];
    const ultimoExceso = tabla.ExcesoHasta[indiceTabla];
    const ultimoimpuestoFraccionBasica = tabla.impuestoFraccionBasica[indiceTabla];
    const ultimoimpuestosFraccionExcedente = tabla.impuestosFraccionExcedente[indiceTabla];

    return [ultimoFraccion, ultimoExceso, ultimoimpuestoFraccionBasica, ultimoimpuestosFraccionExcedente];
}

    function calcularImpuestoRenta(){
        tablaValores = calcularImpuestoDeTabla(baseImponible, tabla)
        impuestoFraccionBasicaX = tablaValores[2];
        excedente = baseImponible - tablaValores[0];
        porcentaje = parseFloat(excedente * tablaValores[3])
        impuesto = impuestoFraccionBasicaX + porcentaje
        document.write("<h3>Su impuesto a la renta es </h3>"+impuesto)

    }

    calcularImpuestoRenta()
