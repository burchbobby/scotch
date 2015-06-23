Scotch = new Mongo.Collection('scotch');

/*****************************************************************************/
/* Scotch: Schema */
/*****************************************************************************/
ScotchSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Name'
  },
  description: {
    type: String,
    label: 'Description',
    optional: true
  },
  type: {
    type: String,
    label: 'Type',
    optional: true
  },
  region: {
    type: String,
    label: 'Region',
    optional: true
  },
  age: {
    type: Number,
    label: 'Age',
    optional: true
  },
  price: {
    type: Number,
    label: 'Price'
  }
});

/*****************************************************************************/
/* Scotch: Allow/Deny */
/*****************************************************************************/
if (Meteor.isServer) {
  Scotch.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Scotch.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
