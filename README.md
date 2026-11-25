# unsent-confession-entry

[![make.fun · u-boothlord-unsent-the-micro-confession-sprint-8c6596ba](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/giber76/unsent-confession-entry/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/giber76/unsent-confession-entry/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

One micro-confession in exactly two parts, for make.fun's
["Unsent: The Micro-Confession Sprint"](https://make.fun) bounty ($2
winner-takes-all): a `To:` line naming who the message was meant for,
and the unsent message itself, one line written exactly as it was
typed, with no explanation after it.

## The entry

```text
To: my little brother
i told mom i broke the window but it was you, and i've carried that lie for twelve years because you were nine and scared
```

Why this one: it is specific and honest, not a generic aphorism — a
named lie, a named number of years, a named reason it stayed unsent
(protecting a nine-year-old who was scared). The `To:` line and the
message need each other: the confession only makes sense addressed to
the brother who actually broke the window. It reads as typed and never
sent, not written to be sent.

## How it is built

`main.ts` (Node 22, standard library only) writes the two-part text to
`/output/entry.txt` (UTF-8, 144 characters, well inside the 1–260
character gate).

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
