function calcular() {
    var data = new Date();
    var atualAno = data.getFullYear();
    var atualMes = data.getMonth() + 1;
    var atualDia = data.getDate();
    


    var dia =document.querySelector('#dia');
    var mes = document.querySelector('#mes');
    var ano = document.querySelector('#ano');
    var result = document.querySelector('#results');
    
    var nacimentoDia = dia.value;
    var NacimentoMes = mes.value++;
    var nacimentoAno = ano.value;
    
    var idade = atualAno - nacimentoAno;
    var meses = atualMes - NacimentoMes;
    var dias = atualDia - nacimentoDia;
    console.log(idade);
    console.log(meses);
    console.log(dias)
    
    
    if(atualMes < NacimentoMes || (atualMes == NacimentoMes && atualDia < nacimentoDia)) {
        idade--;
    } 

    if( meses < 0 || (meses == 0 && atualDia < nacimentoDia)) {
        idade--;
        meses += 12;
    }
    if(dias < 0) {
        
        var ultimoDiaMesAnterior = new Date(atualAno, atualMes, 0).getDate();
        dias = ultimoDiaMesAnterior + dias;
        
        if(meses < 0) {
            idade--;
            meses += 12;
        }
    }


    return result.innerHTML = `
            <p>${idade} <span>Ano</span></p>
            <p>${meses} <span>Mês</span></p>
            <p>${dias} <span>Dias</span></p>
        `
    
}


