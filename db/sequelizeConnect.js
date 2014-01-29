var Sequelize = require('sequelize'),
  dbConfig = require('./database.json'),
  pg = require('pg').native;

function createDb (env) {
  if (!env) {
    env = 'dev';
  }

  // console.log('connecting to db: ' + dbConfig[env].database + ' as user: ' + dbConfig[env].user);

  if (process.env.HEROKU_POSTGRESQL_ROSE_URL) {
    console.log("Rose uRL!!");
    var match = process.env.HEROKU_POSTGRESQL_ROSE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);

    var db = new Sequelize(match[5], match[1], match[2], {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true,
      native: true
    })

  } else {

    var db = new Sequelize(dbConfig[env].database, dbConfig[env].user, dbConfig[env].password, {
      dialect: "postgres",
      host: dbConfig[env].host,
      port: 5432,
      omitNull: true,
      native: true,
      protocol: 'postgres',
      define: {
        underscored: true
      }
    });

  }

  console.log(db);

  db.authenticate()
    .error(function(err){
      throw(err);
    })
    .success(function(){
      console.log('Connected to postgres db');
    });

  return db;
}


module.exports = createDb;

var Sequelize = require('sequelize'),
  dbConfig = require('./database.json'),
  pg = require('pg').native;

function createDb (env) {
  if (!env) {
    env = 'dev';
  }
  
  if (process.env.POSTGRES_URL) {
    var match = process.env.POSTGRES_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);

    var db = new Sequelize(match[5], match[1], match[2], {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true,
      native: true
    })
    
  } else {

    var db = new Sequelize(dbConfig[env].database, dbConfig[env].user, dbConfig[env].password, {
      dialect: "postgres",
      host: dbConfig[env].host,
      port: 5432,
      omitNull: true,
      native: true,
      protocol: 'postgres',
      define: {
        underscored: true
      }
    });
  
  }

  db.authenticate()
    .error(function(err){
      throw(new Error('Cannot connect to postgres db: ' + err));
    })
    .success(function(){
      console.log('Connected to postgres db');
    });

  return db;
}


module.exports = createDb;
