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
    materia: string;
    tema: string;
}

class Pregunta {
    pregunta: string;
    imagen: string;
    respuesta: Respuesta[];
}

class Respuesta {
    texto: string;
    correcta: boolean;
    imagen: string;
}
