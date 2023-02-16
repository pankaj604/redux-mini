export const  INC = (num)=>{
      return{
        type : "INCREMENT",
        payload : num
      }
}
export const  DEC = ()=>{
      return{
        type : "DECREMENT"
      }
} 