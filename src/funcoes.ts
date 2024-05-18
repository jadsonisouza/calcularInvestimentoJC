import { TInvestimento } from "./tipos"; //Chamado o tipo das váriaveis

//Essa função é chamada no index.ts, o usuario colocando as 3 opções.
export function calcular(qtdOperacao:number, assertiv:number, tpAnalise?:number){  
    
    function win(): number{
        const quantidadeOperacoesW = (qtdOperacao/100) * assertiv //========> Função que retorna a quantidade de win 
        return quantidadeOperacoesW;
    } //Função que retorna a quantidade de Win

    const planejamentoInicial: TInvestimento = {
        saldoInicial: 1000.00, // Valor inicial
        saldo: 1000.00, //Saldo inicialmente é igual ao valor inicial.
        riscoDiario: 0.05, //Stop Loss
        retornoSeVitoria: 0.85, //Payout
        resultados: [], //Aqui serve pra guardar os resultados
        analise: tpAnalise //Coloque 1 para fazer simulação aleatória e 2 para fazer manual(Em desenvolvimento)
    } // Aqui você precisa configurar o Valor inicial e saldo(sempre o mesmo) o valor do Stop Loss e o payout da corretora

    //Esse if else, é pra permitir que o usuario simule aleatóriamente, ou ele coloque os resultados da operação dele, else em desenvolvimento
    if(planejamentoInicial.analise === 1){
        for(let i = 0; i < qtdOperacao; i++){
            if(i < win()){
                //Adiciona W no final do array
                planejamentoInicial.resultados[planejamentoInicial.resultados.length] = 'W'

                //Calcula o lucro que tem, quando Win
                planejamentoInicial.saldo += ((planejamentoInicial.saldo * planejamentoInicial.riscoDiario)*planejamentoInicial.retornoSeVitoria)
            }
            if(i >= win()){
                //Adiciona L no final do array
                planejamentoInicial.resultados[planejamentoInicial.resultados.length] = 'L'

                //Calcula o prejuizo, quando o resultado é Loss
                planejamentoInicial.saldo -= (planejamentoInicial.saldo * planejamentoInicial.riscoDiario)
            }
        }

        //O Código abaixo verifica o resultado das operações pra dizer se teve lucro, prejuizo ou empate.
        if(planejamentoInicial.saldo < planejamentoInicial.saldoInicial ){
            console.log(`Você perdeu R$${planejamentoInicial.saldoInicial-planejamentoInicial.saldo}`)
            console.log(`Seu saldo final é R$${planejamentoInicial.saldoInicial-(planejamentoInicial.saldoInicial-planejamentoInicial.saldo)}`)
        }else if(planejamentoInicial.saldo > planejamentoInicial.saldoInicial){
            console.log(`Você ganhou R$ ${planejamentoInicial.saldo-planejamentoInicial.saldoInicial}!`)
            console.log(`Seu saldo final é R$${planejamentoInicial.saldo}`)
        }else{
            console.log("Você não obteve nem lucro e nem prejuizo")
        }
        
    }else{
        console.log("Estamos trabalhando para desenvolver essa parte do código!")
    }    
    
}
