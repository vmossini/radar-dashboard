# Radar GLB de fechamentos 63D

- Gerado: `2026-07-29T16:54:48-03:00`
- Data dos candles: `2026-07-29`
- Breakouts intradiarios capturados: `9`
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
| CABR | breakout_intraday | Nao | awaiting_eod_close | 1.5607999563217163 | 1.6200000047683716 | 1.52 | 1.53 | 158 | 0.74 | 13182684 | United States |
| GRMN | breakout_intraday | Nao | awaiting_eod_close | 297.59 | 303.64 | 267.52 | 267.53 | 68 | 0.15 | 46761844269 | Switzerland |
| AN | breakout_intraday | Nao | awaiting_eod_close | 231.19 | 235.57 | 227.18 | 227.19 | 222 | 0.13 | 7100529239 | United States |
| ZWS | breakout_intraday | Nao | awaiting_eod_close | 51.93 | 53.805 | 52.8 | 52.81 | 63 | 0.12 | 8138343197 | United States |
| AER | breakout_intraday | Nao | awaiting_eod_close | 150.14 | 155.255 | 154.83 | 154.84 | 110 | 0.09 | 27107222085 | Netherlands |
| EXPE | breakout_intraday | Nao | awaiting_eod_close | 304.17 | 312.18 | 301.31 | 301.32 | 137 | 0.09 | 33410545574 | United States |
| MMED | breakout_intraday | Nao | awaiting_eod_close | 18.33 | 18.64 | 18.49 | 18.5 | 98 | 0.07 | 4962493071 | United States |
| HIG | breakout_intraday | Nao | awaiting_eod_close | 145.185 | 145.62 | 143.53 | 143.54 | 111 | 0.04 | 37960002360 | United States |
| CMTV | breakout_intraday | Nao | awaiting_eod_close | 40.51 | 42.495 | 42.39 | 42.4 | 88 | 0.03 | 227060784 | United States |
