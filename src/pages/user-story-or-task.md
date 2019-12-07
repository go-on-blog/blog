---
title: "What’s the difference between a user story and a task?"
date: "2019-11-10"
---

It is not always easy to determine if something must be created as a task or as a user story. This post explores this question.
Project Management Software provide different types of objects to represent work items: epic, story, task... Usually, the behavior for tasks is specific as they are not considered Product Backlog Items. So it’s important to make the right decision.

To help understand the difference between a user story and a task, I wrote a hypothetical conversation between a Scrum Master, a Product Owner and a Developer.

SM — Here is an example of user story:

```gherkin
In order to meet the basic food requirements of my pet
As a dog owner
I want to feed my dog
```

In this user story template, the first line represents the "why" (the purpose), the second the "who" and the last the "what".
*When the "what" is done, the purpose should be fulfilled.*

PO — Clear enough.

SM — Now let’s see what a task (related to this user story) could be:

    Buy dog food

Do you notice there is no "why" in this task statement?

PO — Sure.

SM — The "why" is given by the user story it belongs to. *A task represents the "how".* (And you should remember the "how" belongs to the team, whereas the "what" is the PO responsibility.)
The completion of this task alone would not meet the objective, which is to feed the dog. So, the user story carries a property of completeness which the task doesn’t.
In other words, *it is a story when it had a purpose in itself, while a task partially serves an external purpose*.

Developer — So, everything is a user story as long as it has a purpose?

SM — Yes, provided it’s a genuine purpose ;-)

Developer — Then, I can make this task a story just by adding a purpose:

    In order to feed my dog (why)
    As a dog owner (who)
    I want to buy dog food (what)

SM — Nice try but let me ask you a question:
If you only buy the dog food (which is what you stated) without providing it to your dog, will he be happy?
Doing so, you would not fulfill the purpose.
*The "what" should fully meet the purpose.*

Developer — Understood. Then I can rephrase it to comply with your rule:

    In order to be able to feed my dog
    As a dog owner
    I want to buy dog food

I don’t say that, once the dog food will be bought, the purpose will be met, but it will enable to meet the purpose.

SM — You are playing with words. What proof can you give me that you’ll use the food you bought to actually feed your dog? If I was a Product Owner, I would probably not accept a user story that would not deliver value but only a promise of value. *It must be a real purpose, not the unverifiable promise of a purpose.*

Developer — OK, you convinced me: I’ll never make "buy dog food" a user story again.

SM — Wait a minute, this is not what I said. I can give you an example where "buy dog food" could become a user story.

Developer — Are you joking? You just told me I should not make it a user story, even if I wrote a purpose.

SM — Because your purpose was only a promise, not an actual purpose. Let’s consider this statement:

    In order to benefit from a discount
    As a dog owner
    I want to buy dog food

Do you see how this new purpose changed the perspective?
It’s still the same "what" (buy dog food) but a different "why" (benefit from a discount).
In this situation, buying dog food would fulfill the purpose.
*Therefore, when determining if something is a user story or a task, you should focus on the "why", not on the "what".*
That’s why the purpose is essential.

Developer — OK but your example with the dog is quite obvious. Let’s consider a more realistic situation where the development team is working on a legacy app having a lot of regressions. The team comes to the PO and wants to raise the Unit Test coverage to 80%. Is that a user story or a task?

SM — First of all, it is not a user story: no real user would come and ask the PO for code coverage (a user wouldn’t know what code coverage is). 

Developer — Then it’s a task if it’s not a user story.

SM — No. Do you know that "user story" (or even "story") never appears in the Scrum Guide?

Developer — Actually I was pretty sure it was part of it!

SM — It was introduced by Extreme Programming in the late 1990’s. If you read the Scrum Guide, you’ll find this:

> The Product Backlog lists all features, functions, requirements, enhancements, and fixes that constitute the changes to be made to the product in future releases.
>
> [The Scrum Guide](https://www.scrumguides.org/scrum-guide.html#artifacts-productbacklog). Ken Schwaber and Jeff Sutherland. November 2017.

So, *the Product Backlog consists of all kinds of items, even technical ones, and not only of user stories*.

Developer — Is that why the Scrum Guide uses the expression "Product Backlog Item" (or PBI) instead?

SM — Exactly. So we should rephrase your question: "The development team wants to raise the Unit Test coverage to 80%. Is that a PBI or a Task?" Now, could you write it using the usual template?

Developer — That would be:

    In order to identify regressions
    As a developer
    I want to raise the Unit Tests code coverage to 80%

SM — Sounds like an unverifiable promise, isn’t it?
When you’ll have completed the job (80% code coverage), how can I be sure the promise to identify regressions will be fulfilled? Setting such a percentage gives no guarantee that the unit tests are relevant. As a PO, I would probably not buy it.

Developer — I’ll try to be more specific then:

    In order to identify regressions on feature x
    As a developer
    I want to better cover the algorithm with unit tests

SM — That’s a lot better.
Still, it is not an improvement of the current app: doing so, you’ll only ensure that, in the future, when someone changes something that could impact the sleep apnea monitoring, you’ll be able to identify regressions.
A better approach would be to implement new unit tests while introducing a change in the application.

Developer — One last question regarding spikes: should we consider them as regular PBI?

SM — Spikes are usually necessary when we have too many unknowns on a PBI. These unknowns prevent us from estimating the item. If we are not able to estimate the PBI, how could we estimate the spike?

Developer — That would generally be impossible.

SM — Then, it’s better to *timebox the spike* (say we allocate one day for it), than trying to estimate it. And *if it’s short enough, I would consider it part of the product backlog refinement process*: we don't create a PBI to represent it, neither a user story nor a task.
