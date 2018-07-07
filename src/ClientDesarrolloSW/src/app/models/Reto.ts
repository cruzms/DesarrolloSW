/**
 * @description Modelo reto
 * @author Yonifer Gallego Aguirre
 * @version 1.0
 */
export class Reto {
    _id?: string;
    nombre: string;
    preguntas: Pregunta[];
    gradosporgrupos: string[];
    profesor: number;
    publicado: boolean;
    materia: any;
    tema: any;
}

class Pregunta {
    pregunta: string;
    imagen: string;
    respuestas: Respuesta[];
}

class Respuesta {
    texto: string;
    correcta: boolean;
    imagen: string;
}
