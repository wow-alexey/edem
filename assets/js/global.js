import "babel-polyfill";

import {binder, fwa} from "./libs/binder";
import {toTop} from "./modules/module";



binder({
    bounds: {
        "html": [],
        "body": [],
        ".to-top": [toTop],
    },
    runTests: false
});
