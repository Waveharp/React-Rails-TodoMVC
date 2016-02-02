Rails.application.routes.draw do

  # Jasmine (for React unit testing)
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)

  # Root route
  root "welcome#index"

end
