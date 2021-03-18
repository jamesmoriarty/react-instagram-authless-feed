"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Instagram = /*#__PURE__*/function () {
  function Instagram() {
    _classCallCheck(this, Instagram);
  }

  _createClass(Instagram, null, [{
    key: "getFeed",
    value: function getFeed(userName) {
      var mapMedia = function mapMedia(json) {
        try {
          var thumbnailIndex = function thumbnailIndex(node) {
            node.thumbnail_resources.forEach(function (item, index) {
              if (item.config_width === 640) {
                return index;
              }
            });
            return 4; // MAGIC
          };

          var _url = function _url(node) {
            return "https://www.instagram.com/p/" + node.shortcode;
          };

          var src = function src(node) {
            switch (node.__typename) {
              case "GraphVideo":
                return node.thumbnail_src;

              case "GraphSidecar":
              default:
                return node.thumbnail_resources[thumbnailIndex(node)].src;
            }
          };

          var alt = function alt(node) {
            if (node.edge_media_to_caption.edges[0] && node.edge_media_to_caption.edges[0].node) {
              return node.edge_media_to_caption.edges[0].node.text;
            } else if (node.accessibility_caption) {
              return node.accessibility_caption;
            } else {
              return "";
            }
          };

          var edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges;
          return edges.map(function (edge) {
            return {
              alt: alt(edge.node),
              url: _url(edge.node),
              src: src(edge.node)
            };
          });
        } catch (err) {
          throw Error("cannot map media array");
        }
      };

      var getJSON = function getJSON(body) {
        try {
          var data = body.split("window._sharedData = ")[1].split("</script>")[0];
          return JSON.parse(data.substr(0, data.length - 1));
        } catch (err) {
          throw Error("cannot parse response body");
        }
      };

      var url = function url() {
        return "https://images" + ~~(Math.random() * 3333) + "-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=https://www.instagram.com/" + userName + "/";
      };

      var fetchWithRetry = function fetchWithRetry(n, err) {
        if (n <= 1) throw err;
        return fetch(url()).then(function (resp) {
          return resp.text();
        }).then(function (body) {
          return getJSON(body);
        }).then(function (json) {
          return mapMedia(json);
        })["catch"](function (err) {
          return fetchWithRetry(n - 1, err);
        });
      };

      return fetchWithRetry(5);
    }
  }]);

  return Instagram;
}();

var _default = Instagram;
exports["default"] = _default;