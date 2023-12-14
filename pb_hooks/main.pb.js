onModelAfterCreate((e) => {
  console.log(e.model.tableName(), "create");
}, "_collections");

onModelAfterUpdate((e) => {
  console.log(e.model.tableName(), "update");
}, "_collections");

onModelAfterDelete((e) => {
  console.log(e.model.tableName(), "delete");
}, "_collections");
