import React, { Component } from "react";
import Instagram from "./../lib/Instagram";
import Media from "./Media";

class Feed extends Component {
  static defaultProps = {
    classname: "",
    classnameLoading: "",
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
    const classname = this.state.loading
      ? [this.props.classname, this.props.classnameLoading].join(" ")
      : this.props.classname;

    return (
      <div className={classname}>
        {this.state.media.map((media, index) => (
          <Media key={index} src={media.src} url={media.url} alt={media.alt} />
        ))}
      </div>
    );
  }
}

export default Feed;
