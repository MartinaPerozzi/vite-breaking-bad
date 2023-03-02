// importo l'elemento in modo che sia attivo globalmente
import { reactive } from "vue";
// dove reactive è una funzione (di Vue) a cui va passato un parametro 
export const store = reactive({ characters: [], }
);
