# Radar GLB de fechamentos 63D

- Gerado: `2026-07-28T16:35:10-03:00`
- Data dos candles: `2026-07-28`
- Breakouts intradiarios capturados: `11`
- Confirmados no fechamento: `0`
- Elegiveis pelo AFL: `0`
- Universo operacional: `4720`

## Regra

- Linha GLB: maxima de fechamento mantida por pelo menos 63 pregoes completos; trigger = linha + 0,01.
- Captura: a maxima do dia alcancou o trigger. O evento permanece no radar mesmo sem confirmacao ou com filtro reprovado.
- Confirmacao AFL: fechamento no trigger ou acima, QQQ D-1 acima da SMA20 e da SMA10 mensal intrames (9 fechamentos mensais completos + QQQ D-1 como fechamento provisorio do mes corrente), preco > 2, AvgVol10 anterior > 100k, media anterior de close*volume >= 2M, ATR14 anterior valido, extensao <= 50% e preco acima da SMA20 dinamica.
- RVOL(10): volume atual / SMA de volume dos 10 pregoes anteriores.
- Nao existem filtros de capital, margem, ranking ou limite de posicoes na captura.

## Eventos

| Ticker | Evento | AFL | Motivos | Close | High | Linha | Trigger | Base | RVOL(10) | Market cap | Pais |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| NBBK | breakout_intraday | Nao | awaiting_eod_close | 22.91 | 23.24 | 22.64 | 22.65 | 74 | 0.23 | 1002759236 | United States |
| SOLV | breakout_intraday | Nao | awaiting_eod_close | 85.865 | 87.14 | 86.14 | 86.15 | 135 | 0.16 | 13935369075 | United States |
| FELE | breakout_intraday | Nao | awaiting_eod_close | 111.72 | 115.63 | 110.4 | 110.41 | 415 | 0.11 | 4658132720 | United States |
| ITW | breakout_intraday | Nao | awaiting_eod_close | 295.23 | 300.47 | 299.6 | 299.61 | 111 | 0.09 | 81942714000 | United States |
| HIG | breakout_intraday | Nao | awaiting_eod_close | 143.17 | 143.6 | 143.53 | 143.54 | 110 | 0.06 | 37960002360 | United States |
| THC | breakout_intraday | Nao | awaiting_eod_close | 258.63 | 258.75 | 244.8 | 244.81 | 99 | 0.06 | 20962300320 | United States |
| CCEP | breakout_intraday | Nao | awaiting_eod_close | 110.75 | 113.595 | 110.43 | 110.44 | 102 | 0.05 | 49347890467 | United Kingdom |
| SYBT | breakout_intraday | Nao | awaiting_eod_close | 84.675 | 84.78 | 83.01 | 83.02 | 266 | 0.05 | 2433527251 | United States |
| AMGN | breakout_intraday | Nao | awaiting_eod_close | 392.26 | 397.74 | 388.16 | 388.17 | 102 | 0.04 | 203070635175 | United States |
| RJF | breakout_intraday | Nao | awaiting_eod_close | 175.72 | 178.12 | 176.43 | 176.44 | 206 | 0.04 | 33831694702 | United States |
| ESNT | breakout_intraday | Nao | awaiting_eod_close | 67.47 | 67.64 | 66.82 | 66.83 | 149 | 0.03 | 6116185318 | Bermuda |
