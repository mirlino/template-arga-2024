<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'PepiconsPopMenu',
});

const props = defineProps({
    size: {
        type: String,
        default: '1em'
    },
    color: {
        type: String,
        default: 'currentColor'
    }
});

</script>
<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="props.size" :height="props.size" viewBox="0 0 20 20">
		<path :fill="props.color" fill-rule="evenodd" d="M2 8a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0-4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10.308a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1" clip-rule="evenodd" />
	</svg>
</template>
