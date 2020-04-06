<button margin="0, 0, 0, 0" text={label} on:tap={()=>{console.log("click")}} row={row} col={col}>

</button>


<script>
import {store} from './store.js'
export let label = "";
export let row;
export let col;
</script>

<style>

</style>