<template>
	<v-card outlined>
		<v-card-title>
			<span><a href="https://github.com/oozeBot/OWC" target="_blank">oozeBot Web Control</a> {{ version }}</span>
		</v-card-title>

		<v-card-text class="pt-0">
			Modified version of DWC maintained by <a href="http://oozebot.com" target="_blank"><i>oozeBot</i></a> for the Elevate line of 3D printers.
			<br><br>
			{{ $t('panel.settingsAbout.developedBy') }} <a href="mailto:christian@duet3d.com">Christian Hammacher</a> {{ $t('panel.settingsAbout.for') }} <a href="https://www.duet3d.com" target="_blank">Duet3D</a>.
			<br>
			{{ $t('panel.settingsAbout.licensedUnder') }} <a href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank">GNU General Public License v3</a>
		</v-card-text>
	</v-card>
</template>

<script>
'use strict'

import { version } from '../../../package.json'

export default {
	data() {
		return {
			version
		}
	}
}
</script>
