migrate(
  (db) => {
    const dao = new Dao(db);

    const admin = new Admin();
    admin.email = process.env.PB_EMAIL;
    admin.setPassword(process.env.PB_PASSWORD);

    dao.saveAdmin(admin);
  },
  (db) => {
    const dao = new Dao(db);

    try {
      const admin = dao.findAdminByEmail("test@example.com");

      dao.deleteAdmin(admin);
    } catch (_) {}
  }
);
