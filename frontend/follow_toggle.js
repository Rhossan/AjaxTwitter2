const APIUtil = require('./api_util');


class FollowToggle {
  constructor(el,options){
    this.$el = $(el);
    this.userId = this.$el.data('user-id') || options.userId;
    this.followState = (this.$el.data('initial-follow-state') ||
                                      options.followState);

    this.render();
    this.$el.on('click', this.handleClick.bind(this));

  }


}


module.exports = FollowToggle;
