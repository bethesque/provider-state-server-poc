# Provider State Service proof of concept

This is the bare bones of a proof of concept to allow us to prove that we can use the Ruby pact verification code along with a javascript server that responsible for setting up the "provider states" for the application under test.

## Done

* Set up the Ruby part.

## TODO

* Create a javascript server that will set up the provider states for the application under test. It should have an endpoint `http://localhost:xxxx/set-up` that accepts the form parameter "provider_state" (maybe this should be a JSON document to future proof it, but let's get this going for now.)

* Write a javascript "Animal service" that fulfils the pact specified for it by the Zoo App.

## Usage

    $ bundle
    $ bundle exec rake pact:verify:javascript

## Road map

If this works, then we can:

* Package the pact verification task using Travelling Ruby and make it installable via npm (like the pact mock service)
* Add some command line parameter to the pact verify task so that we can specify:
 * The base URL of the application under test
 * The base URL of the provider state server
 * The pact URL

    $ pact-verify --pact ./spec/pacts/zoo_app-animal_service.json --app-base-url http://localhost:8080 --provider-state-server-base-url http://localhost:8181/set-up
