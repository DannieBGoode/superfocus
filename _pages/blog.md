---
permalink: "/blog/"
layout: body
white_header: true
lang: en
ref: blog
---

<main class="content dark">

      <div class="blog-title">
        <h1>SUPERFOCUS <br>BLOG</h1>
      </div>

      <div class="inner">

              <div class="grid-view">
                  {% assign posts = site.posts | where:"lang", page.lang %}
                  {% for post in posts %}
                        {%  include post_grid.html %}
                  {% endfor %}
              </div>

              {% if paginator.total_pages > 1 %}
              <nav class="pagination">
                  <h2 class="screen-reader-text">Navigation</h2>
                  {% if paginator.previous_page %}
                  <a href="{{ paginator.previous_page_path | prepend: site.baseurl }}" class="newer-posts icon-chevron-left square fill-horizontal"><span class="screen-reader-text">Next</span></a>
                  {% endif %}
                  <span class="page-number">Page {{ paginator.page }} of {{ paginator.total_pages }}</span>
                  {% if paginator.next_page %}
                  <a href="{{ paginator.next_page_path | prepend: site.baseurl }}" class="older-posts icon-chevron-right square fill-horizontal"><span class="screen-reader-text">Previous</span></a>
                  {% endif %}
              </nav><!-- .pagination -->
              {% endif %}
      </div><!-- .inner -->
</main>

