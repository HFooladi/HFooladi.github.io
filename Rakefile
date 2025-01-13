task :default => %i[build]

task :build do
  sh 'jekyll build --profile --trace --config _config.yml,_config.dev.yml'
end

task :serve do
  sh 'jekyll serve --watch --source _site --destination . --config _config.yml,_config.dev.yml'
end