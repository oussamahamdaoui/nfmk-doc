const { Router } = require('@forgjs/noframework');
const GlobalEvents = require('./GlobalEvents');
const Docs = require('./Docs');
const Examples = require('./Examples');


const router = new Router(GlobalEvents, '/');
router.set('/', Docs());
router.set('/examples', Examples());

module.exports = router;
