const Router = require("express");
const router = new Router();

const userRouter = require("./userRouter");
const collectionRouter = require("./collectionRouter");
const collectionItemRouter = require('./collectionItemRouter');
const tagsRouter = require('./tagsRouter');
const likeRouter = require('./likeRouter');

router.use("/user", userRouter);
router.use("/collection", collectionRouter);
router.use("/collectionItem", collectionItemRouter);
router.use("/tags", tagsRouter);
router.use("/like", likeRouter);

module.exports = router;
