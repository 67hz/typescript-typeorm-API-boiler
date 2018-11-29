# Stack
* TypeScript on backend
* inversifyjs - DI Framework
  * depenedency inversion principle - depend upon abstractions, not concretions
  * inversify-express-server
  * inversify-express-utils
  * inversify-binding-decorators - decided to leave out in favor of explicit verbosity
    * more boilerplate (feeling Java-ish) but gives a better sense of how things are wired up.
* typeorm - with routing-controller-extensions (decorators)
  * [routing-controllers](https://github.com/typeorm/typeorm-routing-controllers-extensions) - favoring inversify-express-utils annotations instead
  * [custom repositories](http://typeorm.io/#/custom-repository) - plays nicer with services layer
* integrate with MySQL
* helmet - basic security
* swagger (tbd)

## Architectural Hmms?...
* usage of aync container module (Inversify) to create connection to db vs repositories handling responsibility.
  * initial pre-load connection vs ad hoc connections per repositories
  * going with async pre-load

## FE stack
* Vue.js for client

## Testing
* mocha / chai for testing

## documentation
* Swagger


# API Design

| Resource | GET (Read) | POST (Create) | PUT (Update) | DELETE (Delete) |
| --- | --- | --- | --- | --- |
| /games | returns all games | create new game with auto-generated UUID PK_id | N/A | N/A | 
| /games/:game_id | returns specific game | N/A (405) | update specific game (e.g. rain delay)| delete specific game | 
| /games/:game_id/scoring | returns all scoring events for specific game | add scoring event to specific game with FK_game_id | update scoring event for specific game (e.g. post call review) | delete scoring event for specific game |



## Versioning

* URL vs header? going with URL versioning -> /api/v1/



