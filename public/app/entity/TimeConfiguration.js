define(['js/data/Entity'], function (Entity) {

  return Entity.inherit('app.entity.TimeConfiguration', {

    schema: {
      timestamp: Date,
      timeZone: String,
      useNtp: Boolean
    },

    defaults: {
      timestamp: null,
      timeZone: null,
      useNtp: false
    }

  });

});