import Convidado from "../model/Convidado";
import validarConvidado from "./validarConvidado";

export default function complementarConvidado(convidado: Partial<Convidado>): Convidado {
    const erros = validarConvidado(convidado);
    if (erros.length) throw new Error(erros.join("; "));

    const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0;

    const temAcompanhantes = convidado.possuiAcompanhantes && convidado.confirmado && qtdeAcompanhantes > 0;
    const convidadoAtualizado ={
        ...convidado,
        qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
        possuiAcompanhantes: temAcompanhantes,
    }

    return convidadoAtualizado as Convidado

}