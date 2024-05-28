## Why
1. Learn how to build a website from scratch to deployment
2. Learn modern technologies
3. Share who I am with the world
4. It's fun

## Quick Start
## Usage

## To-Do List
1. Navbar, content layout (flexible for Desktop and Mobile devices)
2. Timer
3. AI Chatbot
4. ~~Fix Change Language~~, Return To Top buttons
5. Let Angular know which parts of documentation is outdated (Tour of Heroes AppRoutingModules)

## Questions
1. ~~Do we continue using Angular, opt for another technology or remove it all together?~~
    a. Migrate from AngularJS to Angular, replicating and improving functionality
    b. If stil want to try React, do so on separate branch

Debugging HttpClient, In Memory Web API  
Possible Causes:
1. Should be getting and returning Observable but failing?
    a. HTTP methods return Observables...
2. ~~Include headers~~
3. ~~Review previous system, how we retrieved and displayed mock data from anime-list.ts~~
    a. in-memory-data.service.ts replaces mock data in anime-list.ts
4. Look up Observable subscribe method
5. Not possible without use of modules at least in v16, v17
    a. Note a lot of documentation unavailable due to v18 update...

## In-Memory Web API
https://github.com/angular/angular/tree/main/packages/misc/angular-in-memory-web-api
- Intercepts HTTP requests and returns data from in-memory database
- Remove if implementing real server or exclude from prod environment (see documentation in link above)