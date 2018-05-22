/**
 * @description Modelo grupo
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */
export class Actividad {
    _id?: string;
    titulo: string;
    descripcion: string;
    fechalimite: Date;
    nintegrantes: number;
    objetivos: string;
    // archivos: string[];
    idgrupo: string;
    idmateria: string;
    idtema: string;
}
