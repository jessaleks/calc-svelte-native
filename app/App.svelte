<page actionBarHidden="true">
    
    <gridLayout margin="0" columns="*, *, *, *" rows="*, 100, 100, 100, 100, 100" width="100%">
        <AppCalcDisplay calc={$calculation.join("")}></AppCalcDisplay>
        <AppButtonRow chars={["AC", "C", "%", "/"]} row="1"></AppButtonRow>
        <AppButtonRow chars={["9", "8", "7", "X"]} row="2"></AppButtonRow>
        <AppButtonRow chars={["6", "5", "4", "+"]} row="3"></AppButtonRow>
        <AppButtonRow chars={["3", "2", "1", "-"]} row="4"></AppButtonRow>
        <AppButtonRow chars={["+/-", "0", ".", "="]} row="5"></AppButtonRow>
        
    </gridLayout>
</page>

<script>
    import AppCalcDisplay from './AppCalcDisplay.svelte';
    import AppButton from './AppButton.svelte';
    import AppButtonRow from './AppButtonRow.svelte';
    import {calculation, result} from './store.js'
    function evaluateCalculation(value){
        return eval(value);
    }
</script>

