# Collusion Server Zero

This is the server for testing out ideas for the Collusion collaborative server. This is not an actual product, or a stable environment, or providing any guarantees about anything.

## Requirements

Built using the following tools:

* Grunt (npm install -g grunt)
* Obloq ( npm install https://github.com/dethe/obloq/tarball/unstable)
* AWSbox (nmp install awsbox)

Once you have these installed, `grunt` should build the templates, scripts, stylesheet, and docs. The actual code is embedded in Markdown documents in the bloqs\ directory. The build and docs directories are dynamically generated, don't bother changing anything in there as they are deleted and rebuilt whenever you run grunt. You'll want to create a symbolic link from node_modules/obloq/lib/ to lib/ so that the docs can find their stylesheets and scripts (that's a bug in obloq, which I should fix). Also, docs are loaded via Ajax, so you'll want to run a local http server (if you don't already) and view the docs through that rather than from a file:/// url.