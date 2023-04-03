function tabuada(){ 
    
    var camp1 =  document.getElementById('num')
    var camp2 = document.getElementById('final')
    if(camp1.value.length ==0 || camp2.value.length == 0){   
        alert('esse campo esta vazio')
    }else{
    var n1 = Number(camp1.value)
    var n2 = Number(camp2.value)
    var x = 0
    var res = document.getElementById('resposta')
    res.innerHTML = `A tabuada do ${n1} é : <br>` 
    do{ 
       let resposta = n1*x
       res.innerHTML += `${x} x ${n1} =${resposta} <br>` // (+= de vez eele trocar ele acrescenta //
       x++
    }while(x <= n2)

    }
}


// var camp1 = Number.document.getElementById('num')
// var camp2 = Number.document.getElementById('final')
// var camp3r = ''
// var res = document.getElementById('resposta')
// camp3r = camp1*camp2
// res.innerHTML = `a resposta da sua conta é ${camp3r}`


    // var camp1 = document.getElementById(Number.parseInt('num'))
    // var camp2 = document.getElementById(Number.parseInt('final'))
    // var res = document.getElementById('resposta')
    // camp3r = camp1*camp2
    // res.innerHTML = `a resposta da sua conta é ${camp3r}`
