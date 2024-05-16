// let fasl = prompt(`fasl oyini kiriting! `)

// switch (fasl) {
//     case 'mart': console.log('Bahor');break
//     case 'aprel': console.log('Bahor');break
//     case 'may': console.log('Bahor');break
//     case 'iyun': console.log(`Yoz`);break
//     case 'iyul':console.log(`Yoz`);break
//     case 'avgust': console.log(`Yoz`);break
//     case `sentabr`: console.log(`Kuz`);break
//     case `oktabr`: console.log(`Kuz`);break
//     case `noyabr`: console.log(`Kuz`);break

//     default:console.log(`bungday fasl yoki oy yoq`)
// }


// let vaqt = +prompt(`Vaqt kiriting!`)

// let res = (Math.floor(vaqt / 1140));
// let minut = vaqt % 1140
// let secund = (Math.floor(minut / 60));
// let sec = minut % 60
// console.log(`${vaqt} minut ${res} sutka ${secund}minut ${sec} secund`);  

let kun = prompt(`1 dan 7 gacha bo'lgan sonni kiriting!`)
switch (kun) {
    case '1':console.log('Dushanba');break
    case '2':console.log('Seshanba');break
    case '3':console.log('Chorshanba');break
    case '4':console.log('Payshanba');break
    case '5':console.log('Juma');break
    case '6':console.log('Shanba');break
    case '7':console.log('Yakshanba');break

    default:console.log(`Bunday hafta kuni soni yo'q`);
}