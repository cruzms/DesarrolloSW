/**
 * @description Modelo grupo
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */
export class Actividad {
    _id?: string;
    titulo: string;
    descripcion: string;
    fechaLimite: Date;
    profesor: number;
    integrantes: number;
    logros: string;
    archivos: any;
    gradoporgrupo: string;
    materia: string;
    tema: string;
}
