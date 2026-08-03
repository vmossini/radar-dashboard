# Radar GLB de fechamentos 63D

- Gerado: `2026-08-03T16:35:22-03:00`
- Data dos candles: `2026-08-03`
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
| PFAI | breakout_intraday | Nao | awaiting_eod_close | 2.84 | 4.705 | 4.57 | 4.58 | 198 | 1.86 | 36500764 | Canada |
| GAM | breakout_intraday | Nao | awaiting_eod_close | 65.71 | 65.71 | 65.22 | 65.23 | 68 | 0.02 | 1536596845 | United States |
| ALH | breakout_intraday | Nao | awaiting_eod_close | 26.7 | 27.01 | 26.93 | 26.94 | 189 | 0.02 | 5157866692 | United States |
