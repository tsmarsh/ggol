(defproject tailoredshapes/gollum "0.1.0"
  :description "Game of Life Library"
  :url "http://github.com/gol"
  :license "MIT"
  :deploy-repositories [["releases" :clojars]
                        ["snapshots" :clojars]]
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.520"]]
  :plugins [[lein-cljsbuild "1.1.7"]]

  :clojurescript? true
  :repl-options {:init-ns gollum.core})
