# Radar GLB de fechamentos 63D

- Gerado: `2026-08-07T16:39:22-03:00`
- Data dos candles: `2026-08-07`
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
| MB | breakout_intraday | Nao | awaiting_eod_close | 7.91 | 19.75 | 15.24 | 15.25 | 261 | 83.56 | 70848435 | Hong Kong |
| TPC | breakout_intraday | Nao | awaiting_eod_close | 97.85 | 98.935 | 97.31 | 97.32 | 64 | 0.09 | 4034495426 | United States |
| TDY | breakout_intraday | Nao | awaiting_eod_close | 687.42 | 690.26 | 688.59 | 688.6 | 109 | 0.03 | 29266654149 | United States |
