const { exec } = require('../db/mysql');

const login = (username, password) => {
  const sql = `
    select username, realname from tbl_users where username='${username}' and password='${password}'
  `;
  return exec(sql);
}

module.exports = {
  login,
};
