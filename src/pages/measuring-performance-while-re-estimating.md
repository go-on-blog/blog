---
title: "How to measure performance when items are re-estimated?"
date: "2019-12-15"
---
Is it a good idea to re-estimate stories? When should we re-estimate and when should we avoid to do so? And what is the consequence of re-estimating on the velocity and our ability to make reliable projections?<!-- end -->

Let’s say, a team committed to deliver 43 story points for a particular sprint of the Program Increment (in a [SAFe](https://www.scaledagileframework.com/program-increment/) context), consisting of:

- 2 stories of 8 pt
- 3 stories of 5 pt
- 4 stories of 3 pt

When comes the sprint planning, the team re-estimates two 3 point items to 8 pt each:

- **4 stories of 8 pt**
- 3 stories of 5 pt
- **2 stories of 3 pt**

Now the total is 53 pt.

Then, let’s say the team doesn’t complete the 5 point items but everything else for a total of 43 points. If we consider only the [velocity](/definitions#velocity), then we may have the misleading perception the team delivered what was expected. However if we only consider the value, then we understand the commitment was not met.

## What is the purpose of re-estimating?

In what situations are we tempted to re-estimate?

1. When the scope changed.
2. When the team failed to anticipate all that would be needed to get the story done.

When the scope of a story changes, it is appropriate to re-estimate it. Remember that change would necessarily impact its acceptance criteria.

But what about re-estimating a story when the scope did not change? Would it be acceptable?

To answer this question, I find the analogy proposed by Timothy Baffa very instructive:

> [...] I would be a dead-eye archer if I was allowed to move the target to where I shot the arrow every time.
> 
> [Re-estimate?](https://www.scrum.org/forum/scrum-forum/32814/re-estimate). Scrum Forum. 2019.

In other words, a team might be tempted to justify that it could not complete a story by increasing its story points. Of course, that would be against transparency. But if teams are being judged based on the estimations of the items they complete, the measure may lead to that behavior. 

How can the team improve its ability to estimate if it is allowed to adjust its estimates after the planning?

Mike Cohn gives a funny example of these adjustments:

> You ask a developer how done something is and hear, “90%.” A week later you ask again, expecting to hear that the work is complete. But the developer again says 90%.
> 
> [...]
> 
> A programmer suffering from the 90% syndrome is actually making progress, but is progressing at exactly the same rate that his or her understanding of the problem’s scope is expanding.
> 
> — Mike Cohn. [Why Agile Teams Put So Much Emphasis on Being Done Each Iteration](https://www.mountaingoatsoftware.com/blog/why-agile-teams-put-so-much-emphasis-on-being-done-each-iteration). January 29, 2019.

But the best example that should convince you to avoid re-estimating is given by Andrew Fuqua:

> Example: Suppose we typically do around 10 stories and 20 points per sprint, and the distribution in size is something like [1, 1, 1, 2, 2, 2, 3, 3, 5]. Suppose it’s a 3 point story that becomes a 5. If we complete all those stories, should we say our velocity is 20 or 22? Say we have 400 points remaining in our release backlog. Can we implement 22 points out of that release backlog every sprint? I would say no, you can only knock out 20 backlog points each sprint.
>
> To look at it another way, you think you have 400 points in your backlog, but since you are going to reestimate them on the fly, you really have 440 points to do. You won’t get done in 400/22 iterations. You’ll get done in 440/22 iterations. Or 400/20.
>
> — Andrew Fuqua. [Don’t Estimate Stories In Sprint Planning](https://www.leadingagile.com/2014/09/dont-estimate-stories-sprint-planning/). 2014.

Velocity is a measurement used to determine what teams can get done **in the future**.

If a team re-estimates, we can’t know what it can actually achieve and, thus, it reduces our ability to make projections.
