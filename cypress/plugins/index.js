/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const xlsx = require('xlsx');
const syncSql = require('sync-sql');

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config

    on('task', { getExcelData: getExcelData, getSqlData: getSqlData });
};

function getExcelData(obj) {
    const { path, sheet } = obj;
    const wb = xlsx.readFile(path);
    const ws = wb.Sheets[sheet];
    return xlsx.utils.sheet_to_json(ws);
}

function getSqlData(query) {
    const config = {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'rootroot',
        database: 'localDB'
    };

    console.log(syncSql.mysql(config, query));

    const data = syncSql.mysql(config, query).data.rows;
    return data;
}
