import BattleLogicDelegate from 'interfaces/BattleLogicDelegate';
import BattleParameter from 'interfaces/BattleParameter';
import LoaderAddParam from 'interfaces/PixiTypePolyfill/LoaderAddParam';
import Scene from 'scenes/Scene';
import UiNodeFactory from 'modules/UiNodeFactory/UiNodeFactory';
import AttackableEntity from 'entity/AttackableEntity';
import CastleEntity from 'entity/CastleEntity';
import UnitEntity from 'entity/UnitEntity';
/**
 * メインのゲーム部分のシーン
 * ゲームロジックは BattleLogic に委譲し、主に描画周りを行う
 */
export default class BattleScene extends Scene implements BattleLogicDelegate {
    private static readonly castleXOffset;
    private static readonly unitLeapHeight;
    /**
     * UI Graph ユニットボタンのキープリフィックス
     */
    private static readonly unitButtonPrefix;
    /**
     * このシーンのステート
     */
    private state;
    /**
     * ユニット編成数
     */
    private unitSlotCount;
    /**
     * 挑戦するステージID
     */
    private stageId;
    /**
     * 編成した拠点パラメータ
     */
    private playerCastle;
    /**
     * 編成したユニットID配列
     */
    private unitIds;
    /**
     * ゲームロジックを処理する BattleLogic のインスタンス
     */
    private battleLogic;
    /**
     * BattleLogic 用の設定
     */
    private battleLogicConfig;
    /**
     * 背景の PIXI.Container
     */
    private field;
    /**
     * エンティティの ID で紐付けられた有効な Unit インスタンスのマップ
     */
    private attackables;
    /**
     * エンティティの ID で紐付けられた有効な Castle インスタンスのマップ
     */
    private castles;
    /**
     * ユニットアニメーションマスターのキャッシュ
     */
    private unitAnimationMasterCache;
    /**
     * コンストラクタ
     */
    constructor(params: BattleParameter);
    /**
     * Scene クラスメソッドオーバーライド
     */
    /**
     * トランジション開始処理
     * トランジション終了で可能ならステートを変更する
     */
    beginTransitionIn(onTransitionFinished: (scene: Scene) => void): void;
    /**
     * 毎フレームの更新処理
     * シーンのステートに応じて処理する
     */
    update(delta: number): void;
    /**
     * リソースリストの作成
     */
    protected createInitialResourceList(): (LoaderAddParam | string)[];
    /**
     * リソースロード完了コールバック
     * BattleLogic にユニットマスタ情報を渡し、フィールドやユニットボタンの初期化を行う
     */
    protected onInitialResourceLoaded(): (LoaderAddParam | string)[];
    /**
     * リソースロード完了時のコールバック
     */
    protected onResourceLoaded(): void;
    /**
     * 独自 UiGraph 要素のファクトリを返す
     * BattleScene は UnitButton を独自で定義している
     */
    protected getCustomUiGraphFactory(type: string): UiNodeFactory | null;
    /**
     * BattleLogicDelegate 実装
     */
    /**
     * CastleEntity が生成されたときのコールバック
     */
    onCastleEntitySpawned(entity: CastleEntity, isPlayer: boolean): void;
    /**
     * UnitEntity が生成されたときのコールバック
     * id に紐つけて表示物を生成する
     */
    onUnitEntitySpawned(entity: UnitEntity): void;
    /**
     * エンティティのステートが変更された際のコールバック
     */
    onAttackableEntityStateChanged(entity: AttackableEntity, _oldState: number): void;
    /**
     * 利用可能なコストの値が変動したときのコールバック
     */
    onAvailableCostUpdated(cost: number, maxCost: number, availablePlayerUnitIds: number[]): void;
    /**
     * 勝敗が決定したときのコールバック
     */
    onGameOver(isPlayerWon: boolean): void;
    /**
     * 渡されたエンティティ同士が接敵可能か返す
     */
    shouldEngageAttackableEntity(attacker: AttackableEntity, target: AttackableEntity): boolean;
    /**
     * 渡されたエンティティ同士が攻撃可能か返す
     */
    shouldDamage(attackerEntity: AttackableEntity, targetEntity: AttackableEntity): boolean;
    /**
     * 渡された UnitEntity の distance が変化した時に呼ばれる
     */
    onAttackableEntityWalked(entity: AttackableEntity): void;
    /**
     * 渡された UnitEntity がノックバック中に呼ばれる
     */
    onAttackableEntityKnockingBack(entity: AttackableEntity, knockBackRate: number): void;
    /**
     * 渡されたエンティティの health が増減した場合に呼ばれる
     */
    onAttackableEntityHealthUpdated(_attacker: AttackableEntity, target: AttackableEntity, fromHealth: number, toHealth: number, maxHealth: number): void;
    /**
     * 渡されたユニットが移動すべきかどうかを返す
     */
    shouldAttackableWalk(entity: AttackableEntity): boolean;
    /**
     * 特異メソッド
     */
    /**
     * UnitButton 用のコールバック
     * タップされたボタンに応じたユニットの生成を BattleLogic にリクエストする
     */
    onUnitButtonTapped(buttonIndex: number): void;
    /**
     * サウンドの初期化
     */
    private initSound;
    /**
     * ユニットボタンの初期化
     */
    private initUnitButtons;
    /**
     * ボタンインデックスから UnitButton インスタンスを返す
     */
    private getUiGraphUnitButton;
    /**
     * 編成画面へ戻る操作を有効にする
     */
    private enableBackToOrderScene;
    /**
     * 編成画面へ戻る
     */
    private backToOrderScene;
}
