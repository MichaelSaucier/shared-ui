export const zhActionsLabel: Record<string, Record<string, string>> = {
  common: {
    health_check_interval: '健康检查间隔',
    query_mode: '请求模式',
    max_retries: '最大重试次数',
    worker_pool_size: '缓存池大小',
    start_after_created: '创建后立即启动',
    start_timeout: '启动超时时间',
    request_ttl: '请求超期',
    inflight_window: '请求飞行队列窗口',
    max_buffer_bytes: '缓存队列最大长度',
    sql: 'SQL 模板',
    batch_size: '最大批量请求大小',
    topic: 'Kafka 主题名称',
    key: '消息的键',
    value: '消息的值',
    compression: '压缩',
    partition_strategy: '分区选择策略',
    kafka_headers: 'Kafka Headers',
    kafka_ext_headers: '更多的 Kafka Headers',
    kafka_ext_header_key: '键',
    kafka_ext_header_value: '值',
    kafka_header_value_encode_mode: 'Kafka Headers 值编码类型',
    max_batch_bytes: '最大批量字节数',
    required_acks: 'Kafka 确认数量',
    partition_count_refresh_interval: '分区数量刷新间隔',
    max_inflight: '飞行窗口',
    mode: '缓存模式',
    per_partition_limit: 'Kafka 分区缓存上限',
    segment_bytes: '缓存文件大小',
    memory_overload_protection: '内存过载保护',
    sync_query_timeout: '同步查询超时时间',
    template: '消息模板',
    partitions_limit: '分区限制',
    precision: '时间精度',
    write_syntax: '写语句',
    column_order: '列排序',
    time_interval: '时间间隔',
    max_records: '最大记录数',
    max_linger_time: '最大延迟时间',
    max_linger_bytes: '最大延迟字节数',
    undefined_vars_as_null: '未定义变量作为 NULL',
  },
  kafka_producer: {
    timestamp: '消息的时间戳',
    kafka_ext_header_key: 'Kafka Headers 键',
    kafka_ext_header_value: 'Kafka Headers 值',
  },
  http: {
    body: '请求体',
    headers: '请求头',
    method: '请求方法',
    path: 'URL 路径',
  },
  azure_event_hub_producer: {
    topic: '事件中心名称',
    key: '消息键',
    value: '消息值',
    partition_strategy: '分区策略',
    required_acks: '所需确认',
    kafka_headers: 'Azure Event Hubs 头部',
    kafka_ext_headers: '额外的 Azure Event Hubs 头部信息',
    kafka_header_value_encode_mode: 'Azure Event Hubs 头部值编码模式',
    partition_count_refresh_interval: '分区数刷新间隔',
    max_inflight: '最大传输数',
    mode: '缓冲区模式',
    per_partition_limit: '每个分区缓冲限制',
    segment_bytes: '段文件字节数',
    memory_overload_protection: '内存过载保护',
    max_batch_bytes: '最大批次字节数',
    query_mode: '查询模式',
  },
  gcp_pubsub_producer: {
    attributes_template: '属性模版',
    pubsub_topic: 'GCP PubSub 主题',
    ordering_key_template: '排序键模板',
    payload_template: 'HTTP 请求消息体模板',
  },
  gcp_pubsub_consumer: {
    topic: 'GCP PubSub 主题',
  },
  syskeeper_forwarder: {
    target_topic: '主题',
    target_qos: 'QoS',
  },
  redis: {
    command_template: 'Redis 命令模板',
  },
  mongodb: {
    collection: '集合（Collection）',
    payload_template: '有效载荷模板',
  },
  iotdb: {
    device_id: '设备 ID',
    is_aligned: '对齐时间序列',
    data: '写入数据',
    timestamp: '时间戳',
    measurement: '字段',
    data_type: '数据类型',
    value: '值',
  },
  mqtt: {
    topic: '主题',
    qos: 'QoS',
    retain: 'Retain',
    payload: '消息模版',
  },
  elasticsearch: {
    parameters: '操作',
    index: '索引名称',
    id: '文档 ID',
    doc: '文档模版',
    routing: '路由',
    overwrite: '是否覆盖文档',
    doc_as_upsert: '启用更新插入',
  },
  cassandra: {
    cql: 'CQL 模板',
  },
  opents: {
    timestamp: '时间戳',
    metric: '度量',
    tags: '标签',
    value: '值',
    data: '写入数据',
  },
  hstreamdb: {
    stream: 'Stream',
    partition_key: '分区键',
    grpc_flush_timeout: 'gRPC 刷新间隔',
    aggregation_pool_size: 'Record 聚合池大小',
    max_batches: '最大批次',
    writer_pool_size: '写入池大小',
    batch_interval: '最大批处理间隔',
    record_template: 'Record 模板',
    /**
     * HStreamDB has two fields with 'batch_size' key, so we need to distinguish them.
     * this one uses the path (snake case) of the field as the i18n keypath
     */
    parameters_batch_size: 'HStreamDB 最大批量请求大小',
  },
  kafka_consumer: {
    key_encoding_mode: 'Key 编码模式',
    value_encoding_mode: 'Value 编码模式',
    offset_reset_policy: '偏移重置策略',
    offset_commit_interval_seconds: '偏移提交间隔',
    topic: 'Kafka 主题名称',
    group_id: '消费组 ID',
    max_wait_time: '最大等待时间',
  },
  rabbitmq: {
    exchange: '交换机',
    routing_key: '路由键',
    delivery_mode: '消息传递模式',
    wait_for_publish_confirmations: '等待发布确认',
    publish_confirmation_timeout: '发布确认超时时间',
    payload_template: '有效载荷模板',
  },
  pulsar: {
    pulsar_topic: 'Pulsar 主题名称',
    strategy: '分区选择策略',
    retention_period: '消息保留时间',
    compression: '压缩',
    sync_timeout: '同步发布超时',
    send_buffer: 'Socket 发送缓存大小',
    per_partition_limit: 'Pulsar 分区缓存上限',
    message_key: '消息的 Key',
    message_value: '消息的 Value',
  },
  kinesis: {
    payload_template: '载荷模板',
    stream_name: 'Amazon Kinesis 流',
    partition_key: '分区键',
  },
  tdengine: {
    database: '数据库名字',
  },
  rocketmq: {
    topic: 'RocketMQ 主题',
    refresh_interval: '主题路由更新间隔',
    send_buffer: '发送消息的缓冲区大小',
    sync_timeout: '同步调用超时时间',
    strategy: 'Produce 策略',
  },
  clickhouse: {
    batch_value_separator: '分隔符',
  },
  s3: {
    bucket: '存储桶',
    acl: 'ACL',
    content: '对象内容',
    key: '对象键',
    parameters: '上传方式',
    type: '增强类型',
    min_part_size: '最小分块大小',
    max_part_size: '最大分块大小',
  },
  azure_blob_storage: {
    parameters: '上传方式',
    content: '对象内容',
    type: '增强类型',
    blob: 'Blob 名称',
    container: '容器名称',
  },
  dynamo: {
    table: '表',
    hash_key: '哈希键',
    range_key: '范围键',
  },
  snowflake: {
    mode: '上传方式',
    type: '增强类型',
    private_key: '私钥',
    schema: '模式',
    stage: '存储区',
    pipe: '管道',
    pipe_user: '管道用户',
    proxy: '代理',
    host: '代理主机',
    port: '代理端口',
    max_inactive: '最大空闲时间',
  },
  tablestore: {
    storage_model_type: '存储模型类型',
    table_name: '表名',
    measurement: '度量名称',
    tags: '标签',
    fields: '字段',
    data_source: '数据源',
    timestamp: '时间戳',
    meta_update_model: '元数据更新模式',
    column: '列',
    isint: '是否为整数',
    isbinary: '是否为二进制',
  },
  disk_log: {
    write_mode: '写入模式',
  },
}
