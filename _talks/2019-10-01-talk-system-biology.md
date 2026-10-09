---
title: "System biology and waddington landscape"
description: "A multicellular mathematical model of pattern formation during in-vitro gastrulation of human embryonic stem cells, extending the Waddington landscape with cell-cell communication."
collection: talks
type: "Talk"
permalink: /talks/2019-10-01-talk-system-biology/
venue: "Sharif University of Technology, Department of Computer Engineering"
date: 2019-10-01
location: "Tehran"
header:
  teaser: /assets/images/research/waddington-self-organization.png
---

In this talk, I presented our work on pattern formation during human embryonic stem cell (hESC) development, the subject of my master's thesis at Sharif.
We proposed a multicellular mathematical model for pattern formation during the in-vitro gastrulation of human ESCs.
This model enhances the basic principles of the Waddington epigenetic landscape with cell-cell communication, which enables us to describe how the pattern and tissue formation occurs in the course of development.

<figure class="research-figure">
  <a href="/assets/images/research/waddington-self-organization.png" title="Open full-size figure"><img src="/assets/images/research/waddington-self-organization.png" alt="Left: the BMP4/Noggin two-gene circuit inside one cell and its Waddington landscape with a fixed point and a limit cycle. Right: a micropatterned hESC colony with concentric fate territories emerging from the edge inward."></a>
  <figcaption>Inside one cell, BMP4 activates itself and Noggin while Noggin inhibits BMP4: two ODEs with eight fitted parameters. Across the colony, secreted BMP4 and Noggin diffuse between cells, and the fate territories (CDX2+ at the edge, then SOX17+, BRA+ and SOX2+ in the centre, after Warmflash et al. 2014) emerge from the edge inward.</figcaption>
</figure>

**How the model works.** Every cell carries the same minimal gene circuit: BMP4 activates itself and its own inhibitor Noggin, and Noggin inhibits BMP4. On its own, a single cell can oscillate indefinitely; once cells are coupled through diffusion of the secreted BMP4 and Noggin, they settle into stable fates. In a micropatterned colony the pattern is initiated at the boundary and spreads towards the centre, reproducing the concentric germ-layer rings seen experimentally. The same model also explains why very large colonies (around 3 mm) show spotted rather than ring-shaped territories, and how the pattern responds to altered culture conditions and micropattern diameters.

The work was published in [*Bioinformatics* (2019)](/publications/waddington-landscape/), and the simulation code is on [GitHub](https://github.com/HFooladi/Self_Organization).

You can [download](/files/Self_organization2019.pdf) the slides.
