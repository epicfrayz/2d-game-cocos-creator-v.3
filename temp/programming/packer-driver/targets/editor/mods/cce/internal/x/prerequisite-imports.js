System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: async function () {
      // Auto generated represents the prerequisite imports of project modules.
      await (async () => {
        const requests = [() => _context.import("file:///C:/Users/qp/test_1/assets/character/player.ts"), () => _context.import("file:///C:/Users/qp/test_1/assets/star/star.ts")];

        for (const request of requests) {
          try {
            await request();
          } catch (_err) {// The error should have been caught by executor.
          }
        }
      })();
    }
  };
});
//# sourceMappingURL=prerequisite-imports.js.map