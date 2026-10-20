let boxes=document.querySelectorAll(".box")
let reset=document.querySelector("#reset")
let newgame=document.querySelector("#newgame")
let winmsg=document.querySelector("#winmsg")
let xturn=true
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
]
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if (xturn){
            box.innerText="X"
            xturn=false
        }
        else{
            box.innerText="O"
            xturn=true
        }
        box.disabled=true;
        box.style.backgroundColor="#f4b960d1"
        count++;
        matchwinner();
    })
});
let count = 0;
const matchwinner=()=>{
    let winner = false;
    for(let pattern of winpattern){ 
        let val1=boxes[pattern[0]].innerText
        let val2=boxes[pattern[1]].innerText
        let val3=boxes[pattern[2]].innerText
	console.log(val1)
	console.log(val2)
	console.log(val3)
        if(val1!='' && val2!='' && val3!='') {
            if(val1==val2 && val2==val3){ 
                for(let box of boxes){
                    box.disabled=true
                    winner=true
                }
                winmsg.innerText="The winner is player "+val1
                if(val1=='X'){
                    for(let index of pattern){
                        boxes[index].style.backgroundColor="green"
                    }
                }
                else{
                    for(let index of pattern){
                        boxes[index].style.backgroundColor="blue"
                    }
                }  
            }
        }
    }
    if (!winner && count == 9) {
        winmsg.innerText = "It's a Draw!";

        for (let box of boxes) {
            box.style.backgroundColor = "red";
            box.disabled = true;
        }
    }
}
newgame.addEventListener("click",()=>{
    restart();
})
reset.addEventListener("click",()=>{
    restart();
})
const restart=()=>{
    xturn=true
    count=0
    winner=false
    for(let box of boxes){
        box.disabled=false
        box.innerText=''
        box.style.backgroundColor="#f4b960d1"
        winmsg.innerText="The player X starts"
    }
}