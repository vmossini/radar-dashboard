# Radar GLB de fechamentos 63D

- Gerado: `2026-07-30T16:54:19-03:00`
- Data dos candles: `2026-07-30`
- Breakouts intradiarios capturados: `2`
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
| JLL | breakout_intraday | Nao | awaiting_eod_close | 361.83 | 362.68 | 358.66 | 358.67 | 124 | 0.13 | 15773815500 | United States |
| SCI | breakout_intraday | Nao | awaiting_eod_close | 85.865 | 90.895 | 88.6 | 88.61 | 415 | 0.06 | 11821355109 | United States |
