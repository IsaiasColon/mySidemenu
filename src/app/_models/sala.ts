export class ISala {
    id: number;
    nombre: string;
    tipo: string;
    creador: number;
    protegida: boolean;
    contra: string;
    jugadorMin: number;
    jugadorMax: number;
    activo: boolean;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.protegida = false;
        this.jugadorMin = 2;
        this.jugadorMax = 20;
        this.activo = true;
    }
}

export const Tipos = [
    { nombre: "clasico" },
    { nombre: "express" },
    { nombre: "moderna" }
]