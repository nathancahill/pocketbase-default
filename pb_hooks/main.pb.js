onModelAfterCreate((e) => {
  console.log(e.model.tableName(), "create");
  const cmd = $os.cmd("ls", "/pb/pb_migrations");
  const output = cmd.output();
  console.log(output);
});

onModelAfterUpdate((e) => {
  console.log(e.model.tableName(), "update");
});

onModelAfterDelete((e) => {
  console.log(e.model.tableName(), "delete");
});
