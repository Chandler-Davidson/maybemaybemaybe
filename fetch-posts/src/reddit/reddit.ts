import snoo from "snoowrap";

const {
  CLIENT_ID,
  CLIENT_SECRET,
  REDDIT_USERNAME,
  REDDIT_PASSWORD } = process.env;

const reddit = new snoo({
  userAgent: 'nodejs',
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  username: REDDIT_USERNAME,
  password: REDDIT_PASSWORD
});

export default reddit;