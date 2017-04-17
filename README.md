When using Webpack with bundle-loader and style-loader, I've been unable to automatically split CSS.

This has led to leveraging allChunks: true (and thus preloading unnecessary CSS with initial payload).

I've had trouble conveying this difficulty over 140 characters on Twitter, so I created this small repo to demonstrate this issue.

My hope is that I'm just missing something obvious.

Installation:
1. Check out the repo.
2. yarn
3. yarn run bundle

This will cause two webpack builds (one with allChunks:true and one without).

You'll notice the one with allChunks:true is about 2x the size of the other, and contains both the bundle-loaded routes css.

Here's the question... how do you avoid this?