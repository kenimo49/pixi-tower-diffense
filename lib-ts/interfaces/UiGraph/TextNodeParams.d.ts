import NodeParams from 'interfaces/UiGraph/NodeParams';
/**
 * UiGraph テキストノードパラメータ定義
 */
export default interface TextNodeParams extends NodeParams {
    text: string;
    size: number;
    color: string;
}