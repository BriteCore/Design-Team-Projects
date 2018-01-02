# Design Team Project

Our design team is currently in the process of redesiging all aspects of our app, BriteCore, which insurance companies use to manage their internal business (think of it almost as an industry-specific CMS).

The app is being broken up from one large monolithic application into smaller modules, with a unified front end. Almost all of our developers are backend experts, and we're now finding that it would be helpful to have a front-end expert to work alongside the design team.

This exercise is taken from a recent design we did, and we would like to see how you would approach it.

## Background

[BriteCore](http://www.britecore.com/) is a web-based platform insurance companies use to manage their business. Insurance is a form of risk management. Risks are anything that someone could incur a loss on. BriteCore has historically worked primarily with property-based risks (homes, farms, churches, etc.).

## Problem

Since BriteCore was created to work mostly with property-based insurance, the system is pretty rigid. It assumes that all risks are properties and have addresses. This makes it difficult for BriteCore to work with different forms of insurance like Automobile Policies, Cyber Liability Coverage (protection against hacking), or Prize Insurance (if someone gets a $1 million hole-in-one prize at a golf tournament, the golf course doesn't pay it, they have an insurance policy to cover them).

Any kind of insurance requires a certain amount of information to be collected from the customer in order to figure out how much the insurance policy will cost. These questions include things like:

- "How many square feet is the home" - For a Homeowners Policy
- "Have you had a speeding ticket in the last year" - For an automobile policy
- "When is your birthday" - For a life insurance policy

We need a way for insurance carriers to setup and manage the questions they are asking their customers.

## Details

To meet this need, we've come up with a solution that allows insurers to define their own custom inputs for any type of insurance. 

We've come up with this mockup for the design:

![Design Mockup](https://github.com/IntuitiveWebSolutions/DesignProject/blob/frontend-dev-project/Screen%20Shot%202017-12-28%20at%204.21.44%20PM.png)

Each input is expected to have a label, and most importantly a 'type'. This type will determine much about how the input is presented and it's UX. These types include, but are not limited to, 'date', 'number', 'currency', 'text', and 'select (multiple preset options with a single choice).'

Some aspects of this page in particular:
* The central part of the page layout (main card) should adapt to fill the browser window.
* The reference name is automatically generated from the user-entered label on blur. The reference name will be used as a programatic reference to this input, and is used in other parts of the app. 
* The custom validation input should validate that proper regex is used.
* Once a tag group is selected, the tag list to the right should be populated. 

For that last point, a tag group might be one of our auto insurance vendors, vinmaster, which takes in a VIN and returns information about a car. Once you select the 'Vinmaster' tag group, the right hand list would populate with tags for all the pieces of information Vinmaster needs or returns, including car make, car model, year built, etc.

Finally, the right-hand side of this page also features an area called 'Field Groups'. It is possible to group together several different input fields. They could place this field in a group by clicking the group's card, or they could add a new group from this page.

## Primary Goal

Most importantly, we are looking for you to implement this design in a way that shows how you might work in a larger design system, based heavily on a component-first architecture. We'll be looking at all aspects of your front end, including JS, CSS and HTML structure.

Overall, we aren't looking for someone who can make pixel-perfect copies of mockups. Instead, we're looking for a team member who can help us iterate on our design work and empower us to create better user experiences. 

No backend work is needed for this, as long as your page is interactive.
*Super bonus points for using both SCSS and Vue.js in your project.*

### Delivery

Your final deliverables will be:
- HTML/CSS/JS Page

## Questions

For questions, please contact will@britecore.com.

## Finished?

When you're done with the above project, please submit your github repo to will@britecore.com.
