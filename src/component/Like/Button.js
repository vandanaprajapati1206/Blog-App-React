import React from "react";
import ClassNames from "classnames";
import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      initLike: 0,
      initDislike: 0
    }

    this.onLikeClick = this.onLikeClick.bind(this);
    this.onDisLikeClick = this.onDisLikeClick.bind(this);

  }

  onLikeClick() {
    if(!this.state.disliked) {
      this.setState({
        liked: !this.state.liked
      });
    } else {
      this.setState({
        liked: true,
        disliked: false
      });
    }
  }

  render() {
    const classLikeButton = ClassNames({
      "like-button": true,
      "liked": this.state.liked
    });


    return (
      <div>
        <span className={classLikeButton}
        onClick={this.onLikeClick}>
          Like |
          <span className="likes-counter">
            {this.state.liked ? this.state.initLike + 1 : this.state.initLike}
          </span>
        </span>
      </div>  
    );
  }

}

export default Button;