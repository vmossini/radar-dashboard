# Radar GLB de fechamentos 63D

- Gerado: `2026-08-04T16:56:37-03:00`
- Data dos candles: `2026-08-04`
- Breakouts intradiarios capturados: `8`
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
| PAY | breakout_intraday | Nao | awaiting_eod_close | 44.31 | 45.3 | 39.84 | 39.85 | 302 | 0.27 | 4616468668 | United States |
| CUBI | breakout_intraday | Nao | awaiting_eod_close | 83.58 | 83.59 | 81.21 | 81.22 | 132 | 0.08 | 2660681422 | United States |
| NEU | breakout_intraday | Nao | awaiting_eod_close | 885.4 | 888.355 | 873.09 | 873.1 | 204 | 0.06 | 7244543725 | United States |
| FBK | breakout_intraday | Nao | awaiting_eod_close | 61.87 | 62.125 | 61.62 | 61.63 | 133 | 0.05 | 3075435447 | United States |
| AER | breakout_intraday | Nao | awaiting_eod_close | 155.08 | 155.47 | 154.83 | 154.84 | 114 | 0.04 | 26611270928 | Netherlands |
| HTH | breakout_intraday | Nao | awaiting_eod_close | 40.09 | 40.315 | 40.02 | 40.03 | 120 | 0.04 | 2264532064 | United States |
| ALH | breakout_intraday | Nao | awaiting_eod_close | 27.94 | 28.11 | 26.93 | 26.94 | 190 | 0.03 | 5157866692 | United States |
| ZWS | breakout_intraday | Nao | awaiting_eod_close | 53.05 | 53.05 | 52.8 | 52.81 | 67 | 0.02 | 8602247115 | United States |
