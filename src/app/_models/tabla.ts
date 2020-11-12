import { Carta } from "./carta";

export interface ITabla {
    id: number;
    nombre: string;
    jugador: number;
    activa: boolean;

    // cartas: Array<number>
}
