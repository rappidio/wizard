define(['js/data/Entity'], function (Entity) {

  return Entity.inherit('app.entity.HostnameConfiguration', {

    schema: {
      hostname: String
    },

    defaults: {
      hostname: ''
    }

  });

});
