Package.describe({
	summary: "Meteor wrapper for voice-recorder"
});

Package.on_use(function (api) {
	api.use(['underscore'], 'client');
	api.add_files([
		"recorder/recorderjs/recorder.js",
		"recorder/wami/swfobject/swfobject.js",
		"recorder/wami/recorder.js",
		"recorder/wami/gui.js",
		"recorder/voicerecord.js"
	], "client");
});
