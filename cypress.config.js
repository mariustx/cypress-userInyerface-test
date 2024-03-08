const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Initialize any necessary variables here
      /*
      let client; // Initialize client
      let port = 9222;

      on('task', {
        nativeClick: async ({ x: clickX, y: clickY }) => {
          try {
            // Establish CDP connection if not already done
            client = client || await CDP({ host: 'userinyerface.com', port: 9222 });

            // Assuming you've already identified the correct coordinates (clickX, clickY)
            // for the "Upload" button (adjust as needed)
            const uploadButtonSelector = '.avatar-and-interests__upload-button';

            // Get the position of the upload button
            const { x, y } = await client.DOM.getBoxModel({
              nodeId: await client.DOM.querySelector({ selector: uploadButtonSelector }),
            });

            // Simulate a mouse click on the file input
            await client.Input.dispatchMouseEvent({
              type: 'mousePressed',
              x,
              y,
              button: 'left',
              clickCount: 1,
            });
            await client.Input.dispatchMouseEvent({
              type: 'mouseReleased',
              x,
              y,
              button: 'left',
              clickCount: 1,
              buttons: 1,
            });

            return Promise.resolve(true);
          } catch (error) {
            console.error('Error in nativeClick:', error);
            return Promise.reject(error);
          }
        },
      });
      */
    },
  },
});
