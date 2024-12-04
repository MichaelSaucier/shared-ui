export const jaStreaming = {
  title: 'ストリーミング（ベータ）',
  streams: 'ストリーム',
  streamName: 'ストリーム名',
  partitionNum: 'パーティション数',
  mqttTopic: 'MQTT トピックフィルタ',
  mqttTopicTip:
    'このトピックフィルターに一致する MQTT メッセージは、対応する「Default」タイプのストリームに保存されます。「Free」タイプのストリームは MQTT トピックフィルターと関連付けられていません。',
  streamNameTip: 'Kafka クライアントで使用する Kafka トピックは、ストリーム名と同じです。',
  retention: '保持期間',
  consumerGroups: 'コンシューマーグループ',
  groupID: 'グループ ID',
  streamNum: 'ストリーム数',
  consumerNum: 'コンシューマー数',
  protocol: 'プロトコル',
  consumers: 'コンシューマー',
  consumerID: 'コンシューマー ID',
  partition: 'パーティション',
  startOffset: '開始オフセット',
  endOffset: '終了オフセット',
  partitions: 'パーティション',
  newStream: '新規ストリーム',
  streamNameFormatTip: '文字または数字で始まり、文字、数字、「_」、「.」、「-」を含む最大 64 文字',
  maxStreamsTip: '最大 {num} 個のストリームを作成できます',
  summary:
    '「EMQX Streaming」は、EMQX プラットフォームの革新的な機能で、MQTT メッセージをデータストリームとして永続的に保存し、Kafka クライアントから直接コンシュームできます。',
  enableStreaming: 'ストリーミングを有効にする（ベータ）',
  usingStreaming: '「EMQX Streaming」を使用すると、以下のことが可能です：',
  streamingBenefits: [
    '大量の MQTT メッセージデータを確実に保存',
    'Kafka クライアントを直接使用して履歴データの再生とリアルタイムサブスクリプション',
    '既存のバックエンドアプリケーションやビッグデータシステムとのシームレスな統合',
    'Flink などのストリームプロセッサとの直接インターフェース',
  ],
  betaTip: 'この機能はベータ版です。',
  needVPCTip:
    'ストリーミングを利用するには内部ネットワークへのアクセスが必要です。まず{vpc}を作成してください。',
  mqttTopicFormatTip: `アルファベット、数字、「_」、「-」、「/」、「+」、「#」、「$」、「%」、「{'@'}」、「&」、「:」、「{'{'}{'}'}」、中間の空白、および「.」のみ使え、最長 128 文字です`,
  streamType: 'ストリームタイプ',
  streamTypeLabel: {
    default: 'Default',
    free: 'Free',
  },
  streamTypeTip:
    '「Default」タイプのストリームは MQTT トピックフィルターと関連付けられており、そのフィルターに一致する MQTT メッセージがストリームに保存されます。Kafka クライアントからの「Free」タイプのストリームのは MQTT トピックフィルターと関連付けられていません。',
  authType: '認証方式',
  host: 'IP アドレス',
  aclResourceType: 'リソースタイプ',
  aclResourceName: 'リソース値',
  aclOperation: '操作',
  prefixed: 'プレフィックス',
  consumerGroupType: 'コンシューマーグループ',
  clusterType: 'クラスタ',
  literal: 'リテラル',
  matchAll: 'すべて',
  allow: '許可',
  deny: '拒否',
  aclOperationLabelDic: {
    ALL: 'すべて',
    READ: '読み取り',
    WRITE: '書き込み',
    DESCRIBE: '説明',
    CREATE: '作成',
    DELETE: '削除',
    ALTER: '変更する',
  },
  usernameRule: `アルファベット、数字、「_」、「-」、「/」、「+」、「#」、「$」、「%」、「{'@'}」、「&」および「.」のみ使え、最長 128 文字です`,
  aclDescription: `Kafka クライアントが操作できるリソース（トピック、コンシューマーグループ、クラスタなど）の権限制御を指します。デフォルトのモードはブラックリストであり、リストに追加されたエントリはルールによってフィルタリングされ、追加されていないものはデフォルトで許可されます。`,
  // TODO: ja
  networkType: 'Network Type',
  securityProtocol: 'Security Protocol',
  metricTitleDic: {
    stream_count: 'ストリーム数',
    partition_count: 'パーティション数',
    group_count: 'コンシューマーグループ数',
    total_messages_in_rate: 'Messages In',
    total_messages_out_rate: 'Messages Out',
  },
}
