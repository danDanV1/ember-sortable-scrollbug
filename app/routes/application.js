import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{"id":69,"lft":2,"rgt":7,"depth":1,"user_id":3,"title":"Folder 1 reply","type":"folder","url":"#","target":0,"children":[{"id":70,"lft":3,"rgt":4,"depth":2,"user_id":3,"title":"Child gallery 1 reply","type":"gallery","url":"/gallery/child1","target":0,"children":[]},{"id":71,"lft":5,"rgt":6,"depth":2,"user_id":3,"title":"Child gallery 2 reply","type":"gallery","url":"/gallery/child2","target":0,"children":[]}]},{"id":70,"lft":3,"rgt":4,"depth":2,"user_id":3,"title":"Child gallery 1 reply","type":"gallery","url":"/gallery/child1","target":0,"children":[]},{"id":71,"lft":5,"rgt":6,"depth":2,"user_id":3,"title":"Child gallery 2 reply","type":"gallery","url":"/gallery/child2","target":0,"children":[]},{"id":68,"lft":8,"rgt":9,"depth":1,"user_id":3,"title":"Top item reply","type":"gallery","url":"/gallery/test1","target":0,"children":[]},{"id":72,"lft":10,"rgt":11,"depth":1,"user_id":3,"title":"Second item reply","type":"gallery","url":"/gallery/test2","target":0,"children":[]},{"id":73,"lft":12,"rgt":13,"depth":1,"user_id":3,"title":"Item #1","type":"gallery","url":"/gallery/autogen1","target":0,"children":[]},{"id":74,"lft":14,"rgt":15,"depth":1,"user_id":3,"title":"Item #2","type":"gallery","url":"/gallery/autogen2","target":0,"children":[]},{"id":75,"lft":16,"rgt":17,"depth":1,"user_id":3,"title":"Item #3","type":"gallery","url":"/gallery/autogen3","target":0,"children":[]},{"id":76,"lft":18,"rgt":19,"depth":1,"user_id":3,"title":"Item #4","type":"gallery","url":"/gallery/autogen4","target":0,"children":[]},{"id":77,"lft":20,"rgt":21,"depth":1,"user_id":3,"title":"Item #5","type":"gallery","url":"/gallery/autogen5","target":0,"children":[]},{"id":78,"lft":22,"rgt":23,"depth":1,"user_id":3,"title":"Item #6","type":"gallery","url":"/gallery/autogen6","target":0,"children":[]},{"id":79,"lft":24,"rgt":25,"depth":1,"user_id":3,"title":"Item #7","type":"gallery","url":"/gallery/autogen7","target":0,"children":[]},{"id":80,"lft":26,"rgt":27,"depth":1,"user_id":3,"title":"Item #8","type":"gallery","url":"/gallery/autogen8","target":0,"children":[]},{"id":81,"lft":28,"rgt":29,"depth":1,"user_id":3,"title":"Item #9","type":"gallery","url":"/gallery/autogen9","target":0,"children":[]},{"id":82,"lft":30,"rgt":31,"depth":1,"user_id":3,"title":"Item #10","type":"gallery","url":"/gallery/autogen10","target":0,"children":[]},{"id":83,"lft":32,"rgt":33,"depth":1,"user_id":3,"title":"Item #11","type":"gallery","url":"/gallery/autogen11","target":0,"children":[]},{"id":84,"lft":34,"rgt":35,"depth":1,"user_id":3,"title":"Item #12","type":"gallery","url":"/gallery/autogen12","target":0,"children":[]},{"id":85,"lft":36,"rgt":37,"depth":1,"user_id":3,"title":"Item #13","type":"gallery","url":"/gallery/autogen13","target":0,"children":[]},{"id":86,"lft":38,"rgt":39,"depth":1,"user_id":3,"title":"Item #14","type":"gallery","url":"/gallery/autogen14","target":0,"children":[]},{"id":87,"lft":40,"rgt":41,"depth":1,"user_id":3,"title":"Item #15","type":"gallery","url":"/gallery/autogen15","target":0,"children":[]},{"id":88,"lft":42,"rgt":43,"depth":1,"user_id":3,"title":"Item #16","type":"gallery","url":"/gallery/autogen16","target":0,"children":[]},{"id":89,"lft":44,"rgt":45,"depth":1,"user_id":3,"title":"Item #17","type":"gallery","url":"/gallery/autogen17","target":0,"children":[]},{"id":90,"lft":46,"rgt":47,"depth":1,"user_id":3,"title":"Item #18","type":"gallery","url":"/gallery/autogen18","target":0,"children":[]},{"id":91,"lft":48,"rgt":49,"depth":1,"user_id":3,"title":"Item #19","type":"gallery","url":"/gallery/autogen19","target":0,"children":[]},{"id":92,"lft":50,"rgt":51,"depth":1,"user_id":3,"title":"Item #20","type":"gallery","url":"/gallery/autogen20","target":0,"children":[]},{"id":93,"lft":52,"rgt":53,"depth":1,"user_id":3,"title":"Item #21","type":"gallery","url":"/gallery/autogen21","target":0,"children":[]},{"id":94,"lft":54,"rgt":55,"depth":1,"user_id":3,"title":"Item #22","type":"gallery","url":"/gallery/autogen22","target":0,"children":[]},{"id":95,"lft":56,"rgt":57,"depth":1,"user_id":3,"title":"Item #23","type":"gallery","url":"/gallery/autogen23","target":0,"children":[]},{"id":96,"lft":58,"rgt":59,"depth":1,"user_id":3,"title":"Item #24","type":"gallery","url":"/gallery/autogen24","target":0,"children":[]},{"id":97,"lft":60,"rgt":61,"depth":1,"user_id":3,"title":"Item #25","type":"gallery","url":"/gallery/autogen25","target":0,"children":[]},{"id":98,"lft":62,"rgt":63,"depth":1,"user_id":3,"title":"Item #26","type":"gallery","url":"/gallery/autogen26","target":0,"children":[]},{"id":99,"lft":64,"rgt":65,"depth":1,"user_id":3,"title":"Item #27","type":"gallery","url":"/gallery/autogen27","target":0,"children":[]},{"id":100,"lft":76,"rgt":77,"depth":1,"user_id":3,"title":"Item #28","type":"gallery","url":"/gallery/autogen28","target":0,"children":[]},{"id":131,"lft":128,"rgt":129,"depth":1,"user_id":3,"title":"Item #29","type":"gallery","url":"/gallery/autogen29","target":0,"children":[]},{"id":132,"lft":130,"rgt":131,"depth":1,"user_id":3,"title":"Item #30","type":"gallery","url":"/gallery/autogen30","target":0,"children":[]}];
  },


  actions: {
    reorderItems(groupModel, newOrderModels, draggedModel) {
      this.set('currentModel.[]', newOrderModels);

      //record which model was just dragged.
      this.set('currentModel.justDragged', draggedModel);

    }
  }
});