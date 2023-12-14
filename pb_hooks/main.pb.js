onModelAfterCreate((e) => {
  console.log(e.model.tableName(), "create");
});

onModelAfterUpdate((e) => {
  console.log(e.model.tableName(), "update");
});

onModelAfterDelete((e) => {
  console.log(e.model.tableName(), "delete");
});
