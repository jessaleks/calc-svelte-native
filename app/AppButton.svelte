<!-- @param label   used to display text in the button 
     @param row     used to place the component in the right row
     @param col     used to place the component in the rightcolumn -->


<button text={label} on:tap={()=>{handleInput(label)}} row={row} col={col}>

</button>


<script>

// @param text is the displayed text on each key
//        it is passed down from AppButtonRow component 



function handleInput(text) {
    //if ($result != 0)
    console.log(calcArray);
    const specialKeys = ["AC", "C", "="]
    if (text == "AC") {
        $calculation = [];
    }
    else if (text == "C") {
        calcArray.pop();
        $calculation = calcArray;
    }
    else if (text == "=") {
        $result = eval($calculation);
    }
    else {
        $calculation.push(text);
    }
};



import {calculation, result} from './store.js'
//export let 
export let label = "";
export let row;
export let col;
</script>

<style>

</style>