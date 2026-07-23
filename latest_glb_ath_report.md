# Radar GLB de fechamentos 63D

- Gerado: `2026-07-23T16:56:03-03:00`
- Data dos candles: `2026-07-23`
- Breakouts intradiarios capturados: `3`
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
| MEDP | breakout_intraday | Nao | awaiting_eod_close | 605.21 | 677.9 | 620.59 | 620.6 | 125 | 0.26 | 15082942955 | United States |
| LH | breakout_intraday | Nao | awaiting_eod_close | 292.13 | 298.27 | 290.93 | 290.94 | 188 | 0.14 | 23079720000 | United States |
| SMJF | breakout_intraday | Nao | awaiting_eod_close | 5.63 | 5.69 | 5.55 | 5.56 | 118 | 0.02 | 138750000 |  |
