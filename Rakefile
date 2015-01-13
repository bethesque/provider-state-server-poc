require 'pact/provider/proxy/tasks'

Pact::ProxyVerificationTask.new :javascript do | task |
 task.pact_url './spec/pacts/zoo_app-animal_service.json', :pact_helper => './spec/pact_helper'
 task.provider_base_url 'http://localhost:8080'
end