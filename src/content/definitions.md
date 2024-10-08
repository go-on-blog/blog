---
title: "My Favorite Software Engineering Definitions"
date: "2023-02-28"
slug: "/definitions/"
---
Reference definitions of software engineering terms. The definitions either come from standards bodies or from people who are authorities in their field.  
Hereafter, italics are used to mention the origin of the word.
<!-- end -->

### Acceptance Criteria

> 1. Criteria that a system or component must satisfy in order to be accepted
> by a user, customer, or other authorized entity;
> 2. A set of conditions that is required to be met before deliverables are accepted.
> 1. the criteria that a system or component must satisfy in order to be accepted by a user, customer, or other authorized entity. 2. those criteria, including performance requirements and essential conditions, which must be met before project deliverables are accepted.
>
> [A Guide to the Project Management Body of Knowledge - Fifth Edition][PMBOK]

### Angoisse

> Englobe l’anxiété et ses signes somatiques d’oppression et de constriction.
> Phénomène d’intensité croissante : inquiétude > anxiété > angoisse.
> 
> [Troubles anxieux et phobiques](https://www.psycom.org/wp-content/uploads/2020/11/Troubles-anxieux-et-phobiques-2020.pdf). Psycom. 2020.

### Anxiété

> État mental de trouble et d’agitation, sentiment d’insécurité indéfinissable, peur sans objet.
> 
> [Troubles anxieux et phobiques](https://www.psycom.org/wp-content/uploads/2020/11/Troubles-anxieux-et-phobiques-2020.pdf). Psycom. 2020.

### Architecture

> The architecture of a product can be defined as the scheme by which the functions it performs are allocated to its constituent components.
> 
> Inspired by Ulrich, Karl. [The Role of Product Architecture in the Manufacturing Firm](https://dspace.mit.edu/bitstream/handle/1721.1/48938/roleofproductarc00ulri.pdf?sequence=1). 1995.

### ATDD

> Form of test-[first] development that concentrates on applying TDD at the feature [...] level, based on acceptance tests developed for requirements at those levels.
>
> [AAMI TIR45, section 3.2][TIR45]

### Cognitive bias

> A systematic pattern of deviation from norm or rationality in judgment.
>
> Martie Haselton, Daniel Nettle, Paul W. Andrews (2005). « The evolution of cognitive bias ». In [The Handbook of Evolutionary Psychology](http://www.sscnet.ucla.edu/comm/haselton/papers/downloads/handbookevpsych.pdf). John Wiley & Sons Inc. pp. 724–746.

### Command and Control (C2)

> The term command and control is clearly a product of the Industrial Age.
> The first use of the term as we understand it appears to be by Jomini
> (Henri de Jomini, 1838) in The Art of War, when he entitles a section of
> the book, “The Command of Armies and the Supreme Control of Operations.”
> [...]
> 
> Many official definitions continue to be focused on the authorities associated with command, not on what needs to be accomplished and how it could or should be accomplished [...].
> 
> It was not until the middle of the century, following Napoleon’s staff innovations, that the term command and control began to be widely used. This raised the question of what the additional term control meant. Several explanations have been provided. **One view maintains that command refers to what a commander does and control is associated with how the “will” of the commander becomes translated into instructions** and promulgated throughout forces by the command staff [...]. **Another view parses “the art and science of command and control”: command is the art, and control is the science** [...]. The control (or scientific) aspect of C2 fit well into an Industrial Age perspective that assumed that organizations and situations could be adequately represented as machines, albeit complicated machines. Given that a machine behaves according to a knowable set of rules, results could be controlled scientifically.
>
> [Toward Harmonizing Command and Control with Organization and Management Theory](http://www.dodccrp.org/files/IC2J_v3n2_06_Alberts.pdf). David S. Alberts, Mark E. Nissen. The International C2 Journal, 2009. 

### Company

> The purpose of business is to create and keep a customer.
>
> Peter Drucker. The Practice of Management. 1954.

> The Social Responsibility of Business Is to Increase Its Profits.
> 
> Milton Friedman. New York Times. 1970. 

> The purpose of a company is to engage all its stakeholders in shared and sustained value creation.
>
> [Davos Manifesto 2020](https://www.weforum.org/agenda/2019/12/davos-manifesto-2020-the-universal-purpose-of-a-company-in-the-fourth-industrial-revolution/). 2019.


### Continuous Delivery

> Continuous Delivery is a set of capabilities that enable us to get changes of all kinds — features, configuration changes, bug fixes, experiments — into production or into the hands of users *safely*, *quickly*, and *sustainably*.
> 
> Nicole Forsgren, Jez Humble, Gene Kim. Accelerate. 2018.

### CQRS

> On a high level, CQRS states the fact that operations that trigger state transitions should be described as *commands* and any data retrieval that goes beyond the need of the command execution, should be named a *query*. Because the operational requirements for executing commands and queries are very often different, developers should consider using different persistence techniques for handling commands and queries, therefore segregating them.
> 
> Alexey Zimarev in [Event Sourcing and CQRS](https://www.eventstore.com/blog/event-sourcing-and-cqrs). 2020.

### Decoupled

> Code can be said to be *decoupled* when your classes are designed in such a way that they don’t depend on the concrete implementations of other classes.
>
> Nick Hodges. [Code Against Interfaces, Not Implementations](https://betterprogramming.pub/code-against-interfaces-not-implementations-37b30e7ab992). 2020.

### Design input

> [...] the physical and performance requirements of a device that are used as a basis for device design.
>
> [US Code of Federal Regulations Title 21, 820.3(f) Definitions][QSR]

### Design output

> [...] the results of a design effort at each design phase and at the end of the total design effort. The finished design output is the basis for the device master record. The total finished design output consists of the device, its packaging and labeling, and the device master record. 
>
> [US Code of Federal Regulations Title 21, 820.3(g) Definitions][QSR]

### Empathy

*Theodor Lipps created the framework for the concept of Einfühlung, defined as "projecting oneself onto the object of perception."
The word "empathy" was formed in english to translate the german. (Cf [Wikipedia](https://en.wikipedia.org/wiki/Theodor_Lipps).)*

*Le terme d’empathie prend ses racines à la fin du XIXème siècle avec le terme d’Einfühlung, popularisé par l’esthétique allemande avant d’être reprise par la psychologie, sous l’influence notamment des travaux de Theodor Lippps, au tournant du XXème siècle. Il deviendra ensuite empathy sous la plume du psychologue américain Edward Titchener (1867-1927) au début du XXème siècle. (Cf. [Le concept d’empathie, Ludovic Gadeau](http://ludovicgadeau-psychotherapie.com/le-concept-dempathie-approche-philosophique/).)*

### Event Sourcing

> Event Sourcing is an alternative way to persist data. In contrast with state-oriented persistence that only keeps the latest version of the entity state, Event Sourcing stores each state mutation as a separate record called an event.
> 
> Alexey Zimarev in [What is Event Sourcing?](https://www.eventstore.com/blog/what-is-event-sourcing). 2020.

### Feature Team

> A feature team is a long-lived, cross-functional, cross-component team that completes many end-to-end customer features — one by one.
>
> Craig Larman, Bas Vodde in [Scaling Lean & Agile Development](https://res.infoq.com/articles/scaling-lean-agile-feature-teams/en/resources/feature%20teams_%20infoq_%20final.pdf)

### IKIWISI

> I’ll Know It When I See It.
> 
> Barry Bohem.

### Intellectual honesty

> A virtuous disposition to eschew deception when given an incentive for deception.
> 
> Louis Guenin. "Candor in Science: Intellectual Honesty". 2005.

### Leadership

> Non-random differential effect on group behavior of conspecifics through actions evolved or intended to elicit this effect.
>
> *Effet différentiel non aléatoire sur le comportement d’un groupe d’individus de la même espèce, obtenu par des actions qui ont évolué ou ont été créées à cet effet.*
> 
> [Leadership in Mammalian Societies: Emergence, Distribution, Power, and Payoff](http://dx.doi.org/10.1016/j.tree.2015.09.013). Smith et al. 2016. (Accessed on December 17th, 2020.)

> Anyone who’s in on a decision that affects the whole group is a *leader*.
> 
> Mezick, Daniel. [Scaling Employee Engagement](https://www.youtube.com/watch?v=NTNPdYJNces&t=33m20s). 2019.

### Peur

> État anxieux accompagnant la prise de conscience d’une menace ou d’un  danger, réels, perçus par chacun.
> 
> [Troubles anxieux et phobiques](https://www.psycom.org/wp-content/uploads/2020/11/Troubles-anxieux-et-phobiques-2020.pdf). Psycom. 2020.

### Quality (software)

> Quality means conformance to requirements, not goodness.
>
> Philip B. Crosby. Four Absolutes of Quality Management. 1999.

### Should, May, Can, Must

> [...] *should* indicates that among several possibilities, one is recommended as particularly suitable, without mentioning or excluding others, or that a certain course of action is preferred but not necessarily required, or that (in the negative form) a certain possibility or course of action should be avoided but is not prohibited.
> 
> *May* is used to indicate that a course of action is permissible within the limits of the recommended practice.
> 
> *Can* is used as a statement of possibility and capability. 
> 
> Finally, *must* is used only to describe “unavoidable” situations, including those mandated by government regulation.
>
> [AAMI TIR45, Foreword][TIR45]

### Managing

> *Managing* is dealing with uncertainty.
> 
> Martin, Robert C. [The Craftsman’s Oath](https://www.youtube.com/watch?v=17vTLSkXTOo&t=49m24s). SCLConf October 2018.

### Performance

> The ability of a device to achieve its intended purpose as stated by the manufacturer.
>
> [EU2017R0745](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32017R0745)

### Prototype

> Prove to customer/user it’s possible. Estimate effort (where necessary).
> 
> [Zach Bonaker](https://twitter.com/zachbonaker/status/1207042495990751232)

> Prototype has the awful potential to become release 1..n of a badly architected product (though it shouldn’t).
> 
> Alistair Cockburn. [Twitter](https://twitter.com/TotherAlistair/status/1207303748491644928)

### Reactance

> Mécanisme de défense psychologique qui se met en place quand une personne se sent forcée dans les choix qu’elle veut pouvoir faire librement.
> 
> [Débunkage & entretien épistémique](https://www.youtube.com/watch?v=99InBSdGjO0)

> Reactance occurs when a person feels that someone or something is taking away their choices or limiting the range of alternatives.
> 
> [Wikipedia definition](https://en.wikipedia.org/wiki/Reactance_(psychology)) (accessed December 3rd 2020).

### Refactoring

> *Refactoring* is lots of small changes, none of which change 
> the observable part of the software.
> 
> Fowler, Martin. [The State of Agile Software in 2018](https://martinfowler.com/articles/agile-aus-2018.html).

### Requirement

> A condition or capability that must be met or possessed by a system, product, service, result, or component to satisfy a contract, standard, specification, or other formally imposed document. Requirements include the quantified and documented needs, wants, and expectations of the sponsor, customer, and other stakeholders.
> 
> [A Guide to the Project Management Body of Knowledge - Fourth Edition][PMBOK]

<!-- 
  Condition ou capacité que doit présenter un système pour satisfaire un contrat, un standard, une spécification ou tout autre document formel imposé.
 -->

> **Design inputs** are the *interpretation of customer needs* into formally documented MEDICAL DEVICE requirements. 
> 
> **Software requirements** are the formally documented specifications of *what the software does to meet the customer needs* and the design inputs. 
> 
> **Software functional specifications** are often included with the software requirements and *define in detail what the software does to meet its requirements* even though many different alternatives might also meet the requirements. 
> 
> **Software design specifications** define *how the software will be designed* and decomposed to implement its requirements and functional specifications.
> 
> [B.5.2 Software requirements analysis][IEC62304]

### Software Item

> Three terms identify the software decomposition. The top level is the SOFTWARE SYSTEM. The lowest level that is not further decomposed is the SOFTWARE UNIT. All levels of composition, including the top and bottom levels, can be called SOFTWARE ITEMS. A SOFTWARE SYSTEM, then, is composed of one or more SOFTWARE ITEMS, and each SOFTWARE ITEM is composed of one or more SOFTWARE UNITS or decomposable SOFTWARE ITEMS. The responsibility is left to the MANUFACTURER to provide the definition and granularity of the SOFTWARE ITEMS and SOFTWARE UNITS.
> 
> [3.25 SOFTWARE ITEM][IEC62304]

### Specification

> Specification means any requirement with which a product, process, service, or other activity must conform.
>
> [820.3 Definitions.][QSR]

> A document that specifies, in a complete, precise, verifiable manner, the requirements, design, behavior, or other characteristics of a system, component, product, result, or service and, often, the procedures for determining whether these provisions have been satisfied.
> 
> [A Guide to the Project Management Body of Knowledge — Fourth Edition][PMBOK]

### Specification By Example

*The term [Specification By Example](https://martinfowler.com/bliki/SpecificationByExample.html) was originally coined by Martin Fowler in 2004.*

*It is also a [book](https://gojko.net/books/specification-by-example/) published by Gojko Adzic in 2011.*

### Spike

> Prove to team it’s possible. Timebox effort.
> 
> Zach Bonaker. [Twitter](https://twitter.com/zachbonaker/status/1207042495990751232)

> Spike should never have the potential to evolve into the final product.
> 
> Alistair Cockburn. [Twitter](https://twitter.com/TotherAlistair/status/1207303748491644928)

### Spy

> A spy is a test double that records the arguments it is called with so that those values can be inspected later on.
>
> [Mastering React Test-Driven Development, Daniel Irvine](https://www.packtpub.com/product/mastering-react-test-driven-development/9781789133417). 2019. Packt Publishing.

### Stakeholder

> Anyone who could stop a product from going live is a stakeholder.
> 
> — Arie van Bennekum. Agile Coach Academy, September 2020.

> Tout groupe d'individus ou tout individu qui peut affecter ou être affecté par la réalisation du produit.
>
> — Librement inspiré par moi de Freeman & Reed. 2024.

### Three amigos

*“I suggest you read George Dinwiddie’s [blog on the 3 amigos](http://blog.gdinwiddie.com/tag/three-amigos/). He is the originator of this term.”*

### Unit Test

> A test written by a programmer for the purpose of ensuring
> that the production code does what the programmer expects it to do.
>
> [First-Class Tests, Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.html)

### User Story

> [...] description of a change in system behavior from the perspective of a user.
>
> [The Humanizing Work Guide to Splitting User Stories](https://www.humanizingwork.com/the-humanizing-work-guide-to-splitting-user-stories/). (Accessed on December 13th, 2020.)

> User Stories originate with Extreme Programming, their first written description in 1998 only claims that customers define project scope “with user stories, which are like use cases”. Rather than offered as a distinct practice, they are described as one of the “game pieces” used in the “planning game”.
> 
> [User Stories, Agile Alliance](https://www.agilealliance.org/glossary/user-stories/)

### User Story Template 

*The “role-feature-reason” format for expressing user stories was invented at Connextra in the UK in 2001. (Cf. [User Story Template, Agile Alliance](https://www.agilealliance.org/glossary/user-story-template/).)*

### Validation

> Confirmation by examination and provision of objective evidence that software specifications conform to user needs and intended uses, and that the particular requirements implemented through software can be consistently fulfilled.
> 
> [General Principles of Software Validation; Final Guidance for Industry and FDA Staff](https://www.fda.gov/media/73141/download). 2002.

### Velocity <a name="velocity"></a>

> Velocity is the sum of the estimates of delivered (i.e., accepted) features per iteration.
> 
> [Measuring the Velocity of your Agile Scrum Team](https://resources.collab.net/agile-101/agile-scrum-velocity)

### Verification

> Confirmation through provision of objective evidence that specified requirements have been fulfilled.
> 
> [General Principles of Software Validation; Final Guidance forIndustry and FDA Staff](https://www.fda.gov/media/73141/download). 2002.

<!-- *************************************************************** -->

[IEC62304]: https://www.iso.org/standard/38421.html "IEC 62304:2006, Medical device software – Software life cycle processes"

[PMBOK]: https://www.pmi.org/pmbok-guide-standards/foundational/pmbok "A Guide to the Project Management Body of Knowledge (PMBOK Guide) — Fifth Edition"

[QSR]: https://www.ecfr.gov/cgi-bin/text-idx?node=pt21.8.820 "Quality System Regulation (Title 21 part 820)"

[TIR45]: https://my.aami.org/store/detail.aspx?id=TIR45-PDF "AAMI TIR45: 2012/(R)2018, Guidance on the use of AGILE practices in the development of medical device software"
