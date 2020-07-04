const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.send('About birds');
});

module.exports = router;
