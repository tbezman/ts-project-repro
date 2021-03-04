workspace(
    name = "workspace",
    managed_directories = {"@npm": ["node_modules"]},
)


load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive", "http_file")
http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "bfacf15161d96a6a39510e7b3d3b522cf61cb8b82a31e79400a84c5abcab5347",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/3.2.1/rules_nodejs-3.2.1.tar.gz"],
)

###
# NodeJS
###
load("@build_bazel_rules_nodejs//:index.bzl", "node_repositories", "yarn_install")

node_repositories(
    node_repositories = {
        "12.20.1-darwin_amd64": ("node-v12.20.1-darwin-x64.tar.gz", "node-v12.20.1-darwin-x64", "da5d32de2e0f3e82b4bc4a33754a9ceedb3c031f8804e984de89d82074897795"),
        "12.20.1-linux_amd64": ("node-v12.20.1-linux-x64.tar.gz", "node-v12.20.1-linux-x64", "c4d45bf46d4ef4b6a72384dfb0ab6c07aed5750bcd1c2fc9f29c0aaccc6a4363"),
    },
    node_urls = ["https://nodejs.org/dist/v{version}/{filename}"],
    node_version = "12.20.1",
    package_json = ["//:package.json"],
    yarn_repositories = {
        "1.21.0": ("yarn-v1.21.0.tar.gz", "yarn-v1.21.0", "dd17d4e5bc560aa28140038a31fa50603ef76b710fee44e5ec5efbea7ad24c61"),
    },
    yarn_urls = ["https://github.com/yarnpkg/yarn/releases/download/v{version}/{filename}"],
    yarn_version = "1.21.0",
)

yarn_install(
    name = "npm",
    # args = ["--verbose"],
    package_json = "//:package.json",
    strict_visibility = False,
    yarn_lock = "//:yarn.lock",
)
