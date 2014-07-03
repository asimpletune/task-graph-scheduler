module.exports = {
  // Task-graph scheduler configuration
  scheduler: {
    // Task-Graph Scheduler Identifier used in routing for tasks submitted, this
    // is therefore limited to 22 characters. In production we'll use
    // `task-graph-scheduler`, do **NOT** use this for testing, as your messages
    // would be sent to the scheduler too.
    schedulerId:                  'test-scheduler',

    // Name of task-graph table in azure table storage
    taskGraphTableName:           'TaskGraphs',

    // Publish references and schemas
    publishMetaData:              'false',

    // Prefix for exchanges declared
    exchangePrefix:               'scheduler/v1/',

    // Name of AMQP queue, if a non-exclusive queue is to be used.
    listenerQueueName:            undefined,
  },

  // Server configuration
  server: {
    // Public URL from which the server can be accessed (used for persona)
    publicUrl:                      'http://scheduler.taskcluster.net',

    // Port to listen for requests on
    port:                           undefined
  },

  // Configuration of access to other taskcluster components
  taskcluster: {
    // BaseUrl for auth, if default built-in baseUrl isn't to be used
    authBaseUrl:                  undefined,

    // BaseUrl for queue, if default built-in baseUrl isn't to be used
    queueBaseUrl:                 undefined,

    // Exchange prefix for queue, if default isn't to be used.
    queueExchangePrefix:          undefined,

    // TaskCluster credentials for this server, these must have scopes:
    // auth:credentials, queue:*
    // (typically configured using environment variables)
    credentials: {
      clientId:                   undefined,
      accessToken:                undefined
    }
  },

  // AMQP configuration
  amqp: {
    // URL for AMQP setup formatted as amqp://user:password@host:port/vhost
    url:                            undefined
  },

  // Azure table credentials (usually configured using environment variables)
  azureTable: {
    accountUrl:                     null,
    accountName:                    null,
    accountKey:                     null
  },

  // AWS SDK configuration for publication of schemas and references
  aws: {
    // Access key id (typically configured using environment variables)
    accessKeyId:                    undefined,

    // Secret access key (typically configured using environment variables)
    secretAccessKey:                undefined,

    // Default AWS region, this is where the S3 bucket lives
    region:                         'us-west-2',

    // Lock API version to use the latest API from 2013, this is fuzzy locking,
    // but it does the trick...
    apiVersion:                     '2014-01-01'
  }
};