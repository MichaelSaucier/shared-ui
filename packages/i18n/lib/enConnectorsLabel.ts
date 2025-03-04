export const enConnectorsLabel: Record<string, Record<string, string>> = {
  common: {
    connect_timeout: 'Connect Timeout',
    bootstrap_hosts: 'Bootstrap Hosts',
    min_metadata_refresh_interval: 'Min Metadata Refresh Interval',
    metadata_request_timeout: 'Metadata Request Timeout',
    tcp_keepalive: 'TCP Keepalive',
    sndbuf: 'Socket Send Buffer Size',
    recbuf: 'Socket Receive Buffer Size',
    nodelay: 'No Delay',
    username: 'Username',
    password: 'Password',
    pool_size: 'Connection Pool Size',
    pool_type: 'Pool Type',
    server: 'Server Host',
    database: 'Database Name',
    health_check_interval: 'Health Check Interval',
    start_timeout: 'Start Timeout',
    max_retries: 'Max Retries',
    worker_pool_size: 'Buffer Pool Size',
    request_ttl: 'Request TTL',
    max_buffer_bytes: 'Max Buffer Queue Size',
    inflight_window: 'Inflight Window',
    servers: 'Servers',
    enable_pipelining: 'HTTP Pipelining',
    pipelining: 'HTTP Pipelining',
    url: 'Server URL',
    authentication: 'Authentication',
    disable_prepared_statements: 'Disable Prepared Statements',
    health_check_topic: 'Health Check Topic',
    max_inactive: 'Max Inactive',
  },
  kafka_producer: {
    kerberos_principal: 'Kerberos Principal',
    kerberos_keytab_file: 'Kerberos Keytab File',
    mechanism: 'Mechanism',
  },
  http: {
    url: 'URL',
    headers: 'Headers',
    enable_pipelining: 'HTTP Pipelining',
  },
  gcp_pubsub_producer: {
    service_account_json: 'GCP Service Account Credentials',
    query_mode: 'Query Mode',
    batch_size: 'Batch Size',
  },
  azure_event_hub_producer: {
    bootstrap_hosts: 'Bootstrap Hosts',
    password: 'Connection String',
  },
  syskeeper_forwarder: {
    ack_mode: 'ACK Mode',
    ack_timeout: 'ACK Timeout',
  },
  redis: {
    parameters: 'Redis Mode',
    sentinel: 'Sentinel Mode',
  },
  mongodb: {
    parameters: 'MongoDB Mode',
    w_mode: 'Write Mode',
    r_mode: 'Read Mode',
    srv_record: 'Srv Record',
    use_legacy_protocol: 'Use Legacy Protocol',
    auth_source: 'Auth Source',
    replica_set_name: 'Replica Set Name',
    max_overflow: 'Max Overflow Workers',
    overflow_ttl: 'Overflow TTL',
    overflow_check_period: 'Overflow Check Period',
    local_threshold_ms: 'Local Threshold',
    connect_timeout_ms: 'Connect Timeout',
    socket_timeout_ms: 'Socket Timeout',
    server_selection_timeout_ms: 'Server Selection Timeout',
    wait_queue_timeout_ms: 'Wait Queue Timeout',
    heartbeat_frequency_ms: 'Heartbeat period',
    min_heartbeat_frequency_ms: 'Minimum Heartbeat Period',
  },
  influxdb: {
    parameters: 'Version of InfluxDB',
    bucket: 'Bucket',
    org: 'Organization',
    token: 'Token',
  },
  iotdb: {
    base_url: 'IoTDB REST Service Base URL',
    iotdb_version: 'IoTDB Version',
    driver: 'Driver',
    protocol_version: 'Protocol Version',
    zoneId: 'Zone ID',
    recv_timeout: 'Receive Timeout',
  },
  elasticsearch: {
    server: 'Server',
  },
  mqtt: {
    server: 'MQTT Broker',
    clientid_prefix: 'ClientID Prefix',
    proto_ver: 'MQTT Version',
    bridge_mode: 'Bridge Mode',
    clean_start: 'Clean start',
    keepalive: 'Keepalive',
    retry_interval: 'Message Retry Interval',
    max_inflight: 'Max Inflight',
    static_clientids: 'Static ClientId Entries',
    node: 'EMQX Node',
    ids: 'Static Client IDs',
  },
  cassandra: {
    keyspace: 'Keyspace',
  },
  opents: {
    summary: 'Summary',
    details: 'Details',
  },
  clickhouse: {
    url: 'Server URL',
  },
  dynamo: {
    url: 'DynamoDB Endpoint',
    aws_access_key_id: 'AWS Access Key ID',
    aws_secret_access_key: 'AWS Secret Access Key',
    region: 'DynamoDB Region',
  },
  gcp_pubsub_consumer: {
    service_account_json: 'GCP Service Account Credentials',
    pull_max_messages: 'Maximum Messages to Pull',
  },
  hstreamdb: {
    grpc_timeout: 'gRPC Timeout',
  },
  kafka_consumer: {
    kerberos_principal: 'Kerberos Principal',
    kerberos_keytab_file: 'Kerberos Keytab File',
    mechanism: 'Mechanism',
  },
  rocketmq: {
    access_key: 'AccessKey',
    secret_key: 'SecretKey',
    security_token: 'Security Token',
    namespace: 'Namespace',
  },
  sqlserver: {
    driver: 'SQL Server Driver Name',
  },
  oracle: {
    sid: 'Oracle Database SID',
    service_name: 'Oracle Database Service Name',
    role: 'Role',
  },
  rabbitmq: {
    port: 'Port',
    virtual_host: 'Virtual Host',
    heartbeat: 'Heartbeat',
    timeout: 'Connection Timeout',
  },
  pulsar: {
    jwt: 'JWT',
  },
  kinesis: {
    aws_access_key_id: 'AWS Access Key ID',
    aws_secret_access_key: 'AWS Secret Access Key',
    endpoint: 'Amazon Kinesis Endpoint',
  },
  greptimedb: {
    dbname: 'Database',
  },
  s3: {
    access_key_id: 'Access Key ID',
    secret_access_key: 'Secret Access Key',
    host: 'Host',
    port: 'Port',
    ipv6_probe: 'IPv6 Probe',
    headers: 'HTTP Headers',
    request_timeout: 'Request Timeout',
    access_method: 'Access Method',
  },
  azure_blob_storage: {
    account_name: 'Account Name',
    account_key: 'Account Key',
  },
  datalayers: {
    driver_type: 'Driver Type',
  },
  snowflake: {
    account: 'Account',
    dsn: 'Data Source Name (DSN)',
    proxy: 'Proxy',
    host: 'Proxy Host',
    port: 'Proxy Port',
  },
  tablestore: {
    endpoint: 'Endpoint',
    access_key_id: 'Access Key ID',
    access_key_secret: 'Access Key Secret',
    instance_name: 'Instance Name',
    storage_model_type: 'Storage Model Type',
  },
  disk_log: {
    filepath: 'Log Filepath',
    max_file_size: 'Maximum File Size',
    max_file_number: 'Maximum Number of Files',
  },
}
