export default {
	language: 'English',
	'$vuetify': {
		badge: 'Badge',
		close: 'Close',
		dataIterator: {
			noResultsText: 'No matching records found',
			loadingText: 'Loading items...',
		},
		dataTable: {
			itemsPerPageText: 'Rows per page:',
			ariaLabel: {
				sortDescending: 'Sorted descending.',
				sortAscending: 'Sorted ascending.',
				sortNone: 'Not sorted.',
				activateNone: 'Activate to remove sorting.',
				activateDescending: 'Activate to sort descending.',
				activateAscending: 'Activate to sort ascending.',
			},
			sortBy: 'Sort by',
		},
		dataFooter: {
			itemsPerPageText: 'Items per page:',
			itemsPerPageAll: 'All',
			nextPage: 'Next page',
			prevPage: 'Previous page',
			firstPage: 'First page',
			lastPage: 'Last page',
			pageText: '{0}-{1} of {2}',
		},
		datePicker: {
			itemsSelected: '{0} selected',
		},
		noDataText: 'No data available',
		carousel: {
			prev: 'Previous visual',
			next: 'Next visual',
			ariaLabel: {
				delimiter: 'Carousel slide {0} of {1}',
			},
		},
		calendar: {
			moreEvents: '{0} more',
		},
		fileInput: {
			counter: '{0} files',
			counterSize: '{0} files ({1} in total)',
		},
		timePicker: {
			am: 'AM',
			pm: 'PM',
		},
	},
	button: {
		add: {
			caption: 'Add'
		},
		connect: {
			connect: 'Connect',
			connecting: 'Connecting...',
			disconnect: 'Disconnect',
			disconnecting: 'Disconnecting...'
		},
		power: {
			caption: 'Power',
			title: 'Power Toggle'
		},
		emergencyStop: {
			caption: 'E-Stop',
			title: 'Enforce an immediate software reset'
		},
		home: {
			caption: 'Home {0}',
			captionAll: 'Home All',
			title: 'Home the {0} axis (G28 {0})',
			titleAll: 'Home all axes (G28)'
		},
		newDirectory: {
			caption: 'New Directory'
		},
		newFilament: {
			caption: 'New Filament'
		},
		newFile: {
			caption: 'New File'
		},
		refresh: {
			caption: 'Refresh'
		},
		reset: {
			caption: 'Reset Machine',
			title: 'Send M999 to the machine to reset it'
		},
		upload: {
			gcodes: {
				caption: 'Upload G-Code File(s)',
				title: 'Upload one or more G-Code files (drag&drop is supported as well)'
			},
			start: {
				caption: 'Upload & Start',
				title: 'Upload & Start one or more G-Code files (drag&drop is supported as well)'
			},
			firmware: {
				caption: 'Upload Firmware Files',
				title: 'Upload one or more firmware files (drag&drop is supported as well)'
			},
			macros: {
				caption: 'Upload Macro File(s)',
				title: 'Upload one or more macro files (drag&drop is supported as well)'
			},
			filaments: {
				caption: 'Upload Filament Configs',
				title: 'Upload one or more filament configurations (drag&drop is supported as well)'
			},
			menu: {
				caption: 'Upload Menu Files',
				title: 'Upload one or more menu files (drag&drop is supported as well)'
			},
			system: {
				caption: 'Upload System Files',
				title: 'Upload one or more system files (drag&drop is supported as well)'
			},
			web: {
				caption: 'Upload Web Files',
				title: 'Upload one or more web files (drag&drop is supported as well)'
			},
			plugin: {
				caption: 'Install Plugin',
				title: 'Upload and start a plugin (drag&drop is supported as well)'
            },
			update: {
				caption: 'Install Update',
				title: 'Upload and install an update (drag&drop is supported as well)'
			}
		}
	},
	chart: {
		layer: {
			caption: 'Layer Chart',
			layerTime: 'Layer Time',

			showLastLayers: 'Show Last {0} Layers',
			showAllLayers: 'Show All Layers',

			layer: 'Layer {0}',
			layerDuration: 'Duration: {0}',
			layerHeight: 'Layer Height: {0}',
			filamentUsage: 'Filament Usage: {0}',
			fractionPrinted: 'File Progress: {0}',
			temperatures: 'Temperatures: {0}'
		},
		temperature: {
			caption: 'Temperature Chart',
			heater: 'Heater {0}',
			sensor: 'Sensor {0}',
			noData: 'No Data'
		}
	},
	dialog: {
		changeMoveStep: {
			title: 'Change move step',
			prompt: 'Please enter a new value for the clicked move button:'
		},
		configUpdated: {
			title: 'Apply new configuration?',
			prompt: 'Would you like to restart the mainboard or execute the configuration file again? It is advised to reset the mainboard if you removed IO ports or changed driver allocations.',
			reset: 'Restart Mainboard',
			runConfig: 'Run Config File'
		},
		connect: {
			title: 'Connect to Machine',
			prompt: 'Please enter the hostname and password of the machine that you would like to connect to:',
			hostPlaceholder: 'Hostname',
			hostRequired: 'Hostname is required',
			passwordPlaceholderOptional: 'Password (optional)',
			passwordPlaceholder: 'Password',
			passwordRequired: 'Password is required',
			connect: 'Connect'
		},
		connection: {
			connecting: 'Connecting...',
			disconnecting: 'Disconnecting...',
			updating: 'Please wait while updates are being installed...',
			reconnecting: 'Connection lost, attempting to reconnect...',
			standBy: 'Please stand by...'
		},
		editExtrusionAmount: {
			title: 'Edit extrusion amount',
			prompt: 'Please enter a new amount for the clicked button:'
		},
		editExtrusionFeedrate: {
			title: 'Edit extrusion feedrate',
			prompt: 'Please enter a new feedrate for the clicked button:'
		},
		factoryReset: {
			title: 'Perform factory reset?',
			prompt: 'Are you sure you wish to perform a factory reset? All saved settings will be lost.'
		},
		filament: {
			titleChange: 'Change Filament',
			titleLoad: 'Load Filament',
			prompt: 'Please choose a filament:',
			noFilaments: 'No Filaments available'
		},
		fileEdit: {
			gcodeReference: 'G-Code Reference',
			menuReference: 'Menu Reference',
			save: 'Save',
			confirmClose: 'The file has been changed. If you proceed, your changes will be lost.'
		},
		fileTransfer: {
			uploadingTitle: 'Uploading File {0} of {1}, {2}% complete',
			uploadDoneTitle: 'Uploads Complete!',
			uploadFailedTitle: 'Uploads Failed!',
			downloadingTitle: 'Downloading File {0} of {1}, {2}% complete',
			downloadDoneTitle: 'Downloads Complete',
			downloadFailedTitle: 'Downloads Failed!',
			filename: 'Filename',
			size: 'Size',
			progress: 'Progress',
			currentSpeed: 'Current Speed: {0}',
			cancelUploads: 'Cancel Uploads',
			cancelDownloads: 'Cancel Downloads'
		},
		meshEdit: {
			title: 'Set Mesh Parameters',
			radius: 'Probe Radius',
			spacing: 'Spacing',
			startCoordinate: 'Start coordinate in {0} direction',
			endCoordinate: 'End coordinate in {0} direction',
			spacingDirection: 'Spacing in {0} direction'
		},
		newDirectory: {
			title: 'New Directory',
			prompt: 'Please enter a new directory name:'
		},
		newFilament: {
			title: 'New Filament',
			prompt: 'Please enter a name for the new filament:'
		},
		newFile: {
			title: 'New File',
			prompt: 'Please enter a new file name:'
		},
		pluginInstallation: {
			installation: 'Plugin Installation',
			prompt: 'The following plugin will be installed:',
			by: 'by {0}',
			license: 'License: {0}',
			homepage: 'Homepage:',
			contents: 'This package provides software components for',
			dsf: 'Duet Software Framework',
			dwc: 'Duet Web Control',
			rrf: 'RepRapFirmware',
			prerequisites: 'Prerequisites',
			version: 'Version {0}',
			noPluginSupport: 'External Plugins not allowed',
			rootSupport: 'Support for Super-User Plugins',
			invalidManifest: 'Invalid plugin manifest',
			permissions: 'Required Permissions',
			dwcWarning: 'This plugin contains components for the web interface. No permission checks can be enforced in browser sessions so it may manipulate your system and create security hazards that might result in physical damage of your setup.',
			rootWarning: 'This plugin requires super-user permissions which means it can reconfigure the attached SBC and install potentially malicious software. This might result in physical damage of your setup.',
			sbcPermissions: 'The plugin running on the SBC wants to',
			noSpecialPermissions: 'This plugin does not require any special permissions.',
			ready: 'Installation Ready',
			readyMessage: 'The plugin is now ready to be installed. Please make sure you trust the plugin author before you confirm this final step.',
			readyDisclaimer: 'Before you can continue you must accept that Duet3D Ltd cannot be held responsible for potential damage resulting from the installation of this third-party plugin.',
			checkboxDisclaimer: 'I accept the risks, install this plugin',
			progress: 'Installation Progress',
			progressText: 'Please stand by while the plugin is being installed...',
			installationSuccess: 'Installation complete!',
			installationFailed: 'Installation failed!',
			cancel: 'Cancel',
			back: 'Back',
			next: 'Next',
			finish: 'Finish',
			reloadPrompt: {
				title: 'Reload DWC?',
				prompt: 'You have just updated an active DWC plugin. In order to use the new version, the web interface must be reloaded. Do you want to do this now?'
			}
		},
		renameFile: {
			title: 'Rename File or Directory',
			prompt: 'Please enter a new name:'
		},
		resetHeaterFault: {
			title: 'Reset Heater Fault',
			prompt: 'A heater fault has occurred on heater {0}. It is strongly advised to turn off your machine now and to check your wiring before you continue. If you are absolutely sure that this is not a physical problem, you can reset the heater fault ON YOUR OWN RISK. Be aware that this is NOT RECOMMENDED and can lead to further problems. How would you like to proceed?',
			resetFault: 'Reset Fault'
		},
		runMacro: {
			title: 'Run {0}',
			prompt: 'Do you want to run {0}?'
		},
		startJob: {
			title: 'Start {0}',
			prompt: 'Do you want to start {0}?'
		},
		update: {
			title: 'Install updates?',
			prompt: 'You have uploaded at least one firmware update. Would you like to install them now?',
			resetTitle: 'Reset firmware?',
			resetPrompt: 'You have just installed expansion board updates. Do you want to reboot the main controller to restore the previous configuration?',
			sbcWarning: 'You are operating your machine in SBC mode. Please upgrade the firmware using DWC only if advised by the firmware developers.'
		},
		inputRequired: 'Please enter a value',
		numberRequired: 'Please enter a valid number'
	},
	directory: {
		menu: 'Menu Directory',
		filaments: 'Filaments Directory',
		firmware: 'Firmware Directory',
		gcodes: 'G-Codes Directory',
		macros: 'Macros Directory',
		system: 'System Directory',
		web: 'WWW Directory'
	},
	error: {
		notImplemented: '{0} is not implemented',
		invalidPassword: 'Invalid password!',
		noFreeSession: 'No more free sessions!',
		badVersion: 'Incompatible firmware version',
		connect: 'Failed to connect to {0}',
		disconnect: 'Could not disconnect cleanly from {0}',
		disconnected: 'Could not complete action because the connection has been terminated',
		cancelled: 'Operation has been cancelled',
		network: 'Network error',
		timeout: 'HTTP request timed out',
		driveUnmounted: 'Target drive is unmounted',
		directoryNotFound: 'Directory {0} not found',
		fileNotFound: 'File {0} not found',
		invalidHeightmap: 'Invalid Height Map',
		operationFailed: 'Operation failed (Reason: {0})',
		uploadStartWrongFileCount: 'Only a single file can be uploaded & started',
		uploadNoSingleZIP: 'Only a single ZIP file can be uploaded at once',
		uploadNoFiles: 'This ZIP does not contain any usable fiels',
		codeResponse: 'Could not run code because a bad response has been received',
		codeBuffer: 'Could run code because the buffer space has been exhausted',
		enterValidNumber: 'Please enter a valid number',
		turnOffEverythingFailed: 'Failed to turn everything off',
		filelistRequestFailed: 'Failed to get file list',
		fileinfoRequestFailed: 'Failed to get file info for {0}',
		filamentsLoadFailed: 'Failed to load filaments',
		move: 'Failed to move {0} to {1}'
	},
	events: {
		connected: 'Connected to {0}',
		connectionLost: 'Failed to maintain connection to {0}',
		emergencyStop: 'Emergency stop, attemping to reconnect...',
		reconnecting: 'Connection interrupted, attempting to reconnect...',
		reconnected: 'Connection established',
		disconnected: 'Disconnected from {0}'
	},
	generic: {
		ok: 'OK',
		cancel: 'Cancel',
		yes: 'Yes',
		no: 'No',
		close: 'Close',
		reset: 'Reset',
		noValue: 'n/a',
		loading: 'loading',
		error: 'Error',
		info: 'Info',
		warning: 'Warning',
		success: 'Success',
		heaterStates: {
			off: 'off',
			standby: 'standby',
			active: 'active',
			fault: 'fault',
			tuning: 'tuning',
			offline: 'offline'
		},
		status: {
			disconnected: 'Disconnected',
			starting: 'Starting',
			updating: 'Updating',
			off: 'Off',
			halted: 'Halted',
			pausing: 'Pausing',
			paused: 'Paused',
			resuming: 'Resuming',
			cancelling: 'Cancelling',
			printing: 'Printing',
			processing: 'Processing',
			simulating: 'Simulating',
			busy: 'Busy',
			changingTool: 'Changing Tool',
			idle: 'Idle',
			unknown: 'Unknown'
		},
		rpm: 'RPM',
		sdCard: 'SD Card {0}',
		mounted: 'mounted',
		notMounted: 'not mounted',
		extracting: 'Extracting',
		uploading: 'Uploading',
		active: 'Active',
		standby: 'Standby'
	},
	input: {
		code: {
			send: 'Send',
			placeholder: 'Send code...'
		},
		addTemperature: 'Value of new temperature',
		addRPM: 'Value of new preset',
        set: 'Set'
	},
	jobProgress: {
		simulating: 'Simulating {0}, {1} complete',
		simulated: 'Simulated {0}, 100 % complete',
		processing: 'Processing {0}, {1} complete',
		processed: 'Processed {0}, 100 % complete',
		printing: 'Printing {0}, {1} complete',
		printed: 'Printed {0}, 100 % complete',
		noJob: 'No Job running.',
		layer: 'Layer {0} of {1}',
		filament: 'Filament Usage: {0}',
		filamentRemaining: '{0} remaining'
	},
	list: {
		baseFileList: {
			fileName: 'Filename',
			size: 'Size',
			lastModified: 'Last modified',
			download: 'Download File',
			edit: 'Edit File',
			rename: 'Rename',
			delete: 'Delete',
			downloadZIP: 'Download as ZIP',
			noFiles: 'No Files or Directories',
			driveUnmounted: 'Drive is unmounted',
			goUp: 'Go up'
		},
		menu: {
			noFiles: 'No Display Files'
		},
		eventLog: {
			date: 'Date',
			type: 'Type',
			message: 'Event',
			noEvents: 'No Events',
			clear: 'Clear',
			downloadText: 'Download as Text',
			downloadCSV: 'Download as CSV'
		},
		filament: {
			noFilaments: 'No Filaments'
		},
		firmware: {
			installFile: 'Install Firmware File',
			noFiles: 'No Firmware Files'
		},
		macro: {
			caption: 'Macros',
			noMacros: 'No Macros',
			run: 'Run Macro',
			root: 'Root'
		},
		jobs: {
			height: 'Object Height',
			layerHeight: 'Layer Height',
			filament: 'Filament Usage',
			printTime: 'Print Time',
			simulatedTime: 'Simulated Time',
			generatedBy: 'Generated by',

			noJobs: 'No Jobs',
			start: 'Start File',
			simulate: 'Simulate File'
		},
		system: {
			noFiles: 'No System Files',
			configToolNote: 'edit via config tool'
		}
	},
	menu: {
		control: {
            caption: 'Control',
            status: 'Status',
			dashboard: 'Dashboard',
			console: 'Console'
		},
		job: {
			caption: 'Job',
			status: 'Status',
			webcam: 'Webcam'
		},
		files: {
			caption: 'Files',
			jobs: 'Jobs',
			filaments: 'Filaments',
			macros: 'Macros',
			menu: 'Display',
			system: 'System',
			web: 'Web'
		},
		plugins: {
			caption: 'Plugins'
		},
		settings: {
			caption: 'Settings',
			general: 'General',
			machine: 'Machine-Specific'
		}
	},
	notification: {
		compress: {
			title: 'Compressing files...',
			message: 'Please stand by while your files are being compressed...',
			errorTitle: 'Failed to compress files'
		},
		decompress: {
			title: 'Decompressing files...',
			message: 'Please stand by while your files are being decompressed...',
			errorTitle: 'Failed to decompress files'
		},
		delete: {
			errorTitle: 'Failed to delete {0}',
			errorMessageDirectory: 'Please make sure that this directory is empty',
			success: 'Successfully deleted {0}',
			successMultiple: 'Successfully deleted {0} items'
		},
		deleteFilament: {
			errorTitle: 'Failed to delete filament(s)',
			errorStillLoaded: 'At least one of the selected filaments is still loaded. Please unload them before you proceed',
			errorSubDirectories: 'The filament {0} contains sub-directories. Please delete them manually and try again.'
		},
		download: {
			title: 'Downloading {0} @ {1}, {2}% complete',
			message: 'Please stand by while the file is being downloaded...',
			success: 'Download of {0} successful after {1}',
			error: 'Failed to download {0}'
		},
		message: 'Message',
		mount: {
			successTitle: 'SD card mounted',
			errorTitle: 'Failed to mount SD card'
		},
		newDirectory: {
			errorTitle: 'Failed to create directory',
			successTitle: 'Directory created',
			successMessage: 'Successfully created directory {0}'
		},
		newFilament: {
			errorTitle: 'Failed to create filament',
			errorTitleMacros: 'Failed to create filament macros',
			successTitle: 'Filament created',
			successMessage: 'Successfully created filament {0}'
		},
		plugins: {
			started: 'Plugin has been started',
			startError: 'Failed to start plugin',
			stopped: 'Plugin has been stopped',
			stopError: 'Failed to start plugin',
			uninstalled: 'Plugin has been uninstalled',
			uninstallError: 'Failed to uninstall plugin'
		},
		rename: {
			success: 'Successfully renamed {0} to {1}',
			error: 'Failed to rename {0} to {1}',
		},
		renameFilament: {
			errorTitle: 'Failed to rename filament',
			errorStillLoaded: 'This filament is still loaded. Please unload it before you proceed'
		},
		responseTooLong: 'Response too long, see Console',
		upload: {
			title: 'Uploading {0} @ {1}, {2}% complete',
			message: 'Please stand by while the file is being uploaded...',
			success: 'Upload of {0} successful after {1}',
			error: 'Failed to upload {0}'
		}
	},
	panel: {
		atx: {
			caption: 'ATX Power',
			on: 'On',
			off: 'Off'
		},
		babystepping: {
			caption: 'Z Babystepping',
			current: 'Current Offset: {0}'
		},
		extrude: {
			caption: 'Extrusion Control',
			mix: 'Mix',
			mixRatio: 'Mix Ratio:',
			amount: 'Feed amount in {0}:',
			feedrate: 'Feedrate in {0}:',
			retract: 'Retract',
			extrude: 'Extrude'
		},
		extrusionFactors: {
			caption: 'Extrusion Factors',
			changeVisibility: 'Change Visibility',
			extruder: 'Extruder {0}',
			noExtruders: 'No Extruders'
		},
		fan: {
			caption: 'Tool Fan Control',
			selection: 'Fan Selection:',
			toolFan: 'Tool Fan',
			fan: 'Fan {0}'
		},
		fans: {
			caption: 'Fans',
			changeVisibility: 'Change Visibility',
			toolFan: 'Tool Fan',
			fan: 'Fan {0}',
			noFans: 'No Fans'
		},
		light: {
			caption: 'LED Light Control',
			fan: 'Lights {12}'
		},
		jobControl: {
			caption: 'Job Control',
			cancelJob: 'Cancel Job',
			cancelPrint: 'Cancel Print',
			cancelSimulation: 'Cancel Simulation',
			pauseJob: 'Pause Job',
			pausePrint: 'Pause Print',
			pauseSimulation: 'Pause Simulation',
			resumeJob: 'Resume Job',
			resumePrint: 'Resume Print',
			resumeSimulation: 'Resume Simulation',
			repeatJob: 'Start Again',
			repeatPrint: 'Print Again',
			repeatSimulation: 'Simulate Again',
			showPreview: 'Show Preview'
		},
		jobData: {
			caption: 'Collected Data',
			warmUpDuration: 'Warm-Up Time',
			currentLayerTime: 'Current Layer Time',
			lastLayerTime: 'Last Layer Time',
			jobDuration: 'Job Duration'
		},
		jobEstimations: {
			caption: 'Estimations based on',
			filament: 'Filament Usage',
			file: 'File Progress',
			layer: 'Layer Time',
			slicer: 'Slicer',
			simulation: 'Simulation'
		},
		jobInfo: {
			caption: 'Job Information',
			height: 'Height:',
			layerHeight: 'Layer Height:',
			filament: 'Filament Usage:',
			generatedBy: 'Generated by:'
		},
		movement: {
			caption: 'Machine Movement',
			compensation: 'Compensation & Calibration',
			runBed: 'True Bed Levelling (G32)',
			runDelta: 'Delta Calibration (G32)',
			compensationInUse: 'Compensation in use: {0}',
            compensationType: {
                none: 'None',
                mesh: 'Mesh'
            },
            disableBedCompensation: 'Disable Bed Compensation (M561)',
            disableMeshCompensation: 'Disable Mesh Compensation (G29 S2)',
            editMesh: 'Define Area for Mesh Compensation (M557)',
            runMesh: 'Run Mesh Compensation (G29)',
            loadMesh: 'Load Saved Height Map from SD Card (G29 S1)',
            axesNotHomed: 'The following axis is not homed:|The following axes are not homed:',
            noAxes: 'No Axes',
            workzero: 'Go To Zero'
        },
        settingsAbout: {
            caption: 'About',
            developedBy: 'Web Interface developed by',
            for: 'for',
            licensedUnder: 'Licensed under the terms of the'
        },
        settingsAppearance: {
            caption: 'Appearance',
            darkTheme: 'Dark theme',
            language: 'Language',
            binaryFileSizes: 'Use binary file sizes',
            binaryFileSizesTitle: 'File sizes are displayed with a basis of 1024 (IEC) instead of 1000 (SI)',
            disableAutoComplete: 'Disable auto-completion',
            disableAutoCompleteTitle: 'Do not show auto-complete list when typing in code or temperature inputs',
            dashboardModeTitle: 'Dashboard Mode',
            bottomNavigation: 'Show bottom navigation on tablet devices',
            numericInputs: 'Show numeric input fields instead of sliders',
			iconMenu: 'Use compact icon menu'
        },
        settingsCommunication: {
            caption: 'Communication',
            pingInterval: 'PING interval when idle (ms)',
            updateDelay: 'Update delay (ms)',
            ajaxRetries: 'Number of maximum AJAX retries',
            updateInterval: 'Update interval ({0})',
            extendedUpdateEvery: 'Extended status update interval',
            fileTransferRetryThreshold: 'Retry threshold for file transfers ({0})',
            crcUploads: 'Use CRC32 checksums for uploads',
            unavailable: 'No settings available'
        },
        settingsElectronics: {
            caption: 'Electronics',
            diagnostics: 'Diagnostics',
            board: 'Board: {0}',
            firmware: 'Firmware: {0} ({1})',
            dwsFirmware: 'Duet WiFi Server Version: {0}',
            updateNote: 'Note: You can install updates on the System page.'
        },
        settingsEndstops: {
            caption: 'Endstops',
            index: 'Index',
            triggered: 'Triggered'
        },
        settingsGeneral: {
            caption: 'General',
            factoryReset: 'Revert to factory defaults',
            settingsStorageLocal: 'Save settings in local storage',
            settingsSaveDelay: 'Update delay for settings changes ({0})',
            cacheStorageLocal: 'Save cache in local storage',
            cacheSaveDelay: 'Update delay for cache changes ({0})',
            ignoreFileTimestamps: 'Ignore file timestamps on upload'
        },
        settingsListItems: {
            caption: 'List Items',
            toolTemperatures: 'Tool Temperatures',
            bedTemperatures: 'Bed Temperatures',
            chamberTemperatures: 'Chamber Temperatures',
            spindleRPM: 'Spindle RPM'
        },
        settingsMachine: {
            caption: 'Machine-Specific',
            babystepAmount: 'Babystep amount ({0})',
            moveFeedrate: 'Feedrate for move buttons ({0})',
			toolChangeMacros: 'Tool change macros'
        },
        settingsNotifications: {
            caption: 'Notifications',
            notificationErrorsPersistent: 'Do not close error messages automatically',
            notificationTimeout: 'Default notification timeout ({0})'
        },
        settingsWebcam: {
            caption: 'Webcam',
            webcamURL: 'Webcam URL (optional)',
            webcamUpdateInterval: 'Webcam update interval ({0})',
            webcamLiveURL: 'URL to open when Webcam image is clicked (optional)',
            webcamFix: 'Do not append extra HTTP qualifier when reloading images',
            webcamEmbedded: 'Embed webcam image in an iframe',
            webcamRotation: 'Rotate webcam image',
            webcamFlip: 'Flip webcam image',
            flipNone: 'None',
            flipX: 'Flip X',
            flipY: 'Flip Y',
            flipBoth: 'Flip both'
        },
        speedFactor: {
            caption: 'Speed Factor'
        },
        spindle: {
            title: 'Spindles',
            spindle: 'Spindle',
            active: 'Active',
            direction: 'Direction',
            currentRPM: 'Current RPM',
            setRPM: 'Set RPM',
            on: 'On',
            off: 'Off',
            forward: 'forward',
            reverse: 'reverse'
        },
        status: {
            caption: 'Status',
            mode: 'Mode: {0}',
            toolPosition: 'Tool Position',
            machinePosition: 'Machine Position',
            extruders: 'Extruder Drives',
            extruderDrive: 'Drive {0}',
            speeds: 'Speeds',
            requestedSpeed: 'Requested Speed',
            topSpeed: 'Top Speed',
            sensors: 'Sensors',
            mcuTemp: 'MCU Temperature',
            minMax: 'Minimum: {0}, Maximum {1}',
            vIn: 'Vin',
            v12: 'V12',
            fanRPM: 'Fan RPM',
            probe: 'Z-Probe|Z-Probes',
            noStatus: 'No Status'
        },
        tools: {
            caption: 'Tools',
            controlHeaters: 'Control Heaters',
            turnEverythingOff: 'Turn Everything Off',
            setActiveTemperatures: 'Set active temperatures',
            setStandbyTemperatures: 'Set standby temperatures',
            setToolTemperatures: 'Set tool temperatures',
            setBedTemperatures: 'Set bed temperatures',
            setChamberTemperatures: 'Set chamber temperatures',
            tool: 'Tool {0}',
            loadFilament: 'Load Filament',
            changeFilament: 'Change Filament',
            unloadFilament: 'Unload Filament',
            heater: 'Heater {0}',
            current: 'Current',
            active: 'Active',
            standby: 'Standby',
            bed: 'Bed {0}',
            chamber: 'Chamber {0}',
            extra: {
                caption: 'Extra',
                sensor: 'Sensor',
                sensorIndex: 'Sensor {0}',
                value: 'Value',
                showInChart: 'Show in Chart',
                noItems: 'No Extra Sensors'
            },
            noTools: 'No Tools'
        },
        webcam: {
            caption: 'Webcam Surveillance',
            alt: '(webcam image)'
        }
    },
    pluginPermissions: {
        commandExecution: 'Execute generic DSF commands (e.g. G/M/T-codes)',
        codeInterceptionRead: 'Intercept G/M/T-codes',
        codeInterceptionReadWrite: 'Intercept G/M/T-codes codes and manipulate them',
        managePlugins: 'Install, load, unload, and uninstall third-party plugins',
        manageUserSessions: 'Manage user sessions',
        objectModelRead: 'Read from the object model',
        objectModelReadWrite: 'Read from and write to the object model',
        registerHttpEndpoints: 'Create new HTTP endpoints',
        readFilaments: 'Read files from the filaments directory',
        writeFilaments: 'Write files to the filaments directory',
        readFirmware: 'Read files from the firmware directory',
        writeFirmware: 'Write files to the firmware directory',
        readGCodes: 'Read files from the G-codes directory',
        writeGCodes: 'Write files to the G-codes directory',
        readMacros: 'Read files from the macros directory',
        writeMacros: 'Write files to the macros directory',
        readMenu: 'Read files from the menu directory',
        writeMenu: 'Write files to the menu directory',
        readSystem: 'Read files from the system directory',
        writeSystem: 'Write files to the system directory',
        readWeb: 'Read files from the web directory',
        writeWeb: 'Write files to the web directory',
        fileSystemAccess: 'Access files outside the virtual SD directory',
        launchProcesses: 'Launch new processes',
        networkAccess: 'Communicate over the network',
        webcamAccess: 'Access webcam devices',
		gpioAccess: 'Access GPIO devices',
		superUser: 'Run as root user (potentially dangerous)'
    },
    plugins: {
        accelerometer: {
            name: 'Accelerometer',
            listTitle: 'CSV Files',
            none: 'No Files',
            chartCaption: 'Acceleration Samples',
            noData: 'No Samples Loaded',
            analysis: 'Frequency Analysis',
            samplingRate: 'Sampling Rate (in Hz)',
            start: 'Start',
            end: 'End',
            wideBand: 'Wide-band analysis',
            analyze: 'Analyze',
            back: 'Back',
            overflowPrompt: {
                title: 'Overflows detected',
                prompt: 'This CSV file has reported overflows. Are you sure you wish to continue?'
            },
            loadError: 'Failed to load CSV file',
            parseError: 'Failed to parse CSV file',
            frequency: 'Frequency (in Hz)',
            amplitudes: 'Amplitudes',
            samples: 'Samples',
            accelerations: 'Accelerations (in g)',
            sampleTooltip: 'Sample #{0}',
            frequencyTooltip: '{0} ± {1} Hz'
        },
        autoUpdate: {
            menuCaption: 'Update'
        },
        gcodeViewer: {
            caption: 'G-Code Viewer',
            view3D: 'View 3D',
            fullscreen: 'Full Screen',
            showConfiguration: 'Show Viewer Configuration',
            resetCamera: {
                caption: 'Reset Camera',
                title: 'Reset camera to home position'
            },
            cancelLoad: 'Cancel File Loading',
            reloadView: {
                caption: 'Reload View',
                title: 'Reload the current gcode, this is used when changing settings like color, feedrate color, etc.'
            },
            loadCurrentJob: {
                caption: 'Load Current Job',
                title: 'Load the current printing or simulating job'
            },
            unloadGCode: {
                caption: 'Unload GCode',
                title: 'Remove the loaded gcode from the viewer'
            },
            loadLocalGCode: {
                caption: 'Load Local GCode',
                title: 'Load a file from your local drive into the viewer'
            },
            showCursor: 'Show Cursor',
            showTravels: 'Show Travels',
            renderQuality: {
                caption: 'Render Quality',
                title: 'Adjust the visualization quality of the viewer. The higher the level the more vertices and render modes become available'
            },
            sbc: 'SBC',
            low: 'Low',
            medium: 'Medium',
            high: 'High',
            ultra: 'Ultra',
            max: 'Max',
            forceLineRendering: 'Force Line Rendering',
            transparency: 'Transparency',
            showSolid: 'Show Solid',
            spreadLines: 'Spread Lines',
            extruders: {
                caption: 'Extruders',
                title: 'Sets the color used for rendering an extruder'
            },
            tool: 'Tool {0}',
            resetColor: 'Reset Tool Color | Reset Tool Colors',
            renderMode: {
                caption: 'Render Mode | Render Modes',
                title: 'Render mode allows you to set extruder color or feedrate line coloring in the viewer'
            },
            color: 'Color',
            feedrate: 'Feedrate',
            minFeedrate: 'Minimum Feedrate (mm/s)',
            maxFeedrate: 'Maximum Feedrate (mm/s)',
            minFeedrateColor: 'Minimum Feedrate Color',
            maxFeedrateColor: 'Maximum Feedrate Color',
            progress: {
                caption: 'Progress',
                title: 'Set the printed color for progress tracking'
            },
            topClipping: 'Top Clipping',
            bottomClipping: 'Bottom Clipping',
            progressColor: 'Progress Color',
            liveZTracking: 'Live Z Tracking',
            settings: 'Settings',
            background: 'Background',
            bedRenderMode: 'Bed Render Mode',
            bed: 'Bed',
            volume: 'Volume',
            showAxes: 'Show Axes',
            showObjectLabels: 'Show Object Labels',
            cameraInertia: 'Camera Inertia',
            showObjectSelection: {
                caption: 'Show Object Selection',
                title: 'Enabled if objects could be detected in the current print'
            },
            renderFailed: 'Previous render failed. Setting render quality to SBC',
            showFSOverlay: 'Show Full Screen Overlay',
            useHQRendering: 'High Quality Render (Round)',
            useSpecular: "Use Specular Highlight",
            feature: "Feature",
			g1AsExtrusion: 'Render G1 (CNC)',
        },
        heightmap: {
            menuCaption: 'Height Map',
            listTitle: 'Height Maps',
            none: 'None',
            scale: 'Scale:',
            orMore: 'or more',
            orLess: 'or less',
            axes: 'Axes:',
            notAvailable: 'height map not available',
            statistics: 'Statistics',
            numPoints: 'Number of points: {0}',
            radius: 'Probing radius: {0}',
            area: 'Probe area: {0}',
            maxDeviations: 'Maximum deviations: {0} / {1}',
            meanError: 'Mean error: {0}',
            rmsError: 'RMS error: {0}',
            display: 'Display',
            colorScheme: 'Color scheme:',
            terrain: 'Terrain',
            heat: 'Heat',
            invertZ: 'Invert Z coordinates',
            topView: 'Top View',
            range: 'Range',
            fixed: 'Fixed',
            deviation: 'Deviation',
            resetView: 'Reset View'
        },
        objectModelBrowser: {
            menuCaption: 'Object Model'
        }
    },
    tabs: {
        generalSettings: {
            caption: 'General'
        },
        machineSettings: {
            caption: 'General'
        },
        plugins: {
            integratedPlugins: 'Integrated Plugins',
            externalPlugins: 'External Plugins',
            headers: {
                name: 'Name',
                author: 'Author',
                version: 'Version',
                license: 'License',
                dependencies: 'Dependencies',
                status: 'Status'
            },
            optional: 'optional',
            start: 'Start',
            partiallyStarted: 'partially started',
            started: 'started',
            stop: 'Stop',
            deactivated: 'deactivated',
            stopped: 'stopped',
            uninstall: 'Uninstall',
            noPlugins: 'No Plugins',
            refreshNote: 'Refresh the page to finish unloading some DWC plugins'
        }
    }
}
