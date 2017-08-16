UI/UX Demo Project
================================

This outlines a recent problem we ran into and came up with a design solution for. We'd like to see how you would handle it. What is most important is gaining some insight into your design process, and seeing how you work.

# Background

BriteCore is a web-based platform insurance companies use to manage their business. Insurance agents usually act as sales representatives for insurance companies. They market various policies and coverages to people, in return for a commission from the insurance company. In most cases, agents are not directly employed by an insurance company. Instead, an agent will work with several different insurance companies and try to get the best deal for their customers.

Agencies are independent businesses that employ multiple agents. An insurance company can manage the agents and agencies they work with from the 'Contacts' (basically a CRM) module of BriteCore.

The current design displays all the agents working for an agency, and displays contact information for each one, along with contact information for the agency itself.

# Problem

A new client to the BriteCore system is going to be writing insurance policies in multiple states across the U.S. (Upwards of 30 states when fully live on the system).

This client would like to have more tools available to them to manage their agency workforce across so many states. 

## Use Cases

### Manage Active States for An Agency

An agency will not have authority to operate in all the states this carrier will operate in. So, the carrier will have to manage which states the agency can quote in. On average, this carrier's agencies will operate in 5-7 states. 

### Manage Agent and Agency Licenses per State

For each state, a carrier will need to track the licenses an agency has. An agency has to have a license for each state they sell insurance in. An example of what these licenses look like [can be found at NIPR, which issues them](https://www.nipr.com/rules_nc_rl.htm#anchor-state_offerings).

Additionally, all of the agents employed by an agency need their own licenses as well. The insurance company will need to enter data about the license, including when it was issued, when it will expire, and they will want to upload a pdf copy of it.

### Setup, by State, which Policy Types an Agency can use

Finally, a company will have a wide-range of policies that it can offer customers. These "Lines of Business" include:

- Homeowners Policies
- Farmowners Policies
- Commercial Policies
- Dwelling Fire Policies (Rental Coverage)
- Liability Protection Policies

Most carriers have around 7-9 distinct policy types. They will want to specify which policy types an agency can submit quotes for. This is somewhat related to the type of license an agency has, but it isn't a direct correlation.

## Primary Goal
We would like to see you come up with an intuitive design that incorporates these advanced management features along with the standard contact information that BriteCore already displays for agents and agencies. You can do this in any way you choose (one page, splitting information up across pages, etc). 

We’re mostly interested in how well you design an interface that is extremely usable, functional and responsive. This means we would like to see work product from the entire design process, including sketches and mockups. You should also create a static high-fidelty prototype in HTML/CSS for your design. If your design has many pages, only one needs to be mocked up in code. 

Bonus Points for hooking up some interesting functionality using jQuery/javascript. Super bonus points for anything else you can come up with that would be really helpful for an insurance company looking to manage its agency workforce.

## Delivery

Your final deliverables will be:
 - HTML/CSS Design Prototype
 - Any documentation around your design process (Can be stored in a google drive folder you share)
 
Please share progress along the way. We are most interested in seeing how you work as a designer and tackle challenges along the way. The more you share, the more we can steer you and make sure you don’t waste any time.

## Questions

 - For questions, please contact will@britecore.com

## Finished?

When you're done with the above project, please submit your changes in the form of a pull request back to the IWS repo.
