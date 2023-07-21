export class Gasto {
    constructor(ruc:string='',empresa:string='',monto:number=0, tipo:string=''){
        this.ruc=ruc;    
        this.empresa=empresa;
        this.monto=monto;
        this.tipo=tipo;
    }
    tipo: string;
    ruc: string;
    empresa: string;
    monto: number;
}