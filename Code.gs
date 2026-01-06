
function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('Dashboard PDB - Universitas Analitik')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) // Wajib agar bisa di-embed di Google Sites
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
