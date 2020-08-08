import Instagram from "./Instagram";

describe("#getFeed", async () => {
  it("returns empty array", async () => {
    global.fetch = (url) => {
      return Promise.resolve({
        text: () => {
          return "bad response";
        },
      });
    };

    expect(await Instagram.getFeed("foo")).toEqual([]);
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
