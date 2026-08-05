# Radar GLB de fechamentos 63D

- Gerado: `2026-08-05T16:56:05-03:00`
- Data dos candles: `2026-08-05`
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
| TDY | breakout_intraday | Nao | awaiting_eod_close | 684.66 | 692.87 | 688.59 | 688.6 | 107 | 0.08 | 29266654149 | United States |
| TPR | breakout_intraday | Nao | awaiting_eod_close | 158.94 | 161.44 | 160.49 | 160.5 | 109 | 0.07 | 30328932019 | United States |
| EMR | breakout_intraday | Nao | awaiting_eod_close | 163.09 | 164.83 | 161.69 | 161.7 | 120 | 0.06 | 81623373000 | United States |
| SCHW | breakout_intraday | Nao | awaiting_eod_close | 108.195 | 108.5 | 107.21 | 107.22 | 121 | 0.05 | 181687486416 | United States |
| FAST | breakout_intraday | Nao | awaiting_eod_close | 50.24 | 50.55 | 50.39 | 50.4 | 237 | 0.04 | 54827434038 | United States |
| TNL | breakout_intraday | Nao | awaiting_eod_close | 78.02 | 79.41 | 78.74 | 78.75 | 77 | 0.04 | 4756180869 | United States |
| HTH | breakout_intraday | Nao | awaiting_eod_close | 39.92 | 40.24 | 40.02 | 40.03 | 121 | 0.03 | 2264532064 | United States |
