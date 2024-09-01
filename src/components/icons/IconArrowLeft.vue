<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'MaterialSymbolsKeyboardArrowLeft',
});

interface Props {
  color?:   string,
  width?:   string,
  height?:  string,
}

const props = withDefaults(defineProps<Props>(), {
  color:  'currentColor',
  width:  '1em',
  height: '1em',
});

</script>
<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="props.width" :height="props.height" viewBox="0 0 24 24">
		<path :fill="props.color" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z" />
	</svg>
</template>
