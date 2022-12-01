import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { writeFileSync, readFileSync } from 'fs'
import { generarStringAleatorio, generarNumeroAleatorio } from '../lib/Generador'
import { InternalServerErrorException } from '@nestjs/common';
import { dirname } from 'path';
import { Double } from 'typeorm';

export async function generarPDF(datosUsuario){
    
    //Rutas
    const rutaAcutal = __dirname;
    const rutaPlantilla = rutaAcutal +  '/../../src/assets/pdf/Factura Plantilla.pdf';
    const rutaGuardarArchivo = rutaAcutal + '/../../src/assets/pdf/';
    const nombreDocumento = rutaGuardarArchivo + 'Factura a ' + datosUsuario.nombre + ' ' + datosUsuario.apellido + '.pdf';

    //Inicializaciones
    const pdfDoc = await PDFDocument.load( readFileSync( rutaPlantilla ) );
    const helveticaFont = await pdfDoc.embedFont( StandardFonts.Helvetica );
    const pagina = pdfDoc.getPage( 0 );
    const { width, height } = pagina.getSize()
    var posX, posY;

    //------------------ TEXTOS ------------------

    //No. Factua
    posX = width - 150;
    posY = height - 110;

    var numFactura = generarNumeroAleatorio(10000, 99999);
    colocarTexto(pagina, numFactura.toString(), posX, posY, 20, helveticaFont, rgb(0, 0, 0));

    //Lugar de expedición
    posX += 40;
    posY -= 40; 

    colocarTexto(pagina, 'Guadalupe, N.L.', posX, posY, 10, helveticaFont, rgb(0, 0, 0));

    //Fecha de expedicion
    posY -= 30;
    
    const fecha = new Date();
    const fechaActual = new Date( fecha.getFullYear(), fecha.getMonth(), fecha.getDate() );
    fechaActual.setDate( fechaActual.getDate() );
    const formatoFecha = fechaActual.toDateString().substring(4);

    colocarTexto(pagina, formatoFecha, posX, posY, 10, helveticaFont, rgb(0, 0, 0));

    //Uso CFDI
    posX -= 7;
    posY -= 28;

    colocarTexto(pagina, 'Gastos Generales', posX, posY, 10, helveticaFont, rgb(0, 0, 0));

    //Facturado a:
    posX = 50;
    posY = (width / 2) + 300;

    colocarTexto(pagina, datosUsuario.nombre + ' ' + datosUsuario.apellido, posX, posY, 15, helveticaFont, rgb(0, 0, 0));

    //Código
    posY -= 100;

    colocarTexto(pagina, datosUsuario.plan.id.toString(), posX, posY, 15, helveticaFont, rgb(0, 0, 0));

    //Descripcion
    posX += 50;

    colocarTexto(pagina, datosUsuario.plan.nombre_paquete, posX, posY, 15, helveticaFont, rgb(0, 0, 0));

    //Precio Unitario
    posX += 303;
    const precio_plan = datosUsuario.plan.precio;

    colocarTexto(pagina, '$' + precio_plan.toString() + ' MXN', posX, posY, 14, helveticaFont, rgb(0, 0, 0));

    //Importe
    posX += 90;

    colocarTexto(pagina, '$' + precio_plan.toString() + ' MXN', posX, posY, 14, helveticaFont, rgb(0, 0, 0));

    //Subtotal
    posX += 12;
    posY = 255;

    colocarTexto(pagina, '$' + precio_plan.toString(), posX, posY, 12, helveticaFont, rgb(0, 0, 0));

    //IVA 16%
    posY -= 28;
    const iva = (precio_plan * 0.16) ;

    colocarTexto(pagina, '$' + iva.toString(), posX, posY, 12, helveticaFont, rgb(0, 0, 0));

    //Total
    posY -= 22;
    const total = Number( iva ) + Number( precio_plan );

    colocarTexto(pagina, '$' + total.toString(), posX, posY, 12, helveticaFont, rgb(0, 0, 0));

    //Ni idea como llamar esto pero la linea esa donde esta el texto que no se ni a que se refiera.
    posY += 25;
    posX = 165;

    colocarTexto(pagina, formatoFecha, posX, posY, 8, helveticaFont, rgb(0, 0, 0));

    //Sello digital del CDFI:
    posX = 50;
    posY = 161;
    colocarTexto(pagina, generarStringAleatorio(110), posX, posY, 8, helveticaFont, rgb(0, 0, 0))

    posY = 148;
    colocarTexto(pagina, generarStringAleatorio(47) + '=', posX, posY, 8, helveticaFont, rgb(0, 0, 0))

    //Sello del SAT
    posY = 121;
    colocarTexto(pagina, generarStringAleatorio(110), posX, posY, 8, helveticaFont, rgb(0, 0, 0))

    posY = 108;
    colocarTexto(pagina, generarStringAleatorio(47) + '=', posX, posY, 8, helveticaFont, rgb(0, 0, 0))

    //Cadena original del complemento de certificación digital del SAT:
    posY = 80;
    colocarTexto(pagina, generarStringAleatorio(110), posX, posY, 8, helveticaFont, rgb(0, 0, 0))

    posY = 67;
    colocarTexto(pagina, generarStringAleatorio(110), posX, posY, 8, helveticaFont, rgb(0, 0, 0))


    //Guardar Archivo
    try{
        const pdfBytes = await pdfDoc.save();
        writeFileSync(nombreDocumento, pdfBytes);
        
    }catch(err){
        throw new InternalServerErrorException('Error Inesperado');
    }

    return nombreDocumento;

}

function colocarTexto(pagina, mensaje, posX, posY, tamLetra, fuente, color){

    pagina.drawText(mensaje, {
      x: posX,
      y: posY,
      size: tamLetra,
      font: fuente,
      color: color,
    })
  
  }