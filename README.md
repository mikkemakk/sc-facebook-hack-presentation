# SoundCloud API presentation
A slide deck to present the SoundCloud API

## How to use

Clone the repository from Github:

    $ git clone git@github.com:soundcloud/soundcloud-api-presentation.git

This repository has two remote's configured, to push to Github:

    $ git push origin master

Make sure you're in the project's folder. This presentation tool relies on a gem called Shining[1], install it here:

    $ gem install shining

The slides are all written in Markdown[2], but you can add HTML in there as well to show code examples. Slides are indexed in config.json, where you can manage the order and some settings.

To add a slide, do

    $ shine slide SLIDENAME markdown

This will add a new slide to the end of the list, you can correct the order in config.json later.


You can start a small server to run your presentation locally, do

    $ shine go

The server will start, you can view your brand new presentation at [http://localhost:4567/](http://localhost:4567/).

## Some considerations

SyntaxHighlighter is included in the template, insert your code like this:

    $ <pre class="brush: html"> console.log('hello world'); </pre>

When demonstrating client side code (e.g. iframes), make sure the iframe is packed with the presentation. Browsers will complain if you execute scripts in iframes that are not on the same domain.

## Bonus: deploy to Heroku!

Ping Roel or Omid to get yourself added to the project as a collaborator. This assumes you have installed the Heroku gem and setup your credentials on your system. If not, head to Heroku[7] and sign up. Test your presentation locally and make sure you've catched all errors and typo's. Deploy to Heroky by doing:

    $ shine deploy

Done. View your presentation at http://soundcloud-api-presentation.heroku.com/ and rock the stage!




## Resources

[1] [http://shining.heroku.com/](Shining)

[2] [http://daringfireball.net/projects/markdown/](Markdown)

[2] [http://www.slideshare.net/ericw/soundcloud-api-dos-and-donts-9540174](API dos and dont's by Eric)

[3] [http://dl.dropbox.com/u/12477597/Permanent/SoundCloudAPI.html](HTML5 presentation by Johannes)

[4] [http://www.wait-till-i.com/2011/04/11/the-road-to-being-a-kick-ass-public-speaker/](The road to being a kick-ass public speaker)

[5] [http://developer-evangelism.com/](Developer Evangelism; worth checking out as well)

[6] [http://soundcloud-api-presentation.heroku.com/](http://soundcloud-api-presentation.heroku.com/)

[7] [http://devcenter.heroku.com/articles/quickstart](http://devcenter.heroku.com/articles/quickstart)