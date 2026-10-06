const {onSchedule} = require("firebase-functions/v2/scheduler");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

// Runs every minute, forever — on Google's servers, no browser needed.
exports.autoIncrementViews = onSchedule("every 1 minutes", async () => {
  const snap = await db.collection("videos").get();
  const batch = db.batch();
  let changed = 0;

  snap.forEach(doc => {
    const d = doc.data();
    if (d.active === false) return;                 // paused by admin
    if (d.target && d.views >= d.target) return;     // hit the target cap
    const inc = Math.max(1, Math.round(d.ratePerMin || 100));
    batch.update(doc.ref, {
      views: admin.firestore.FieldValue.increment(inc)
    });
    changed++;
  });

  if (changed) await batch.commit();
  console.log(`autoIncrementViews: updated ${changed} video(s)`);
});
