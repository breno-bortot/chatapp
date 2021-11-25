exports.cpfValidation = (cpf) => {
   // validação de CPF

cpf = [...cpf]
const aDigitoBefore = cpf[9]
const bDigitoBefore = cpf[10]

const n = cpf

n.pop()
n.pop()

//Passo 1 e 2 

while (n.length < 11) {
    let res = 0

    for (let index = 0; index < n.length; index++) {
        res += (n[index] * ((n.length + 1) - index))
    }
    res %= 11
    res = 11 - res

    if (res >= 10) res = 0

    n.push(res)

}

let aDigito = n[9]
let bDigito = n[10]

//// Validação

if(aDigitoBefore == aDigito && bDigitoBefore == bDigito){
   return true;
   } else {
      return false;
   }
   
}

exports.phoneValidation = (phone) => {
   
}