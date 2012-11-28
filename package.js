Package.describe({
  summary: "JQuery-ui"
});

Package.on_use(function (api) {
  api.use(['mongo-livedata']);

  api.add_files('jquery-ui.js', 'client');
});
