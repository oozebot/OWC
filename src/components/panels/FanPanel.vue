<style scoped>
.v-btn-toggle {
	display: flex;
}
.v-btn-toggle > button {
	display: flex;
	flex: 1 1 auto;
}
</style>

<template>
	<v-card>
		<v-card-title class="pb-0">
			<v-icon small class="mr-1">mdi-fan</v-icon> {{ $t('panel.fan.caption') }}
		</v-card-title>

		<v-card-text class="py-0">
			<v-row align="start">
				<v-col cols="6" sm="auto" order="1" order-sm="0">
					<v-btn-toggle v-model="fan" mandatory>
						<v-btn v-if="currentTool && currentTool.fans.length > 0" :value="-1">
							{{ $t('panel.fan.toolFan') }}
						</v-btn>


						<template v-for="(fan, index) in fans">
							<v-btn v-if="fan && fan.thermostatic.heaters.length === 0" :key="index" :value="index" :disabled="uiFrozen">
								{{ fan.name ? fan.name : $t('panel.fan.fan', [index]) }}
							</v-btn>
						</template>
					</v-btn-toggle>
				</v-col>

				<v-col cols="12" sm="auto" order="0" order-sm="1" class="flex-sm-grow-1">
					<percentage-input v-model="fanValue" :disabled="uiFrozen"></percentage-input>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<template>
	<v-card>
		<v-card-title class="pb-0">
			<v-icon small class="mr-1">mdi-fan</v-icon> {{ $t('panel.fan.caption') }}
		</v-card-title>
		<v-card-text class="py-0">
			<v-row align="start">
				<v-col cols="12" sm="auto" order="0" order-sm="1" class="flex-sm-grow-1">
					<percentage-input v-model="fanValue" :disabled="uiFrozen"></percentage-input>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script>
'use strict'

import { mapState, mapGetters, mapActions } from 'vuex'

export default {
	computed: {
		...mapState('machine/model', ['fans']),
		...mapGetters(['uiFrozen']),
		...mapGetters('machine/model', ['currentTool']),
		fanValue: {
			get() {
				// Even though RRF allows multiple fans to be assigned to a tool,
				// we assume they all share the same fan value if such a config is set
				const fan = (this.fan === -1)
					? ((this.currentTool && this.currentTool.fans.length > 0) ? this.currentTool.fans[0] : -1)
					: this.fan;
				return (fan >= 0 && fan < this.fans.length && this.fans[fan]) ? Math.round(this.fans[fan].requestedValue * 100) : 0;
			},
			set(value) {
				value = Math.min(100, Math.max(0, value)) / 100;
				if (this.fan === -1) {
					this.sendCode(`M106 S${value.toFixed(2)}`);
				} else {
					this.sendCode(`M106 P${this.fan} S${value.toFixed(2)}`);
				}
			}
		}
	},
	data() {
		return {
			fan: -1
		}
	},
	methods: {
		...mapActions('machine', ['sendCode']),
		updateFanSelection() {
			this.fan = 0;
		}
	},
	mounted() {
		this.updateFanSelection();
	},
	watch: {
		currentTool() {
			this.updateFanSelection();
		},
		fans: {
			deep: true,
			handler() {
				this.updateFanSelection();
			}
		}
	}
}
</script>
