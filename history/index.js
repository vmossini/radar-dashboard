window.RADAR_HISTORY_INDEX = {
  "schema_version": 1,
  "generated_at": "2026-08-08T12:01:36-03:00",
  "snapshots": [
    {
      "snapshot_id": "2026-08-07",
      "requested_date": "2026-08-07",
      "market_asof": "2026-08-07",
      "snapshot_kind": "captured",
      "captured_at": "2026-08-08T12:01:35-03:00",
      "note": "Snapshot imutável capturado pela rotina EOD.",
      "leaders_count": 92,
      "breakouts_count": 17,
      "file": "history/radar_2026-08-07.json",
      "script_file": "history/radar_2026-08-07.js"
    },
    {
      "snapshot_id": "2026-08-02",
      "requested_date": "2026-08-02",
      "market_asof": "2026-07-31",
      "snapshot_kind": "reconstructed",
      "captured_at": "2026-08-08T12:01:35-03:00",
      "note": "02/08/2026 foi domingo. Snapshot reconstruído ex post em 08/08/2026 a partir do fechamento de 31/07/2026 com a lógica vigente na reconstrução.",
      "leaders_count": 88,
      "breakouts_count": 9,
      "file": "history/radar_2026-08-02.json",
      "script_file": "history/radar_2026-08-02.js"
    }
  ]
};
