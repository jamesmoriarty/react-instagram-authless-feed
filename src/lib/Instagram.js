class Instagram {
  static getFeed(userName) {
    const proxyUrl = (url) => {
      return (
        "https://images" +
        ~~(Math.random() * 3333) +
        "-focus-opensocial.googleusercontent.com/gadgets/proxy?container=fb&url=" +
        url
      );
    };

    const mapMedia = (json) => {
      try {
        const thumbnailIndex = (node) => {
          node.thumbnail_resources.forEach((item, index) => {
            if (item.config_width === 640) {
              return index;
            }
          });

          return 4; // MAGIC
        };

        const url = (node) => {
          return "https://www.instagram.com/p/" + node.shortcode;
        };

        const src = (node) => {
          switch (node.__typename) {
            case "GraphVideo":
              return node.thumbnail_src;
            case "GraphSidecar":
            default:
              return node.thumbnail_resources[thumbnailIndex(node)].src;
          }
        };

        const alt = (node) => {
          if (
            node.edge_media_to_caption.edges[0] &&
            node.edge_media_to_caption.edges[0].node
          ) {
            return node.edge_media_to_caption.edges[0].node.text;
          } else if (node.accessibility_caption) {
            return node.accessibility_caption;
          } else {
            return "";
          }
        };

        const edges =
          json.entry_data.ProfilePage[0].graphql.user
            .edge_owner_to_timeline_media.edges;

        return edges.map((edge) => {
          return {
            alt: alt(edge.node),
            url: url(edge.node),
            src: src(edge.node),
          };
        });
      } catch (err) {
        throw Error("cannot map media array");
      }
    };

    const getJSON = (body) => {
      try {
        const data = body
          .split("window._sharedData = ")[1]
          .split("</script>")[0];
        return JSON.parse(data.substr(0, data.length - 1));
      } catch (err) {
        throw Error("cannot parse response body");
      }
    };

    return fetch(proxyUrl("https://www.instagram.com/" + userName + "/"))
      .then((resp) => resp.text())
      .then((body) => getJSON(body))
      .then((json) => mapMedia(json));
  }
}

export default Instagram;
