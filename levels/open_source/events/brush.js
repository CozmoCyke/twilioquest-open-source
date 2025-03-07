const { useFlameThrower } = require("./flamethrower");

const barrierPrereqMap = {
  forest1BrushLower: "09_make_pr",
};

const destroyBrush = (world) => (brushKey) => {
  world.destroyEntities(brushKey);
  world.destroyEntities(`${brushKey}_flame`);
};

async function updateBrushState(event, world, worldState) {
  if (event.name === "mapDidLoad" || event.name === "levelDidLoad") {
    worldState.brush.brushBurned.forEach(destroyBrush(world));
  }

  if (event.name === "playerDidInteract" && event.target.type === "brush") {
    // TODO: Temp disable for testing
    if (!worldState.flameUnlocked) {
      world.showNotification(
        `J'espère que la <em>La flamme du Logiciel Libre</em> pourra m'aider à brûler cette broussaille.`
      );
      return;
    }

    if (
      barrierPrereqMap[event.target.key] &&
      !world.isObjectiveCompleted(barrierPrereqMap[event.target.key])
    ) {
      // If some brush key has a prereq, don't unlock the brush
      world.showNotification(
        `Hmm. Je n'arrive pas à traverser cette broussaille même avec <em>La Flamme du Logiciel Libre</em>. Je dois aller plus loin dans la forêt et revenir plus tard.`
      );
      return;
    }

    await useFlameThrower(world, event.target.key);

    // TODO:
    // Something else seems to be going wrong here besides this...
    //
    // We need to ensure we've hidden the player's exclamation point.
    //
    // The player probably has the exclamation point popped since they're
    // in interaction range of the bushes.
    //
    // Once the bushes are destroyed, the player's exclamation point won't
    // be closed naturally.
    // world.__internals.level.player.overlappingPoi.action("notOverlapping");
    // world.__internals.level.player.inRangeObject = undefined;

    worldState.brush.brushBurned.push(event.target.key);

    destroyBrush(world)(event.target.key);
  }
}

function renderBrush(world, worldState) {}

module.exports = { renderBrush, updateBrushState };
