---
layout: body
permalink: "/blog/"
lang: en
---

<main class="content dark">

      <div class="blog-title" style="font-size: 3.125rem;width: 50%;margin-top: 50px;margin-bottom: 60px; color: white">
        <h1>SUPERFOCUS <br>BLOG</h1>
      </div>

      <div class="inner">

              <div class="grid-view">
                  {% for post in site.posts %}
                    {% if post.lang == page.lang %}
                        {%  include post_grid.html %}
                    {% endif %}
                  {% endfor %}
              </div>

              {% if paginator.total_pages > 1 %}
              <nav class="pagination">
                  <h2 class="screen-reader-text">Navegación</h2>
                  {% if paginator.previous_page %}
                  <a href="{{ paginator.previous_page_path | prepend: site.baseurl }}" class="newer-posts icon-chevron-left square fill-horizontal"><span class="screen-reader-text">Siguientes</span></a>
                  {% endif %}
                  <span class="page-number">Página {{ paginator.page }} de {{ paginator.total_pages }}</span>
                  {% if paginator.next_page %}
                  <a href="{{ paginator.next_page_path | prepend: site.baseurl }}" class="older-posts icon-chevron-right square fill-horizontal"><span class="screen-reader-text">Anteriores</span></a>
                  {% endif %}
              </nav><!-- .pagination -->
              {% endif %}
      </div><!-- .inner -->
</main>

