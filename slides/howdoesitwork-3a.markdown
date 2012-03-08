# Client-side authentication

<pre class="brush: ruby">
  # Login endpoint for client side flow
  # Takes a token paremeter and creates a user if necessary
  post "/auth" do
    client = Facebook.exchange_token(params[:token])
    user = User.from_facebook(client)
    session[:user] = user.uid
    redirect '/'
  end

  class Facebook
    # Refresh short-lived token with a long-lived one
    def self.exchange_token(token)
      res = access_token(:grant_type => "fb_exchange_token", :fb_exchange_token => token)
      new(parse_token(res.body))
    end
  end
</pre>