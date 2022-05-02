<template>
	<v-row :dense="$vuetify.breakpoint.mobile">
		<v-col cols="12" sm="8" md="8" lg="9" xl="9">
			<movement-panel class="mb-2"></movement-panel>

			<v-row v-if="isFFForUnset">
				<v-col sm="12" md="12" lg="12" xl="12">
					<extrude-panel></extrude-panel>
				</v-col>
			</v-row>

			<v-row>
				<v-col sm="6" md="6" lg="6" xl="6">
					<fan-panel></fan-panel>
				</v-col>
				<v-col sm="6" md="6" lg="6" xl="6">
					<light-panel></light-panel>
				</v-col>
			</v-row>
		</v-col>

		<v-col class="hidden-xs-only" sm="4" md="4" lg="3" xl="3">
			<macro-list></macro-list>
		</v-col>
	</v-row>
</template>

<script>
'use strict'

import { mapState, mapGetters } from 'vuex'

import { MachineMode } from '@/store/machine/modelEnums'

export default {
	computed: {
		...mapState('machine/model', {
			fans: state => state.fans,
			atxPower: state => state.state.atxPower,
			machineMode: state => state.state.machineMode
		}),
		...mapGetters(['uiFrozen']),
		...mapGetters('machine/model', ['currentTool']),
		isFFForUnset() {
			return !this.machineMode || (this.machineMode === MachineMode.fff);
		},
		showATXPanel() {
			return false;
		},
		showFansPanel() {
			return (this.currentTool && this.currentTool.fans.length > 0) || this.fans.some(fan => fan && !fan.thermostatic.control);
		}
	}
}
</script>
