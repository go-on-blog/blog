---
title: "How to measure performance when items are re-estimated?"
date: "2019-12-15"
---
Is it a good idea to re-estimate stories? When should we re-estimate and when should we avoid to do so? And what is the consequence of re-estimating on the velocity’s consistency and our ability to make reliable projections?<!-- end -->

Let’s say we are in a [SAFe](https://www.scaledagileframework.com/program-increment/) context and a team committed to deliver the following stories for a particular sprint at the [PI Planning](https://www.scaledagileframework.com/PI-planning/):

    2 stories of 8 pt
    3 stories of 5 pt
    4 stories of 3 pt

for a total of 43 points.

When comes the sprint planning, the team decides to re-estimate two 3 point items to 8 points each because they have now a better understanding of what needs to be done (not because the scope of these items changed):

    4 stories of 8 pt
    3 stories of 5 pt
    2 stories of 3 pt

Now the total is 53 points.

At the end of the sprint, all stories have been completed but the 5 point items, for a total of 43 points. If we only consider the [velocity](/definitions#velocity) we may have the misleading perception the team delivered what was expected. However if we consider the value, we realize the commitment was not met.

### What is the purpose of re-estimating?

In which situations are we tempted to re-estimate?

1. When the scope changed.
2. When the team failed to anticipate all that would be needed to get the story done.

**When the scope of a story changes, it is appropriate to re-estimate it.** Remember that change would necessarily impact the story’s acceptance criteria.

But what about re-estimating a story when the scope did not change? Would it be acceptable as well?

*It depends on when the new estimation is done.*

**If the new estimate happens before the planning, there’s nothing wrong with it.** But with relative estimates, it may result in distortion between re-estimated items and the unchanged ones. Then the team would rather re-estimate all of the product backlog.

In contrast, **I would advise against re-estimating after the planning**. It’s like changing the playing rules after the game has started. I find the analogy proposed by Timothy Baffa very instructive:

> [...] I would be a dead-eye archer if I was allowed to move the target to where I shot the arrow every time.
> 
> [Re-estimate?](https://www.scrum.org/forum/scrum-forum/32814/re-estimate). Scrum Forum. 2019.

A team might be tempted to justify that it could not complete a story by increasing its story points. Of course, that would be some kind of denial and would go against transparency. But to be fair, we have to admit that if teams are being judged based on the estimations of the items they complete, this measurement may lead them to that poor behavior. 

How can the team improve its ability to estimate if it is allowed to adjust its estimates after the planning?

Mike Cohn gives a funny example of these adjustments:

> You ask a developer how done something is and hear, “90%.” A week later you ask again, expecting to hear that the work is complete. But the developer again says 90%.
> 
> [...]
> 
> A programmer suffering from the 90% syndrome is actually making progress, but is progressing at exactly the same rate that his or her understanding of the problem’s scope is expanding.
> 
> — Mike Cohn. [Why Agile Teams Put So Much Emphasis on Being Done Each Iteration](https://www.mountaingoatsoftware.com/blog/why-agile-teams-put-so-much-emphasis-on-being-done-each-iteration). January 29, 2019.

### What planning are we talking about when it comes to SAFe?

### What is the adverse effect of re-estimating?

A good example that should convince you to avoid re-estimating is given by Andrew Fuqua:

> Example: Suppose we typically do around 10 stories and 20 points per sprint, and the distribution in size is something like [1, 1, 1, 2, 2, 2, 3, 3, 5]. Suppose it’s a 3 point story that becomes a 5. If we complete all those stories, should we say our velocity is 20 or 22? Say we have 400 points remaining in our release backlog. Can we implement 22 points out of that release backlog every sprint? I would say no, you can only knock out 20 backlog points each sprint.
>
> To look at it another way, you think you have 400 points in your backlog, but since you are going to reestimate them on the fly, you really have 440 points to do. You won’t get done in 400/22 iterations. You’ll get done in 440/22 iterations. Or 400/20.
>
> — Andrew Fuqua. [Don’t Estimate Stories In Sprint Planning](https://www.leadingagile.com/2014/09/dont-estimate-stories-sprint-planning/). 2014.

Velocity is a measurement used to determine what teams can get done **in the future**. If a team re-estimates items after the planning, then they can’t know what they can actually achieve and, thus, it reduces their ability to make projections.
