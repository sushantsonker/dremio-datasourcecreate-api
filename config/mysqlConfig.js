module.exports = {
  "entityType": "source",
  "config": {
    "username": "root",
    "password": "Welcome1234!",
    "hostname": "18.191.163.39",
    "port": "3306",
    "authenticationType": "MASTER",
    "fetchSize": 100
  },
  "type": "MYSQL",
  "name": "mysql-ds-creator3",
  "metadataPolicy": {
    "authTTLMs": 86400000,
    "namesRefreshMs": 3600000,
    "datasetRefreshAfterMs": 3600000,
    "datasetExpireAfterMs": 10800000,
    "datasetUpdateMode": "PREFETCH_QUERIED",
    "deleteUnavailableDatasets": true,
    "autoPromoteDatasets": false
  },
  "accelerationGracePeriodMs": 10800000,
  "accelerationRefreshPeriodMs": 3600000,
  "accelerationNeverExpire": false,
  "accelerationNeverRefresh": false
}
  
