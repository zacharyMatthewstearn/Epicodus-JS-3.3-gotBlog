import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  subtitle: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  snippet: DS.attr(),
  content: DS.attr(),
  image: DS.attr()
});
