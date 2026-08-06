# Radar GLB de fechamentos 63D

- Gerado: `2026-08-06T16:38:07-03:00`
- Data dos candles: `2026-08-06`
- Breakouts intradiarios capturados: `10`
- Confirmados no fechamento: `0`
- Elegiveis pelo AFL: `0`
- Universo operacional: `4718`

## Regra

- Linha GLB: maxima de fechamento mantida por pelo menos 63 pregoes completos; trigger = linha + 0,01.
- Captura: a maxima do dia alcancou o trigger. O evento permanece no radar mesmo sem confirmacao ou com filtro reprovado.
- Confirmacao AFL: fechamento no trigger ou acima, QQQ D-1 acima da SMA20 e da SMA10 mensal intrames (9 fechamentos mensais completos + QQQ D-1 como fechamento provisorio do mes corrente), preco > 2, AvgVol10 anterior > 100k, media anterior de close*volume >= 2M, ATR14 anterior valido, extensao <= 50% e preco acima da SMA20 dinamica.
- RVOL(10): volume atual / SMA de volume dos 10 pregoes anteriores.
- Nao existem filtros de capital, margem, ranking ou limite de posicoes na captura.

## Eventos

| Ticker | Evento | AFL | Motivos | Close | High | Linha | Trigger | Base | RVOL(10) | Market cap | Pais |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| ITT | breakout_intraday | Nao | awaiting_eod_close | 214.26 | 230.12 | 221.69 | 221.7 | 78 | 0.17 | 17057520000 | United States |
| GCT | breakout_intraday | Nao | awaiting_eod_close | 51.4 | 56.145 | 51.8 | 51.81 | 75 | 0.15 | 1550852504 | United States |
| PH | breakout_intraday | Nao | awaiting_eod_close | 1065.32 | 1097.91 | 1023.02 | 1023.03 | 112 | 0.13 | 119916981986 | United States |
| HRTG | breakout_intraday | Nao | awaiting_eod_close | 33.96 | 35.0 | 31.14 | 31.15 | 179 | 0.11 | 905641762 | United States |
| NWS | breakout_intraday | Nao | awaiting_eod_close | 33.7 | 35.305 | 35.17 | 35.18 | 238 | 0.08 | 17868662246 | United States |
| LEGH | breakout_intraday | Nao | awaiting_eod_close | 29.575 | 29.885 | 28.86 | 28.87 | 469 | 0.07 | 628547714 | United States |
| FAST | breakout_intraday | Nao | awaiting_eod_close | 50.735 | 50.9 | 50.39 | 50.4 | 238 | 0.07 | 54827434038 | United States |
| TPC | breakout_intraday | Nao | awaiting_eod_close | 97.89 | 102.22 | 97.31 | 97.32 | 63 | 0.05 | 4034495426 | United States |
| TPR | breakout_intraday | Nao | awaiting_eod_close | 161.635 | 163.92 | 160.49 | 160.5 | 110 | 0.04 | 30328932019 | United States |
| TDY | breakout_intraday | Nao | awaiting_eod_close | 686.54 | 694.06 | 688.59 | 688.6 | 108 | 0.03 | 29266654149 | United States |
