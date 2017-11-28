# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

# Layouts
# https://middlemanapp.com/basics/layouts/

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# title
activate :title, site: 'Ibiza Royal Beach - Apartment "Casa Bella"', separator: ' — '

# live reload
activate :livereload, apply_js_live: false

# sprockets
activate :sprockets

# pretty url
activate :directory_indexes

# With alternative layout
page '/apartment.html', layout: 'layout_default'
page '/book-request.html', layout: 'layout_default'

# Proxy pages
# https://middlemanapp.com/advanced/dynamic-pages/

# proxy(
#   '/this-page-has-no-template.html',
#   '/template-file.html',
#   locals: {
#     which_fake_page: 'Rendering a fake page with a local variable'
#   },
# )

# Helpers
# Methods defined in the helpers block are available in templates
# https://middlemanapp.com/basics/helper-methods/

helpers do
  def image_resources_in(dir)
    sitemap.resources.select do |resource|
      resource_dir = File.dirname(resource.path)
      resource_ext = File.extname(resource.path).downcase
      dir == resource_dir
    end
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end
