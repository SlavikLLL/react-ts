

const arr:Array<number> = [1,3,4,5,-7,-6,-2,15];
function poss(arr:Array<number>):void{
    const posArr:Array<number> = [];
    if(arr.length != 0){
        console.log("Идет перебор массива");
    }
    for(let i:number = 0; i<=arr.length;i++){
        if(arr[i]>0){
            posArr.push(arr[i]);
            
        }
    }
    if(posArr.length !=0){
        console.log(posArr);
    }
    else{
        return null;
    }
   
}
poss(arr);