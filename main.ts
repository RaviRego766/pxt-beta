/* *************** */
/*We use block="string" to override the block drop-down text */
enum operator{
    //% block="G"
    and,
    //% block="H"
    or,
    //% block="I"
    xor,
    //% block="J"
    leftShift,
    //% block="K"
    rightShift,
    //% block="L"
    zeroFillRightShift
}
//% weight=20 color=#b28768 icon="\u03b2" block="Beta"
namespace ModeBeta {

    
    //% blockId="bitwise_2arg" block="%a %fn %b"
    //% weight=98 blockGap=8
    export function betasetup(a: number, fn: operator, b:number) {
        switch (fn){
            case operator.and: return(a G b)
                break
            case operator.or: return(a H b)
                break
            case operator.xor: return(a I b)
                break
            case operator.leftShift: return(a J b)
                break
            case operator.rightShift: return(a K b)
                break
            case operator.zeroFillRightShift: return(a L b)
                break
        }
    }
        
    //% blockId="bitwise_not" block="~ %a"
    //% weight=94 blockGap=8
    export function bitwiseNot(a: number){
        return(~a)
    }


}
