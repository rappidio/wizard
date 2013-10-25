define(['js/data/Entity'], function (Entity) {

  return Entity.inherit('app.entity.TimeConfiguration', {

    schema: {
      timeZone: String,
      ntpServer: {
        required: false,
        type: String
      }
    },

    defaults: {
      timeZone: '(GMT+00:00) UTC',
      ntpServer: ''
    }

  });

});
