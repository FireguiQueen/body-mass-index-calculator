const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    document.querySelector('#imcOutput').className = 'typing'

    const personHeight = document.querySelector('#altura').value;
    const personWeight = document.querySelector('#peso').value;
    function calcIMC(){
        const calcIMC = personWeight / (personHeight**2) 
        if(calcIMC < 18.5){
            return 'Abaixo do peso'
        } else if(calcIMC >= 18.5 && calcIMC <= 24.9){
            return 'Normal'
        } else if(calcIMC >=25 && calcIMC <= 29.9){
            return 'Sobrepeso'
        } else if(calcIMC >=30 && calcIMC <= 34.9){
            return 'Obesidade I'
        } else if(calcIMC >=35 && calcIMC <= 39.9){
            return 'Obesidade II'
        }  else if (calcIMC >= 40){
            return 'Obesidade III'
        } else {
            return 'Erro - Favor verificar a altura e idade'
        }
    }
    
    sendMensage(calcIMC());
    cleanInput();
})

    
    /* Envia o IMC para o usuário */
    function sendMensage(e){
        document.getElementById('imcOutput').innerText = e
    }
    
    
    /* Limpa os inputs das respostas anteriores */
    function cleanInput(){
        const input = document.querySelectorAll('input[type=number]');
        input.forEach(e => e.value = '');
    }


    

