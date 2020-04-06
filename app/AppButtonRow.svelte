{#each chars as c, i (chars.indexOf('c'))}
    <AppButton textAlignment="right" label={c} row={row} col={i++}></AppButton>   
{/each}

<script>
    import AppButton from './AppButton.svelte';
    export let chars;
    export let row;
    let column = -1; 
</script>