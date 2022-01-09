import CryptoJS from 'crypto-js';

function encryptWithAESCryptoJS(word, hashPass){
    const key = CryptoJS.enc.Utf8.parse(hashPass);
    const encrypted = CryptoJS.AES.encrypt(word, key, {
        keySize: 16,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted + ""
}

function decryptWithAESCryptoJS(word, hashPass){
    const key = CryptoJS.enc.Utf8.parse(hashPass);
    const decrypted = CryptoJS.AES.decrypt(word, key, {
        keySize: 16,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8)
}

function validatePassWithName(password, name){
    var hash_1 = CryptoJS.SHA256(password);
    // //console.log('hash 1', hash_1.toString(CryptoJS.enc.Base64))
    var hash_2 = CryptoJS.SHA256(name);
    var hash_3 = CryptoJS.SHA256(hash_1.toString(CryptoJS.enc.Base64) + hash_2.toString(CryptoJS.enc.Base64));
    // //console.log('hash_1, hash_2, hash_3', hash_1.toString(CryptoJS.enc.Base64), hash_2.toString(CryptoJS.enc.Base64), hash_3.toString(CryptoJS.enc.Base64))
    return hash_3.toString(CryptoJS.enc.Base64)
}

function validatePassWithHash(password, validator){
    var hash_1 = CryptoJS.SHA256(password);
    var hash_3 = CryptoJS.SHA256(hash_1.toString(CryptoJS.enc.Base64) + validator);
    // //console.log('hash_1, hash_2', hash_1.toString(CryptoJS.enc.Base64), hash_3.toString(CryptoJS.enc.Base64))
    return hash_3.toString(CryptoJS.enc.Base64)
}


export function encrypt(name, password, listWords){
    const hashPasswordWithName = validatePassWithName(password, name)
    var hashBlock = CryptoJS.SHA256(name);
    let listEncrypted = [] 

    listWords.map((w)=> {
        const encWord = encryptWithAESCryptoJS(w.phrase, hashPasswordWithName)
        listEncrypted.push(encWord)
    })
    
    return { validator: hashBlock.toString(CryptoJS.enc.Base64), seeds: listEncrypted, versionEncrypt: 1.0}
}

export function decrypt(name, password, listEncrypts, validator){
    const hashPasswordWithName = validatePassWithName(password, name)
    const withValidator = validatePassWithHash(password, validator)

    console.log(hashPasswordWithName, withValidator)

    if(hashPasswordWithName === withValidator){
        let listDecrypted = []
        listEncrypts.map((w)=> {
            const encWord = decryptWithAESCryptoJS(w, hashPasswordWithName)
            listDecrypted.push(encWord)
        })

        return { seeds: listDecrypted }
    }

    return false
}

// const objectEncrypted = encrypt('nome', 'senha', ['teste', 'teste2', 'teste3'])
// const objectDecrypted = decrypt('nome', 'senha', objectEncrypted.seeds, objectEncrypted.validator)



// function convertWordtoNumbers(word){
//     const listLetters = word.split('')
//     const listNumbers = []
//     listLetters.map((l)=> {
//         listNumbers.push(l.charCodeAt())
//     })
//     return listNumbers
// }

// function convertNumberToLetter(number){
//     return String.fromCharCode(number);
// }

// function calcValue(listLetters){
//     let calculated = 0
//     for(let i= 0; i< listLetters.length; i++){
//         if(i%2 == 0){
//             calculated = calculated + parseInt(listLetters[i], 10)
//         }else{
//             calculated = calculated - parseInt(listLetters[i], 10)
//         }
//     }
//     return calculated
// }

// function defineSeparator(word, word_2){
//     return [calcValue(convertWordtoNumbers(word)), calcValue(convertWordtoNumbers(word_2))]
// }

// function validateNameWithPass(nameList, passwordList, sumValidator){
//     const nameLast = nameList[nameList.length-1]
//     const nameFirst = nameList[0]
//     const passLast = passwordList[passwordList.length-1]
//     const passFirst = nameList[0]

//     let value_1 = 0
//     let value_2 = 0

//     nameList.map((l)=> {
//         if(l%2 === 0){
//             value_1 = value_1 + nameLast
//         }else{
//             value_1 = value_1 - nameFirst
//         }
//     })

//     passwordList.map((l)=> {
//         if(l%2 === 0){
//             value_2 = value_2 + passLast
//         }else{
//             value_2 = value_2 - passFirst
//         }
//     })
    
//     //console.log(value_1 - value_2)

//     return (value_1 - value_2) === sumValidator

// }

// function encryptSingleWord(word, separator, separatorStep){
//     const wordNumeric = convertWordtoNumbers(word)
//     const numberLetters = word.length
//     const outputLettersQnt = 25
//     let stepDefiner = false

//     if((separatorStep[0] - wordNumeric[0])%2 === 0){
//         stepDefiner = true
//         //console.log('par', (separatorStep[0] - wordNumeric[0]))
//     }



//     for(let i = 0; i < 25, i++;){
        
//     }

//     //console.log(wordNumeric, numberLetters)
// }

// // defineSeparator('tijuca')
// // //console.log(convertNumberToLetter(2))

// function encrypt(){
//     const name = 'Pedr+'
//     const password = '2'
//     const seeds = ['teste', 'arvore', 'selp']

//     const separator = defineSeparator(name, password)
//     const separatorStep = defineSeparator(name, seeds[0])

//     encryptSingleWord('oregano', separator, separatorStep)
    
// }


// function decrypt(){
//     const name = 'Pedr+'
//     const password = '2'
//     const seeds = ['oeste', 'arvore', 'selp']

//     // mockValues //
//     const sumValidation = -213

//     // calc separator value //
//     const separator = defineSeparator(name, password)
//     const separatorStep = defineSeparator(name, seeds[0])

//     //console.log(separator, separatorStep);

//     // validade name and password // 
//     if(validateNameWithPass(convertWordtoNumbers(name), convertWordtoNumbers(password), sumValidation)){
        
//     }else{
//         return false
//     }
// }

// // decrypt()

// encrypt()

/////////////////////////////////////////////////////////////////////////////






