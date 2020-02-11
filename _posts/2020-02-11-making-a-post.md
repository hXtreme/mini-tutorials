---
layout: post
title:  "Making a Post!"
date:   2020-02-11 13:00:00 -0500
categories: tutorial update
---

You’ll find this post in the `_posts` directory. You can use this file as a starting point for creating a new post.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. 

Take a look at the source for this post to get an idea about how it works but, for a typical tutorial it should look something like the following:

```md
---
layout: post
title:  "Cool new tutorial!"
date:   YYYY-MM-DD HH:MM:SS TIMEZONE_OFFSET
categories: tutorial update
---
```


Jekyll also offers powerful support for code snippets (which may come in handy when markdown isn't enough):

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

If you have any questions or comments regarding this blog you can direct them to [{{ site.github.owner_name }}]({{ site.github.owner_url }}) by [opening an issue]({{ site.github.issues_url }}/new/choose) on github.

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. If you have questions regarding Jekyll, you can ask them on [Jekyll Talk][jekyll-talk].


[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
