import * as UI from 'interfaces/UiGraph/index';
import UiNodeFactory from 'modules/UiNodeFactory/UiNodeFactory';

/**
 * PIXI.Sprite のファクトリ
 * テクスチャに、定義されているテクスチャ名で PIXI.utils.TextureCache から引いたデータを用いる
 */
export default class SpriteFactory extends UiNodeFactory {
  public createUiNode(nodeParams?: UI.SpriteNodeParams): PIXI.Container | null {
    const sprite = new PIXI.Sprite();

    if (nodeParams) {
      if (nodeParams.textureName && PIXI.utils.TextureCache[nodeParams.textureName]) {
        sprite.texture = PIXI.utils.TextureCache[nodeParams.textureName];
      }
      if (nodeParams.anchor) {
        sprite.anchor.x = nodeParams.anchor[0];
        sprite.anchor.y = nodeParams.anchor[1];
        console.log(sprite.anchor.x, sprite.anchor.y);
      }
    }

    return sprite;
  }
}