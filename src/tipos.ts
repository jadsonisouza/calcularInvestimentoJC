export type TInvestimento = {
    saldoInicial: number //O Saldo inicial que investir.
    saldo: number //Saldo disponivel no meu investimento
    riscoDiario: number  //Quanto eu posso perder por dia.
    retornoSeVitoria: number //Payout - O quanto me retorna se a operação for vitoriosa.
    resultados: string[]
    analise?: number //Vai servir pra preencher o resultado[] manualmente
}