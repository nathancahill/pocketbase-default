migrate(
  (db) => {
    const dao = new Dao(db);

    const admin = new Admin();
    admin.email = process.env.PB_EMAIL;
    admin.setPassword(process.env.PB_PASSWORD);

    dao.saveAdmin(admin);

    console.log("Created admin account");
  },
  (db) => {
    const dao = new Dao(db);

    try {
      const admin = dao.findAdminByEmail(process.env.PB_EMAIL);

      dao.deleteAdmin(admin);
    } catch (_) {}
  }
);
