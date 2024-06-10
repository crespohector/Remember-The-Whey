'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = "Users"
    return queryInterface.bulkInsert(options, [
      {
        firstName: "Demo",
        lastName: "User",
        email: "demo@aa.com",
        hashPW: "$2a$10$ZF8w5u7KYVOzn471y1YtseAHTH6ou44X3iFTM/mMgLpC5wId4EavW",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        firstName: "Demo2",
        lastName: "User2",
        email: "demo2@aa.com",
        hashPW: "$2a$10$ZF8w5u7KYVOzn471y1YtseAHTH6ou44X3iFTM/mMgLpC5wId4EavW",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
