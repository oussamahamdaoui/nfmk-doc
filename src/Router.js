const { Router } = require('@forgjs/noframework');
const GlobalEvents = require('./GlobalEvents');
const Docs = require('./Docs');
const Examples = require('./Examples');


const router = new Router(GlobalEvents, '/nfmk-doc/');
router.set('/nfmk-doc/', Docs());
router.set('/nfmk-doc/examples', Examples());

module.exports = router;
