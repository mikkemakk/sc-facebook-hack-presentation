# Authenticated Referrals

<pre class="brush: js">
  $(function() {
    FB.init({
      appId   : App.appId,
      cookie  : true,
      oauth   : true
    });

    // If user is not logged in, we try to authenticate from Facebook.
    if (!App.userId) {
    
      // Query Facebook API for authentication data
      FB.getLoginStatus(function(response) {
      
        // The user already connected to the app, so we just
        // need to send the access token to login the user.
        if (response.status === 'connected') {
          $('#access-token').val(response.authResponse.accessToken);
          $('#auth-form').submit();
        } else {
          // No connection yet, redirect to Auth Dialog
          window.location = App.authUrl;
          // https://www.facebook.com/dialog/oauth?
          // scope=user_actions:soundcloud&
          // redirect_uri=https://mobile-hack.herokuapp.com/auth
        }
      });
    }
  });
</pre>