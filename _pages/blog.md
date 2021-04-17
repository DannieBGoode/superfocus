---
layout: body
permalink: "/blog/"
---

<main class="content">

  <div class="site-content">
      <div class="inner">
          <main class="site-main"> 

              <div class="grid-view">
                  {% for post in paginator.posts %}
                  {% if post.lang == lang %}
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
          </main><!-- .site-main -->
      </div><!-- .inner -->
  </div><!-- .site-content -->
</main>

