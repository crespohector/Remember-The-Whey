const {
  db: { username, password, database, host },
} = require('./index');

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'postgres://aa_projects_i4o5_user:ViTXnZ40eBvVTXqDcsNis6Yx8T0dEZZ6@dpg-cp00207jbltc73dlg8og-a/aa_projects_i4o5',
    dialect: 'postgres',
    seederStorage: 'sequelize',
  }
};
