# Radar GLB de fechamentos 63D

- Gerado: `2026-07-24T16:54:25-03:00`
- Data dos candles: `2026-07-24`
- Breakouts intradiarios capturados: `7`
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
| SAFT | breakout_intraday | Nao | awaiting_eod_close | 103.195 | 103.39 | 102.89 | 102.9 | 1714 | 0.68 | 1064548965 | United States |
| THC | breakout_intraday | Nao | awaiting_eod_close | 234.2 | 246.33 | 244.8 | 244.81 | 97 | 0.21 | 16826862950 | United States |
| PKG | breakout_intraday | Nao | awaiting_eod_close | 252.96 | 253.335 | 248.85 | 248.86 | 410 | 0.12 | 20331420259 | United States |
| DBD | breakout_intraday | Nao | awaiting_eod_close | 89.26 | 89.845 | 88.77 | 88.78 | 66 | 0.10 | 3016479227 | United States |
| HTH | breakout_intraday | Nao | awaiting_eod_close | 39.69 | 40.25 | 40.02 | 40.03 | 113 | 0.09 | 2232341714 | United States |
| OGE | breakout_intraday | Nao | awaiting_eod_close | 49.975 | 50.31 | 49.86 | 49.87 | 72 | 0.06 | 10174254025 | United States |
| GEF | breakout_intraday | Nao | awaiting_eod_close | 78.72 | 78.72 | 76.82 | 76.83 | 109 | 0.04 | 3543268378 | United States |
