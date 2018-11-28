## containerization
* everything in docker containers

## Stack
* TypeScript on backend
* inversifyjs - Dependency Injection Framework
  * depenedency inversion principle - depend upon abstractions, not concretions
  * inversify-express-server
  * inversify-express-utils
  * inversify-binding-decorators - decided to leave out in favor of explicit verbosity
    * more boilerplate (feeling Java-ish) but gives a better sense of how things are wired up.
* typeorm - with routing-controller-extensions (decorators)
  * [routing-controllers](https://github.com/typeorm/typeorm-routing-controllers-extensions)
  * [custom repositories](http://typeorm.io/#/custom-repository)
* integrate with MySQL
* helmet - basic security
* swagger (tbd)

## Architectural Hmms?...
* usage of aync container module (Inversify) to create connection to db vs repositories handling responsibility.
  * initial pre-load connection vs ad hoc connections
  * going with async pre-load - may revisit this in more complex settings

## FE stack
* Vue.js for client

## Testing
* mocha / chai for testing

## General
* add version of API in header

## documentation
* Swagger



# API Design

## Game - no bulk updates so far

GET /games -> returns all games
POST /games -> add game (auto-gen PK_id UUID)

GET /games/:id -> return specific game
PUT /games/:id -> update specific game (e.g. rain delays would affect start time)
DELETE /games/:id -> delete specific game


## Scoring Event

GET /games/:id/scoring -> return all scoring events for game id
  * optional games/:id=all/scoring -> return all events for all games

GET /games/:id/scoring/:id -> return specific scoring event 
POST /games/:id/scoring -> add scoring event (FK_game_id)
PUT /games/:id/scoring/:id -> update scoring event (e.g. post call under review)


# Versioning

* URL vs header ?



