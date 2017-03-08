import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  const handle = {};
  return Object.assign({}, user, { handle });
});