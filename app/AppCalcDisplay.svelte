<!-- @error for some reason it does not show the correct result -->

<label class="AppCalcDisplay" bind:text={calc} row="0" column="0" colSpan="5"/>

<script>
import {calculation, result} from './store.js';
//console.log("updated");
let calc;
$: calc = $calculation.join("");
</script>  