import Instagram from "./Instagram";

const edge =
    '{"node":{"__typename":"GraphImage","id":"2369795963156206899","shortcode":"CDjNN9uFJUz","dimensions":{"height":1080,"width":1080},"display_url":"https://instagram.fmel8-1.fna.fbcdn.net/v/t51.2885-15/e35/116908564_318537832724621_6986842012601040626_n.jpg?_nc_ht=instagram.fmel8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=1jfXjgFWWrgAX_72g2z&oh=326cae3299db6d02d0211fa079e00020&oe=5F577A75","edge_media_to_tagged_user":{"edges":[]},"fact_check_overall_rating":null,"fact_check_information":null,"gating_info":null,"media_overlay_info":null,"media_preview":"ACoqvbacFqXbS4HSt7mNiILTgtS7adtqbjsRBadtqULS7aVx2MGG9mj5lDOPTH/1qjnumdt0aEHryv5c1ZDt25+lO8zHXP5Vze0fb8TWxSF1OTu+ZS2MkDrjp2q4NSkAwUJIxyB1/wAKesnvR5nOOaXtX2/r7h2HNqT7SPLbceMryB79KoG5uTz8/wCv+FXmfacfz/xoDse1L2j7fiFihuUHg/l9euffp+NPWbacHLD39h+dSBQEOAOh/mKikAEgx6f0NLfQBTOvZTgc9McZ65p5kJOQMgY6478D/wCvSSnDgDpz/KnMBkf8B/kanQQhcYOeMcnH4jj16YqLcnqfzP8AjU90AFGOOR/OqFOKuDP/2Q==","owner":{"id":"9186429","username":"jamespaulmoriarty"},"is_video":false,"accessibility_caption":"Photo by James Moriarty in St Kilda, Victoria. Image may contain: sky, grass, flower, outdoor and nature","edge_media_to_caption":{"edges":[]},"edge_media_to_comment":{"count":0},"comments_disabled":false,"taken_at_timestamp":1596721714,"edge_liked_by":{"count":2},"edge_media_preview_like":{"count":2},"location":{"id":"753558458","has_public_page":true,"name":"St Kilda, Victoria","slug":"st-kilda-victoria"},"thumbnail_src":"https://instagram.fmel8-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116908564_318537832724621_6986842012601040626_n.jpg?_nc_ht=instagram.fmel8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=1jfXjgFWWrgAX_72g2z&oh=c18698cd5f2f95150127b4c1c62aa571&oe=5F595ACF","thumbnail_resources":[{"src":"https://instagram.fmel8-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/116908564_318537832724621_6986842012601040626_n.jpg?_nc_ht=instagram.fmel8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=1jfXjgFWWrgAX_72g2z&oh=b144f6475375ebf3712868d4bc2c869f&oe=5F5B31CC","config_width":150,"config_height":150},{"src":"https://instagram.fmel8-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/116908564_318537832724621_6986842012601040626_n.jpg?_nc_ht=instagram.fmel8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=1jfXjgFWWrgAX_72g2z&oh=83d7fc28316aeb828cac4b645c4a462a&oe=5F5862CE","config_width":240,"config_height":240},{"src":"https://instagram.fmel8-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/116908564_318537832724621_6986842012601040626_n.jpg?_nc_ht=instagram.fmel8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=1jfXjgFWWrgAX_72g2z&oh=83842b641e7a64d29d7d03dccacf92cd&oe=5F588934","config_width":320,"config_height":320},{"src":"https://instagram.fmel8-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/116908564_318537832724621_6986842012601040626_n.jpg?_nc_ht=instagram.fmel8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=1jfXjgFWWrgAX_72g2z&oh=b92ade96bd3791fafc362c6d6a3139b4&oe=5F58BDF5","config_width":480,"config_height":480},{"src":"https://instagram.fmel8-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116908564_318537832724621_6986842012601040626_n.jpg?_nc_ht=instagram.fmel8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=1jfXjgFWWrgAX_72g2z&oh=c18698cd5f2f95150127b4c1c62aa571&oe=5F595ACF","config_width":640,"config_height":640}]}}',
  body =
    'window._sharedData = {"entry_data":{"ProfilePage":[{"graphql":{"user":{"edge_owner_to_timeline_media":{"edges":[' +
    edge +
    "]}}}}]}}}</script>";

describe("#getFeed", async () => {
  it("throws error", async () => {
    global.fetch = (url) => {
      return Promise.resolve({
        text: () => {
          return "bad response";
        },
      });
    };

    try {
      await Instagram.getFeed("foo");
    } catch (e) {
      expect(e.message).toBe("Cannot parse response body");
    }
  });

  it("returns media array", async () => {
    global.fetch = (url) => {
      return Promise.resolve({
        text: () => {
          return body;
        },
      });
    };

    expect(await Instagram.getFeed("foo")).toEqual([
      {
        alt:
          "Photo by James Moriarty in St Kilda, Victoria. Image may contain: sky, grass, flower, outdoor and nature",
        src:
          "https://instagram.fmel8-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/116908564_318537832724621_6986842012601040626_n.jpg?_nc_ht=instagram.fmel8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=1jfXjgFWWrgAX_72g2z&oh=c18698cd5f2f95150127b4c1c62aa571&oe=5F595ACF",
        url: "https://www.instagram.com/p/CDjNN9uFJUz",
      },
    ]);
  });
});
