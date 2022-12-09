export function generarStringAleatorio(cantidad){

    let result = '';
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < cantidad; i++){
        result += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return result;

}

export function generarNumeroAleatorio(val_min:number, val_max:number){
    return Math.floor( Math.random() * (val_max - val_min) + val_min );
}