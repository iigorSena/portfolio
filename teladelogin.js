function alerta(){
    us = document.getElementById('us').value;
    se = document.getElementById('se').value;

    if(us && se > ""){
        alert('Parabéns você fez login!');
        window.location.reload(true);
        }else{
        alert('Preencha os campos abaixo!')
    }
}

function alerta2(){
    alert('Você não pode redefinir senha!')
}