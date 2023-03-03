// importo l'elemento in modo che sia attivo globalmente
import { reactive } from "vue";
// dove reactive è una funzione (di Vue) a cui va passato un parametro 
export const store = reactive({
    characters: [],
    endpoint: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    isPageLoading: false,
}
);
