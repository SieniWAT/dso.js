import fs from 'fs';
import path from 'path';

import dso_js from './dist/dso.js';

const { dso } = dso_js;
const { decompiler } = dso;

// Server DSOs
reverse("./dso/server/scripts/allGameScripts.cs.dso");
reverse("./dso/server/scripts/DamageTypes.cs.dso");
reverse("./dso/server/scripts/centerPrint.cs.dso");
reverse("./dso/server/scripts/game.cs.dso");          
reverse("./dso/server/scripts/prints.cs.dso");

reverse("./dso/server/authComServer.cs.dso");
reverse("./dso/server/defaults.cs.dso");
reverse("./dso/server/init.cs.dso");
reverse("./dso/server/mainServer.cs.dso");
	 
// Client DSOs
reverse("./dso/client/scripts/allClientScripts.cs.dso");
reverse("./dso/client/scripts/clientAddOns.cs.dso");

reverse("./dso/client/actionMap.cs.dso");
reverse("./dso/client/audio.cs.dso");
reverse("./dso/client/canvas.cs.dso");
reverse("./dso/client/cursor.cs.dso");
reverse("./dso/client/defaults.cs.dso");
reverse("./dso/client/help.cs.dso");
reverse("./dso/client/init.cs.dso");
reverse("./dso/client/message.cs.dso");
reverse("./dso/client/messageBox.cs.dso");
reverse("./dso/client/metrics.cs.dso");
reverse("./dso/client/mission.cs.dso");
reverse("./dso/client/missionDownload.cs.dso");
reverse("./dso/client/recordings.cs.dso");
reverse("./dso/client/screenshot.cs.dso");

// Misc DSOs
reverse("./dso/main.cs.dso");
		 
function reverse(dsoPath) {
	fs.readFile (dsoPath, ( error, buffer ) =>
	{
		if ( error )
		{
			console.error (error);
			return;
		}

		let codeString;

		try
		{
			codeString = decompiler.decompileDSO (buffer);
		}
		catch ( decompilerError )
		{
			console.error ('[!] Decompiler Error:', decompilerError);
			return;
		}

		fs.writeFileSync (path.basename(dsoPath).replace(/\.dso$/, ''), codeString);
		console.log("Success!");
	});
}
