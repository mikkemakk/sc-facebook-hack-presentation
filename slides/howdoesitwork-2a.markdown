# Server side authentication

<pre class="brush: ruby">
  # Callback endpoint for server side flow
  # Takes a OAuth code parameter and creates a user if necessary
  get "/auth" do
    client = Facebook.exchange_code(params[:code], url('/auth'))
    user = User.from_facebook(client)
    session[:user] = user.uid
    redirect '/'
  end

  class Facebook
    # Request access token for given authorization code
    def self.exchange_code(code, redirect_uri)
      res = access_token(:code => code, :redirect_uri => redirect_uri)
      new(parse_token(res.body))
    end
  end
</pre>