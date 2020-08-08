import React, { Component } from "react";
import Instagram from "./../lib/Instagram";
import Media from "./Media";

class Feed extends Component {
  static defaultProps = {
    className: "",
    loadingClassName: "",
    getFeedFn: Instagram.getFeed,
  };

  constructor(props) {
    super(props);

    this.state = { loading: true, media: [] };
  }

  componentDidMount() {
    this.props
      .getFeedFn(this.props.username)
      .then((media) => this.setState({ loading: false, media: media }))
      .catch(() => this.setState({ loading: false, media: [] }));
  }

  render() {
    if (this.state.loading)
      return (
        <div
          className={[this.props.className, this.props.loadingClassName].join(
            " "
          )}
        ></div>
      );
    return (
      <div className={this.props.className}>
        {this.state.media.map((media, index) => (
          <Media key={index} src={media.src} url={media.url} alt={media.alt} />
        ))}
      </div>
    );
  }
}

export default Feed;
