export const inc = ()=>({type : 'INC'})
export const dec = ()=>({type : 'DEC'})
export const rep = ()=>({type : 'REP'})
export const ran = ()=>{
    return {type : 'RAN', value:Math.floor(Math.random() * 10)
    }
}
