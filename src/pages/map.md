---
title: "Map of topics"
date: "2020-12-23"
---

```dot
digraph graphname {
  node [ style = filled, fillcolor = "#F0F0F0", fontname="arial" ];

  agileBenefits [ label = "Agile Benefits", URL = "/agile-benefits/" ];
  growAccountability [ label = "Grow Accountability", URL = "/how-to-grow-accountability/" ];
  carrotAndStick [ label = "Carrot and Stick", URL = "/the-carrot-and-the-stick/" ];
  
  carrotAndStick -> growAccountability;
  growAccountability -> carrotAndStick;
  growAccountability -> agileBenefits;
}
```
