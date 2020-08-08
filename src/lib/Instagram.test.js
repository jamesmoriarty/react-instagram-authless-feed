import Instagram from "./Instagram";

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
      expect(e.message).toBe("Cannot read property 'split' of undefined");
    }
  });

  it("returns empty array", async () => {
    global.fetch = (url) => {
      return Promise.resolve({
        text: () => {
          return 'window._sharedData = {"entry_data":{"ProfilePage":[{"graphql":{"user":{"edge_owner_to_timeline_media":{"edges":[]}}}}]}}}</script>';
        },
      });
    };

    expect(await Instagram.getFeed("foo")).toEqual([]);
  });
});
