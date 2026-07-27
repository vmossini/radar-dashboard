# Radar GLB de fechamentos 63D

- Gerado: `2026-07-27T16:34:33-03:00`
- Data dos candles: `2026-07-27`
- Breakouts intradiarios capturados: `2`
- Confirmados no fechamento: `0`
- Elegiveis pelo AFL: `0`
- Universo operacional: `4716`

## Regra

- Linha GLB: maxima de fechamento mantida por pelo menos 63 pregoes completos; trigger = linha + 0,01.
- Captura: a maxima do dia alcancou o trigger. O evento permanece no radar mesmo sem confirmacao ou com filtro reprovado.
- Confirmacao AFL: fechamento no trigger ou acima, QQQ D-1 acima da SMA20 e da SMA10 mensal intrames (9 fechamentos mensais completos + QQQ D-1 como fechamento provisorio do mes corrente), preco > 2, AvgVol10 anterior > 100k, media anterior de close*volume >= 2M, ATR14 anterior valido, extensao <= 50% e preco acima da SMA20 dinamica.
- RVOL(10): volume atual / SMA de volume dos 10 pregoes anteriores.
- Nao existem filtros de capital, margem, ranking ou limite de posicoes na captura.

## Eventos

| Ticker | Evento | AFL | Motivos | Close | High | Linha | Trigger | Base | RVOL(10) | Market cap | Pais |
|---|---|---|---|---:|---:|---:|---:|---:|---:|---:|---|
| TOWN | breakout_intraday | Nao | awaiting_eod_close | 37.83 | 37.89 | 37.65 | 37.66 | 115 | 0.07 | 2734725145 | United States |
| THC | breakout_intraday | Nao | awaiting_eod_close | 244.46 | 248.38 | 244.8 | 244.81 | 98 | 0.06 | 20087148400 | United States |
