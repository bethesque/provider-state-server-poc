require 'faraday'
require 'cgi'

PROVIDER_STATE_SERVER_PORT = '3333'
PROVIDER_STATE_SERVER_SET_UP_URL = 'http://localhost:' + PROVIDER_STATE_SERVER_PORT + "/set-up"

# Responsible for making the call to the provider state server to set up the state
module ProviderStateServerClient

  def set_up_state provider_state
    puts "Setting up provider state '#{provider_state}' using provider state server at #{PROVIDER_STATE_SERVER_SET_UP_URL}"
    Faraday.post(PROVIDER_STATE_SERVER_SET_UP_URL, {"consumer" => "Zoo App", "provider_state" => provider_state })
  end

end

Pact.configure do | config |
  config.include ProviderStateServerClient
end

Pact.provider_states_for "Zoo App" do
  provider_state "there is an alligator named Mary" do
    set_up do
      set_up_state "there is an alligator named Mary"
    end
  end

  provider_state "there is not an alligator named Mary" do
    set_up do
      set_up_state "there is not an alligator named Mary"
    end
  end

  provider_state "an error occurs retrieving an alligator" do
    set_up do
      set_up_state "an error occurs retrieving an alligator"
    end
  end
end
