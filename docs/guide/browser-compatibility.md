<script setup>
		import { computed } from "vue";
import Baseline from "../.vitepress/theme/app/components/Baseline.vue"
const limited = ['field-sizing', 'popover','container-style-queries', 'scope', 'interpolate-size', 'details-content', 'accent-color', 'starting-style', 'overlay', 'datalist']
const baseline2024 = ['details-name','transition-behavior','content-visibility', 'light-dark', 'scrollbar-width']
const baseline2023 = ['container-queries', 'color-mix', 'has','nesting']

const filteredIds = computed(() => {
	return {
		'limited': limited,
		'2024': baseline2024,
		"2023": baseline2023,
		'all': [...limited, ...baseline2024, ...baseline2023]
	}[activeToggle.value]
})

	const activeToggle = defineModel({default: "all"})

	const buttons = [
		{
			id: 'all',
			label: 'All'
		},
		{
			id: 'limited',
			label: 'Limited'
		},
		{
			id: '2024',
			label: '2024'
		},
		{
			id: '2023',
			label: '2023'
		}
	]
</script>

<hgroup>
<p>Guide</p>
<h1>Browser compatibility</h1>
<p>These are the latest (and not always super-supported) features used by Open Props UI.</p>
</hgroup>

<div role="group" class="toggle-button-group fullwidth">
	<button
		v-for="button in buttons"
		:key="button.id"
		@click="activeToggle = button.id"
		:class="{'selected': activeToggle === button.id}"
	>
	<svg v-show="activeToggle === button.id" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M29.907 5.14a1.25 1.25 0 0 1-.047 1.767l-19 18a1.25 1.25 0 0 1-1.775-.055l-6.75-7.25a1.25 1.25 0 0 1 1.83-1.704l5.89 6.327L28.14 5.093a1.25 1.25 0 0 1 1.767.047"/></svg>
		{{ button.label }}
	</button>
</div>

<Baseline :ids="filteredIds" />
