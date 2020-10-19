import React from "react";
import { create, act } from "react-test-renderer";
import Feed from "./Feed";

describe("#render", async () => {
  describe("without limit", async () => {
    it("return html", async () => {
      const getFeedFn = (userName) =>
        Promise.resolve([
          {
            url: "https://placeholder.com/640",
            src: "https://via.placeholder.com/640",
            alt: "640x640px image from placeholder.com",
          },
        ]);

      let component;

      await act(async () => {
        component = create(
          <Feed
            className="Feed"
            userName="jamespaulmoriarty"
            getFeedFn={getFeedFn}
          />
        );
      });

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  describe("with limit", async () => {
    it("return html", async () => {
      const getFeedFn = (userName) =>
        Promise.resolve([
          {
            url: "https://placeholder.com/640",
            src: "https://via.placeholder.com/640",
            alt: "640x640px image from placeholder.com",
          },
          {
            url: "https://placeholder.com/640",
            src: "https://via.placeholder.com/640",
            alt: "640x640px image from placeholder.com",
          },
        ]);

      let component;

      await act(async () => {
        component = create(
          <Feed
            className="Feed"
            userName="jamespaulmoriarty"
            getFeedFn={getFeedFn}
            limit="1"
          />
        );
      });

      expect(component.toJSON()).toMatchSnapshot();
    });
  });

  it("returns error html", async () => {
    class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);

        this.state = { hasError: false };
      }

      static getDerivedStateFromError(error) {
        return { hasError: true };
      }

      componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
      }

      render() {
        if (this.state.hasError) {
          return <div>Something went wrong.</div>;
        }

        return this.props.children;
      }
    }

    const getFeedFn = (userName) => Promise.reject(new Error("fail"));

    let component;

    await act(async () => {
      component = create(
        <ErrorBoundary>
          <Feed
            className="Feed"
            userName="jamespaulmoriarty"
            getFeedFn={getFeedFn}
          />
        </ErrorBoundary>
      );
    });

    expect(component.toJSON()).toMatchSnapshot();
  });
});
