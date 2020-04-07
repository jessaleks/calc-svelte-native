<button text={label} on:tap={()=>{$calculation += label}} row={row} col={col}>

</button>


<script>

// @param text is the displayed text on each key
//        it is passed down from AppButtonRow component 
function handleInput(text) {
    const specialKeys = ["AC", "C", "%", "/", "X", "+", "-", "="]
    specialKeys.forEach(sk => {
        if (text == sk) {
            // special functionality like delete, etc
        }
        else {
            $calculation += label
        }
    });

}

import {calculation} from './store.js'
//export let 
export let label = "";
export let row;
export let col;
</script>

<style>

</style>