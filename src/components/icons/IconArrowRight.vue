<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'MaterialSymbolsKeyboardArrowRight',
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
})

</script>

<template>
	<svg xmlns="http://www.w3.org/2000/svg" :width="props.width" :height="props.height" viewBox="0 0 24 24">
		<path :fill="props.color" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z" />
	</svg>
</template>
