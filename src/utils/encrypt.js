// import CryptoJS from 'crypto-js';

// export function testeEncrypt(word){
//     console.log('aqui')
//     var hash = CryptoJS.SHA256(word);
//     // console.log(hash.toString(CryptoJS.enc.Base64))
//     // var encrypted = CryptoJS.Rabbit.encrypt("Message", "Secret Passphrase");
//     // var decrypted = CryptoJS.Rabbit.decrypt(encrypted, "Secret Passphrase");
//     var encrypted = CryptoJS.AES.encrypt("Message", "teste");
//     var decrypted = CryptoJS.AES.decrypt(encrypted, "teste");
//     console.log('rabbit', decrypted.toString(CryptoJS.enc.Utf8))
// }

// function encryptWithAESCryptoJS(word, hashPass){
//     const key = CryptoJS.enc.Utf8.parse(hashPass);
//     const encrypted = CryptoJS.AES.encrypt(word, key, {
//         keySize: 16,
//         mode: CryptoJS.mode.ECB,
//         padding: CryptoJS.pad.Pkcs7
//     });
//     return encrypted + ""
// }


// // U2FsdGVkX18yext1aY5maDCaxc56JndKQZCp2gBBLI8=


function convertWordtoNumbers(word){
    const listLetters = word.split('')
    const listNumbers = []
    listLetters.map((l)=> {
        listNumbers.push(l.charCodeAt())
    })
    return listNumbers
}

function convertNumberToLetter(number){
    return String.fromCharCode(number);
}

function calcValue(listLetters){
    let calculated = 0
    for(let i= 0; i< listLetters.length; i++){
        if(i%2 == 0){
            calculated = calculated + parseInt(listLetters[i], 10)
        }else{
            calculated = calculated - parseInt(listLetters[i], 10)
        }
    }
    return calculated
}

function defineSeparator(word, word_2){
    return [calcValue(convertWordtoNumbers(word)), calcValue(convertWordtoNumbers(word_2))]
}

function validateNameWithPass(nameList, passwordList, sumValidator){
    const nameLast = nameList[nameList.length-1]
    const nameFirst = nameList[0]
    const passLast = passwordList[passwordList.length-1]
    const passFirst = nameList[0]

    let value_1 = 0
    let value_2 = 0

    nameList.map((l)=> {
        if(l%2 === 0){
            value_1 = value_1 + nameLast
        }else{
            value_1 = value_1 - nameFirst
        }
    })

    passwordList.map((l)=> {
        if(l%2 === 0){
            value_2 = value_2 + passLast
        }else{
            value_2 = value_2 - passFirst
        }
    })
    
    console.log(value_1 - value_2)

    return (value_1 - value_2) === sumValidator

}

function encryptSingleWord(word, separator, separatorStep){
    const wordNumeric = convertWordtoNumbers(word)
    const numberLetters = word.length
    const outputLettersQnt = 25
    let stepDefiner = false

    if((separatorStep[0] - wordNumeric[0])%2 === 0){
        stepDefiner = true
        console.log('par', (separatorStep[0] - wordNumeric[0]))
    }



    for(let i = 0; i < 25, i++;){
        
    }

    console.log(wordNumeric, numberLetters)
}

// defineSeparator('tijuca')
// console.log(convertNumberToLetter(2))

function encrypt(){
    const name = 'Pedr+'
    const password = '2'
    const seeds = ['teste', 'arvore', 'selp']

    const separator = defineSeparator(name, password)
    const separatorStep = defineSeparator(name, seeds[0])

    encryptSingleWord('oregano', separator, separatorStep)
    
}


function decrypt(){
    const name = 'Pedr+'
    const password = '2'
    const seeds = ['oeste', 'arvore', 'selp']

    // mockValues //
    const sumValidation = -213

    // calc separator value //
    const separator = defineSeparator(name, password)
    const separatorStep = defineSeparator(name, seeds[0])

    console.log(separator, separatorStep);

    // validade name and password // 
    if(validateNameWithPass(convertWordtoNumbers(name), convertWordtoNumbers(password), sumValidation)){
        
    }else{
        return false
    }
}

// decrypt()

encrypt()

/////////////////////////////////////////////////////////////////////////////

// class RCrypto{

//     constructor(name, password, walletName, seeds){
//         this.name = name,
//         this.password = password,
//         this.walletName = walletName,
//         this.seeds = seeds
//     }
// }






