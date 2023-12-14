onModelAfterCreate((e) => {
  console.log(e.model, "create");
  const cmd = $os.cmd("ls", "-sl", "/pb/pb_migrations");
  const output = String.fromCharCode(...cmd.output());
  console.log(output);
});

onModelAfterUpdate((e) => {
  console.log(e.model.tableName(), "update");
});

onModelAfterDelete((e) => {
  console.log(e.model.tableName(), "delete");
});
