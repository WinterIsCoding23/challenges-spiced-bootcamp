// Implement the launch sequence function here and export it as the default export.


import { FISHSAT } from "./payload/satellites.js";
import { NFSAT } from "./payload/satellites.js";
import { loadPayload } from "./core/load.js";
import { getRocket, rocket } from "./core/rocket.js";
import { fuel } from "./core/fuel.js";
import { countdown } from "./core/countdown.js";
import { liftoff } from "./core/liftoff.js";
import { deployPayload } from "./core/deploy.js";

export default function launchSequenceFunction () {
    loadPayload (FISHSAT);
    loadPayload(NFSAT);
    getRocket (rocket);
    fuel ();
    countdown ();
    countdown ();
    countdown ();
    countdown ();
    countdown ();
    liftoff ();
    deployPayload ();
}; 





